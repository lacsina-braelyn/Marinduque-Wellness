
/* TASKS #5 AND #6: EXPORT DOCUMENTATION */

function exportTaskDocumentation() {
  const taskSections = [
    {
      title: "TASK #5 — STRUCTURED ANALYSIS AND REFINEMENT",
      ids: [
        ["Analysis Prompt", "analysis-prompt"],
        ["Actual Copilot Recommendations", "analysis-output"],
        ["Selected Correction", "correction-description"],
        ["Verification Result", "verification-result"]
      ]
    },
    {
      title: "TASK #6 — COMPARE AND SUBMIT",
      ids: [
        ["Final Reflection", "final-reflection"]
      ]
    }
  ];

  const lines = [
    "MARINDUQUE WELLNESS",
    "TASK DOCUMENTATION",
    "===================",
    ""
  ];

  taskSections.forEach((section) => {
    lines.push(section.title);
    lines.push("-".repeat(section.title.length));
    lines.push("");

    section.ids.forEach(([label, id]) => {
      const element = document.getElementById(id);
      if (element) {
        const value = element.value || element.innerText || "";
        lines.push(label + ":");
        lines.push(value.trim() || "[Not completed]");
        lines.push("");
      }
    });
  });

  const comparison = document.querySelectorAll(
    "#task-6 .comparison-table tbody tr"
  );

  lines.push("FINAL COMPARISON");
  lines.push("");

  comparison.forEach((row) => {
    const technique = row.querySelector("th")?.innerText.trim();
    const observation = row.querySelector("textarea")?.value.trim();

    lines.push((technique || "Technique") + ":");
    lines.push(observation || "[Observation not recorded]");
    lines.push("");
  });

  const content = lines.join("\n");
  const file = new Blob([content], {
    type: "text/plain;charset=utf-8"
  });

  const url = URL.createObjectURL(file);
  const link = document.createElement("a");

  link.href = url;
  link.download = "marinduque-wellness-task-5-6.txt";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

const exportButton = document.getElementById(
  "export-task-documentation"
);

if (exportButton) {
  exportButton.addEventListener("click", exportTaskDocumentation);
}