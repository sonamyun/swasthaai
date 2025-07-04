
document.querySelectorAll(".action-button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert(`${btn.textContent.trim()} clicked!`);
  });
});
