/* =========================================================
   Practice Exams — Exam page logic
   ========================================================= */

(function () {
  "use strict";

  const titleEl = document.getElementById("exam-title");
  const metaEl = document.getElementById("exam-meta");
  const eyebrowEl = document.getElementById("exam-eyebrow");
  const printTitle = document.getElementById("print-title");
  const printMeta = document.getElementById("print-meta");
  const questionsEl = document.getElementById("exam-questions");
  const errorEl = document.getElementById("exam-error");
  const errorMsg = document.getElementById("exam-error-msg");
  const copyCodeBtn = document.getElementById("copy-code-btn");
  const regenBtn = document.getElementById("regenerate-btn");
  const printBtn = document.getElementById("print-btn");
  const yearEl = document.getElementById("year");
  let currentRetrievalCode = "";

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const params = new URLSearchParams(window.location.search);
  const codeParam = params.get("code");
  let courseId = params.get("course");
  let examId = params.get("exam");
  function defaultQuestionCountForExam(examKey) {
    if (examKey === "final") return 15;
    return 8;
  }

  let count = parseInt(
    params.get("count") || String(defaultQuestionCountForExam(params.get("exam") || "")),
    10
  );
  let fixedQuestionIds = null;

  if (codeParam) {
    const decoded = decodeRetrievalCode(codeParam);
    if (!decoded || !decoded.course || !decoded.exam || !Array.isArray(decoded.ids) || decoded.ids.length === 0) {
      showError("That OTEX code is invalid. Please check the code and try again.");
      return;
    }
    courseId = decoded.course;
    examId = decoded.exam;
    count = decoded.ids.length;
    fixedQuestionIds = decoded.ids;
  }

  const courses = window.COURSES || {};
  const course = courses[courseId];
  const exam = course && course.exams ? course.exams[examId] : null;

  if (!course || !exam) {
    showError("We couldn't find that course or exam. Try picking again from the generator.");
    return;
  }

  const initialPool = buildExamPool();
  if (!initialPool || initialPool.length === 0) {
    showError("This exam doesn't have any questions in the bank yet.");
    return;
  }

  // Set titles
  const now = new Date();
  const dateStr = now.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
  titleEl.textContent = exam.name;
  eyebrowEl.textContent = course.name;
  metaEl.textContent = `Randomized practice set · ${dateStr}`;
  printTitle.textContent = `${course.name} — ${exam.name}`;
  printMeta.textContent = `Practice set · ${dateStr}`;
  document.title = `${exam.name} — ${course.name}`;

  renderQuestions();

  regenBtn.addEventListener("click", () => {
    renderQuestions();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  printBtn.addEventListener("click", () => window.print());
  copyCodeBtn.addEventListener("click", async () => {
    if (!currentRetrievalCode) return;
    const copied = await copyTextToClipboard(currentRetrievalCode);
    if (copied) {
      copyCodeBtn.textContent = "Code copied";
      window.setTimeout(() => {
        copyCodeBtn.textContent = "Copy OTEX";
      }, 1400);
    }
  });

  function renderQuestions() {
    questionsEl.innerHTML = "";
    const pool = buildExamPool();
    const selected = fixedQuestionIds
      ? resolveQuestionsByIds(pool, fixedQuestionIds)
      : sampleForExam(pool, Math.min(count, pool.length));

    if (!selected || selected.length === 0) {
      showError("We couldn't rebuild this exact exam from the OTEX code.");
      return;
    }

    const retrievalCode = encodeRetrievalCode(courseId, examId, selected.map((q) => q.id).filter(Boolean));
    currentRetrievalCode = retrievalCode;
    printMeta.textContent = `Practice set · ${dateStr} · OTEX code: ${retrievalCode}`;

    selected.forEach((q) => {
      const li = document.createElement("li");

      const identifier = document.createElement("div");
      identifier.className = "question-id";
      identifier.textContent = `QID-${q.id || "unassigned"}`;
      li.appendChild(identifier);

      const prompt = document.createElement("div");
      prompt.className = "question-prompt";
      prompt.innerHTML = q.prompt;
      li.appendChild(prompt);

      const work = document.createElement("div");
      work.className = "question-workspace no-print-hint";
      li.appendChild(work);

      questionsEl.appendChild(li);
    });

    // Re-run KaTeX on newly added content
    if (window.renderMathInElement) {
      window.renderMathInElement(questionsEl, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false },
          { left: "\\(", right: "\\)", display: false },
          { left: "\\[", right: "\\]", display: true }
        ],
        ignoredClasses: ["nomath"],
        throwOnError: false
      });
    }
  }

  function buildExamPool() {
    if (courseId === "math1020u" && examId === "readiness") {
      const calc1 = courses.math1010u;
      const calc1Final = (calc1 && calc1.exams && calc1.exams.final && calc1.exams.final.questions) || [];
      return calc1Final.slice();
    }

    if (examId !== "final") return exam.questions.slice();

    const midterm1 = (course.exams && course.exams.midterm1 && course.exams.midterm1.questions) || [];
    const midterm2 = (course.exams && course.exams.midterm2 && course.exams.midterm2.questions) || [];
    const finalOwn = exam.questions || [];
    return midterm1.concat(midterm2, finalOwn);
  }

  function sampleForExam(pool, n) {
    if (examId === "final") {
      return sampleFinalComposite(n);
    }
    if (courseId === "math1020u" && examId === "readiness") {
      return sampleEvenByTopic(pool, n);
    }
    if (courseId === "stat2800u" && examId === "midterm1") {
      return sampleEvenByTopic(pool, n);
    }
    if (courseId === "busi1915u" && examId === "midterm1") {
      return sampleEvenByTopic(pool, n);
    }
    if (courseId === "math1020u" && examId === "midterm1") {
      return sampleMath1020Midterm1(pool, n);
    }
    return sampleWeighted(pool, n);
  }

  function sampleMath1020Midterm1(questions, n) {
    const chapter3 = [];
    const chapter2 = [];
    questions.forEach((q) => {
      const t = String(q.topic || "");
      if (t.startsWith("Ch2")) chapter2.push(q);
      else chapter3.push(q);
    });

    const targets = computeBucketTargets(n, {
      chapter3: 0.7,
      chapter2: 0.3
    });

    const selected = [];
    const selectedIds = new Set();

    [
      { key: "chapter3", bank: chapter3 },
      { key: "chapter2", bank: chapter2 }
    ].forEach(({ key, bank }) => {
      const picks = sample(bank, targets[key] || 0);
      picks.forEach((q) => {
        if (!selectedIds.has(q.id)) {
          selected.push(q);
          selectedIds.add(q.id);
        }
      });
    });

    if (selected.length < n) {
      const leftovers = questions.filter((q) => !selectedIds.has(q.id));
      sample(leftovers, n - selected.length).forEach((q) => selected.push(q));
    }

    return sample(selected, selected.length);
  }

  function sampleFinalComposite(n) {
    const midterm1 = (course.exams && course.exams.midterm1 && course.exams.midterm1.questions) || [];
    const midterm2 = (course.exams && course.exams.midterm2 && course.exams.midterm2.questions) || [];
    const finalOwn = exam.questions || [];

    const targets = computeBucketTargets(n, {
      midterm1: 0.25,
      midterm2: 0.25,
      postMidterm2: 0.50
    });

    const selected = [];
    const selectedIds = new Set();

    [
      { key: "midterm1", bank: midterm1 },
      { key: "midterm2", bank: midterm2 },
      {
        key: "postMidterm2",
        bank: finalOwn,
        pick:
          courseId === "stat2800u"
            ? (bank, target) => sampleEvenByTopic(bank, target)
            : (bank, target) => sample(bank, target)
      }
    ].forEach(({ key, bank, pick }) => {
      const picker = pick || ((b, t) => sample(b, t));
      const picks = picker(bank, targets[key] || 0);
      picks.forEach((q) => {
        if (!selectedIds.has(q.id)) {
          selected.push(q);
          selectedIds.add(q.id);
        }
      });
    });

    if (selected.length < n) {
      const all = midterm1.concat(midterm2, finalOwn);
      const leftovers = all.filter((q) => !selectedIds.has(q.id));
      sample(leftovers, n - selected.length).forEach((q) => selected.push(q));
    }

    return sample(selected, selected.length);
  }

  function sampleWeighted(questions, n) {
    if (examId === "midterm2") {
      return sampleEvenByTopic(questions, n);
    }

    const weights = {
      limitsContinuity: 0.55,
      derivatives: 0.20,
      infinityAsymptotes: 0.15,
      precalculus: 0.10
    };

    const categorized = {
      limitsContinuity: [],
      derivatives: [],
      infinityAsymptotes: [],
      precalculus: []
    };

    questions.forEach((q) => {
      categorized[categorizeQuestion(q)].push(q);
    });

    const targets = computeBucketTargets(n, weights);
    const selected = [];
    const selectedIds = new Set();

    Object.keys(targets).forEach((bucket) => {
      const picks = sample(categorized[bucket], targets[bucket]);
      picks.forEach((q) => {
        if (!selectedIds.has(q.id)) {
          selected.push(q);
          selectedIds.add(q.id);
        }
      });
    });

    if (selected.length < n) {
      const leftovers = questions.filter((q) => !selectedIds.has(q.id));
      const topUp = sample(leftovers, n - selected.length);
      topUp.forEach((q) => selected.push(q));
    }

    return sample(selected, selected.length);
  }

  function sampleEvenByTopic(questions, n) {
    const byTopic = {};
    questions.forEach((q) => {
      const key = String(q.topic || "other").trim().toLowerCase();
      if (!byTopic[key]) byTopic[key] = [];
      byTopic[key].push(q);
    });

    const topics = Object.keys(byTopic);
    if (topics.length === 0) return sample(questions, n);

    const equalWeights = {};
    topics.forEach((topic) => {
      equalWeights[topic] = 1 / topics.length;
    });

    const targets = computeBucketTargets(n, equalWeights);
    const selected = [];
    const selectedIds = new Set();

    topics.forEach((topic) => {
      const picks = sample(byTopic[topic], targets[topic] || 0);
      picks.forEach((q) => {
        if (!selectedIds.has(q.id)) {
          selected.push(q);
          selectedIds.add(q.id);
        }
      });
    });

    if (selected.length < n) {
      const leftovers = questions.filter((q) => !selectedIds.has(q.id));
      const topUp = sample(leftovers, n - selected.length);
      topUp.forEach((q) => selected.push(q));
    }

    return sample(selected, selected.length);
  }

  function computeBucketTargets(total, weights) {
    const buckets = Object.keys(weights);
    const exact = buckets.map((bucket) => ({
      bucket,
      raw: total * weights[bucket]
    }));

    const targets = {};
    let used = 0;

    exact.forEach(({ bucket, raw }) => {
      const base = Math.floor(raw);
      targets[bucket] = base;
      used += base;
    });

    const remaining = total - used;
    exact
      .sort((a, b) => (b.raw - Math.floor(b.raw)) - (a.raw - Math.floor(a.raw)))
      .slice(0, remaining)
      .forEach(({ bucket }) => {
        targets[bucket] += 1;
      });

    return targets;
  }

  function categorizeQuestion(question) {
    const topic = String(question.topic || "").toLowerCase();
    const id = String(question.id || "").toLowerCase();

    if (
      topic.includes("asymptote") ||
      topic.includes("limits at infinity") ||
      id.includes("-inf-") ||
      id.includes("-asym-")
    ) {
      return "infinityAsymptotes";
    }

    if (
      topic.includes("deriv") ||
      topic.includes("tangent") ||
      topic.includes("limit definition") ||
      topic.includes("product rule") ||
      topic.includes("quotient rule") ||
      id.includes("-def-") ||
      id.includes("-deriv-") ||
      id.includes("-tan-")
    ) {
      return "derivatives";
    }

    if (
      topic.includes("precalculus") ||
      topic.includes("domain") ||
      topic.includes("composition") ||
      topic.includes("piecewise") ||
      topic.includes("inverse") ||
      topic.includes("exponential") ||
      topic.includes("log") ||
      topic.includes("trigonometry") ||
      id.includes("-prec-")
    ) {
      return "precalculus";
    }

    return "limitsContinuity";
  }

  function resolveQuestionsByIds(pool, ids) {
    const byId = new Map(pool.map((q) => [q.id, q]));
    const resolved = [];
    for (let i = 0; i < ids.length; i++) {
      const question = byId.get(ids[i]);
      if (!question) return null;
      resolved.push(question);
    }
    return resolved;
  }

  function encodeRetrievalCode(course, examKey, ids) {
    const payload = JSON.stringify({ course, exam: examKey, ids });
    const compact = base64UrlEncode(payload);
    return groupCode(compact);
  }

  function decodeRetrievalCode(code) {
    try {
      const compact = normalizeCompactCode(code);
      const payload = base64UrlDecode(compact);
      return JSON.parse(payload);
    } catch (err) {
      return null;
    }
  }

  function groupCode(compact) {
    const clean = String(compact || "").trim();
    const chunks = [];
    for (let i = 0; i < clean.length; i += 4) {
      chunks.push(clean.slice(i, i + 4));
    }
    return `OTEX-${chunks.join("-")}`;
  }

  function ungroupCode(code) {
    const raw = String(code || "").trim();
    const withoutPrefix = raw.toUpperCase().startsWith("OTEX-") ? raw.slice(5) : raw;
    return withoutPrefix.replace(/-/g, "");
  }

  function normalizeCompactCode(code) {
    const raw = String(code || "").trim();

    if (!raw) return "";

    // Support users pasting a full URL instead of just the OTEX code.
    if (raw.includes("code=")) {
      try {
        const parsed = new URL(raw);
        const fromUrl = parsed.searchParams.get("code");
        if (fromUrl) return ungroupCode(fromUrl).replace(/\s+/g, "");
      } catch (err) {
        // Continue with plain cleanup below.
      }
    }

    return ungroupCode(raw).replace(/\s+/g, "");
  }

  function base64UrlEncode(str) {
    const bytes = new TextEncoder().encode(str);
    let binary = "";
    bytes.forEach((b) => {
      binary += String.fromCharCode(b);
    });
    return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
  }

  function base64UrlDecode(str) {
    const base64 = str.replace(/-/g, "+").replace(/_/g, "/");
    const padded = base64.padEnd(Math.ceil(base64.length / 4) * 4, "=");
    const binary = atob(padded);
    const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }

  async function copyTextToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      try {
        const temp = document.createElement("textarea");
        temp.value = text;
        temp.setAttribute("readonly", "");
        temp.style.position = "fixed";
        temp.style.opacity = "0";
        document.body.appendChild(temp);
        temp.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(temp);
        return ok;
      } catch (fallbackErr) {
        return false;
      }
    }
  }

  // Fisher–Yates sample
  function sample(arr, n) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a.slice(0, n);
  }

  function showError(msg) {
    document.querySelector(".exam-toolbar").style.display = "none";
    errorMsg.textContent = msg;
    errorEl.hidden = false;
  }
})();
