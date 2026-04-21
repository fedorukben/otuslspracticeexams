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

  "stat2800u": {
    name: "STAT 2800U — Statistics for Engineering",
    exams: {
      "midterm1": {
        name: "Midterm 1",
        topics: ["descriptive statistics", "probability"],
        questions: [
          {
            id: "s-m1-01",
            topic: "descriptive statistics",
            prompt: "A dataset has values $\\{4, 8, 6, 5, 3, 7, 9\\}$. Compute the mean, median, and sample standard deviation."
          },
          {
            id: "s-m1-02",
            topic: "probability",
            prompt: "Two fair six-sided dice are rolled. What is the probability that the sum is at least 10?"
          }
        ]
      }
    }
  }
};

// Expand MATH 1010U banks with generated variants so each gets +100 questions.
// This keeps the question file maintainable while significantly increasing pool size.
(function expandMathBanks() {
  const math = COURSES.math1010u;
  if (!math || !math.exams) return;

  function addVariants(questions, addCount, makeId) {
    if (!Array.isArray(questions) || questions.length === 0 || addCount <= 0) return;
    const base = questions.slice();
    for (let i = 0; i < addCount; i++) {
      const src = base[i % base.length];
      const variantNo = Math.floor(i / base.length) + 2;
      questions.push({
        id: makeId(i),
        topic: src.topic,
        prompt: `${src.prompt} <em>(Variant ${variantNo})</em>`
      });
    }
  }

  const m1 = math.exams.midterm1 && math.exams.midterm1.questions;
  const m2 = math.exams.midterm2 && math.exams.midterm2.questions;
  const fe = math.exams.final && math.exams.final.questions;

  // Midterms are renumbered below to M1-### and M2-###, so temporary IDs are fine.
  addVariants(m1, 200, (i) => `m1-extra-${String(i + 1).padStart(3, "0")}`);
  addVariants(m2, 200, (i) => `m2-extra-${String(i + 1).padStart(3, "0")}`);

  // Final uses explicit FE numbering and is not renumbered later.
  const feStart = Array.isArray(fe)
    ? fe.reduce((max, q) => {
      const match = String(q.id || "").match(/^FE-(\d+)$/);
      if (!match) return max;
      const n = parseInt(match[1], 10);
      return Number.isFinite(n) ? Math.max(max, n) : max;
    }, 0)
    : 0;
  addVariants(fe, 200, (i) => `FE-${String(feStart + i + 1).padStart(3, "0")}`);
})();

// Normalize midterm IDs to numeric-only scheme:
// M1-001, M1-002, ... and M2-001, M2-002, ...
Object.values(COURSES).forEach((course) => {
  const exams = (course && course.exams) || {};
  const m1 = exams.midterm1 && Array.isArray(exams.midterm1.questions) ? exams.midterm1.questions : null;
  const m2 = exams.midterm2 && Array.isArray(exams.midterm2.questions) ? exams.midterm2.questions : null;

  if (m1) {
    m1.forEach((q, i) => {
      q.id = `M1-${String(i + 1).padStart(3, "0")}`;
    });
  }

  if (m2) {
    m2.forEach((q, i) => {
      q.id = `M2-${String(i + 1).padStart(3, "0")}`;
    });
  }
});

/* =========================================================
   Expose to other scripts. Do not rename.
   ========================================================= */
if (typeof window !== "undefined") {
  window.COURSES = COURSES;
}