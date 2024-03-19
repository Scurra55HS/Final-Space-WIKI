async function fetchCharacters() {
    try {
        const response = await fetch('https://finalspaceapi.com/api/v0/character/');
        const data = await response.json();

        const characterList = document.getElementById('dados');
        characterList.innerHTML = '';

        data.forEach(character => {
            const card = document.createElement('div');
            card.classList.add('card');

            if (character.status === 'Alive') {
                card.classList.add('status-live');
            } else if (character.status === 'Deceased') {
                card.classList.add('status-dead');
            } else {
                card.classList.add('status-missing');
            }

            card.innerHTML = `
                <img src="${character.img_url}" alt="${character.name}">
                <div><strong>Name:</strong> ${character.name}</div>
                <div><strong>Status:</strong> ${character.status}</div>
                <div><strong>Species:</strong> ${character.species}</div>
                <div><strong>Gender:</strong> ${character.gender}</div>
            `;
            card.addEventListener('click', () => {
                window.location.href = `PaginaPersonagem.html?id=${character.id}`;
            });

            characterList.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao buscar personagens:', error);
    }
}

fetchCharacters();

