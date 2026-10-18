const checklist = Array.from(document.querySelectorAll('.check-item input'));
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const progressBar = document.getElementById('progress-bar');
const message = document.getElementById('checklist-message');
const resetButton = document.getElementById('reset-checklist');

function updateProgress() {
  const completed = checklist.filter((item) => item.checked).length;
  progressText.textContent = `${completed} of ${checklist.length}`;
  progressFill.style.width = `${(completed / checklist.length) * 100}%`;
  progressBar.setAttribute('aria-valuenow', String(completed));

  if (completed === checklist.length) {
    message.textContent = 'Wonderful! You completed all six wellness habits today.';
  } else if (completed > 0) {
    message.textContent = `Good job — ${completed} ${completed === 1 ? 'habit' : 'habits'} completed. Keep going at your own pace.`;
  } else {
    message.textContent = 'Start with one small step. Every habit counts.';
  }
}

checklist.forEach((item) => item.addEventListener('change', updateProgress));
resetButton.addEventListener('click', () => {
  checklist.forEach((item) => { item.checked = false; });
  updateProgress();
});
updateProgress();