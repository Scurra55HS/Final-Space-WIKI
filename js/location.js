async function fetchLocations() {
    try {
        const response = await fetch('https://finalspaceapi.com/api/v0/location/');
        const data = await response.json();

        const locationList = document.getElementById('dados');
        locationList.innerHTML = '';

        data.forEach(location => {
            const card = document.createElement('div');
            card.classList.add('card');
            
            card.innerHTML = `
                <img src="${location.img_url}" alt="${location.name}">
                <div><strong>Name:</strong> ${location.name}</div>
                <div><strong>Type:</strong> ${location.type}</div>
                <div><strong>inhabitants:</strong> ${location.inhabitants}</div>
            `;
            locationList.appendChild(card);
        });
    } catch (error) {
        console.error('Erro ao buscar personagens:', error);
    }
}

fetchLocations();

