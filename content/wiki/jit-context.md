# Just-In-Time (JIT) Context

**Summary**: A communication strategy of providing only the information a listener needs to take their next step — no more, no less.

**Sources**: [Why Most Tech Professionals Are Terrible Communicators](https://www.youtube.com/watch?v=kdy-C61fb5g&t=1s)

**Last updated**: 2026-04-23

---

JIT Context is one of three techniques covered in the [[bluf-method]] source. The name is borrowed from manufacturing: just-in-time delivery means materials arrive exactly when needed, not in bulk ahead of time.

## The Problem It Solves

Experts tend to over-explain. Leaving out details feels sloppy or incomplete. But a *complete* explanation and a *useful* explanation are rarely the same thing (see [[useful-vs-complete]]).

When you front-load context, you force the listener to hold many pieces of information before they understand why any of it matters. Much of it gets lost before you reach the point.

## The Core Question

Before explaining anything, pause and ask:

> **"What does this person need to *do* with this information?"**

If a piece of context doesn't serve that specific need, leave it out. If they need more, they will ask.

## Example: Explaining Technical Debt to a PM

**Ineffective:** Walking through a full taxonomy of debt types (Deliberate, Accidental, Bit rot). The PM doesn't need a theory lecture.

**Effective JIT:**
- Impact: "Technical debt basically means we took shortcuts, and now those shortcuts are slowing us down."
- Specific blocker: "The authentication module was a prototype. Six services depend on it now. Simple features like SSO/MFA are becoming multi-month projects."

The PM now has exactly what they need to have a conversation with stakeholders.

## Relationship to Other Techniques

JIT Context pairs naturally with [[bluf-method#BLUF: Bottom Line Upfront|BLUF]] — lead with the conclusion, then use JIT to decide how much of the journey to share. The [[zoom-in-method]] is a structured way to deliver JIT context layer by layer.

## Related pages

- [[bluf-method]]
- [[zoom-in-method]]
- [[useful-vs-complete]]
