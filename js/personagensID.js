async function fetchCharacter() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const characterId = urlParams.get('id');

        const response = await fetch(`https://finalspaceapi.com/api/v0/character/${characterId}`);
        const character = await response.json();

        const characterDiv = document.getElementById('personagem');
        characterDiv.innerHTML = `
            <div class="character-info">
                <div><strong>Name:</strong> ${character.name}</div>
                <div><strong>Status:</strong> ${character.status}</div>
                <div><strong>Species:</strong> ${character.species}</div>
                <div><strong>Gender:</strong> ${character.gender}</div>
                <div><strong>Hair:</strong> ${character.hair}</div>
                <div><strong>Alias:</strong> ${character.alias}</div>
                <div><strong>Origin:</strong> ${character.origin}</div>
                <div><strong>Abilities:</strong> ${character.abilities}</div>
            </div>
            <img src="${character.img_url}" alt="${character.name}">
        `;
    } catch (error) {
        console.error('Erro ao buscar personagem:', error);
    }
}

fetchCharacter();
