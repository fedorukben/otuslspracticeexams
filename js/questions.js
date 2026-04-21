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
          }
        ]
      },

      "final": {
        name: "Final Exam",
        topics: ["all topics"],
        questions: [
          {
            id: "fin-01",
            topic: "optimization",
            prompt: "A rectangular field is to be enclosed using 200 m of fencing, with one side along a river requiring no fence. Find the dimensions that maximize the area."
          },
          {
            id: "fin-02",
            topic: "integration",
            prompt: "Evaluate $\\displaystyle \\int_0^1 (3x^2 + 2x)\\, dx$."
          },
          {
            id: "fin-03",
            topic: "FTC",
            prompt: "Use the Fundamental Theorem of Calculus to find $F'(x)$ where $F(x) = \\int_1^{x^2} \\sqrt{1 + t^3}\\, dt$."
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

/* =========================================================
   Expose to other scripts. Do not rename.
   ========================================================= */
if (typeof window !== "undefined") {
  window.COURSES = COURSES;
}