# Wiki Log

Append-only record of all operations.

---

## 2026-04-23 — Initial build

**Sources ingested:**
- `PAST storytelling technique.md`
- `BLUF method.md`

**Pages created:**
- `past-storytelling-technique.md` — source summary
- `bluf-method.md` — source summary
- `five-second-moment.md` — concept page
- `story-killers.md` — concept page
- `homework-for-life.md` — concept page
- `jit-context.md` — concept page
- `zoom-in-method.md` — concept page
- `useful-vs-complete.md` — cross-cutting concept page (draws from both sources)
- `index.md` — table of contents
- `log.md` — this file

---

## 2026-04-24 — Ingest: Van Neistat's Guide to Master Storytelling

**Source ingested:**
- `Van Neistat's Guide to Master Storytelling.md`

**Pages created:**
- `van-neistat-storytelling.md` — source summary
- `surprise.md` — new concept: the defining element of a story; quality ∝ surprise impact
- `truth-vs-facts.md` — new concept: emotional truth > factual accuracy; distinct from useful-vs-complete

**Pages updated:**
- `five-second-moment.md` — connected five-second moment to Van Neistat's "surprise" framing
- `useful-vs-complete.md` — added Van Neistat as a source; added master/amateur row to table; noted distinction from truth-vs-facts
- `story-killers.md` — added Van Neistat's amateur example as a concrete illustration
- `past-storytelling-technique.md` — linked to surprise, truth-vs-facts, van-neistat-storytelling
- `index.md` — added three new pages

---

## 2026-04-24 — Ingest: The ONLY 5 Lines You Need To Tell Any Story

**Source ingested:**
- `The ONLY 5 Lines You Need To Tell Any Story.md`

**Pages created:**
- `five-line-story.md` — source summary; Situation, Desire, Conflict, Change, Result scaffold with cross-wiki mapping
- `desire.md` — new concept: character's stated goal as the mechanism that creates audience curiosity

**Pages updated:**
- `five-second-moment.md` — noted "Change" as a third name for the same beat; added source
- `surprise.md` — connected Conflict as the mechanism that builds stakes; added source and links
- `past-storytelling-technique.md` — noted parallel structure and desire as PAST's implicit gap
- `index.md` — added two new pages

---

## 2026-05-28 — Ingest: Monroe, Minto Pyramid, Duarte's Resonate

**Sources ingested:**
- `Monroe's Motivated Sequence  Public Speaking.md`
- `The Minto Pyramid Principle Explained (With Example Frameworks).md`
- `The Three Frameworks You Need to Create Powerful Presentations and Tell Compelling Stories.md`

**Pages created:**
- `monroes-motivated-sequence.md` — source summary; 5-step persuasive structure
- `minto-pyramid-principle.md` — source summary; bottom line → key points → data, with SCQA and MECE inside
- `duarte-resonate.md` — source summary; Audience's Journey, SCQA story template, sparkline
- `scqa-framework.md` — concept: Situation–Complication–Question–Answer; appears in both Minto and Duarte (independent convergence)
- `mece-framework.md` — concept: mutually exclusive, collectively exhaustive categorization for the base of the pyramid
- `what-is-vs-what-could-be.md` — cross-cutting concept: the gap between present and future as the underlying engine of every persuasive framework in the wiki
- `audience-journey.md` — concept: Duarte's audience-as-hero / presenter-as-mentor framing

**Pages updated:**
- `bluf-method.md` — added pointer to Minto as same idea with more scaffolding underneath
- `five-line-story.md` — added explicit SCQA mapping table; clarified when to use each (narrative vs argument)
- `surprise.md` — connected to `what-is-vs-what-could-be` via the shared gap mechanism (expectation vs reality / present vs future)
- `index.md` — added three source summaries and four concept pages; cleaned up minor wording

**Cross-cutting insight surfaced:** Every persuasive framework in the wiki is built on the same engine — a gap between two states (problem/solution, what is/what could be, expectation/reality, desire/obstacle). The frameworks differ in how often they cycle through the gap and what they call the two sides.

---

## 2026-09-10 — Ingest: Why Trying to Sound Smart is Losing You the Room

**Source ingested:**
- `Why Trying to Sound Smart is Losing You the Room Strategic Story Producer Rob Willis.md`

**Pages created:**
- `sounding-smart.md` — source summary; Rob Willis on persuasion as belief and connection over data
- `cold-open.md` — new concept: drop into the hook instead of small talk; live-delivery counterpart to BLUF and PAST
- `captive-audience.md` — new concept: treat every audience as one that could walk away; attention is earned, not assumed
- `18-minute-rule.md` — new concept: cognitive fatigue sets in ~18 minutes into a talk
- `belief-vs-confidence.md` — new concept: charisma is conviction, not polish (Hans Rosling case study); distinguished from truth-vs-facts
- `three-to-one-ratio.md` — new concept: budget ~3 parts discussion to 1 part presentation
- `what-so-what-now-what.md` — new concept: What/So What/Now What as a sibling structure to SCQA

**Pages updated:**
- `bluf-method.md` — added Willis's "cut the small talk" as a live-delivery reinforcement of BLUF; added source and link to cold-open
- `useful-vs-complete.md` — added the Knowledge Deficit Trap as a new row/source for the same failure mode; added source and link
- `truth-vs-facts.md` — added cross-link distinguishing it from belief-vs-confidence (story content vs. speaker conviction)
- `scqa-framework.md` — added "Situation, Complication, Resolution" as a third independent convergence on the same shape; linked to what-so-what-now-what
- `five-line-story.md` — added Willis's "speak without a plan" (beats, not script) as the live-delivery version of the scaffold
- `index.md` — added one source summary and six concept pages

**Categorization notes:** Hans Rosling was kept as a worked example inside `belief-vs-confidence.md` rather than given his own page, since he's an illustration within Willis's talk, not the subject of a dedicated source (parallel to how the wiki treats named authors like Van Neistat, who gets a page because the whole source is theirs). "Situation, Complication, Resolution" was folded into `scqa-framework.md` as a variant rather than a new page, since it adds no structure not already covered there.

---

## 2026-09-16 — Clarification: PAST order is not literal

**Pages updated:**
- `past-storytelling-technique.md` — added a "How literal is the order?" section clarifying that Place/Action merge into one opening line in the source's own examples, and Speech/Thoughts interleave chronologically rather than firing as separate sequential blocks. Prompted by a user question about whether the P-A-S-T letters must be applied in strict order.

---

## 2026-09-16 — Convention change: source citations as wikilinks

**Context:** `index.md` moved from `wiki/index.md` to the project root.

**Pages updated (all wiki pages):**
- Every `**Sources**:` line and every `(source: filename.md)` inline citation across all 27 wiki pages converted from plain-text filenames to `[[wikilinks]]` pointing at the corresponding raw file, e.g. `(source: BLUF method.md)` → `(source: [[BLUF method]])`. Matches the convention already applied to `past-storytelling-technique.md`.
- `index.md` — added a "Raw Source" column to the Source Summaries table, linking each source-summary page directly to its underlying raw file.

**Note:** This supersedes the plain-text `(source: filename.md)` citation format described in `CLAUDE.md` — the project instructions should be updated to match, or this should be treated as a deliberate deviation.

---

## 2026-09-16 — Convention change: cite the real external source, not the raw/ file

**Pages updated (all wiki pages, index.md, CLAUDE.md):**
- Removed every per-claim inline `(source: [[filename]])` citation from wiki page bodies. Citation is now page-level only.
- Replaced every `**Sources**:` line (top of each wiki page) with the real external link (YouTube video, article, or website) found near the top of the corresponding raw file, instead of a wikilink to the raw file itself.
- `index.md` — replaced the Raw Source column's wikilinks to raw files with the same external links.
- `CLAUDE.md` — Citation rules, Page format, and Ingest workflow updated: never link to a file in `raw/`; the real external source is referenced in exactly two places (page-top `**Sources**:` line and the index's Raw Source column); no more per-claim inline citations.

**Reasoning:** The raw/ file itself is never useful to reference — it's an internal artifact. What matters is the original external source (video/article) it was captured from, and that only needs to be discoverable in two places, not scattered through every claim in the body.
