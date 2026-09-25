# Zoom-In Method

**Summary**: A technique for explaining complex topics by starting from shared understanding and layering in depth only as far as needed.

**Lenses**: [[technical]]

**Sources**: [Why Most Tech Professionals Are Terrible Communicators](https://www.youtube.com/watch?v=kdy-C61fb5g&t=1s), [How to Tell Stories Better Than 99% of People](https://www.youtube.com/watch?v=lghSjBl9yGM)

**Last updated**: 2026-09-25

---

The Zoom-In Method is one of three techniques in the [[bluf-method]] source. It allows deep explanation without "dumbing down" — and without overwhelming the listener with unnecessary detail.

## How It Works

1. **Shared Foundation:** Start with a concept the listener already understands
2. **Go one layer deeper:** Break the subject into a small number of categories
3. **Select the path:** Choose the specific category that matters most to the conversation
4. **Repeat:** Continue until the listener has a functional mental model
5. **Stop:** The moment they have enough to make the next decision

## Example: Explaining "Tensor" to a Non-ML Engineer

| Step | What you say |
|---|---|
| Foundation | "You know what a vector is — it's just a list of numbers. A matrix is a spreadsheet." |
| Zoom 1 | "A tensor is what happens when you keep adding dimensions — like a cube of numbers." |
| Zoom 2 | "It's a container for numbers with any number of dimensions." |
| Zoom 3 | "In PyTorch, it's just a multi-dimensional array." |

Result: The listener has a working mental model for reading code and documentation.

## Example: Explaining Decreased Velocity

| Step | What you say |
|---|---|
| Start | "Velocity is trending down." |
| Zoom 1 | "It's due to accumulated tech debt." |
| Zoom 2 | "The debt is in the authentication system." |
| Zoom 3 | "It was a prototype. Six services depend on it. Simple features now take three times longer." |

## Key Constraint

Stop zooming the moment the listener has enough information to make the next decision. Going further is where over-explanation creeps back in. See [[jit-context]] for the underlying principle.

## Not the Same as "Zooming In" on a Story Moment

Shannon Jenkins also says to "zoom in" (see [[how-to-tell-stories-better]]), and the PAST framework is built on zooming into the [[five-second-moment]]. Same phrase, different meaning:

| | Zoom-In Method (this page) | Zooming into a moment (Jenkins, PAST) |
|---|---|---|
| **Goal** | Understanding: a working mental model | Experience: the listener feels they're in the room |
| **What you add** | Layers of explanation | Concrete scene detail: place, action, dialogue |
| **Starting point** | Something the listener already knows | The moment where something changed |
| **When to stop** | When they can make the next decision | When they can see and feel it (see [[right-amount-of-specificity]]) |

What they share: both reject the high-level summary, and both stop before overload. The zoom-in method is for explaining; zooming into a moment is for storytelling.

## Related pages

- [[bluf-method]]
- [[jit-context]]
- [[useful-vs-complete]]
- [[five-second-moment]]
- [[right-amount-of-specificity]]
- [[how-to-tell-stories-better]]
