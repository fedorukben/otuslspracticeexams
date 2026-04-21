# Practice Exams

A static web app that lets students generate randomized practice exams for university math and statistics courses. Pure HTML/CSS/JavaScript — no build step, no backend — so it drops straight onto GitHub Pages.

## What's here

```
practice-exams/
├── index.html          Landing page + course/exam selection
├── exam.html           Renders a generated exam from the URL
├── css/
│   └── styles.css      Brand-aligned stylesheet (Ontario Tech palette)
├── js/
│   ├── questions.js    The question bank — edit this to add content
│   ├── main.js         Landing page logic
│   └── exam.js         Exam page logic + sampling + KaTeX rendering
├── .nojekyll           Tells GitHub Pages not to run Jekyll
└── README.md
```

Math is rendered with [KaTeX](https://katex.org/) via CDN — any `$...$` or `$$...$$` in a question prompt is typeset automatically.

## Running it locally

Because this is static, you can double-click `index.html` and it works. For a cleaner local dev experience (avoids some browser quirks around `file://` URLs), serve it with any static server:

```bash
# From the practice-exams directory
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploying to GitHub Pages

1. **Create the repo.** Make a new public GitHub repo (for example, `practice-exams`).
2. **Push this folder's contents to the repo root** (not inside a subfolder).
   ```bash
   cd practice-exams
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/practice-exams.git
   git push -u origin main
   ```
3. **Enable Pages.** In the repo on GitHub, go to **Settings → Pages**. Under *Source*, pick **Deploy from a branch**, choose **`main`** and **`/ (root)`**, and save.
4. **Wait ~1 minute.** Your site will be at `https://<your-username>.github.io/practice-exams/`.

If you want a custom domain, add a `CNAME` file with your domain name and configure DNS per GitHub's docs.

## Adding courses and questions

All content lives in `js/questions.js`. The shape is:

```js
const COURSES = {
  "math1010u": {
    name: "MATH 1010U — Calculus I",
    exams: {
      "midterm1": {
        name: "Midterm 1",
        topics: ["limits", "continuity"],
        questions: [
          {
            id: "m1-lim-01",
            topic: "limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$."
          }
        ]
      }
    }
  }
};
```

A few things to know:

- **LaTeX math** uses `$...$` for inline and `$$...$$` for display. Inside a JS string, backslashes need to be doubled (`\\lim`, `\\frac`).
- **HTML is allowed** in prompts if you need lists, bold, line breaks, etc. The prompt is injected with `innerHTML`, so if you ever accept user-submitted content in the future, sanitize it first.
- **`id`** should be unique per question — it's not shown, but it'll be useful if you later add features like tracking which questions a student has seen.
- **`topic`** is optional and shows as a small label on the rendered card.

## Design notes

The styling uses the Ontario Tech brand palette (Future Blue, Simcoe Blue, Tech Tangerine) and Ubuntu as the primary typeface. The brand mark is an original SVG-ish shape inspired by — but not copied from — the Ontario Tech shield; the official logo is *not* used. Per the Ontario Tech brand guidelines, using the university's name or logo in a project requires approval from Communications & Marketing (brand@ontariotechu.ca).

If you do get approval, you can swap in the official logo in the `.brand` element in both `index.html` and `exam.html`.

Tech Tangerine is used sparingly per the brand's colour-use ratio, and never at small sizes for text (the guidelines require ≥24px for digital or ≥16pt for print to keep AODA-compliant contrast).

## Roadmap ideas

- Per-question solutions / hints (show on demand)
- Filter by topic when generating
- Difficulty tagging and weighted sampling
- Export exam + blank solution sheet as separate PDFs
- A lightweight admin view that flags low-coverage topics in the bank

## License & affiliation

This project is an independent study tool. It is **not** affiliated with, endorsed by, or produced by Ontario Tech University.