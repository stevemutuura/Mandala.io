const toggleModeButton = document.getElementById('toggle-mode-button');
const body = document.body;

toggleModeButton.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});

