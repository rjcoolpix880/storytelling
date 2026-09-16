# Zoom-In Method

**Summary**: A technique for explaining complex topics by starting from shared understanding and layering in depth only as far as needed.

**Sources**: [Why Most Tech Professionals Are Terrible Communicators](https://www.youtube.com/watch?v=kdy-C61fb5g&t=1s)

**Last updated**: 2026-04-23

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

## Related pages

- [[bluf-method]]
- [[jit-context]]
- [[useful-vs-complete]]
