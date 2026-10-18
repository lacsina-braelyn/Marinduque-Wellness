# Marinduque Wellness — Prompt Log

**Innovation sector:** Health & Wellness Innovation

**Local challenge:** Community members may benefit from a simple, mobile-friendly place to find basic wellness reminders and track everyday healthy habits. This is a proposed challenge for the prototype, not a claim based on a local health survey.

**Target users:** Residents of Marinduque and community members seeking general wellness information.

**Proposed solution:** A single-page website with wellness tips, an interactive daily checklist, and guidance to seek qualified help when needed.

**Core features:**
1. General physical, mental, and community wellness tips.
2. Interactive six-item daily checklist with progress indicator and reset control.
3. Clear note that the page is educational and does not provide diagnosis, treatment, live listings, or emergency alerts.

## Task 1 — Sector Selection

**Objective:** Define the local challenge and practical web solution.

**Project concept:** Marinduque Wellness is a responsive single-page frontend prototype that presents simple health and wellness habits for the community. It is intended to make general reminders easy to read on desktop and mobile screens.

## Task 2 — Zero-Shot Prompting

**Example prompt to submit to GitHub Copilot:**
> Create a simple website about health and wellness for people in Marinduque.

**Actual Copilot output:** Not recorded here. Run the prompt in GitHub Copilot and save its real response or source output as required by the instructor.

**Observation template:** Describe what the first generated version included, what it omitted, and whether the content was relevant to Marinduque.

**Next action:** Preserve the baseline output before changing the same files.

## Task 3 — Structured Prompt

**Prompt to submit to GitHub Copilot:**
> Act as a frontend web developer. Create a responsive single-page website titled “Marinduque Wellness” for the Health & Wellness Innovation sector. Context: this is a student prototype for community members in Marinduque who may benefit from easy-to-read general wellness reminders. Include three features: (1) simple physical, mental, and community wellness tips, (2) an interactive daily checklist with six habits, a progress indicator, and a reset button, and (3) a section encouraging users to consult qualified health professionals or local health centers for health concerns. Constraints: use semantic HTML, CSS, and vanilla JavaScript; do not use a backend, database, authentication, external APIs, live clinic listings, live emergency alerts, or personalized medical recommendations. Use clear educational wording and responsive styling. Expected output: index.html, style.css, and script.js. Acceptance criteria: the layout works on mobile and desktop; checklist labels are clickable; progress updates when boxes are checked; reset clears all boxes; keyboard focus is visible; and the page clearly states that it is educational only.

**Actual Copilot output:** Not recorded here. This project folder contains a prepared prototype, not a record of a Copilot response. Save the actual output from your Copilot experiment separately.

**Observation template:** Compare the structured version with the baseline. Note whether context, explicit features, constraints, and acceptance criteria improved relevance and testability.

## Task 4A — Few-Shot Prompting

**Prompt to submit to GitHub Copilot:**
> Create checklist items in this format:
>
> Example 1:  
> Item: Drink safe water  
> Category: Body  
> Description: Choose safe drinking water throughout the day.
>
> Example 2:  
> Item: Take a mindful break  
> Category: Mind  
> Description: Pause, breathe, or enjoy a quiet moment.
>
> Generate four additional general wellness habits in the same format and render all items as an accessible checklist. Use educational language and do not present the content as personalized medical advice.

**Actual Copilot response:** Add the real response here after running the experiment.

**Observation:** Record whether Copilot followed the sample structure consistently and whether the items were relevant.

## Task 4B — Role Assignment

**Prompt to submit to GitHub Copilot:**
> Act as a frontend accessibility reviewer. Review the Marinduque Wellness webpage for semantic HTML, keyboard access, checkbox labels, focus indicators, readability, and mobile layout. Identify the most important issues and recommend targeted fixes without expanding the project scope. Do not claim a fix is verified until it has been tested.

**Actual Copilot response:** Add the real response here after running the experiment.

**Observation:** Record the accessibility concerns Copilot actually identified and which suggestions you chose to test.

## Task 5 — Structured Analysis and Refinement

**Prompt to submit to GitHub Copilot:**
> Review index.html, style.css, and script.js against the original requirements. Check whether checklist progress updates correctly, whether reset clears all six items, whether the HTML is semantic and accessible, and whether the layout adapts to mobile screens. Identify the two most important issues visible in the code, recommend the smallest corrections, and give a manual verification procedure. Do not assume a problem exists without evidence from the files.

**Actual Copilot response:** Add the real response here after running the experiment.

**Correction applied:** The prepared prototype includes native checkbox inputs associated with visible labels, keyboard focus styling, a progressbar with an updated aria-valuenow value, and a reset control.

**Verification checklist:**
- [ ] Open index.html in a browser.
- [ ] Check one box and confirm the progress changes from 0 of 6 to 1 of 6.
- [ ] Check all six boxes and confirm the completion message appears.
- [ ] Click Reset checklist and confirm all boxes clear and progress returns to 0 of 6.
- [ ] Use Tab and Space to navigate and toggle checkboxes; confirm focus is visible.
- [ ] Narrow the browser window or use mobile device emulation and check that the content remains readable.

**Verification result:** Fill this in after you personally run the tests. Do not mark a test as passed before checking it.

## Task 6 — Comparison and Reflection

Complete this table after running the experiments and recording the actual responses.

| Technique | Observation to complete from your own experiment |
|---|---|
| Zero-shot | What did Copilot assume or omit? |
| Structured prompt | What improved after adding context, constraints, and acceptance criteria? |
| Few-shot | Did the examples make checklist format more consistent? |
| Role assignment | What accessibility or usability concerns were identified? |
| Structured analysis | Which correction was applied and what test evidence confirmed it? |

**Reflection starter (revise to match what actually happened):** The activity showed that a prompt can be more useful when it defines the target users, context, features, constraints, and acceptance criteria. Few-shot examples can guide consistent formatting, while a specialized review prompt can help identify accessibility issues. Generated code still needs to be tested before it can be considered correct.

**Important:** The instructor requires actual prompts, actual Copilot outputs, observations, and verification evidence. Do not submit the example prompts or this starter text as if they were responses produced by Copilot.