const home = document.getElementById("logo");
home.addEventListener("click", () => {
  window.location.href = "../dashboard.html";
});

document.addEventListener("DOMContentLoaded", () => {
  const newIdeaButtons = document.querySelectorAll(".new-idea-btn");

  newIdeaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const column = button.closest(".board-column");
      const countSpan = column.querySelector(".count");

      const title = prompt("Enter idea title:");
      if (!title) return;

      const description = prompt("Enter idea description:");
      if (!description) return;

      const card = document.createElement("div");
      card.classList.add("card");

      const h4 = document.createElement("h4");
      h4.textContent = title;

      const p = document.createElement("p");
      p.textContent = description;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.classList.add("delete-btn");

      deleteBtn.addEventListener("click", () => {
        card.remove();
        let currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = Math.max(currentCount - 1, 0);
      });

      card.appendChild(h4);
      card.appendChild(p);
      card.appendChild(deleteBtn);

      // Insert before the New Idea button
      column.insertBefore(card, button);

      // Update count
      let currentCount = parseInt(countSpan.textContent);
      countSpan.textContent = currentCount + 1;
    });
  });

  // Add delete buttons to existing cards
  const existingCards = document.querySelectorAll(".card");
  existingCards.forEach((card) => {
    const column = card.closest(".board-column");
    const countSpan = column.querySelector(".count");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
      card.remove();
      let currentCount = parseInt(countSpan.textContent);
      countSpan.textContent = Math.max(currentCount - 1, 0);
    });

    card.appendChild(deleteBtn);
  });
});
