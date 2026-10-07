const cards = document.getElementById("cards");
const mensagem = document.getElementById("mensagem");

fetch("https://rickandmortyapi.com/api/character")
  .then(response => {
    if (!response.ok) {
      throw new Error("Erro ao acessar a API.");
    }
    return response.json();
  })
  .then(data => {
    data.results.forEach(personagem => {
      const card = document.createElement("article");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${personagem.image}" alt="${personagem.name}">
        <div class="card-content">
          <h2>${personagem.name}</h2>
          <p class="status">Status: ${personagem.status}</p>
          <p>Espécie: ${personagem.species}</p>
          <p>Origem: ${personagem.origin.name}</p>
        </div>
      `;

      cards.appendChild(card);
    });

    mensagem.textContent = `${data.results.length} personagens carregados pela API.`;
  })
  .catch(error => {
    mensagem.textContent = "Não foi possível carregar os personagens.";
    console.error(error);
  });
