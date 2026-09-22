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

---

## 2026-09-22 — Ingest: How to Tell Stories Better Than 99% of People

**Source ingested:**
- `How to Tell Stories Better Than 99% of People.md`, Shannon Jenkins (YouTube, 17 min). Seven storytelling lessons and the CART framework, illustrated with two *Ted Lasso* scenes (the darts game and the press conference about Earl).

**Pages created (8):**
- `how-to-tell-stories-better.md`: source summary with all seven lessons, the three examples, and all seven do/don't contrasts in full
- `curiosity.md`: new concept. Withhold the payoff; a four-way comparison of curiosity, tension, desire, and surprise; how it squares with BLUF
- `tension.md`: new concept. Uncertainty plus stakes, no drama required; where tension comes from; holding and releasing it
- `pacing.md`: new concept. Slow for experience, fast for information; compress vs. cut; pacing at different scales
- `right-amount-of-specificity.md`: new concept. Neither vague nor overloaded; the "Sunday afternoon" contrast with PAST
- `what-happened-vs-what-it-meant.md`: new concept. Meaning as the mark of a story; three definitions of "report"; reconciles "the moral of the story" with Jenkins's takeaway
- `competence-and-warmth.md`: new concept. Personal vs. private; comparison with belief-vs-confidence
- `cart-framework.md`: new concept. Context, Action, Result, Takeaway; treat as ingredients, not a fixed order; comparison with other structures

**Pages updated (all 27 existing pages):** each got the new source in its `**Sources**:` line, a section or paragraph explaining how Jenkins's ideas relate to it, and new related-page links.
- `surprise.md`: forced reinterpretation as a mid-story surprise; how surprise differs from curiosity and tension
- `desire.md`: desire feeds curiosity and tension but isn't required for either
- `five-second-moment.md`: "helicopter view" as a fourth name for the report failure; what to do with the rest of the story; what it meant
- `zoom-in-method.md`: distinguished from "zooming in" on a story moment
- `belief-vs-confidence.md`: comparison with competence-and-warmth
- `what-so-what-now-what.md`: mapped to CART; So What = what it meant
- `cold-open.md`: cold open vs. scene opening vs. unexpected opening; a cold open doesn't have to give away the answer
- `18-minute-rule.md`: total length vs. variation within
- `audience-journey.md`: the mentor needs warmth; keeping personal stories from making the presenter the hero
- `bluf-method.md`: BLUF vs. withholding the payoff
- `captive-audience.md`: pacing, curiosity, and tension as story-level attention fixes
- `duarte-resonate.md`: the sparkline as tension and pacing at the scale of a talk
- `five-line-story.md`: desire/conflict tied to curiosity/tension; disagreement over explaining the result; mapped to CART
- `homework-for-life.md`: optional "what it meant" line (marked as a wiki suggestion)
- `jit-context.md`: JIT inside a story (compress vs. cut; see-and-feel vs. do)
- `mece-framework.md`: exhaustive vs. selective detail
- `minto-pyramid-principle.md`: answer-first vs. withholding
- `monroes-motivated-sequence.md`: Need = tension; statistic vs. scene openings
- `past-storytelling-technique.md`: what Jenkins adds (pacing, takeaway, warmth); the "Sunday afternoon" nuance
- `scqa-framework.md`: Complication = tension, Question = curiosity; mapped to CART
- `sounding-smart.md`: Knowledge Deficit Trap vs. the competence–warmth gap
- `story-killers.md`: the moral vs. the takeaway; "I'll be brief" and pacing
- `three-to-one-ratio.md`: using CART for the ~5-minute story segment
- `truth-vs-facts.md`: the Whitman misattribution as an example; specificity without precision
- `useful-vs-complete.md`: three Jenkins rows in the table; useful isn't the same as minimal
- `van-neistat-storytelling.md`: the Jenkins refinement on surprise placement; meaning as a third definition of story vs. report
- `what-is-vs-what-could-be.md`: knowledge gaps (curiosity) vs. outcome gaps (tension)
- `index.md`: added seven concept pages and one source summary

**Contradictions noted:**
- *Stating the point:* `story-killers` and `five-line-story` warn against "the moral of the story"; Jenkins says the takeaway is the most important step. A reconciliation is recorded in `what-happened-vs-what-it-meant.md` (a wiki synthesis).
- *Surprise placement:* Van Neistat says the surprise goes at the end; Jenkins puts a twist mid-story. Recorded as a refinement in `surprise.md`.
- *Order:* BLUF/Minto say answer first; Jenkins says withhold the payoff. Recorded as different tools for different jobs in `curiosity.md`.

**Needs verification:** "Be curious, not judgmental" attributed to Walt Whitman (commonly considered a misattribution).

**Categorization notes:** At the user's request, curiosity and tension got separate pages even though the source's own definition blurs them. "Forced reinterpretation" and "helicopter view" were folded into `surprise.md` and `five-second-moment.md` rather than given their own pages.

---

## 2026-09-22 — Convention change: how conflicts between sources are recorded

**Context:** The user decided that disagreement between experts is expected and valuable and should be recorded, not resolved. The earlier ingest today had written "reconciliations" of conflicts; those were removed.

**CLAUDE.md:**
- New "Conflicts between sources" section: principles (never pick a winner; state each side in the expert's own framing), three types of disagreement (direct contradiction, different emphasis, different context), and a three-layer recording method: (1) a collapsed `> [!conflict]-` callout placed inline directly after the disputed claim on every page involved, always mirrored; (2) a `debate-<topic>.md` page for substantial conflicts; (3) a Disagreements register in `index.md`. Includes a debate page template.
- Ingest workflow: step 2 now includes listing conflicts before writing; new step 6 records them; the log step now notes conflicts recorded.
- Citation rule on disagreements now points to the new section. Lint gained checks for unrecorded contradictions, callout mirroring, and register completeness.

**Pages created (4 debate pages):**
- `debate-state-the-moral.md`: direct contradiction. PAST source vs. Jenkins
- `debate-surprise-placement.md`: different emphasis. Van Neistat vs. Jenkins
- `debate-answer-first-or-last.md`: different context. BLUF, Minto vs. Van Neistat, Jenkins (plus Duarte's SCQA and Monroe as build-first structures)
- `debate-how-to-open.md`: different emphasis. PAST and five-line story vs. Willis and Jenkins vs. Monroe

**Pages updated (inline conflict callouts added; reconciliation text removed):**
- `story-killers.md`: two callouts under the table (moral row, "I have a story" row); removed the "Moral vs. Takeaway" reconciliation section
- `what-happened-vs-what-it-meant.md`: callout after the core claim; removed the "Contradiction" reconciliation section (moved, labeled, to the debate page's "wiki's view")
- `five-line-story.md`: callout under Situation. **Corrected an unsourced claim:** the page said "a good result shows; it does not explain," but the five-line source only says the Result should "tie everything together." Rewritten to reflect the source, noting that it takes no side in the moral debate. "Deliberately leaves out" the takeaway changed to "doesn't name."
- `past-storytelling-technique.md`: callouts under Place and Story Killers; takeaway bullet no longer reconciles
- `how-to-tell-stories-better.md`: callouts under the Seven Lessons table (lessons 5 and 7) and under do/don't contrasts 1 and 3; the "fits with the wiki" section now points to the four debates instead of resolving them
- `cart-framework.md`: callout under Takeaway; comparison table and text corrected for the five-line story; "less needed for enjoyment stories" now marked as contested
- `curiosity.md`: callouts under "Withhold the Payoff" and "Ways to Create Curiosity"; removed the "Nuance With BLUF" reconciliation section
- `bluf-method.md`: callout under BLUF; removed the "BLUF vs. Withholding" reconciliation subsection
- `minto-pyramid-principle.md`: callout under "Why It Works"; removed the reconciling bullet
- `scqa-framework.md`: callout under "Why It Works"
- `surprise.md`: two callouts under "Placement Is Everything"; the "Refinement" section is now "Forced Reinterpretation: A Mid-Story Surprise," with the reconciliation removed
- `van-neistat-storytelling.md`: callouts under Structure and under the amateur's version
- `cold-open.md`: callout after the main claim; the Jenkins section is now "Kinds of Cold Open," with the "choose based on" advice removed
- `monroes-motivated-sequence.md`: callouts under Get Attention and Call to Action; removed the "wiki judgment" bullet on statistics
- `audience-journey.md`: callout under step 3. **Flagged as needing verification:** the claim that Duarte "revisits [the call] throughout" isn't in the source.
- `duarte-resonate.md`: callout under step 3; fixed "first four steps" → "first five steps" (the list has five)
- `index.md`: new Disagreements register

**Candidates considered but not recorded as conflicts:** Willis ("polish" and "precise pacing" aren't charisma) vs. Jenkins (deliberate pacing). These refer to different things: delivery polish vs. how much space each part of a story gets. Also considered: Monroe's statistics-heavy Need step vs. Willis's Knowledge Deficit Trap. Willis warns against over-relying on data, not against using it. Both could be revisited if a source takes a sharper position.
