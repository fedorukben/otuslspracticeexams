/* =========================================================
   Practice Exams — Question Bank
   -----------------------------------------------------------
   Add courses, exams, and questions below. The structure:

     COURSES = {
       <courseId>: {
         name: "MATH 1010U — Calculus I",
         exams: {
           <examId>: {
             name: "Midterm 1",
             topics: ["limits", "continuity"],  // optional, informational
             questions: [
               {
                 id: "unique-id",
                 topic: "limits",                // optional label
                 prompt: "Evaluate $\\lim_{x \\to 2} ...$"
               },
               ...
             ]
           }
         }
       }
     }

   Prompts support LaTeX math using $...$ (inline) or $$...$$ (block).
   Prompts also accept plain HTML for lists, emphasis, etc.

   LATEX GOTCHA: Inside a JavaScript string, every LaTeX backslash
   must be DOUBLED. So `\lim` becomes `\\lim`, and a line break in a
   `cases` block (`\\`) becomes `\\\\`.
   ========================================================= */

const COURSES = {
  "math1010u": {
    name: "MATH 1010U — Calculus I",
    exams: {
      "midterm1": {
        name: "Midterm 1",
        topics: [
          "precalculus review",
          "limits",
          "continuity",
          "derivatives (intro)",
          "limits at infinity and asymptotes"
        ],
        questions: [
          /* ------------------------------------------------------------
             Precalculus review (OpenStax §§ 1.1–1.5)
             ------------------------------------------------------------ */
          {
            id: "m1-prec-01",
            topic: "domain",
            prompt: "Find the domain of $f(x) = \\dfrac{\\sqrt{x + 3}}{x^2 - 4}$."
          },
          {
            id: "m1-prec-02",
            topic: "domain",
            prompt: "Find the domain of $g(x) = \\ln(5 - 2x)$."
          },
          {
            id: "m1-prec-03",
            topic: "composition",
            prompt: "Let $f(x) = x^2 + 1$ and $g(x) = \\sqrt{x - 2}$. Find $(f \\circ g)(x)$ and state its domain."
          },
          {
            id: "m1-prec-04",
            topic: "piecewise",
            prompt: "Let $f(x) = \\begin{cases} 2x + 1 & x < 0 \\\\ x^2 & 0 \\le x \\le 2 \\\\ 4 - x & x > 2 \\end{cases}$ Evaluate $f(-3)$, $f(0)$, $f(2)$, and $f(5)$."
          },
          {
            id: "m1-prec-05",
            topic: "inverse functions",
            prompt: "Find the inverse of $f(x) = \\dfrac{2x - 5}{x + 3}$, and state the domain of $f^{-1}$."
          },
          {
            id: "m1-prec-06",
            topic: "exponentials & logs",
            prompt: "Solve for $x$: $\\; 3^{2x - 1} = 27$."
          },
          {
            id: "m1-prec-07",
            topic: "exponentials & logs",
            prompt: "Solve for $x$: $\\; \\ln(x + 2) + \\ln(x - 1) = \\ln 4$."
          },
          {
            id: "m1-prec-08",
            topic: "trigonometry",
            prompt: "Without a calculator, find all solutions to $2\\sin^2 x - \\sin x - 1 = 0$ on $[0, 2\\pi)$."
          },

          /* ------------------------------------------------------------
             Chapter 2 — Limits (main emphasis)
             ------------------------------------------------------------ */

          /* Direct evaluation */
          {
            id: "m1-lim-01",
            topic: "limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 2} (3x^2 - 5x + 1)$."
          },
          {
            id: "m1-lim-02",
            topic: "limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -1} \\dfrac{x^3 + 2x}{x^2 + 5}$."
          },

          /* Factoring (0/0 indeterminate) */
          {
            id: "m1-lim-03",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 3} \\dfrac{x^2 - 9}{x - 3}$."
          },
          {
            id: "m1-lim-04",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 2} \\dfrac{x^2 - x - 2}{x^2 - 4}$."
          },
          {
            id: "m1-lim-05",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{h \\to 0} \\dfrac{(3 + h)^2 - 9}{h}$."
          },
          {
            id: "m1-lim-06",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 1} \\dfrac{x^3 - 1}{x - 1}$."
          },

          /* Rationalization */
          {
            id: "m1-lim-07",
            topic: "limits — rationalization",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sqrt{x + 4} - 2}{x}$."
          },
          {
            id: "m1-lim-08",
            topic: "limits — rationalization",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 9} \\dfrac{x - 9}{\\sqrt{x} - 3}$."
          },

          /* Trig limits */
          {
            id: "m1-lim-09",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sin(5x)}{x}$."
          },
          {
            id: "m1-lim-10",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sin(3x)}{\\sin(7x)}$."
          },
          {
            id: "m1-lim-11",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{1 - \\cos x}{x^2}$."
          },
          {
            id: "m1-lim-12",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\tan(2x)}{x}$."
          },

          /* One-sided and absolute value */
          {
            id: "m1-lim-13",
            topic: "one-sided limits",
            prompt: "Let $f(x) = \\begin{cases} x^2 - 1 & x < 1 \\\\ 2x + 3 & x \\geq 1 \\end{cases}$ Find $\\displaystyle \\lim_{x \\to 1^-} f(x)$, $\\displaystyle \\lim_{x \\to 1^+} f(x)$, and determine whether $\\displaystyle \\lim_{x \\to 1} f(x)$ exists."
          },
          {
            id: "m1-lim-14",
            topic: "one-sided limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 4^-} \\dfrac{|x - 4|}{x - 4}$ and $\\displaystyle \\lim_{x \\to 4^+} \\dfrac{|x - 4|}{x - 4}$. Does the two-sided limit exist?"
          },
          {
            id: "m1-lim-15",
            topic: "one-sided limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 3^+} \\dfrac{x}{x - 3}$ and $\\displaystyle \\lim_{x \\to 3^-} \\dfrac{x}{x - 3}$."
          },

          /* Squeeze theorem */
          {
            id: "m1-lim-16",
            topic: "squeeze theorem",
            prompt: "Use the Squeeze Theorem to evaluate $\\displaystyle \\lim_{x \\to 0} x^2 \\sin\\!\\left(\\dfrac{1}{x}\\right)$."
          },

          /* Continuity */
          {
            id: "m1-cont-01",
            topic: "continuity",
            prompt: "Determine whether $f(x) = \\begin{cases} x^2 + 1 & x < 1 \\\\ 3x - 1 & x \\geq 1 \\end{cases}$ is continuous at $x = 1$. Justify your answer using the definition of continuity."
          },
          {
            id: "m1-cont-02",
            topic: "continuity",
            prompt: "Find the value of $c$ that makes $f(x) = \\begin{cases} cx + 2 & x \\leq 3 \\\\ x^2 - c & x > 3 \\end{cases}$ continuous everywhere."
          },
          {
            id: "m1-cont-03",
            topic: "continuity",
            prompt: "Classify each discontinuity of $f(x) = \\dfrac{x^2 - x - 6}{x^2 - 4}$ as removable, jump, or infinite."
          },
          {
            id: "m1-cont-04",
            topic: "continuity",
            prompt: "State the intervals on which $f(x) = \\dfrac{\\sqrt{x + 2}}{x^2 - 3x}$ is continuous."
          },
          {
            id: "m1-cont-05",
            topic: "continuity",
            prompt: "Let $f(x) = \\dfrac{\\sin x}{x}$ for $x \\neq 0$. How should $f(0)$ be defined so that $f$ is continuous at $x = 0$?"
          },

          /* Intermediate Value Theorem */
          {
            id: "m1-ivt-01",
            topic: "IVT",
            prompt: "Use the Intermediate Value Theorem to show that $x^3 - 4x + 1 = 0$ has a solution in the interval $(0, 1)$."
          },
          {
            id: "m1-ivt-02",
            topic: "IVT",
            prompt: "Prove that the equation $\\cos x = x$ has at least one solution in $[0, 1]$."
          },

          /* ------------------------------------------------------------
             Chapter 3.1–3.3 — Derivatives
             ------------------------------------------------------------ */

          /* Limit definition */
          {
            id: "m1-def-01",
            topic: "limit definition",
            prompt: "Use the definition of the derivative to find $f'(x)$ for $f(x) = x^2 - 4x + 1$."
          },
          {
            id: "m1-def-02",
            topic: "limit definition",
            prompt: "Use the definition of the derivative to find $f'(x)$ for $f(x) = \\dfrac{1}{x + 2}$."
          },
          {
            id: "m1-def-03",
            topic: "limit definition",
            prompt: "Use the definition of the derivative to find $f'(x)$ for $f(x) = \\sqrt{x - 1}$."
          },
          {
            id: "m1-def-04",
            topic: "limit definition",
            prompt: "Use the definition $f'(a) = \\displaystyle \\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h}$ to find $f'(2)$ for $f(x) = 3x^2 + x$."
          },

          /* Differentiation rules */
          {
            id: "m1-deriv-01",
            topic: "differentiation rules",
            prompt: "Differentiate $f(x) = 5x^4 - 3x^3 + \\dfrac{2}{x^2} - 7\\sqrt{x}$."
          },
          {
            id: "m1-deriv-02",
            topic: "product rule",
            prompt: "Differentiate $g(x) = (2x^3 - x)(x^2 + 5)$ using the product rule."
          },
          {
            id: "m1-deriv-03",
            topic: "quotient rule",
            prompt: "Differentiate $h(x) = \\dfrac{x^2 + 1}{x - 3}$ using the quotient rule."
          },
          {
            id: "m1-deriv-04",
            topic: "product rule",
            prompt: "Differentiate $f(x) = x^2 \\sin x$."
          },
          {
            id: "m1-deriv-05",
            topic: "quotient rule",
            prompt: "Differentiate $y = \\dfrac{\\cos x}{1 + \\sin x}$."
          },
          {
            id: "m1-deriv-06",
            topic: "differentiation rules",
            prompt: "Find $\\dfrac{dy}{dx}$ where $y = (x^2 + 3x)(\\sqrt{x} + 1)$."
          },

          /* Tangent lines and rates */
          {
            id: "m1-tan-01",
            topic: "tangent lines",
            prompt: "Find the equation of the tangent line to $y = x^3 - 2x + 1$ at the point where $x = 1$."
          },
          {
            id: "m1-tan-02",
            topic: "tangent lines",
            prompt: "Find all points on the curve $y = x^3 - 3x^2 + 2$ where the tangent line is horizontal."
          },
          {
            id: "m1-tan-03",
            topic: "tangent lines",
            prompt: "At what value(s) of $x$ does the curve $y = x^2 + 4x - 3$ have a tangent line with slope $2$?"
          },

          /* ------------------------------------------------------------
             Section 4.6 — Limits at infinity & asymptotes
             ------------------------------------------------------------ */
          {
            id: "m1-inf-01",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{3x^2 - 2x + 1}{5x^2 + 4x - 7}$."
          },
          {
            id: "m1-inf-02",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{4x - 1}{2x^2 + 3}$."
          },
          {
            id: "m1-inf-03",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -\\infty} \\dfrac{5x^3 - x}{2x^2 + 1}$."
          },
          {
            id: "m1-inf-04",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{\\sqrt{9x^2 + 1}}{x + 2}$."
          },
          {
            id: "m1-inf-05",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -\\infty} \\dfrac{\\sqrt{9x^2 + 1}}{x + 2}$. Be careful with signs when simplifying $\\sqrt{x^2}$."
          },
          {
            id: "m1-asym-01",
            topic: "asymptotes",
            prompt: "Find all horizontal and vertical asymptotes of $f(x) = \\dfrac{2x^2 + 3}{x^2 - 4}$."
          },
          {
            id: "m1-asym-02",
            topic: "asymptotes",
            prompt: "Find all asymptotes — vertical, horizontal, and slant — of $f(x) = \\dfrac{x^2 + 1}{x - 1}$."
          },

          /* ------------------------------------------------------------
             Additional Midterm 1 practice variants
             ------------------------------------------------------------ */
          {
            id: "m1-prec-09",
            topic: "domain",
            prompt: "Find the domain of $f(x) = \\dfrac{\\sqrt{2x - 1}}{x - 5}$."
          },
          {
            id: "m1-prec-10",
            topic: "domain",
            prompt: "Find the domain of $g(x) = \\ln(x^2 - 9)$."
          },
          {
            id: "m1-prec-11",
            topic: "composition",
            prompt: "Let $f(x) = 3x - 4$ and $g(x) = \\sqrt{x + 1}$. Find $(g \\circ f)(x)$ and state its domain."
          },
          {
            id: "m1-prec-12",
            topic: "piecewise",
            prompt: "Let $f(x) = \\begin{cases} x + 2 & x < -1 \\\\ x^2 & -1 \\le x < 2 \\\\ 3 - x & x \\ge 2 \\end{cases}$ Evaluate $f(-2)$, $f(-1)$, $f(1)$, and $f(4)$."
          },
          {
            id: "m1-prec-13",
            topic: "inverse functions",
            prompt: "Find the inverse of $f(x) = \\dfrac{x - 4}{2x + 1}$, and state the domain of $f^{-1}$."
          },
          {
            id: "m1-prec-14",
            topic: "exponentials & logs",
            prompt: "Solve for $x$: $\\; 2^{x+1} = 32$."
          },
          {
            id: "m1-prec-15",
            topic: "exponentials & logs",
            prompt: "Solve for $x$: $\\; \\ln(x + 4) - \\ln(x - 2) = \\ln 3$."
          },
          {
            id: "m1-prec-16",
            topic: "trigonometry",
            prompt: "Without a calculator, solve $\\cos(2x) = 0$ on $[0, 2\\pi)$."
          },
          {
            id: "m1-lim-17",
            topic: "limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -2} (4x^2 + 3x - 1)$."
          },
          {
            id: "m1-lim-18",
            topic: "limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 1} \\dfrac{2x^3 - x + 5}{x^2 + 1}$."
          },
          {
            id: "m1-lim-19",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 5} \\dfrac{x^2 - 25}{x - 5}$."
          },
          {
            id: "m1-lim-20",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 4} \\dfrac{x^2 - 3x - 4}{x - 4}$."
          },
          {
            id: "m1-lim-21",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -2} \\dfrac{x^3 + 8}{x + 2}$."
          },
          {
            id: "m1-lim-22",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{h \\to 0} \\dfrac{(5 + h)^2 - 25}{h}$."
          },
          {
            id: "m1-lim-23",
            topic: "limits — rationalization",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sqrt{9 + x} - 3}{x}$."
          },
          {
            id: "m1-lim-24",
            topic: "limits — rationalization",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 16} \\dfrac{x - 16}{\\sqrt{x} - 4}$."
          },
          {
            id: "m1-lim-25",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sin(8x)}{x}$."
          },
          {
            id: "m1-lim-26",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sin(2x)}{\\sin(9x)}$."
          },
          {
            id: "m1-lim-27",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{1 - \\cos(4x)}{x^2}$."
          },
          {
            id: "m1-lim-28",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\tan(5x)}{3x}$."
          },
          {
            id: "m1-lim-29",
            topic: "one-sided limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 2^-} \\dfrac{|x - 2|}{x - 2}$ and $\\displaystyle \\lim_{x \\to 2^+} \\dfrac{|x - 2|}{x - 2}$. Does the two-sided limit exist?"
          },
          {
            id: "m1-lim-30",
            topic: "one-sided limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -1^+} \\dfrac{1}{x + 1}$ and $\\displaystyle \\lim_{x \\to -1^-} \\dfrac{1}{x + 1}$."
          },
          {
            id: "m1-lim-31",
            topic: "squeeze theorem",
            prompt: "Use the Squeeze Theorem to evaluate $\\displaystyle \\lim_{x \\to 0} x\\sin\\!\\left(\\dfrac{1}{x}\\right)$."
          },
          {
            id: "m1-lim-32",
            topic: "squeeze theorem",
            prompt: "Use the Squeeze Theorem to evaluate $\\displaystyle \\lim_{x \\to 0} x^3\\cos\\!\\left(\\dfrac{1}{x}\\right)$."
          },
          {
            id: "m1-cont-06",
            topic: "continuity",
            prompt: "Determine whether $f(x) = \\begin{cases} x + 4 & x < 2 \\\\ x^2 & x \\ge 2 \\end{cases}$ is continuous at $x = 2$. Justify your answer."
          },
          {
            id: "m1-cont-07",
            topic: "continuity",
            prompt: "Find $c$ so that $f(x) = \\begin{cases} 2x + c & x \\le 1 \\\\ x^2 + 1 & x > 1 \\end{cases}$ is continuous at $x = 1$."
          },
          {
            id: "m1-cont-08",
            topic: "continuity",
            prompt: "Classify each discontinuity of $f(x) = \\dfrac{x^2 - 1}{x^2 - 5x + 4}$ as removable, jump, or infinite."
          },
          {
            id: "m1-cont-09",
            topic: "continuity",
            prompt: "State the intervals on which $f(x) = \\dfrac{\\sqrt{5 - x}}{x^2 - 1}$ is continuous."
          },
          {
            id: "m1-cont-10",
            topic: "continuity",
            prompt: "Let $f(x) = \\dfrac{1 - \\cos x}{x^2}$ for $x \\neq 0$. How should $f(0)$ be defined so that $f$ is continuous at $x = 0$?"
          },
          {
            id: "m1-ivt-03",
            topic: "IVT",
            prompt: "Use the Intermediate Value Theorem to show that $x^3 + x - 1 = 0$ has a solution in $(0,1)$."
          },
          {
            id: "m1-ivt-04",
            topic: "IVT",
            prompt: "Show that $2^x + x - 3 = 0$ has at least one root in $[0,1]$."
          },
          {
            id: "m1-def-05",
            topic: "limit definition",
            prompt: "Use the definition of the derivative to find $f'(x)$ for $f(x) = x^2 + 6x - 2$."
          },
          {
            id: "m1-def-06",
            topic: "limit definition",
            prompt: "Use the definition of the derivative to find $f'(x)$ for $f(x) = \\dfrac{1}{x - 1}$."
          },
          {
            id: "m1-def-07",
            topic: "limit definition",
            prompt: "Use the definition of the derivative to find $f'(x)$ for $f(x) = \\sqrt{x + 3}$."
          },
          {
            id: "m1-def-08",
            topic: "limit definition",
            prompt: "Use $f'(a) = \\displaystyle \\lim_{h \\to 0} \\dfrac{f(a+h) - f(a)}{h}$ to find $f'(-1)$ for $f(x) = x^2 - 5x$."
          },
          {
            id: "m1-deriv-07",
            topic: "differentiation rules",
            prompt: "Differentiate $f(x) = 7x^5 - 4x^2 + \\dfrac{3}{x^3} + 6\\sqrt{x}$."
          },
          {
            id: "m1-deriv-08",
            topic: "product rule",
            prompt: "Differentiate $g(x) = (x^2 - 4)(3x + 1)$ using the product rule."
          },
          {
            id: "m1-deriv-09",
            topic: "quotient rule",
            prompt: "Differentiate $h(x) = \\dfrac{x^3 - 1}{x + 2}$ using the quotient rule."
          },
          {
            id: "m1-deriv-10",
            topic: "product rule",
            prompt: "Differentiate $y = x^3\\cos x$."
          },
          {
            id: "m1-deriv-11",
            topic: "quotient rule",
            prompt: "Differentiate $y = \\dfrac{\\sin x}{x^2 + 1}$."
          },
          {
            id: "m1-deriv-12",
            topic: "differentiation rules",
            prompt: "Find $\\dfrac{dy}{dx}$ where $y = (x^2 - x)(x^{1/2} + 2)$."
          },
          {
            id: "m1-tan-04",
            topic: "tangent lines",
            prompt: "Find the equation of the tangent line to $y = x^2 - 3x + 2$ at $x = 2$."
          },
          {
            id: "m1-tan-05",
            topic: "tangent lines",
            prompt: "Find all points on $y = x^3 - 6x$ where the tangent line is horizontal."
          },
          {
            id: "m1-tan-06",
            topic: "tangent lines",
            prompt: "At what value(s) of $x$ does $y = 2x^2 - x + 4$ have a tangent line with slope $7$?"
          },
          {
            id: "m1-inf-06",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{6x^2 - x + 4}{3x^2 + 5}$."
          },
          {
            id: "m1-inf-07",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -\\infty} \\dfrac{2x - 7}{x^2 + 9}$."
          },
          {
            id: "m1-inf-08",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{\\sqrt{4x^2 + 9}}{2x - 1}$."
          },
          {
            id: "m1-inf-09",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -\\infty} \\dfrac{\\sqrt{4x^2 + 9}}{2x - 1}$."
          },
          {
            id: "m1-asym-03",
            topic: "asymptotes",
            prompt: "Find all horizontal and vertical asymptotes of $f(x) = \\dfrac{x^2 + 2x - 3}{x^2 - x - 6}$."
          },
          {
            id: "m1-asym-04",
            topic: "asymptotes",
            prompt: "Find all asymptotes — vertical, horizontal, and slant — of $f(x) = \\dfrac{2x^2 - 3x + 5}{x + 2}$."
          },
          {
            id: "m1-asym-05",
            topic: "asymptotes",
            prompt: "Find all asymptotes — vertical, horizontal, and slant — of $f(x) = \\dfrac{x^2 - 4}{x - 2}$."
          },
          {
            id: "m1-prec-17",
            topic: "domain",
            prompt: "Find the domain of $f(x) = \\dfrac{\\sqrt{7 - x}}{x + 4}$."
          },
          {
            id: "m1-prec-18",
            topic: "domain",
            prompt: "Find the domain of $g(x) = \\ln(2x + 5)$."
          },
          {
            id: "m1-prec-19",
            topic: "composition",
            prompt: "Let $f(x) = x^2 - 9$ and $g(x) = \\sqrt{x}$. Find $(g \\circ f)(x)$ and state its domain."
          },
          {
            id: "m1-prec-20",
            topic: "inverse functions",
            prompt: "Find the inverse of $f(x) = \\dfrac{3x + 1}{x - 2}$, and state the domain of $f^{-1}$."
          },
          {
            id: "m1-lim-33",
            topic: "limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 4} (x^3 - 2x + 6)$."
          },
          {
            id: "m1-lim-34",
            topic: "limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -3} \\dfrac{x^2 - x + 2}{x^2 + 4}$."
          },
          {
            id: "m1-lim-35",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -4} \\dfrac{x^2 - 16}{x + 4}$."
          },
          {
            id: "m1-lim-36",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 1} \\dfrac{x^2 + x - 2}{x - 1}$."
          },
          {
            id: "m1-lim-37",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 2} \\dfrac{x^3 - 8}{x - 2}$."
          },
          {
            id: "m1-lim-38",
            topic: "limits — rationalization",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sqrt{1 + 5x} - 1}{x}$."
          },
          {
            id: "m1-lim-39",
            topic: "limits — rationalization",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 25} \\dfrac{\\sqrt{x} - 5}{x - 25}$."
          },
          {
            id: "m1-lim-40",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sin(11x)}{x}$."
          },
          {
            id: "m1-lim-41",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sin(6x)}{\\sin(4x)}$."
          },
          {
            id: "m1-lim-42",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{1 - \\cos(3x)}{x^2}$."
          },
          {
            id: "m1-lim-43",
            topic: "one-sided limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0^-} \\dfrac{|x|}{x}$ and $\\displaystyle \\lim_{x \\to 0^+} \\dfrac{|x|}{x}$. Does the two-sided limit exist?"
          },
          {
            id: "m1-lim-44",
            topic: "one-sided limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 5^-} \\dfrac{1}{x - 5}$ and $\\displaystyle \\lim_{x \\to 5^+} \\dfrac{1}{x - 5}$."
          },
          {
            id: "m1-lim-45",
            topic: "squeeze theorem",
            prompt: "Use the Squeeze Theorem to evaluate $\\displaystyle \\lim_{x \\to 0} x^4\\sin\\!\\left(\\dfrac{2}{x}\\right)$."
          },
          {
            id: "m1-lim-46",
            topic: "squeeze theorem",
            prompt: "Use the Squeeze Theorem to evaluate $\\displaystyle \\lim_{x \\to 0} x^2\\cos\\!\\left(\\dfrac{5}{x}\\right)$."
          },
          {
            id: "m1-cont-11",
            topic: "continuity",
            prompt: "Determine whether $f(x) = \\begin{cases} 3x - 2 & x < 0 \\\\ x^2 + 1 & x \\ge 0 \\end{cases}$ is continuous at $x = 0$. Justify your answer."
          },
          {
            id: "m1-cont-12",
            topic: "continuity",
            prompt: "Find $c$ so that $f(x) = \\begin{cases} x^2 + c & x \\le 2 \\\\ 5x - c & x > 2 \\end{cases}$ is continuous at $x = 2$."
          },
          {
            id: "m1-cont-13",
            topic: "continuity",
            prompt: "Classify each discontinuity of $f(x) = \\dfrac{x^2 - 9}{x^2 - x - 6}$ as removable, jump, or infinite."
          },
          {
            id: "m1-cont-14",
            topic: "continuity",
            prompt: "State the intervals on which $f(x) = \\dfrac{\\sqrt{x - 4}}{x^2 - 9}$ is continuous."
          },
          {
            id: "m1-ivt-05",
            topic: "IVT",
            prompt: "Use the Intermediate Value Theorem to show that $x^3 - x - 2 = 0$ has at least one root in $(1,2)$."
          },
          {
            id: "m1-ivt-06",
            topic: "IVT",
            prompt: "Show that $\\sin x - \\dfrac{x}{2} = 0$ has at least one solution in $[1,2]$."
          },
          {
            id: "m1-def-09",
            topic: "limit definition",
            prompt: "Use the definition of the derivative to find $f'(x)$ for $f(x) = x^2 - x + 4$."
          },
          {
            id: "m1-def-10",
            topic: "limit definition",
            prompt: "Use the definition of the derivative to find $f'(x)$ for $f(x) = \\dfrac{1}{x + 4}$."
          },
          {
            id: "m1-def-11",
            topic: "limit definition",
            prompt: "Use the definition of the derivative to find $f'(x)$ for $f(x) = \\sqrt{x + 5}$."
          },
          {
            id: "m1-deriv-13",
            topic: "differentiation rules",
            prompt: "Differentiate $f(x) = 9x^4 - 2x^3 + \\dfrac{5}{x} - 4x^{-2}$."
          },
          {
            id: "m1-deriv-14",
            topic: "product rule",
            prompt: "Differentiate $y = (x^2 + 2x)(x^3 - 1)$ using the product rule."
          },
          {
            id: "m1-deriv-15",
            topic: "quotient rule",
            prompt: "Differentiate $y = \\dfrac{x^2 + 4x + 1}{x - 1}$ using the quotient rule."
          },
          {
            id: "m1-deriv-16",
            topic: "product rule",
            prompt: "Differentiate $y = x\\sin x$."
          },
          {
            id: "m1-deriv-17",
            topic: "quotient rule",
            prompt: "Differentiate $y = \\dfrac{\\cos x}{x^2 + 4}$."
          },
          {
            id: "m1-tan-07",
            topic: "tangent lines",
            prompt: "Find the equation of the tangent line to $y = x^3 + x$ at $x = 0$."
          },
          {
            id: "m1-tan-08",
            topic: "tangent lines",
            prompt: "Find all points on $y = x^4 - 4x^2$ where the tangent line is horizontal."
          },
          {
            id: "m1-tan-09",
            topic: "tangent lines",
            prompt: "At what value(s) of $x$ does $y = x^2 - 6x + 1$ have a tangent line with slope $-2$?"
          },
          {
            id: "m1-inf-10",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{5x^3 - x + 2}{2x^3 + 9}$."
          },
          {
            id: "m1-inf-11",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -\\infty} \\dfrac{3x - 2}{x^2 + 1}$."
          },
          {
            id: "m1-inf-12",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{\\sqrt{16x^2 + 1}}{4x + 3}$."
          },
          {
            id: "m1-asym-06",
            topic: "asymptotes",
            prompt: "Find all horizontal and vertical asymptotes of $f(x) = \\dfrac{x^2 - 1}{x^2 - 3x + 2}$."
          },
          {
            id: "m1-asym-07",
            topic: "asymptotes",
            prompt: "Find all asymptotes — vertical, horizontal, and slant — of $f(x) = \\dfrac{x^2 + 3x + 2}{x - 2}$."
          },
          {
            id: "m1-asym-08",
            topic: "asymptotes",
            prompt: "Find all asymptotes — vertical, horizontal, and slant — of $f(x) = \\dfrac{3x^2 - x + 4}{x + 1}$."
          },
          {
            id: "m1-lim-47",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -5} \\dfrac{x^2 - 25}{x + 5}$."
          },
          {
            id: "m1-lim-48",
            topic: "limits — factoring",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 6} \\dfrac{x^2 - 7x + 6}{x - 6}$."
          },
          {
            id: "m1-lim-49",
            topic: "limits — rationalization",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sqrt{16 + x} - 4}{x}$."
          },
          {
            id: "m1-lim-50",
            topic: "trig limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\tan(7x)}{x}$."
          },
          {
            id: "m1-lim-51",
            topic: "one-sided limits",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to -2^-} \\dfrac{1}{x + 2}$ and $\\displaystyle \\lim_{x \\to -2^+} \\dfrac{1}{x + 2}$."
          },
          {
            id: "m1-cont-15",
            topic: "continuity",
            prompt: "Determine whether $f(x) = \\begin{cases} x^2 - 1 & x < 3 \\\\ 2x + 2 & x \\ge 3 \\end{cases}$ is continuous at $x = 3$. Justify your answer."
          },
          {
            id: "m1-cont-16",
            topic: "continuity",
            prompt: "Find $k$ so that $f(x) = \\begin{cases} kx - 4 & x \\le -1 \\\\ x^2 + 2 & x > -1 \\end{cases}$ is continuous at $x = -1$."
          },
          {
            id: "m1-def-12",
            topic: "limit definition",
            prompt: "Use the definition of the derivative to find $f'(x)$ for $f(x) = 4x^2 - 3x + 1$."
          },
          {
            id: "m1-deriv-18",
            topic: "differentiation rules",
            prompt: "Differentiate $f(x) = 2x^5 - 7x + \\dfrac{4}{x^2}$."
          },
          {
            id: "m1-deriv-19",
            topic: "product rule",
            prompt: "Differentiate $y = (x^2 - 1)(x^2 + 1)$."
          },
          {
            id: "m1-deriv-20",
            topic: "quotient rule",
            prompt: "Differentiate $y = \\dfrac{x^3 + 2x}{x - 4}$."
          },
          {
            id: "m1-tan-10",
            topic: "tangent lines",
            prompt: "Find the equation of the tangent line to $y = 2x^3 - x$ at $x = 1$."
          },
          {
            id: "m1-inf-13",
            topic: "limits at infinity",
            prompt: "Evaluate $\\displaystyle \\lim_{x \\to \\infty} \\dfrac{8x^2 + 3x - 1}{4x^2 - 5}$."
          },
          {
            id: "m1-asym-09",
            topic: "asymptotes",
            prompt: "Find all vertical and horizontal asymptotes of $f(x) = \\dfrac{2x^2 - 8}{x^2 - x - 6}$."
          },
          {
            id: "m1-deleps-01",
            topic: "DELEPS",
            prompt: "A CNC machine produces shafts where the diameter (in mm) is modeled by $d(t) = 25 + 0.4(t-10)$ near $t=10$ minutes. Use the $\\varepsilon$-$\\delta$ definition to show that for every $\\varepsilon > 0$, there exists a $\\delta > 0$ such that $|t-10|<\\delta \\Rightarrow |d(t)-25|<\\varepsilon$. Give an explicit choice of $\\delta$ in terms of $\\varepsilon$."
          },
          {
            id: "m1-deleps-02",
            topic: "DELEPS",
            prompt: "In a bottling plant, fill volume (mL) is modeled near a calibration point by $V(x)=500+2(x-3)$, where $x$ is sensor input. Prove using an $\\varepsilon$-$\\delta$ argument that $\\lim_{x\\to 3}V(x)=500$, and provide a valid formula for $\\delta(\\varepsilon)$."
          },
          {
            id: "m1-deleps-03",
            topic: "DELEPS",
            prompt: "A conveyor speed control law is $s(t)=12-5(t-2)$ m/s near $t=2$ s. Show directly from the definition of limit that $\\lim_{t\\to 2}s(t)=12$ by finding a suitable $\\delta$ for an arbitrary $\\varepsilon>0$."
          },
          {
            id: "m1-deleps-04",
            topic: "DELEPS",
            prompt: "A manufacturing oven temperature offset is modeled by $E(h)=0.8h$ near $h=0$ (hours). Using the $\\varepsilon$-$\\delta$ definition, prove that $\\lim_{h\\to 0}E(h)=0$. State a concrete choice of $\\delta$ as a function of $\\varepsilon$."
          },
          {
            id: "m1-deleps-05",
            topic: "DELEPS",
            prompt: "In a laser-cutting process, kerf width is approximated by $k(p)=0.20+0.03(p-100)$ mm near power $p=100$ W. Use an $\\varepsilon$-$\\delta$ proof to show that $\\lim_{p\\to 100}k(p)=0.20$."
          },
          {
            id: "m1-deleps-06",
            topic: "DELEPS",
            prompt: "A robotic arm positions parts with horizontal error modeled by $e(x)=1.5x$ mm near $x=0$. Show with a full $\\varepsilon$-$\\delta$ argument that $\\lim_{x\\to 0}e(x)=0$, including your explicit delta choice."
          },
          {
            id: "m1-deleps-07",
            topic: "DELEPS",
            prompt: "A paint-mixing line has concentration model $C(r)=40+6(r-5)$ (%) near feed ratio $r=5$. Prove from first principles that $\\lim_{r\\to 5}C(r)=40$ using the $\\varepsilon$-$\\delta$ definition and specify $\\delta(\\varepsilon)$."
          }
        ]
      },

      "midterm2": {
        name: "Midterm 2",
        topics: [
          "3.5 trig derivatives",
          "3.6 chain rule",
          "3.7 inverse trig derivatives",
          "3.8 implicit differentiation",
          "3.9 logarithmic differentiation",
          "6.9 hyperbolic derivatives",
          "4.1 related rates",
          "4.2 linear approximation and differentials",
          "4.3 local/global extrema",
          "4.4 Mean Value Theorem",
          "4.5 curve sketching",
          "4.6 L'Hopital's rule",
          "4.8 curve sketching summary"
        ],
        questions: [
          {
            id: "m2-trig-01",
            topic: "3.5 trig derivatives",
            prompt: "Differentiate $f(x) = 4\\sin x - 3\\cos x + \\tan x$."
          },
          {
            id: "m2-trig-02",
            topic: "3.5 trig derivatives",
            prompt: "Differentiate $y = x^2\\sin x$."
          },
          {
            id: "m2-trig-03",
            topic: "3.5 trig derivatives",
            prompt: "Differentiate $g(x) = \\dfrac{\\sin x}{x}$."
          },
          {
            id: "m2-chain-01",
            topic: "3.6 chain rule",
            prompt: "Differentiate $h(x) = \\sin(3x^2 + 1)$."
          },
          {
            id: "m2-chain-02",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y = (5x - 2)^7$."
          },
          {
            id: "m2-chain-03",
            topic: "3.6 chain rule",
            prompt: "Differentiate $f(x) = \\sqrt{1 + x^4}$."
          },
          {
            id: "m2-chain-04",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y = e^{\\sin(2x)}$."
          },
          {
            id: "m2-itrig-01",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y = \\arctan(3x)$."
          },
          {
            id: "m2-itrig-02",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $f(x) = x\\arcsin x$."
          },
          {
            id: "m2-itrig-03",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $g(x) = \\arccos(2x^2)$."
          },
          {
            id: "m2-impl-01",
            topic: "3.8 implicit differentiation",
            prompt: "Find $\\dfrac{dy}{dx}$ for the curve $x^2 + y^2 = 25$."
          },
          {
            id: "m2-impl-02",
            topic: "3.8 implicit differentiation",
            prompt: "Given $x^3 + y^3 = 6xy$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-impl-03",
            topic: "3.8 implicit differentiation",
            prompt: "For $x^2y + y^2 = 10$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-log-01",
            topic: "3.9 logarithmic differentiation",
            prompt: "Use logarithmic differentiation to find $\\dfrac{dy}{dx}$ if $y = x^x$ for $x>0$."
          },
          {
            id: "m2-log-02",
            topic: "3.9 logarithmic differentiation",
            prompt: "Use logarithmic differentiation to differentiate $y = \\dfrac{(x^2+1)^5\\sqrt{x-1}}{(x-2)^3}$."
          },
          {
            id: "m2-log-03",
            topic: "3.9 logarithmic differentiation",
            prompt: "Differentiate $y = (\\sin x)^{\\cos x}$ using logarithmic differentiation."
          },
          {
            id: "m2-hyp-01",
            topic: "6.9 hyperbolic derivatives",
            prompt: "Differentiate $f(x) = \\sinh(4x) - 3\\cosh x$."
          },
          {
            id: "m2-hyp-02",
            topic: "6.9 hyperbolic derivatives",
            prompt: "Differentiate $y = x\\tanh x$."
          },
          {
            id: "m2-hyp-03",
            topic: "6.9 hyperbolic derivatives",
            prompt: "Differentiate $g(x) = \\cosh(x^2)$."
          },
          {
            id: "m2-rates-01",
            topic: "4.1 related rates",
            prompt: "A spherical balloon is being inflated so that its volume increases at $10 \\\\text{cm}^3/\\\\text{s}$. How fast is the radius changing when $r = 5$ cm?"
          },
          {
            id: "m2-rates-02",
            topic: "4.1 related rates",
            prompt: "A 10 m ladder slides down a wall. If the bottom moves away from the wall at $0.8$ m/s, how fast is the top sliding down when the bottom is 6 m from the wall?"
          },
          {
            id: "m2-rates-03",
            topic: "4.1 related rates",
            prompt: "Water is poured into a cone of height 12 cm and radius 4 cm at $3 \\\\text{cm}^3/\\\\text{s}$. How fast is the water level rising when the depth is 6 cm?"
          },
          {
            id: "m2-lin-01",
            topic: "4.2 linear approximation and differentials",
            prompt: "Use linear approximation at $a=4$ to estimate $\\sqrt{4.1}$."
          },
          {
            id: "m2-lin-02",
            topic: "4.2 linear approximation and differentials",
            prompt: "For $f(x)=x^3$, use differentials to approximate the change in $f$ when $x$ changes from 2 to 2.02."
          },
          {
            id: "m2-lin-03",
            topic: "4.2 linear approximation and differentials",
            prompt: "Estimate $(1.98)^5$ using linearization of $f(x)=x^5$ at $x=2$."
          },
          {
            id: "m2-opt-01",
            topic: "4.3 min/max",
            prompt: "Find the absolute maximum and minimum values of $f(x)=x^3-3x^2+1$ on $[-1,3]$."
          },
          {
            id: "m2-opt-02",
            topic: "4.3 min/max",
            prompt: "A rectangle is inscribed under $y=12-x^2$ above the $x$-axis. Find the dimensions that maximize area."
          },
          {
            id: "m2-opt-03",
            topic: "4.3 min/max",
            prompt: "Find all local extrema of $f(x)=x^4-4x^3$."
          },
          {
            id: "m2-mvt-01",
            topic: "4.4 MVT",
            prompt: "Verify that $f(x)=x^2-4x$ satisfies the hypotheses of the Mean Value Theorem on $[0,5]$, then find all $c$ in $(0,5)$ that satisfy the conclusion."
          },
          {
            id: "m2-mvt-02",
            topic: "4.4 MVT",
            prompt: "Apply Rolle's Theorem to $f(x)=x^2-6x+8$ on $[2,4]$."
          },
          {
            id: "m2-mvt-03",
            topic: "4.4 MVT",
            prompt: "Suppose $f'(x)\\le 2$ for all $x\\in[1,6]$ and $f(1)=3$. What is the largest possible value of $f(6)$? Justify using the Mean Value Theorem."
          },
          {
            id: "m2-curve-01",
            topic: "4.5 curve sketching",
            prompt: "For $f(x)=x^3-3x$, find intervals of increase/decrease and all local extrema."
          },
          {
            id: "m2-curve-02",
            topic: "4.5 curve sketching",
            prompt: "For $f(x)=x^4-4x^2$, determine intervals of concavity and all inflection points."
          },
          {
            id: "m2-lhop-01",
            topic: "4.6 l'Hopital's rule",
            prompt: "Evaluate $\\displaystyle \\lim_{x\\to 0}\\dfrac{e^x-1-x}{x^2}$ using l'Hopital's Rule."
          },
          {
            id: "m2-lhop-02",
            topic: "4.6 l'Hopital's rule",
            prompt: "Evaluate $\\displaystyle \\lim_{x\\to \\infty}\\dfrac{\\ln x}{x}$ using l'Hopital's Rule."
          },
          {
            id: "m2-lhop-03",
            topic: "4.6 l'Hopital's rule",
            prompt: "Evaluate $\\displaystyle \\lim_{x\\to 0^+}x\\ln x$ by rewriting to apply l'Hopital's Rule."
          },
          {
            id: "m2-curve-03",
            topic: "4.8 curve sketching summary",
            prompt: "Sketch the graph of $f(x)=\\dfrac{x}{x^2+1}$ by identifying intercepts, symmetry, critical points, concavity, inflection points, and end behavior."
          },
          {
            id: "m2-curve-04",
            topic: "4.8 curve sketching summary",
            prompt: "Sketch the graph of $f(x)=\\dfrac{x^2}{x-1}$ by finding domain, intercepts, asymptotes, intervals of increase/decrease, and concavity."
          },
          {
            id: "m2-curve-05",
            topic: "4.8 curve sketching summary",
            prompt: "For $f(x)=xe^{-x}$, provide a complete first/second derivative analysis and sketch."
          },
          {
            id: "m2-trig-04",
            topic: "3.5 trig derivatives",
            prompt: "Differentiate $y = \\sec x\\tan x$."
          },
          {
            id: "m2-trig-05",
            topic: "3.5 trig derivatives",
            prompt: "Differentiate $f(x)=\\sin^2 x + \\cos^2 x$ and simplify."
          },
          {
            id: "m2-trig-06",
            topic: "3.5 trig derivatives",
            prompt: "Differentiate $y = \\dfrac{\\tan x}{1+\\sec x}$."
          },
          {
            id: "m2-trig-07",
            topic: "3.5 trig derivatives",
            prompt: "Differentiate $g(x)=\\csc(2x)$."
          },
          {
            id: "m2-chain-05",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y = \\cos\\!\\left(\\sqrt{x}\\right)$."
          },
          {
            id: "m2-chain-06",
            topic: "3.6 chain rule",
            prompt: "Differentiate $f(x)=\\left(1+3x^2\\right)^{-4}$."
          },
          {
            id: "m2-chain-07",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\ln\\!\\left(\\sin x\\right)$."
          },
          {
            id: "m2-chain-08",
            topic: "3.6 chain rule",
            prompt: "Differentiate $h(x)=\\sqrt{\\dfrac{1}{1-x^2}}$."
          },
          {
            id: "m2-itrig-04",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\arcsin(5x)$."
          },
          {
            id: "m2-itrig-05",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $f(x)=\\arctan\\!\\left(x^3\\right)$."
          },
          {
            id: "m2-itrig-06",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{\\arccos x}{x}$."
          },
          {
            id: "m2-itrig-07",
            topic: "3.7 inverse trig derivatives",
            prompt: "Find $\\dfrac{d}{dx}\\left[\\arcsin\\!\\left(\\dfrac{x}{2}\\right)\\right]$."
          },
          {
            id: "m2-impl-04",
            topic: "3.8 implicit differentiation",
            prompt: "For $x^2+xy+y^2=7$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-impl-05",
            topic: "3.8 implicit differentiation",
            prompt: "Given $x^2y + \\sin y = 4$, compute $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-impl-06",
            topic: "3.8 implicit differentiation",
            prompt: "If $e^{xy}+x-y=0$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-impl-07",
            topic: "3.8 implicit differentiation",
            prompt: "For $x^3+y^3=9$, find the slope of the tangent at $(2,1)$."
          },
          {
            id: "m2-log-04",
            topic: "3.9 logarithmic differentiation",
            prompt: "Use logarithmic differentiation to find $\\dfrac{dy}{dx}$ for $y=(x^2+1)^x$."
          },
          {
            id: "m2-log-05",
            topic: "3.9 logarithmic differentiation",
            prompt: "Differentiate $y=\\dfrac{x^3\\sqrt{x+1}}{(x-1)^4}$ using logarithmic differentiation."
          },
          {
            id: "m2-log-06",
            topic: "3.9 logarithmic differentiation",
            prompt: "Use logarithmic differentiation to differentiate $y=(\\cos x)^{\\sin x}$."
          },
          {
            id: "m2-log-07",
            topic: "3.9 logarithmic differentiation",
            prompt: "Differentiate $y=\\left(\\dfrac{x+2}{x-2}\\right)^{1/3}$ using logarithmic differentiation."
          },
          {
            id: "m2-hyp-04",
            topic: "6.9 hyperbolic derivatives",
            prompt: "Differentiate $y=\\sinh(x^2+1)$."
          },
          {
            id: "m2-hyp-05",
            topic: "6.9 hyperbolic derivatives",
            prompt: "Differentiate $f(x)=\\dfrac{\\cosh x}{\\sinh x}$."
          },
          {
            id: "m2-hyp-06",
            topic: "6.9 hyperbolic derivatives",
            prompt: "Differentiate $y=\\ln(\\cosh x)$."
          },
          {
            id: "m2-hyp-07",
            topic: "6.9 hyperbolic derivatives",
            prompt: "Differentiate $g(x)=\\tanh(3x-2)$."
          },
          {
            id: "m2-rates-04",
            topic: "4.1 related rates",
            prompt: "Air is blown into a spherical tank so that its radius increases at $0.02$ m/s. How fast is volume changing when $r=1.5$ m?"
          },
          {
            id: "m2-rates-05",
            topic: "4.1 related rates",
            prompt: "A car moves away from an intersection east at $18$ m/s while another car moves north at $24$ m/s. How fast is the distance between them changing 5 s after both pass the intersection?"
          },
          {
            id: "m2-rates-06",
            topic: "4.1 related rates",
            prompt: "A spotlight on the ground is 20 m from a wall. A person 1.8 m tall walks from the spotlight toward the wall at 1.5 m/s. How fast is the tip of the shadow moving up the wall when the person is 8 m from the light?"
          },
          {
            id: "m2-rates-07",
            topic: "4.1 related rates",
            prompt: "Sand falls into a conical pile at $12\\,\\text{m}^3/\\text{min}$. If the pile keeps shape with height equal to radius, how fast is the height increasing when $h=3$ m?"
          },
          {
            id: "m2-lin-04",
            topic: "4.2 linear approximation and differentials",
            prompt: "Use linearization at $a=9$ to approximate $\\sqrt{8.9}$."
          },
          {
            id: "m2-lin-05",
            topic: "4.2 linear approximation and differentials",
            prompt: "Use differentials to estimate the change in area of a circle when radius changes from 10 cm to 10.2 cm."
          },
          {
            id: "m2-lin-06",
            topic: "4.2 linear approximation and differentials",
            prompt: "Estimate $\\dfrac{1}{4.1}$ using linearization of $f(x)=1/x$ at $a=4$."
          },
          {
            id: "m2-lin-07",
            topic: "4.2 linear approximation and differentials",
            prompt: "Use linear approximation at $a=0$ to estimate $e^{0.04}$."
          },
          {
            id: "m2-opt-04",
            topic: "4.3 min/max",
            prompt: "Find the dimensions of a rectangle with perimeter 40 m that maximize area."
          },
          {
            id: "m2-opt-05",
            topic: "4.3 min/max",
            prompt: "Find the point on $y=x^2$ closest to $(0,3)$."
          },
          {
            id: "m2-opt-06",
            topic: "4.3 min/max",
            prompt: "Find absolute extrema of $f(x)=x+\\dfrac{4}{x}$ on $[1,5]$."
          },
          {
            id: "m2-opt-07",
            topic: "4.3 min/max",
            prompt: "A closed cylinder has fixed volume $100\\pi\\,\\text{cm}^3$. Find dimensions minimizing surface area."
          },
          {
            id: "m2-mvt-04",
            topic: "4.4 MVT",
            prompt: "Find all numbers $c$ satisfying the Mean Value Theorem for $f(x)=\\sqrt{x}$ on $[1,9]$."
          },
          {
            id: "m2-mvt-05",
            topic: "4.4 MVT",
            prompt: "Use Rolle's Theorem on $f(x)=x^3-3x$ over $[-\\sqrt{3},\\sqrt{3}]$ and find all valid $c$."
          },
          {
            id: "m2-mvt-06",
            topic: "4.4 MVT",
            prompt: "If $f$ is differentiable on $[0,2]$, continuous on $[0,2]$, and $f(0)=1$, $f(2)=7$, show that some $c\\in(0,2)$ has $f'(c)=3$."
          },
          {
            id: "m2-mvt-07",
            topic: "4.4 MVT",
            prompt: "Given $f'(x)\\ge 0$ on $(a,b)$, explain using MVT why $f$ is increasing on $[a,b]$."
          },
          {
            id: "m2-curve-06",
            topic: "4.5 curve sketching",
            prompt: "For $f(x)=x^3-6x^2+9x$, determine critical points, local extrema, and intervals of increase/decrease."
          },
          {
            id: "m2-curve-07",
            topic: "4.5 curve sketching",
            prompt: "For $f(x)=\\dfrac{x^2}{x+1}$, analyze monotonicity, concavity, and inflection points."
          },
          {
            id: "m2-curve-08",
            topic: "4.5 curve sketching",
            prompt: "Find where $f(x)=x^4-8x^2$ is concave up/down and locate inflection points."
          },
          {
            id: "m2-curve-09",
            topic: "4.5 curve sketching",
            prompt: "Perform first and second derivative tests for $f(x)=x^{2/3}(x-2)$."
          },
          {
            id: "m2-lhop-04",
            topic: "4.6 l'Hopital's rule",
            prompt: "Evaluate $\\displaystyle \\lim_{x\\to 0}\\dfrac{\\sin x - x}{x^3}$ using l'Hopital's Rule."
          },
          {
            id: "m2-lhop-05",
            topic: "4.6 l'Hopital's rule",
            prompt: "Evaluate $\\displaystyle \\lim_{x\\to \\infty}\\dfrac{x}{e^x}$ using l'Hopital's Rule."
          },
          {
            id: "m2-lhop-06",
            topic: "4.6 l'Hopital's rule",
            prompt: "Evaluate $\\displaystyle \\lim_{x\\to 0}\\dfrac{\\ln(1+x)}{x}$ using l'Hopital's Rule."
          },
          {
            id: "m2-lhop-07",
            topic: "4.6 l'Hopital's rule",
            prompt: "Evaluate $\\displaystyle \\lim_{x\\to \\infty}\\left(1+\\dfrac{1}{x}\\right)^x$ by converting to a logarithmic limit and applying l'Hopital's Rule."
          },
          {
            id: "m2-curve-10",
            topic: "4.8 curve sketching summary",
            prompt: "Sketch $f(x)=\\dfrac{x+1}{x^2+1}$ using derivative tests, concavity, and end behavior."
          },
          {
            id: "m2-curve-11",
            topic: "4.8 curve sketching summary",
            prompt: "Give a full curve sketch for $f(x)=\\dfrac{x^2-1}{x^2+1}$ including intercepts, extrema, concavity, and asymptotic behavior."
          },
          {
            id: "m2-curve-12",
            topic: "4.8 curve sketching summary",
            prompt: "Perform complete derivative-based graph analysis for $f(x)=\\ln(x)-x$ on its domain."
          },
          {
            id: "m2-curve-13",
            topic: "4.8 curve sketching summary",
            prompt: "Sketch $f(x)=x^2e^{-x}$ by identifying critical points, inflection points, and end behavior."
          },
          {
            id: "m2-trig-08",
            topic: "3.5 trig derivatives",
            prompt: "Differentiate $y=\\dfrac{\\sin x+\\cos x}{\\tan x}$."
          },
          {
            id: "m2-chain-09",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\left(\\ln(1+x^2)\\right)^4$."
          },
          {
            id: "m2-itrig-08",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $f(x)=\\arctan\\!\\left(\\sqrt{x}\\right)$."
          },
          {
            id: "m2-impl-08",
            topic: "3.8 implicit differentiation",
            prompt: "For $x^2+xy+y^2=19$, find the tangent slope at point $(3,2)$."
          },
          {
            id: "m2-log-08",
            topic: "3.9 logarithmic differentiation",
            prompt: "Use logarithmic differentiation to find $\\dfrac{dy}{dx}$ for $y=\\left(\\dfrac{x^2+1}{x}\\right)^x$."
          },
          {
            id: "m2-hyp-08",
            topic: "6.9 hyperbolic derivatives",
            prompt: "Differentiate $y=\\sinh x\\cosh x$."
          },
          {
            id: "m2-rates-08",
            topic: "4.1 related rates",
            prompt: "A circular oil spill radius increases at 0.4 m/min. How fast is area increasing when radius is 12 m?"
          },
          {
            id: "m2-lin-08",
            topic: "4.2 linear approximation and differentials",
            prompt: "Use linearization at $a=27$ to approximate $\\sqrt[3]{27.6}$."
          },
          {
            id: "m2-opt-08",
            topic: "4.3 min/max",
            prompt: "Find dimensions of the open-top box with square base of volume $32\\,\\text{m}^3$ that minimizes surface area."
          },
          {
            id: "m2-mix-01",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{x^2\\sin(3x)}{(1+x^3)^2}$."
          },
          {
            id: "m2-mix-02",
            topic: "3.6 chain rule",
            prompt: "Differentiate $f(x)=\\dfrac{(x^3+1)^4\\cos x}{\\sqrt{1+x^2}}$."
          },
          {
            id: "m2-mix-03",
            topic: "3.6 chain rule",
            prompt: "Find $\\dfrac{dy}{dx}$ for $y=\\dfrac{x\\,e^{x^2}}{\\sin(2x)+1}$."
          },
          {
            id: "m2-mix-04",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{(\\ln x)^3\\tan x}{x^2+1}$ for $x>0$."
          },
          {
            id: "m2-mix-05",
            topic: "3.6 chain rule",
            prompt: "Differentiate $g(x)=\\dfrac{(x^2-1)^5\\arctan x}{(1+x^4)^2}$."
          },
          {
            id: "m2-mix-06",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{\\sqrt{1+\\sin(x^2)}\\,(x^3-2x)}{\\cos x}$."
          },
          {
            id: "m2-mix-07",
            topic: "3.6 chain rule",
            prompt: "Find $\\dfrac{d}{dx}\\left[\\dfrac{(e^x+1)^3\\,x^2}{(\\ln(x+2))^2}\\right]$."
          },
          {
            id: "m2-mix-08",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{\\sin(x^2)\\cos(3x)}{(x^2+4)^3}$."
          },
          {
            id: "m2-mix-09",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{x^3\\arcsin(x/2)}{(1+x^2)^2}$."
          },
          {
            id: "m2-mix-10",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{(\\arctan x)^2\\sin(2x)}{x^2+1}$."
          },
          {
            id: "m2-mix-11",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{x\\cos(x^2)}{\\sqrt{1+\\arctan x}}$."
          },
          {
            id: "m2-mix-12",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{(\\sin x)^3\\arccos(x/3)}{(1+x)^2}$."
          },
          {
            id: "m2-mix-13",
            topic: "3.6 chain rule",
            prompt: "Find $\\dfrac{dy}{dx}$ for $y=\\dfrac{x^2\\tan(x^3)}{1+\\arcsin x}$."
          },
          {
            id: "m2-mix-14",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{\\ln(1+x^2)\\sin(4x)}{\\arctan(2x)}$."
          },
          {
            id: "m2-mix-15",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{(x^2+1)^3\\cos(x^2)}{\\sqrt{1+x^4}}$."
          },
          {
            id: "m2-mix-16",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{x\\arctan(x^2)}{(\\cos x)^2}$."
          },
          {
            id: "m2-mix-17",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{\\sin(5x)\\arcsin(x)}{x^2+4}$."
          },
          {
            id: "m2-mix-18",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{(1+x^2)^2\\ln(\\cos x)}{x\\arctan x}$."
          },
          {
            id: "m2-mix-19",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{x^2e^{\\sin x}}{1+\\cos(x^2)}$."
          },
          {
            id: "m2-mix-20",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{\\arccos(x/2)\\tan(3x)}{(x^2+1)^3}$."
          },
          {
            id: "m2-mix-21",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{(\\sin(x^2)+1)^4\\,x}{\\ln(x+3)}$."
          },
          {
            id: "m2-mix-22",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{x^3\\sec^2(2x)}{\\sqrt{1+x^2}}$."
          },
          {
            id: "m2-mix-23",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{\\sin x\\cos(x^3)}{\\arcsin(x/2)}$."
          },
          {
            id: "m2-mix-24",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{(\\arctan x)^3(1+x^2)}{\\sin(2x)}$."
          },
          {
            id: "m2-mix-25",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{x\\ln(1+x^2)\\arcsin x}{(1+x)^2}$."
          },
          {
            id: "m2-mix-26",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{\\cos(\\arctan x)\\,x^2}{\\sqrt{1+x^4}}$."
          },
          {
            id: "m2-mix-27",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{(x^2-1)^2\\sin(1/x)}{\\arctan(3x)}$."
          },
          {
            id: "m2-mix-28",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{x^4\\arccos x}{(1+\\sin x)^2}$."
          },
          {
            id: "m2-mix-29",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{\\tan(x^2)\\ln(x+1)}{\\arcsin(x/3)}$."
          },
          {
            id: "m2-mix-30",
            topic: "3.6 chain rule",
            prompt: "Differentiate $y=\\dfrac{x\\sin x\\cos x}{\\arctan(x^2)}$."
          },
          {
            id: "m2-mix-31",
            topic: "3.8 implicit differentiation",
            prompt: "Given $x^2y+\\sin(xy)=3$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-mix-32",
            topic: "3.8 implicit differentiation",
            prompt: "Given $\\cos(xy)+x^2=y^2$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-mix-33",
            topic: "3.8 implicit differentiation",
            prompt: "For $x\\arctan y + y\\arcsin x = 1$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-mix-34",
            topic: "3.8 implicit differentiation",
            prompt: "For $e^{xy}+\\tan y = x^2$, compute $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-mix-35",
            topic: "3.8 implicit differentiation",
            prompt: "Given $x^2\\sin y + y^2\\cos x = 4$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-mix-36",
            topic: "3.8 implicit differentiation",
            prompt: "If $x\\cos y + y\\sin x = 2$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-mix-37",
            topic: "3.8 implicit differentiation",
            prompt: "Given $\\ln(x+y)+xy=0$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-mix-38",
            topic: "3.8 implicit differentiation",
            prompt: "For $x^3+y^3=6\\sin(xy)$, compute $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-mix-39",
            topic: "3.8 implicit differentiation",
            prompt: "Given $x\\,e^y + y\\,e^x = 5$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-mix-40",
            topic: "3.8 implicit differentiation",
            prompt: "For $x^2+y^2+2xy\\sin x=9$, find $\\dfrac{dy}{dx}$."
          },
          {
            id: "m2-mix-41",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{\\arcsin(x^2)\\,\\arctan x}{1+x^2}$."
          },
          {
            id: "m2-mix-42",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{x\\arccos(2x)}{\\sqrt{1-x^2}}$."
          },
          {
            id: "m2-mix-43",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{(\\arctan(3x))^2\\sin x}{x}$."
          },
          {
            id: "m2-mix-44",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{\\ln x\\,\\arcsin(1/x)}{x^2+1}$ for $x>1$."
          },
          {
            id: "m2-mix-45",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{\\arccos(x/2)\\cos(2x)}{(1+x)^2}$."
          },
          {
            id: "m2-mix-46",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{x^2\\arctan(\\sqrt{x})}{\\sin x+2}$."
          },
          {
            id: "m2-mix-47",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{\\arcsin x + \\arctan x}{x\\cos x}$."
          },
          {
            id: "m2-mix-48",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{\\arctan(x^3)\\,e^x}{1+\\arcsin(x/2)}$."
          },
          {
            id: "m2-mix-49",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{(\\arcsin x)^2}{x^2+\\cos x}$."
          },
          {
            id: "m2-mix-50",
            topic: "3.7 inverse trig derivatives",
            prompt: "Differentiate $y=\\dfrac{\\arccos x\\,\\tan x}{\\ln(x+2)}$."
          }
        ]
      },

      "final": {
        name: "Final Exam",
        topics: [
          "optimization",
          "antiderivatives",
          "approximating areas (left, right, midpoint)",
          "definite integrals",
          "riemann sums",
          "FTC",
          "basic integrals",
          "net change theorem",
          "u-sub"
        ],
        questions: [
          {
            id: "FE-001",
            topic: "optimization",
            prompt: "A rectangle has perimeter 120 m. Find dimensions that maximize area."
          },
          {
            id: "FE-002",
            topic: "optimization",
            prompt: "Find the point on $y=x^2$ closest to $(2,0)$."
          },
          {
            id: "FE-003",
            topic: "optimization",
            prompt: "A closed cylinder has volume $200\\pi\\,\\text{cm}^3$. Find dimensions minimizing surface area."
          },
          {
            id: "FE-004",
            topic: "optimization",
            prompt: "A rectangle is inscribed under $y=16-x^2$ above the $x$-axis. Find dimensions of maximum area."
          },
          {
            id: "FE-005",
            topic: "optimization",
            prompt: "A box with square base and no lid has volume $108\\,\\text{cm}^3$. Minimize surface area."
          },
          {
            id: "FE-006",
            topic: "optimization",
            prompt: "Find absolute max and min of $f(x)=x+\\dfrac{9}{x}$ on $[1,6]$."
          },
          {
            id: "FE-007",
            topic: "optimization",
            prompt: "A Norman window has semicircle on top of a rectangle. For fixed perimeter 20 m, maximize area."
          },
          {
            id: "FE-008",
            topic: "optimization",
            prompt: "A farmer wants to fence three sides of a rectangular pen using 240 m of fence (one side along a barn). Maximize area."
          },
          {
            id: "FE-009",
            topic: "optimization",
            prompt: "Find dimensions of a rectangle of largest area inscribed in the ellipse $\\dfrac{x^2}{9}+\\dfrac{y^2}{4}=1$."
          },
          {
            id: "FE-010",
            topic: "optimization",
            prompt: "Find the minimum distance from point $(1,2)$ to the line $y=-x+5$."
          },
          {
            id: "FE-011",
            topic: "antiderivatives",
            prompt: "Find the most general antiderivative of $f(x)=6x^2-4x+1$."
          },
          {
            id: "FE-012",
            topic: "antiderivatives",
            prompt: "Find $\\displaystyle \\int (4x^3-\\dfrac{2}{x^2})\\,dx$."
          },
          {
            id: "FE-013",
            topic: "antiderivatives",
            prompt: "Find the general antiderivative of $f(t)=\\sqrt{t}+\\dfrac{3}{\\sqrt{t}}$."
          },
          {
            id: "FE-014",
            topic: "antiderivatives",
            prompt: "Find $F(x)$ if $F'(x)=5e^x-2\\cos x$."
          },
          {
            id: "FE-015",
            topic: "antiderivatives",
            prompt: "Find the antiderivative of $f(x)=\\sec^2 x-\\sin x$."
          },
          {
            id: "FE-016",
            topic: "antiderivatives",
            prompt: "Compute $\\displaystyle \\int (7x^{-3}+x^{1/2})\\,dx$."
          },
          {
            id: "FE-017",
            topic: "antiderivatives",
            prompt: "Find all functions $y(x)$ such that $y'(x)=3x^2+4x-5$ and $y(1)=2$."
          },
          {
            id: "FE-018",
            topic: "antiderivatives",
            prompt: "Find $\\displaystyle \\int \\left(\\dfrac{1}{x}+2\\right)dx$ for $x>0$."
          },
          {
            id: "FE-019",
            topic: "antiderivatives",
            prompt: "Find a particular antiderivative of $f(x)=2\\sin x+3\\cos x$ that satisfies $F(0)=4$."
          },
          {
            id: "FE-020",
            topic: "antiderivatives",
            prompt: "Determine $F(x)$ if $F''(x)=12x-6$, $F'(0)=1$, and $F(0)=0$."
          },
          {
            id: "FE-021",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "Approximate $\\int_0^4 x^2\\,dx$ with $n=4$ using left Riemann sum."
          },
          {
            id: "FE-022",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "Approximate $\\int_1^5 \\sqrt{x}\\,dx$ with $n=4$ using right Riemann sum."
          },
          {
            id: "FE-023",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "Approximate $\\int_0^2 e^x\\,dx$ using midpoint rule with $n=4$."
          },
          {
            id: "FE-024",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "Use left, right, and midpoint sums with $n=3$ to approximate $\\int_0^3 (x+1)\\,dx$."
          },
          {
            id: "FE-025",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "For $f(x)=x^3$ on $[0,2]$, compute $L_4$ and $R_4$."
          },
          {
            id: "FE-026",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "Approximate $\\int_2^6 \\dfrac{1}{x}\\,dx$ using midpoint rule with $n=4$."
          },
          {
            id: "FE-027",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "Use $R_5$ to approximate $\\int_0^5 (2x+1)\\,dx$."
          },
          {
            id: "FE-028",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "Use $L_6$ to approximate $\\int_0^3 \\cos x\\,dx$."
          },
          {
            id: "FE-029",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "Use midpoint rule with $n=8$ to estimate $\\int_0^2 \\dfrac{1}{1+x^2}\\,dx$."
          },
          {
            id: "FE-030",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "Compare $L_4$ and $R_4$ for $f(x)=x^2$ on $[1,3]$ and determine which is an overestimate."
          },
          {
            id: "FE-031",
            topic: "definite integrals",
            prompt: "Evaluate $\\displaystyle \\int_0^2 (3x^2-4x+1)\\,dx$."
          },
          {
            id: "FE-032",
            topic: "definite integrals",
            prompt: "Evaluate $\\displaystyle \\int_{-1}^{1} (x^3+2x)\\,dx$."
          },
          {
            id: "FE-033",
            topic: "definite integrals",
            prompt: "Compute $\\displaystyle \\int_1^4 \\left(2-\\dfrac{1}{x^2}\\right)dx$."
          },
          {
            id: "FE-034",
            topic: "definite integrals",
            prompt: "Evaluate $\\displaystyle \\int_0^{\\pi} \\sin x\\,dx$."
          },
          {
            id: "FE-035",
            topic: "definite integrals",
            prompt: "Evaluate $\\displaystyle \\int_0^{\\pi/2} \\cos x\\,dx$."
          },
          {
            id: "FE-036",
            topic: "definite integrals",
            prompt: "Find $\\displaystyle \\int_0^1 e^{2x}\\,dx$."
          },
          {
            id: "FE-037",
            topic: "definite integrals",
            prompt: "Evaluate $\\displaystyle \\int_1^e \\dfrac{1}{x}\\,dx$."
          },
          {
            id: "FE-038",
            topic: "definite integrals",
            prompt: "Compute $\\displaystyle \\int_{-2}^{2} (x^2+1)\\,dx$."
          },
          {
            id: "FE-039",
            topic: "definite integrals",
            prompt: "Evaluate $\\displaystyle \\int_0^3 |x-1|\\,dx$."
          },
          {
            id: "FE-040",
            topic: "definite integrals",
            prompt: "Given $\\int_0^4 f(x)\\,dx=7$ and $\\int_0^1 f(x)\\,dx=2$, find $\\int_1^4 f(x)\\,dx$."
          },
          {
            id: "FE-041",
            topic: "riemann sums",
            prompt: "Write a limit of Riemann sums for $\\int_0^3 (x^2+1)\\,dx$ using right endpoints."
          },
          {
            id: "FE-042",
            topic: "riemann sums",
            prompt: "Express $\\sum_{i=1}^n \\left(\\dfrac{i}{n}\\right)^2\\dfrac{1}{n}$ as a definite integral."
          },
          {
            id: "FE-043",
            topic: "riemann sums",
            prompt: "Evaluate $\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^n \\left(\\dfrac{2i}{n}\\right)^2\\dfrac{2}{n}$."
          },
          {
            id: "FE-044",
            topic: "riemann sums",
            prompt: "Set up (do not simplify) a midpoint Riemann sum for $\\int_1^5 \\ln x\\,dx$ with $n$ subintervals."
          },
          {
            id: "FE-045",
            topic: "riemann sums",
            prompt: "Convert $\\displaystyle \\int_{-1}^{2} (3x-1)\\,dx$ into a left-endpoint Riemann sum limit."
          },
          {
            id: "FE-046",
            topic: "riemann sums",
            prompt: "Find the function and interval represented by $\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^n \\sqrt{1+\\frac{3i}{n}}\\frac{3}{n}$."
          },
          {
            id: "FE-047",
            topic: "riemann sums",
            prompt: "Evaluate by Riemann sum definition: $\\int_0^1 x\\,dx$."
          },
          {
            id: "FE-048",
            topic: "riemann sums",
            prompt: "Evaluate by Riemann sum definition: $\\int_0^2 (x+2)\\,dx$."
          },
          {
            id: "FE-049",
            topic: "riemann sums",
            prompt: "Express $\\sum_{i=1}^n \\sin\\!\\left(\\dfrac{i\\pi}{n}\\right)\\dfrac{\\pi}{n}$ as a definite integral."
          },
          {
            id: "FE-050",
            topic: "riemann sums",
            prompt: "Write a Riemann sum limit for $\\int_2^6 \\dfrac{1}{x}\\,dx$ with sample points at right endpoints."
          },
          {
            id: "FE-051",
            topic: "FTC",
            prompt: "If $F(x)=\\int_1^x (t^2+3t)\\,dt$, find $F'(x)$."
          },
          {
            id: "FE-052",
            topic: "FTC",
            prompt: "Find $\\dfrac{d}{dx}\\left[\\int_0^{x^3} \\cos t\\,dt\\right]$."
          },
          {
            id: "FE-053",
            topic: "FTC",
            prompt: "Evaluate $\\dfrac{d}{dx}\\left[\\int_{x}^{2x} \\sqrt{1+t^2}\\,dt\\right]$."
          },
          {
            id: "FE-054",
            topic: "FTC",
            prompt: "If $G(x)=\\int_{\\sin x}^{x^2} e^{t^2}\\,dt$, find $G'(x)$."
          },
          {
            id: "FE-055",
            topic: "FTC",
            prompt: "Given $f(2)=5$ and $f'(x)=3x^2$, find $f(4)$ using net accumulation."
          },
          {
            id: "FE-056",
            topic: "FTC",
            prompt: "Let $H(x)=\\int_0^x \\dfrac{1}{1+t^2}\\,dt$. Find equations of tangent line to $y=H(x)$ at $x=1$."
          },
          {
            id: "FE-057",
            topic: "FTC",
            prompt: "Compute $\\displaystyle \\int_0^3 f'(x)\\,dx$ given $f(0)=2$ and $f(3)=11$."
          },
          {
            id: "FE-058",
            topic: "FTC",
            prompt: "If $A(x)=\\int_2^x f(t)\\,dt$ and $A'(3)=7$, what is $f(3)$?"
          },
          {
            id: "FE-059",
            topic: "FTC",
            prompt: "Find $\\dfrac{d}{dx}\\left[\\int_{x^2}^{x^3} \\ln(1+t)\\,dt\\right]$."
          },
          {
            id: "FE-060",
            topic: "FTC",
            prompt: "Given $F(x)=\\int_0^x (x-t)\\,dt$, first simplify then compute $F'(x)$."
          },
          {
            id: "FE-061",
            topic: "basic integrals",
            prompt: "Evaluate $\\displaystyle \\int (9x^2-8x+6)\\,dx$."
          },
          {
            id: "FE-062",
            topic: "basic integrals",
            prompt: "Evaluate $\\displaystyle \\int \\left(\\dfrac{3}{x}-4e^x\\right)dx$."
          },
          {
            id: "FE-063",
            topic: "basic integrals",
            prompt: "Evaluate $\\displaystyle \\int (\\sec^2 x+\\csc^2 x)\\,dx$."
          },
          {
            id: "FE-064",
            topic: "basic integrals",
            prompt: "Evaluate $\\displaystyle \\int (2^x+\\sin x)\\,dx$."
          },
          {
            id: "FE-065",
            topic: "basic integrals",
            prompt: "Compute $\\displaystyle \\int x^{-1/2}\\,dx$."
          },
          {
            id: "FE-066",
            topic: "basic integrals",
            prompt: "Compute $\\displaystyle \\int (5\\cos x-7\\sin x)\\,dx$."
          },
          {
            id: "FE-067",
            topic: "basic integrals",
            prompt: "Evaluate $\\displaystyle \\int \\left(\\dfrac{1}{x^3}+\\sqrt[3]{x}\\right)dx$."
          },
          {
            id: "FE-068",
            topic: "basic integrals",
            prompt: "Find $\\displaystyle \\int_0^2 (x^3-2x)\\,dx$."
          },
          {
            id: "FE-069",
            topic: "basic integrals",
            prompt: "Evaluate $\\displaystyle \\int (\\tan x)(\\sec^2 x)\\,dx$."
          },
          {
            id: "FE-070",
            topic: "basic integrals",
            prompt: "Evaluate $\\displaystyle \\int \\dfrac{1}{1+x^2}\\,dx$."
          },
          {
            id: "FE-071",
            topic: "net change theorem",
            prompt: "A particle has velocity $v(t)=3t^2-12t+9$ on $[0,4]$. Find net change in position."
          },
          {
            id: "FE-072",
            topic: "net change theorem",
            prompt: "Flow rate into a tank is $r(t)=5+2t$ L/min for $0\\le t\\le 6$. Find total amount added."
          },
          {
            id: "FE-073",
            topic: "net change theorem",
            prompt: "Temperature change rate is $T'(t)=4\\sin t$ for $0\\le t\\le \\pi$. Find net temperature change."
          },
          {
            id: "FE-074",
            topic: "net change theorem",
            prompt: "A car's acceleration is $a(t)=6t-4$ m/s$^2$ on $[0,3]$. Find change in velocity."
          },
          {
            id: "FE-075",
            topic: "net change theorem",
            prompt: "Given revenue rate $R'(x)=120-3x$ dollars/unit, find revenue increase from 10 to 20 units."
          },
          {
            id: "FE-076",
            topic: "net change theorem",
            prompt: "If $f'(x)=\\dfrac{2}{x}$ on $[1,4]$, find $f(4)-f(1)$."
          },
          {
            id: "FE-077",
            topic: "net change theorem",
            prompt: "Population growth rate is $P'(t)=100e^{0.1t}$ people/year, $0\\le t\\le 5$. Find net increase."
          },
          {
            id: "FE-078",
            topic: "net change theorem",
            prompt: "Given $s'(t)=t^2-4t+3$, find displacement on $[1,5]$."
          },
          {
            id: "FE-079",
            topic: "net change theorem",
            prompt: "If marginal cost is $C'(q)=0.4q+12$, compute increase in cost from $q=50$ to $q=80$."
          },
          {
            id: "FE-080",
            topic: "net change theorem",
            prompt: "Given $f(0)=7$ and $f'(x)=x^2-2x$, find $f(3)$."
          },
          {
            id: "FE-081",
            topic: "u-sub",
            prompt: "Evaluate $\\displaystyle \\int 2x\\cos(x^2)\\,dx$ using substitution."
          },
          {
            id: "FE-082",
            topic: "u-sub",
            prompt: "Evaluate $\\displaystyle \\int \\dfrac{3x^2}{x^3+1}\\,dx$."
          },
          {
            id: "FE-083",
            topic: "u-sub",
            prompt: "Compute $\\displaystyle \\int x\\sqrt{x^2+4}\\,dx$."
          },
          {
            id: "FE-084",
            topic: "u-sub",
            prompt: "Evaluate $\\displaystyle \\int e^{5x-1}\\,dx$."
          },
          {
            id: "FE-085",
            topic: "u-sub",
            prompt: "Evaluate $\\displaystyle \\int \\sin(4x)\\,dx$."
          },
          {
            id: "FE-086",
            topic: "u-sub",
            prompt: "Evaluate $\\displaystyle \\int \\dfrac{1}{\\sqrt{1-3x}}\\,dx$."
          },
          {
            id: "FE-087",
            topic: "u-sub",
            prompt: "Compute $\\displaystyle \\int_0^1 6x(3x^2+2)^4\\,dx$."
          },
          {
            id: "FE-088",
            topic: "u-sub",
            prompt: "Evaluate $\\displaystyle \\int \\dfrac{\\ln x}{x}\\,dx$."
          },
          {
            id: "FE-089",
            topic: "u-sub",
            prompt: "Evaluate $\\displaystyle \\int \\cos(\\sqrt{x})\\dfrac{1}{\\sqrt{x}}\\,dx$."
          },
          {
            id: "FE-090",
            topic: "u-sub",
            prompt: "Evaluate $\\displaystyle \\int_{0}^{\\pi/2} \\sin(2x)\\,dx$ using substitution."
          },
          {
            id: "FE-091",
            topic: "optimization",
            prompt: "A rectangle is inscribed in the first quadrant under $y=9-x^2$. Find dimensions for maximum area."
          },
          {
            id: "FE-092",
            topic: "antiderivatives",
            prompt: "Find the general antiderivative of $f(x)=4\\cos x+\\dfrac{5}{x^2}$."
          },
          {
            id: "FE-093",
            topic: "approximating areas (left, right, midpoint)",
            prompt: "Approximate $\\int_0^6 \\dfrac{x}{2}+1\\,dx$ using midpoint rule with $n=6$."
          },
          {
            id: "FE-094",
            topic: "definite integrals",
            prompt: "Evaluate $\\displaystyle \\int_0^2 (x^3-3x)\\,dx$."
          },
          {
            id: "FE-095",
            topic: "riemann sums",
            prompt: "Evaluate $\\displaystyle \\lim_{n\\to\\infty}\\sum_{i=1}^{n}\\left(\\dfrac{i}{n}\\right)^3\\dfrac{1}{n}$."
          },
          {
            id: "FE-096",
            topic: "FTC",
            prompt: "If $F(x)=\\int_2^{x^2} \\ln t\\,dt$, find $F'(x)$."
          },
          {
            id: "FE-097",
            topic: "basic integrals",
            prompt: "Evaluate $\\displaystyle \\int \\left(3x^2+\\dfrac{2}{x}\\right)dx$."
          },
          {
            id: "FE-098",
            topic: "net change theorem",
            prompt: "If water drains at rate $R'(t)=-8+0.5t$ L/min for $0\\le t\\le 10$, find net change in water volume."
          },
          {
            id: "FE-099",
            topic: "u-sub",
            prompt: "Evaluate $\\displaystyle \\int \\dfrac{2x}{1+x^2}\\,dx$."
          },
          {
            id: "FE-100",
            topic: "u-sub",
            prompt: "Evaluate $\\displaystyle \\int_1^2 \\dfrac{1}{x\\ln x}\\,dx$."
          }
        ]
      }
    }
  },

  "math1020u": {
    name: "MATH 1020U — Calculus II",
    exams: {
      "readiness": {
        name: "Readiness Test",
        topics: [
          "calculus 1 final exam review"
        ],
        questions: []
      },
      "midterm1": {
        name: "Midterm 1",
        topics: [
          "Ch3 — integration by parts",
          "Ch3 — trig integration (powers of sin and cos)",
          "Ch3 — trig substitution",
          "Ch3 — partial fractions",
          "Ch3 — integration strategy (multiple rules)",
          "Ch3 — numerical integration (midpoint, trapezoid, Simpson, error bounds)",
          "Ch3 — improper integrals",
          "Ch2 — arclength",
          "Ch2 — surface area of revolution",
          "Ch2 — hydrostatic force",
          "Ch2 — cardiac output",
          "Ch2 — probability density functions (PDF)"
        ],
        questions: []
      },
      "midterm2": {
        name: "Midterm 2",
        topics: [
          "differential equations — intro (order, linearity, IVP)",
          "direction fields",
          "euler's method",
          "separable differential equations",
          "applications — newton's law of cooling",
          "applications — leaking tank",
          "applications — smoke concentration in a room",
          "parametric curves — derivatives and tangent lines",
          "polar coordinates — petals, derivatives, area",
          "multivariate functions — partial derivatives",
          "multivariate functions — chain rule",
          "vectors — dot product and length",
          "gradient vector",
          "multivariate optimization — critical points (3 variables)",
          "directional derivatives"
        ],
        questions: []
      },
      "final": {
        name: "Final Exam",
        topics: [
          "double integrals over rectangles",
          "iterated integrals",
          "double integrals over general regions",
          "taylor and maclaurin series",
          "taylor series applications and error formulas",
          "sequences",
          "series",
          "ratio and root test",
          "power series",
          "geometric series"
        ],
        questions: []
      }
    }
  },

  "stat2800u": {
    name: "STAT 2800U — Statistics for Engineering",
    exams: {
      "midterm1": {
        name: "Midterm 1",
        topics: [
          "sampling",
          "summary statistics",
          "graphical summaries",
          "basic ideas",
          "counting methods",
          "conditional probability",
          "independence",
          "random variables",
          "the binomial distribution"
        ],
        questions: []
      },
      "midterm2": {
        name: "Midterm 2",
        topics: [
          "binomial distribution",
          "poisson distribution",
          "normal distribution",
          "lognormal distribution",
          "exponential distribution",
          "weibull distribution",
          "central limit theorem and confidence intervals",
          "confidence intervals — population mean, variance known",
          "confidence intervals — population mean, variance unknown"
        ],
        questions: []
      },
      "final": {
        name: "Final Exam",
        topics: [
          "confidence intervals — difference between two means",
          "confidence intervals — paired data",
          "hypothesis tests — population mean, variance known",
          "hypothesis tests — drawing conclusions",
          "hypothesis tests — population mean, variance unknown",
          "hypothesis tests — difference between two means",
          "hypothesis tests — paired data",
          "correlation",
          "least squares line",
          "control charts — variables",
          "control charts — attributes"
        ],
        questions: []
      }
    }
  }
};

/** Round numeric values embedded in prompts (avoids float artifacts like 0.35000000000000003). */
function formatDecimal(x, places) {
  const p = typeof places === "number" ? places : 4;
  if (typeof x !== "number" || !Number.isFinite(x)) return x;
  return Number.parseFloat(x.toFixed(p));
}

// STAT 2800U — Midterm 1: nine equal topic buckets for even-by-topic sampling.
(function buildStat2800Midterm1() {
  const course = COURSES.stat2800u;
  if (!course || !course.exams || !course.exams.midterm1) return;
  const qs = course.exams.midterm1.questions;
  if (qs.length > 0) return;

  const perTopic = 24;
  let n = 0;

  function push(topic, prompt) {
    n += 1;
    qs.push({
      id: `statm1-${String(n).padStart(3, "0")}`,
      topic,
      prompt
    });
  }

  function addBlock(topic, makePrompt) {
    for (let k = 0; k < perTopic; k++) {
      push(topic, makePrompt(k));
    }
  }

  addBlock("sampling", (k) => {
    const designs = [
      `Explain what a <em>simple random sample (SRS)</em> means in the context of auditing ${50 + k * 3}$ invoices from a large warehouse.`,
      `Compare <em>stratified sampling</em> versus <em>cluster sampling</em> for estimating average commute time across campus buildings.`,
      `A survey uses voluntary online responses. Name one major source of <em>bias</em> and suggest a better sampling approach.`,
      `Define the <em>sampling frame</em> if you want to sample Ontario Tech undergraduate engineering students enrolled this term.`
    ];
    return designs[k % designs.length];
  });

  addBlock("summary statistics", (k) => {
    const a = 2 + (k % 5);
    const b = 5 + (k % 7);
    const c = 1 + (k % 4);
    return `For the small dataset $\\{${a},${b},${c},${a + b},${b - c}\\}$, compute the <em>sample mean</em>, <em>sample median</em>, and <em>sample standard deviation</em> (use $n-1$ in the denominator).`;
  });

  addBlock("graphical summaries", (k) => {
    const g = [
      `Interpret a <em>histogram</em>: explain what the vertical scale represents when counts are used versus when relative frequency is used.`,
      `What features of a <em>boxplot</em> correspond to center, spread, and skewness? Where do potential outliers appear?`,
      `Describe when a <em>stem-and-leaf plot</em> is preferable to a histogram for communicating raw data to an engineering team.`,
      `A bar chart shows categories on the $x$-axis. Why is a bar chart <em>not</em> the same graphical tool as a histogram for numeric measurements?`
    ];
    return g[k % g.length];
  });

  addBlock("basic ideas", (k) => {
    const ideas = [
      `Distinguish a <em>population</em> from a <em>sample</em>, and a <em>parameter</em> from a <em>statistic</em> using one concrete engineering example.`,
      `Explain why natural variability implies that two samples from the same process will usually differ, even if nothing changed.`,
      `Define <em>confounding</em> in one sentence and give an example where a measured association might not imply causation.`,
      `What does it mean to say an estimator is <em>unbiased</em> in repeated sampling?`
    ];
    return ideas[k % ideas.length];
  });

  addBlock("counting methods", (k) => {
    const m = 4 + (k % 4);
    const r = 2 + (k % 3);
    const forms = [
      `How many ${m}-letter codes can be formed from an alphabet of ${r} distinct symbols if <em>repetition is allowed</em>?`,
      `How many ways can you arrange ${m} distinct sensors in a row?`,
      `A committee of size ${r} is chosen from ${m} distinct engineers. How many committees are possible if order does not matter?`,
      `Use the multiplication rule: a system has ${m} independent components each with ${r} failure modes. How many joint outcomes are possible?`
    ];
    return forms[k % forms.length];
  });

  addBlock("conditional probability", (k) => {
    const pB = formatDecimal(0.35 + (k % 5) * 0.05, 2);
    const pAB = formatDecimal(0.1 + (k % 4) * 0.02, 2);
    return `Given $P(B)=${pB}$ and $P(A\\cap B)=${pAB}$, compute $P(A\\mid B)$ and interpret the result in words.`;
  });

  addBlock("independence", (k) => {
    const rows = [
      { pA: 0.5, pB: 0.4 },
      { pA: 0.6, pB: 0.5 },
      { pA: 0.4, pB: 0.25 },
      { pA: 0.5, pB: 0.6 }
    ];
    const row = rows[k % rows.length];
    const pA = row.pA;
    const pB = row.pB;
    const product = formatDecimal(pA * pB, 3);
    const cap = Math.min(pA, pB) - 0.01;
    const jointObs =
      k % 2 === 0
        ? product
        : formatDecimal(Math.min(product + 0.06, cap), 3);
    return `Suppose $P(A)=${pA}$, $P(B)=${pB}$, and $P(A\\cap B)=${jointObs}$. Are $A$ and $B$ independent? Justify using the definition of independence.`;
  });

  addBlock("random variables", (k) => {
    const x1 = k % 3;
    const x2 = (k + 1) % 3;
    const x3 = (k + 2) % 3;
    const triples = [
      [0.2, 0.3, 0.5],
      [0.25, 0.25, 0.5],
      [0.1, 0.3, 0.6],
      [0.4, 0.35, 0.25]
    ];
    const [p1, p2, p3] = triples[k % triples.length];
    return `Discrete $X$ takes values $\\{${x1},${x2},${x3}\\}$ with $P(X=${x1})=${p1}$, $P(X=${x2})=${p2}$, $P(X=${x3})=${p3}$. Find $E[X]$ and $\\mathrm{Var}(X)$.`;
  });

  addBlock("the binomial distribution", (k) => {
    const nTrials = 8 + (k % 6);
    const p = formatDecimal(0.25 + (k % 5) * 0.05, 2);
    const x = 2 + (k % 4);
    return `Let $X\\sim \\mathrm{Bin}(${nTrials},${p})$. Compute $P(X=${x})$ and $P(X\\le ${x})$ (you may leave factorials unsimplified if you prefer).`;
  });
})();

// STAT 2800U — Midterm 2: nine equal topic buckets for even-by-topic sampling.
(function buildStat2800Midterm2() {
  const course = COURSES.stat2800u;
  if (!course || !course.exams || !course.exams.midterm2) return;
  const qs = course.exams.midterm2.questions;
  if (qs.length > 0) return;

  const perTopic = 24;
  let n = 0;

  function push(topic, prompt) {
    n += 1;
    qs.push({
      id: `statm2-${String(n).padStart(3, "0")}`,
      topic,
      prompt
    });
  }

  function addBlock(topic, makePrompt) {
    for (let k = 0; k < perTopic; k++) {
      push(topic, makePrompt(k));
    }
  }

  addBlock("binomial distribution", (k) => {
    const nTrials = 12 + (k % 8);
    const p = formatDecimal(0.15 + (k % 6) * 0.05, 2);
    const r = 3 + (k % 5);
    return `Let $Y\\sim \\mathrm{Bin}(${nTrials},${p})$. Compute $E[Y]$, $\\mathrm{Var}(Y)$, and $P(Y=${r})$.`;
  });

  addBlock("poisson distribution", (k) => {
    const lam = 1.5 + (k % 10) * 0.5;
    const lambda = formatDecimal(lam, 2);
    const j = 2 + (k % 4);
    return `Counts of rare defects per hour follow $N\\sim \\mathrm{Pois}(${lambda})$. Find $P(N=${j})$ and $P(N\\ge 1)$.`;
  });

  addBlock("normal distribution", (k) => {
    const mu = 50 + (k % 9) * 3;
    const sigma = 4 + (k % 5);
    const a = mu - sigma;
    const b = mu + 2 * sigma;
    return `Let $X\\sim \\mathcal{N}(${mu},\\,${sigma}^{2})$. Express $P(${a}<X<${b})$ as a standard normal probability involving $Z$.`;
  });

  addBlock("lognormal distribution", (k) => {
    const muL = formatDecimal(1.2 + (k % 5) * 0.1, 2);
    const sigL = formatDecimal(0.25 + (k % 4) * 0.05, 2);
    return `If $\\ln T \\sim \\mathcal{N}(${muL},\\,${sigL}^{2})$, state the distribution name of $T$ and write $E[T]$ in terms of $\\mu$ and $\\sigma$ for the underlying normal.`;
  });

  addBlock("exponential distribution", (k) => {
    const beta = formatDecimal(0.4 + (k % 7) * 0.1, 2);
    const t = 1 + (k % 5);
    return `Let lifetime $T\\sim \\mathrm{Exp}(\\text{mean }\\beta=${beta})$ (hours). Find $P(T>${t})$ and state the <em>memoryless property</em> in one sentence.`;
  });

  addBlock("weibull distribution", (k) => {
    const eta = 100 + (k % 8) * 10;
    const mshape = 1.5 + (k % 5) * 0.5;
    const shape = formatDecimal(mshape, 2);
    return `In reliability engineering, a Weibull model uses scale $\\eta=${eta}$ and shape $\\beta=${shape}$. Explain how $\\beta<1$, $\\beta=1$, and $\\beta>1$ affect the hazard shape (increasing/decreasing/constant).`;
  });

  addBlock("central limit theorem and confidence intervals", (k) => {
    const n = 25 + (k % 15) * 5;
    return `Explain the <em>Central Limit Theorem</em> role in approximating the sampling distribution of $\\bar{X}$ when $n=${n}$ is large, even if individual measurements are not normal. Connect this idea to why a confidence interval for a mean has a normal or $t$ multiplier.`;
  });

  addBlock("confidence intervals — population mean, variance known", (k) => {
    const n = 16 + (k % 10) * 2;
    const xbar = formatDecimal(10.2 + (k % 7) * 0.3, 2);
    const sigma = formatDecimal(1.5 + (k % 5) * 0.2, 2);
    const confPct = [90, 95, 99][k % 3];
    return `A random sample of size $n=${n}$ yields $\\bar{x}=${xbar}$ from a population with known $\\sigma=${sigma}$. Construct a two-sided ${confPct}\\% confidence interval for $\\mu$ using the normal pivot (state the formula with $z_{\\alpha/2}$).`;
  });

  addBlock("confidence intervals — population mean, variance unknown", (k) => {
    const n = 12 + (k % 9) * 2;
    const xbar = formatDecimal(4.7 + (k % 6) * 0.15, 2);
    const s = formatDecimal(0.6 + (k % 5) * 0.08, 2);
    const confPct = [90, 95, 99][k % 3];
    return `For $n=${n}$, $\\bar{x}=${xbar}$, and sample standard deviation $s=${s}$, construct a two-sided ${confPct}\\% confidence interval for $\\mu$ when $\\sigma$ is <em>unknown</em> (use the appropriate $t$ critical value notation).`;
  });
})();

// STAT 2800U — Final Exam post-midterm bank (11 equal topic buckets). Final composite 25/25/50 is handled in exam.js.
(function buildStat2800Final() {
  const course = COURSES.stat2800u;
  if (!course || !course.exams || !course.exams.final) return;
  const qs = course.exams.final.questions;
  if (qs.length > 0) return;

  const perTopic = 20;
  let n = 0;

  function push(topic, prompt) {
    n += 1;
    qs.push({
      id: `statf-${String(n).padStart(3, "0")}`,
      topic,
      prompt
    });
  }

  function addBlock(topic, makePrompt) {
    for (let k = 0; k < perTopic; k++) {
      push(topic, makePrompt(k));
    }
  }

  addBlock("confidence intervals — difference between two means", (k) => {
    const n1 = 18 + (k % 6) * 2;
    const n2 = 20 + (k % 5) * 2;
    const dbar = formatDecimal(1.2 + (k % 8) * 0.15, 2);
    const se = formatDecimal(0.35 + (k % 5) * 0.05, 2);
    const confPct = [90, 95, 99][k % 3];
    return `Two independent samples have sizes $n_1=${n1}$ and $n_2=${n2}$ with difference in sample means $\\bar{x}_1-\\bar{x}_2=${dbar}$ and <em>estimated standard error</em> $\\mathrm{SE}=${se}$ (appropriate formula already applied). Construct an approximate ${confPct}\\% two-sided CI for $\\mu_1-\\mu_2$ using a normal critical value (state $z_{\\alpha/2}$ notation).`;
  });

  addBlock("confidence intervals — paired data", (k) => {
    const m = 12 + (k % 7) * 2;
    const db = formatDecimal(0.4 + (k % 6) * 0.08, 2);
    const sd = formatDecimal(0.55 + (k % 5) * 0.07, 2);
    const confPct = [90, 95, 99][k % 3];
    return `Paired differences $d_i$ for $m=${m}$ pairs have mean $\\bar{d}=${db}$ and sample standard deviation $s_d=${sd}$. Construct a ${confPct}\\% CI for the mean paired change $\\mu_d$ using the paired $t$ procedure (show degrees of freedom).`;
  });

  addBlock("hypothesis tests — population mean, variance known", (k) => {
    const n = 25 + (k % 10) * 3;
    const xbar = formatDecimal(102 + (k % 9) * 0.4, 2);
    const mu0 = 100;
    const sigma = formatDecimal(4.5 + (k % 4) * 0.3, 2);
    const alpha = [0.05, 0.01, 0.1][k % 3];
    const alphaStr = formatDecimal(alpha, 2);
    return `Assume $X_i$ are normal with known $\\sigma=${sigma}$. Test $H_0:\\mu=${mu0}$ versus $H_1:\\mu\\neq ${mu0}$ using $\\bar{x}=${xbar}$ from $n=${n}$. Write the $z$ test statistic and the rejection rule at significance level $\\alpha=${alphaStr}$.`;
  });

  addBlock("hypothesis tests — drawing conclusions", (k) => {
    const pval = formatDecimal(0.02 + (k % 8) * 0.01, 3);
    const alpha = 0.05;
    return `A hypothesis test reports $P\\text{-value}=${pval}$ for a two-sided test with $\\alpha=${alpha}$. State your conclusion about $H_0$ in plain engineering language and mention the risk of a Type I error at most $\\alpha$.`;
  });

  addBlock("hypothesis tests — population mean, variance unknown", (k) => {
    const n = 15 + (k % 8) * 2;
    const xbar = formatDecimal(7.1 + (k % 5) * 0.12, 2);
    const mu0 = 7;
    const s = formatDecimal(0.45 + (k % 6) * 0.06, 2);
    return `For $n=${n}$, $\\bar{x}=${xbar}$, $s=${s}$, test $H_0:\\mu=${mu0}$ vs $H_1:\\mu>${mu0}$. Write the one-sample $t$ statistic and give the degrees of freedom.`;
  });

  addBlock("hypothesis tests — difference between two means", (k) => {
    const n1 = 22 + (k % 5);
    const n2 = 24 + (k % 6);
    const diff = formatDecimal(0.6 + (k % 7) * 0.1, 2);
    const se = formatDecimal(0.22 + (k % 5) * 0.03, 2);
    return `Independent samples yield $\\bar{x}_1-\\bar{x}_2=${diff}$ with standard error $\\mathrm{SE}=${se}$ (from $n_1=${n1}$, $n_2=${n2}$). Test $H_0:\\mu_1-\\mu_2=0$ vs $H_1:\\mu_1-\\mu_2\\neq 0$ using a two-sided $z$ test (large-sample setting). Write the test statistic.`;
  });

  addBlock("hypothesis tests — paired data", (k) => {
    const m = 14 + (k % 6) * 2;
    const tstat = formatDecimal(2.1 + (k % 5) * 0.15, 2);
    return `For $m=${m}$ paired differences, a paired $t$ test yields $t=${tstat}$. State the degrees of freedom and the hypotheses being tested about $\\mu_d$.`;
  });

  addBlock("correlation", (k) => {
    const r = formatDecimal(-0.85 + (k % 12) * 0.05, 2);
    return `Sample correlation is $r=${r}$ between two process variables. Interpret the strength and direction, and explain why correlation alone does not imply causation in an industrial setting.`;
  });

  addBlock("least squares line", (k) => {
    const b1 = formatDecimal(1.4 + (k % 6) * 0.1, 2);
    const b0 = formatDecimal(3.2 + (k % 5) * 0.15, 2);
    return `A least-squares fit yields $\\hat{y}=${b0}+${b1}x$. Interpret $b_1$ as a <em>marginal change</em> in predicted response, and state the residual for an observation $(x,y)=(2,8)$.`;
  });

  addBlock("control charts — variables", (k) => {
    const nsub = 4 + (k % 4);
    return `Explain how an $\\bar{X}$ chart with subgroup size $n=${nsub}$ monitors a continuous quality characteristic. Include the roles of center line and control limits (use $3\\sigma_{\\bar{X}}$ language).`;
  });

  addBlock("control charts — attributes", (k) => {
    const n = 200 + (k % 5) * 50;
    return `Describe a $p$-chart for defect proportion when each inspection unit has sample size $n=${n}$ items. What is plotted on the vertical axis, and what distributional assumption supports the control limits?`;
  });
})();

// Add +100 more base-style questions to each STAT 2800U bank.
// These are not labeled as variants and keep the same topic distribution pattern.
(function expandStat2800Banks() {
  const course = COURSES.stat2800u;
  if (!course || !course.exams) return;

  function addMore(questions, addCount, prefix) {
    if (!Array.isArray(questions) || questions.length === 0 || addCount <= 0) return;
    const base = questions.slice();
    for (let i = 0; i < addCount; i++) {
      const src = base[i % base.length];
      const setNo = Math.floor(i / base.length) + 2;
      questions.push({
        id: `${prefix}-${String(i + 1).padStart(3, "0")}`,
        topic: src.topic,
        prompt: `${src.prompt} In addition, state one assumption that justifies your method (set ${setNo}).`
      });
    }
  }

  addMore(course.exams.midterm1 && course.exams.midterm1.questions, 100, "statm1extra");
  addMore(course.exams.midterm2 && course.exams.midterm2.questions, 100, "statm2extra");
  addMore(course.exams.final && course.exams.final.questions, 100, "statfextra");
})();

// MATH 1020U — Midterm 1 bank (~same scale as MATH 1010 Midterm 1). Topics use Ch2/Ch3 prefixes for weighted sampling.
(function buildMath1020Midterm1() {
  const course = COURSES.math1020u;
  if (!course || !course.exams || !course.exams.midterm1) return;
  const qs = course.exams.midterm1.questions;
  if (qs.length > 0) return;

  const Ch3 = "Ch3";
  const Ch2 = "Ch2";
  let n = 0;

  function add(topic, prompt) {
    n += 1;
    qs.push({
      id: `m1020m1-${String(n).padStart(3, "0")}`,
      topic,
      prompt
    });
  }

  function addMany(topic, count, makePrompt) {
    for (let k = 0; k < count; k++) {
      add(topic, makePrompt(k));
    }
  }

  // Chapter 3 — 150 questions (~70% of 214)
  addMany(`${Ch3} — integration by parts`, 22, (k) => {
    const a = (k % 4) + 2;
    const p = (k % 5) + 1;
    return `Evaluate $\\displaystyle \\int x^{${p}} e^{${a}x}\\,dx$ using integration by parts (choose $u$ and $dv$).`;
  });

  addMany(`${Ch3} — trig integration (powers of sin and cos)`, 22, (k) => {
    const m = (k % 4) + 2;
    const r = (k % 3) + 2;
    return `Evaluate $\\displaystyle \\int \\sin^{${m}} x \\cos^{${r}} x\\,dx$ using power-reduction or substitution appropriate to the parity of the powers.`;
  });

  addMany(`${Ch3} — trig substitution`, 22, (k) => {
    const a = (k % 5) + 2;
    const forms = [
      `Evaluate $\\displaystyle \\int \\dfrac{x^2}{\\sqrt{${a * a}-x^2}}\\,dx$ using an appropriate trigonometric substitution.`,
      `Evaluate $\\displaystyle \\int \\dfrac{1}{(x^2+${a * a})^{3/2}}\\,dx$ using a trigonometric substitution.`,
      `Evaluate $\\displaystyle \\int \\dfrac{\\sqrt{x^2-${a * a}}}{x}\\,dx$ for $x>${a}$ using a trigonometric substitution.`
    ];
    return forms[k % forms.length];
  });

  addMany(`${Ch3} — partial fractions`, 21, (k) => {
    const b = (k % 5) + 1;
    const c = (k % 4) + 2;
    return `Decompose $\\dfrac{2x+${b}}{(x-${c})(x+${b})}$ into partial fractions, then integrate.`;
  });

  addMany(`${Ch3} — integration strategy (multiple rules)`, 21, (k) => {
    const a = (k % 3) + 2;
    return `Outline a full strategy to evaluate $\\displaystyle \\int x\\sin(${a}x)e^{x}\\,dx$ (identify which rules apply and in what order).`;
  });

  addMany(`${Ch3} — numerical integration (midpoint, trapezoid, Simpson, error bounds)`, 21, (k) => {
    const nsub = 4 + (k % 6);
    const which = k % 3;
    if (which === 0) {
      return `For $\\displaystyle \\int_0^2 e^{-x^2}\\,dx$, write the midpoint rule with $n=${nsub}$ subintervals (give sample points and weights pattern).`;
    }
    if (which === 1) {
      return `For $\\displaystyle \\int_1^3 \\ln x\\,dx$, write the trapezoidal rule with $n=${nsub}$ subintervals.`;
    }
    return `For $\\displaystyle \\int_0^\\pi \\sin x\\,dx$, write Simpson's rule with $n=${nsub}$ (assume $n$ is even). State the standard error bound formula for Simpson's rule in terms of $\\max|f^{(4)}|$.`;
  });

  addMany(`${Ch3} — improper integrals`, 21, (k) => {
    const p = 2 + (k % 4);
    const forms = [
      `Determine whether $\\displaystyle \\int_1^\\infty \\dfrac{1}{x^{${p}}}\\,dx$ converges or diverges; evaluate if convergent.`,
      `Determine whether $\\displaystyle \\int_0^1 \\dfrac{1}{x^{${p - 1}}}\\,dx$ converges or diverges.`,
      `Evaluate $\\displaystyle \\int_{-\\infty}^\\infty \\dfrac{1}{1+x^{${p}}}\\,dx$ or show convergence/divergence using comparison.`
    ];
    return forms[k % forms.length];
  });

  // Chapter 2 — 64 questions (~30% of 214)
  addMany(`${Ch2} — arclength`, 13, (k) => {
    const c = (k % 4) + 1;
    return `Set up the integral for the arclength of $y=x^{${c + 1}}-${c}x$ from $x=0$ to $x=2$.`;
  });

  addMany(`${Ch2} — surface area of revolution`, 13, (k) => {
    const axis = k % 2 === 0 ? "$x$-axis" : "$y$-axis";
    return `Set up the integral for the surface area obtained by revolving $y=\\sqrt{x+${(k % 3) + 1}}$ about the ${axis} on a suitable interval (state the interval).`;
  });

  addMany(`${Ch2} — hydrostatic force`, 13, (k) => {
    const w = 3 + (k % 5);
    return `A vertical dam panel has width $w(x)=${w}+0.${(k % 9)}x$ m at depth $x$ m below the water surface. Set up $\\displaystyle F=\\rho g\\int_0^{${4 + (k % 3)}} (\\text{depth})(\\text{width})\\,dx$ for hydrostatic force (leave $\\rho,g$ symbolic).`;
  });

  addMany(`${Ch2} — cardiac output`, 13, (k) => {
    const T = 20 + (k % 8);
    return `In a dye-dilution model, concentration is $c(t)$ mg/L over $[0,${T}]$. Write cardiac output as $Q=\\dfrac{A}{\\int_0^{${T}} c(t)\\,dt}$ where $A$ is total dye (mg). What units does $Q$ carry?`;
  });

  addMany(`${Ch2} — probability density functions (PDF)`, 12, (k) => {
    const a = (k % 3) + 1;
    const b = (k % 4) + 2;
    const which = k % 2;
    if (which === 0) {
      return `For $f(x)=c x^{${a}}(1-x)^{${b}}$ on $[0,1]$, find $c$ so that $f$ is a valid PDF ($\\int_0^1 f=1$, $f\\ge 0$).`;
    }
    return `Verify whether $f(x)=\\dfrac{1}{${b}}(x-${a})$ on $[${a},${a + b}]$ can be a PDF (check non-negativity and integral).`;
  });
})();

// MATH 1020U — Midterm 2: evenly-sized topic buckets for even-by-topic sampling in exam.js.
(function buildMath1020Midterm2() {
  const course = COURSES.math1020u;
  if (!course || !course.exams || !course.exams.midterm2) return;
  const qs = course.exams.midterm2.questions;
  if (qs.length > 0) return;

  const perTopic = 15;
  let n = 0;

  function push(topic, prompt) {
    n += 1;
    qs.push({
      id: `m1020m2-${String(n).padStart(3, "0")}`,
      topic,
      prompt
    });
  }

  function addBlock(topic, makePrompt) {
    for (let k = 0; k < perTopic; k++) {
      push(topic, makePrompt(k));
    }
  }

  addBlock("differential equations — intro (order, linearity, IVP)", (k) => {
    const a = (k % 3) + 1;
    return `Classify the ODE $y''+${a}y'+${a + 1}y=x e^{x}$: state its <em>order</em>, whether it is <em>linear</em>, and identify the homogeneous part.`;
  });

  addBlock("direction fields", (k) => {
    const c = (k % 4) + 1;
    return `For $y'=${c}x-y$, sketch the direction field idea at the point $(1,2)$: what slope should a short tangent segment have there?`;
  });

  addBlock("euler's method", (k) => {
    const h = formatDecimal(0.1 + (k % 5) * 0.05, 2);
    const x0 = 0;
    const y0 = formatDecimal(1 + (k % 3) * 0.5, 2);
    return `Use Euler's method with step $h=${h}$ to approximate $y(${x0}+h)$ for $y'=x^{2}+y$, $y(${x0})=${y0}$.`;
  });

  addBlock("separable differential equations", (k) => {
    const a = (k % 4) + 1;
    return `Solve the separable equation $\\dfrac{dy}{dx}=${a} x y$ (include a constant of integration).`;
  });

  addBlock("applications — newton's law of cooling", (k) => {
    const k0 = formatDecimal(0.05 + (k % 5) * 0.01, 3);
    const Tm = 20 + (k % 6);
    return `A body obeys $\\dfrac{dT}{dt}=-${k0}(T-${Tm})$ with $T$ in $^{\\circ}$C. Interpret $${Tm}$ in the model and separate variables to express the general solution.`;
  });

  addBlock("applications — leaking tank", (k) => {
    const c = formatDecimal(0.2 + (k % 7) * 0.05, 2);
    return `A cylindrical tank leaks so $\\dfrac{dh}{dt}=-${c}\\sqrt{h}$ (m/h). Explain the physical meaning of the square-root dependence and separate variables.`;
  });

  addBlock("applications — smoke concentration in a room", (k) => {
    const r = formatDecimal(0.1 + (k % 6) * 0.02, 3);
    return `Room volume $V=${500 + k * 10}$ m$^3$. Smoke enters at rate proportional to outside concentration minus inside: model $\\dfrac{dC}{dt}=${r}(C_{\\text{out}}-C)$. Identify equilibrium concentration if $C_{\\text{out}}$ is constant.`;
  });

  addBlock("parametric curves — derivatives and tangent lines", (k) => {
    const a = (k % 3) + 1;
    return `For $x=t^{2}+${a}$, $y=t^{3}-t$, find $\\dfrac{dy}{dx}$ and the tangent line at $t=1$.`;
  });

  addBlock("polar coordinates — petals, derivatives, area", (k) => {
    const m = 2 + (k % 4);
    return `For $r=\\sin(${m}\\theta)$, find $\\dfrac{dr}{d\\theta}$, $\\dfrac{dy}{dx}$ in terms of $\\theta$, and set up the integral for the area of <em>one petal</em>.`;
  });

  addBlock("multivariate functions — partial derivatives", (k) => {
    const b = (k % 3) + 1;
    return `For $f(x,y,z)=x^{2}y+z^{3}-\\ln(${b}+y)$, compute $f_x$, $f_y$, and $f_z$ where defined.`;
  });

  addBlock("multivariate functions — chain rule", (k) => {
    const a = (k % 4) + 2;
    return `Let $z=x^{2}+y^{2}$, $x=t^{${a}}$, $y=\\sin t$. Find $\\dfrac{dz}{dt}$ using the multivariate chain rule.`;
  });

  addBlock("vectors — dot product and length", (k) => {
    const p = (k % 5) + 1;
    return `Let $\\mathbf{u}=\\langle ${p},-${p + 1},2\\rangle$ and $\\mathbf{v}=\\langle 1,${p},-${p}\\rangle$. Find $\\mathbf{u}\\cdot\\mathbf{v}$ and $\\|\\mathbf{u}\\|$.`;
  });

  addBlock("gradient vector", (k) => {
    const c = (k % 4) + 1;
    return `Find $\\nabla f$ at $(1,2)$ for $f(x,y)=x^{3}-c x y+y^{2}$.`;
  });

  addBlock("multivariate optimization — critical points (3 variables)", (k) => {
    const d = (k % 3) + 1;
    return `Find all critical points of $g(x,y,z)=x^{2}+y^{2}+z^{2}-2x-${d}y+4z$ by solving $\\nabla g=\\mathbf{0}$.`;
  });

  addBlock("directional derivatives", (k) => {
    const ang = (k * 15) % 360;
    return `For $f(x,y)=x^{2}y-y^{2}$ at $(2,1)$, find the directional derivative in the direction of angle $\\theta=${ang}^{\\circ}$ (use a <em>unit</em> direction vector).`;
  });
})();

// MATH 1020U — Final bank (post-midterm content only).
(function buildMath1020Final() {
  const course = COURSES.math1020u;
  if (!course || !course.exams || !course.exams.final) return;
  const qs = course.exams.final.questions;
  if (qs.length > 0) return;

  const perTopic = 20; // 10 topics x 20 = 200 questions
  let n = 0;

  function push(topic, prompt) {
    n += 1;
    qs.push({
      id: `m1020f-${String(n).padStart(3, "0")}`,
      topic,
      prompt
    });
  }

  function addBlock(topic, makePrompt) {
    for (let k = 0; k < perTopic; k++) {
      push(topic, makePrompt(k));
    }
  }

  addBlock("double integrals over rectangles", (k) => {
    const a = (k % 4) + 1;
    const b = (k % 5) + 2;
    return `Evaluate $\\displaystyle \\int_{0}^{${a}}\\int_{0}^{${b}} (x+2y)\\,dy\\,dx$.`;
  });

  addBlock("iterated integrals", (k) => {
    const a = (k % 3) + 2;
    const b = (k % 4) + 1;
    return `Evaluate the iterated integral $\\displaystyle \\int_{0}^{${a}}\\int_{x}^{x+${b}} (x-y)\\,dy\\,dx$.`;
  });

  addBlock("double integrals over general regions", (k) => {
    const a = (k % 4) + 1;
    return `Set up $\\iint_R (x+y)\\,dA$ over region $R$ bounded by $y=x^2$ and $y=x+${a}$ (do not necessarily evaluate).`;
  });

  addBlock("taylor and maclaurin series", (k) => {
    const p = (k % 5) + 2;
    return `Find the Maclaurin series up to and including the $x^${p}$ term for $f(x)=\\ln(1+x)$.`;
  });

  addBlock("taylor series applications and error formulas", (k) => {
    const a = (k % 3) + 1;
    return `Use a Taylor polynomial centered at $0$ to approximate $e^{${a / 10}}$ and state the Lagrange remainder term for degree 3.`;
  });

  addBlock("sequences", (k) => {
    const a = (k % 5) + 1;
    return `Determine whether the sequence $a_n=\\dfrac{${a}n+1}{n+${a}}$ converges, and find its limit if it exists.`;
  });

  addBlock("series", (k) => {
    const p = (k % 4) + 1;
    return `Determine convergence or divergence of $\\displaystyle \\sum_{n=1}^{\\infty} \\dfrac{1}{n^{${p + 1}}}$.`;
  });

  addBlock("ratio and root test", (k) => {
    const a = (k % 4) + 2;
    const b = (k % 3) + 1;
    return `Use the ratio or root test to analyze $\\displaystyle \\sum_{n=1}^{\\infty} \\dfrac{(${a}n)!}{(${b}n)^n}\\,x^n$ for convergence behavior.`;
  });

  addBlock("power series", (k) => {
    const a = (k % 3) + 1;
    return `Find the radius and interval of convergence of $\\displaystyle \\sum_{n=0}^{\\infty} \\dfrac{(x-${a})^n}{n+1}$.`;
  });

  addBlock("geometric series", (k) => {
    const a = (k % 4) + 2;
    return `Determine whether $\\displaystyle \\sum_{n=0}^{\\infty} \\left(\\dfrac{x-${a}}{3}\\right)^n$ converges, and find its sum when it does.`;
  });
})();

// Expand MATH 1010U banks with generated base questions.
// This keeps the question file maintainable while significantly increasing pool size.
(function expandMathBanks() {
  const math = COURSES.math1010u;
  if (!math || !math.exams) return;

  function addGeneratedBase(questions, addCount, makeQuestion) {
    if (!Array.isArray(questions) || addCount <= 0) return;
    for (let i = 0; i < addCount; i++) {
      questions.push(makeQuestion(i));
    }
  }

  const m1 = math.exams.midterm1 && math.exams.midterm1.questions;
  const m2 = math.exams.midterm2 && math.exams.midterm2.questions;
  const fe = math.exams.final && math.exams.final.questions;

  const m1Topics = [
    "limits",
    "limits - factoring",
    "limits - rationalization",
    "trig limits",
    "one-sided limits",
    "continuity",
    "IVT",
    "limit definition",
    "product rule",
    "asymptotes"
  ];
  addGeneratedBase(m1, 50, (i) => {
    const a = (i % 7) + 2;
    const b = (i % 5) + 1;
    const topic = m1Topics[i % m1Topics.length];
    const promptByTopic = {
      "limits": `Evaluate $\\displaystyle \\lim_{x \\to ${a}} (${b}x^2 - ${a}x + ${b})$.`,
      "limits - factoring": `Evaluate $\\displaystyle \\lim_{x \\to ${a}} \\dfrac{x^2 - ${a * a}}{x - ${a}}$.`,
      "limits - rationalization": `Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sqrt{${a * a} + ${b}x} - ${a}}{x}$.`,
      "trig limits": `Evaluate $\\displaystyle \\lim_{x \\to 0} \\dfrac{\\sin(${a}x)}{${b}x}$.`,
      "one-sided limits": `Evaluate $\\displaystyle \\lim_{x \\to ${a}^-} \\dfrac{1}{x-${a}}$ and $\\displaystyle \\lim_{x \\to ${a}^+} \\dfrac{1}{x-${a}}$.`,
      "continuity": `Find $c$ so $f(x)=\\begin{cases} cx+${a} & x\\le ${b} \\\\ x^2-${a} & x>${b} \\end{cases}$ is continuous at $x=${b}$.`,
      "IVT": `Use IVT to show $x^3-${a}x+${b}=0$ has a root on $(0,1)$ or $(1,2)$ as appropriate.`,
      "limit definition": `Use the definition of derivative to find $f'(x)$ for $f(x)=x^2+${a}x-${b}$.`,
      "product rule": `Differentiate $y=(x^2+${a})(${b}x-1)$ using the product rule.`,
      "asymptotes": `Find vertical/horizontal asymptotes of $f(x)=\\dfrac{x^2+${a}x+${b}}{x^2-${b * 2}}$.`
    };
    return {
      id: `m1-base-${String(i + 1).padStart(3, "0")}`,
      topic,
      prompt: promptByTopic[topic]
    };
  });

  const m2Topics = [
    "3.5 trig derivatives",
    "3.6 chain rule",
    "3.7 inverse trig derivatives",
    "3.8 implicit differentiation",
    "3.9 logarithmic differentiation",
    "6.9 hyperbolic derivatives",
    "4.1 related rates",
    "4.2 linear approximation and differentials",
    "4.3 min/max",
    "4.4 MVT"
  ];
  addGeneratedBase(m2, 50, (i) => {
    const a = (i % 6) + 2;
    const b = (i % 8) + 1;
    const topic = m2Topics[i % m2Topics.length];
    const promptByTopic = {
      "3.5 trig derivatives": `Differentiate $y=${a}\\sin x-${b}\\cos x+\\tan x$.`,
      "3.6 chain rule": `Differentiate $y=\\left(${a}x^2+${b}\\right)^${(i % 4) + 2}$.`,
      "3.7 inverse trig derivatives": `Differentiate $y=\\arctan(${a}x)$.`,
      "3.8 implicit differentiation": `For $x^2+xy+y^2=${a * b + 5}$, find $\\dfrac{dy}{dx}$.`,
      "3.9 logarithmic differentiation": `Use logarithmic differentiation for $y=\\left(\\dfrac{x+${a}}{x}\\right)^x$.`,
      "6.9 hyperbolic derivatives": `Differentiate $y=\\sinh(${a}x)-${b}\\cosh x$.`,
      "4.1 related rates": `A sphere's radius grows at ${formatDecimal(b / 10, 2)} cm/s. Find $\\dfrac{dV}{dt}$ when $r=${a}$.`,
      "4.2 linear approximation and differentials": `Use linearization at $a=${a * a}$ to approximate $\\sqrt{${a * a}+0.${b}}$.`,
      "4.3 min/max": `Find local extrema of $f(x)=x^3-${a}x^2+${b}$.`,
      "4.4 MVT": `Find all $c$ satisfying MVT for $f(x)=x^2-${a}x$ on $[0,${a + b}]$.`
    };
    return {
      id: `m2-base-${String(i + 1).padStart(3, "0")}`,
      topic,
      prompt: promptByTopic[topic]
    };
  });

  const feStartBase = Array.isArray(fe)
    ? fe.reduce((max, q) => {
      const match = String(q.id || "").match(/^FE-(\d+)$/);
      if (!match) return max;
      const n = parseInt(match[1], 10);
      return Number.isFinite(n) ? Math.max(max, n) : max;
    }, 0)
    : 0;
  const feTopics = [
    "optimization",
    "antiderivatives",
    "approximating areas (left, right, midpoint)",
    "definite integrals",
    "riemann sums",
    "FTC",
    "basic integrals",
    "net change theorem",
    "u-sub",
    "definite integrals"
  ];
  addGeneratedBase(fe, 50, (i) => {
    const a = (i % 7) + 2;
    const b = (i % 5) + 1;
    const topic = feTopics[i % feTopics.length];
    const promptByTopic = {
      "optimization": `Find dimensions of a rectangle with perimeter ${20 * a} that maximize area.`,
      "antiderivatives": `Find $\\displaystyle \\int (${a}x^2-${b}x+1)\\,dx$.`,
      "approximating areas (left, right, midpoint)": `Approximate $\\int_0^${a} (x+${b})\\,dx$ using midpoint rule with $n=${a}$.`,
      "definite integrals": `Evaluate $\\displaystyle \\int_0^${a} (${b}x^2-1)\\,dx$.`,
      "riemann sums": `Write a Riemann sum limit for $\\int_0^${a} (x^2+${b})\\,dx$ using right endpoints.`,
      "FTC": `If $F(x)=\\int_1^{x^2}(t+${b})\\,dt$, find $F'(x)$.`,
      "basic integrals": `Evaluate $\\displaystyle \\int \\left(${a}x+\\dfrac{${b}}{x}\\right)dx$.`,
      "net change theorem": `Given $v(t)=${a}t-${b}$ on $[0,${a}]$, find net displacement.`,
      "u-sub": `Evaluate $\\displaystyle \\int ${a}x\\cos(${a}x^2+${b})\\,dx$ using substitution.`
    };
    return {
      id: `FE-${String(feStartBase + i + 1).padStart(3, "0")}`,
      topic,
      prompt: promptByTopic[topic]
    };
  });

})();

// Normalize IDs to numeric-only scheme in one continuous sequence.
Object.values(COURSES).forEach((course) => {
  const exams = (course && course.exams) || {};
  const m1 = exams.midterm1 && Array.isArray(exams.midterm1.questions) ? exams.midterm1.questions : null;
  const m2 = exams.midterm2 && Array.isArray(exams.midterm2.questions) ? exams.midterm2.questions : null;
  const fe = exams.final && Array.isArray(exams.final.questions) ? exams.final.questions : null;

  function renumber(questions, prefix) {
    if (!questions) return;
    questions.forEach((q, i) => {
      q.id = `${prefix}-${String(i + 1).padStart(3, "0")}`;
    });
  }

  renumber(m1, "M1");
  renumber(m2, "M2");
  renumber(fe, "FE");
});

/* =========================================================
   Expose to other scripts. Do not rename.
   ========================================================= */
if (typeof window !== "undefined") {
  window.COURSES = COURSES;
}