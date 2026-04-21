/* =========================================================
   Practice Exams — Landing page logic
   ========================================================= */

(function () {
  "use strict";

  const courseSelect = document.getElementById("course-select");
  const examSelect = document.getElementById("exam-select");
  const countSelect = document.getElementById("count-select");
  const retrievalCodeInput = document.getElementById("retrieval-code-input");
  const retrieveCodeBtn = document.getElementById("retrieve-code-btn");
  const form = document.getElementById("exam-form");
  const formError = document.getElementById("form-error");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const courses = window.COURSES || {};

  // Populate course dropdown
  Object.entries(courses).forEach(([id, course]) => {
    const opt = document.createElement("option");
    opt.value = id;
    opt.textContent = course.name;
    courseSelect.appendChild(opt);
  });

  // When a course is chosen, populate its exams
  courseSelect.addEventListener("change", () => {
    const courseId = courseSelect.value;
    const course = courses[courseId];
    examSelect.innerHTML = "";

    if (!course) {
      examSelect.disabled = true;
      return;
    }

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "Choose an exam…";
    placeholder.disabled = true;
    placeholder.selected = true;
    examSelect.appendChild(placeholder);

    Object.entries(course.exams || {}).forEach(([id, exam]) => {
      const opt = document.createElement("option");
      opt.value = id;
      opt.textContent = exam.name;
      examSelect.appendChild(opt);
    });

    examSelect.disabled = false;
  });

  // Handle submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    formError.hidden = true;

    const retrievalCode = (retrievalCodeInput.value || "").trim();
    if (retrievalCode) {
      openFromRetrievalCode(retrievalCode);
      return;
    }

    const course = courseSelect.value;
    const exam = examSelect.value;
    const count = countSelect.value || "10";

    if (!course || !exam) {
      formError.textContent = "Please choose both a course and an exam.";
      formError.hidden = false;
      return;
    }

    const params = new URLSearchParams({ course, exam, count });
    window.location.href = `exam.html?${params.toString()}`;
  });

  retrieveCodeBtn.addEventListener("click", () => {
    formError.hidden = true;
    const retrievalCode = (retrievalCodeInput.value || "").trim();
    if (!retrievalCode) {
      formError.textContent = "Please enter an OTEX code.";
      formError.hidden = false;
      return;
    }
    openFromRetrievalCode(retrievalCode);
  });

  function openFromRetrievalCode(code) {
    const normalizedCode = normalizeRetrievalInput(code);
    const params = new URLSearchParams({ code: normalizedCode });
    window.location.href = `exam.html?${params.toString()}`;
  }

  function normalizeRetrievalInput(input) {
    const raw = String(input || "").trim();
    if (!raw) return "";

    // Support users pasting a full URL instead of only the code.
    if (raw.includes("code=")) {
      try {
        const parsed = new URL(raw);
        const fromUrl = parsed.searchParams.get("code");
        if (fromUrl) return fromUrl.trim();
      } catch (err) {
        // Fall through to plain cleanup.
      }
    }

    return raw.replace(/\s+/g, "");
  }
})();
