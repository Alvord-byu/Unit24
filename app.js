const gallery = document.getElementById("gallery");
guests.forEach(g => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${g.image}" alt="${g.name}">
    <div class="overlay">
      <h2>${g.name}</h2>
      <p>${g.bio}</p>
    </div>`;
  gallery.appendChild(card);
});