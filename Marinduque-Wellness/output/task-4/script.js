
/* TASK #4: FEW-SHOT AND ROLE ASSIGNMENT */

// Copy either experiment's prompt to the clipboard.
document.querySelectorAll("[data-copy-target]").forEach((button) => {
  button.addEventListener("click", async () => {
    const targetId = button.dataset.copyTarget;
    const promptElement = document.getElementById(targetId);

    if (!promptElement) return;

    const promptText = promptElement.innerText.trim();

    try {
      await navigator.clipboard.writeText(promptText);

      const originalText = button.textContent;
      button.textContent = "Prompt copied!";

      window.setTimeout(() => {
        button.textContent = originalText;
      }, 2000);
    } catch (error) {
      // Manual selection is available if clipboard access is blocked.
      button.textContent = "Select and copy the prompt manually";
    }
  });
});

// Experiment A: Update the sample checklist progress.
const fewShotChecks = Array.from(
  document.querySelectorAll(".wellness-example-check")
);

const fewShotProgress = document.getElementById("few-shot-progress");

function updateFewShotProgress() {
  if (!fewShotProgress) return;

  const completed = fewShotChecks.filter(
    (checkbox) => checkbox.checked
  ).length;

  const total = fewShotChecks.length;

  if (completed === total) {
    fewShotProgress.textContent =
      `Excellent! All ${total} sample habits are completed.`;
  } else {
    fewShotProgress.textContent =
      `${completed} of ${total} sample habits completed.`;
  }
}

fewShotChecks.forEach((checkbox) => {
  checkbox.addEventListener("change", updateFewShotProgress);
});

updateFewShotProgress();