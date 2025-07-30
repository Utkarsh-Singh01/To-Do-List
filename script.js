function addSpell() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();

  if (task === "") {
    alert("🧙 You must type a spell first!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = task;

  // Add vanish animation on click
  li.onclick = function () {
    this.classList.add("disappear");
    setTimeout(() => this.remove(), 500);
  };

  document.getElementById("spellList").appendChild(li);
  input.value = "";
}

