  // Funksjon for å oppdatere innholdet basert på kategori
    function updateContent(category) {
      const contentSection = document.getElementById('content');
      const selectedResources = resources.filter(resource => resource.category === category);

      // Oppdaterer innerHTML med informasjon fra valgte ressurser
      contentSection.innerHTML = selectedResources.map(resource => `
        <div>
          <h2>${resource.category}</h2>
          <p>${resource.text}</p>
          <ul>
            ${resource.sources.map(source => `<li><a href="${source.url}" target="_blank">${source.title}</a></li>`).join('')}
          </ul>
        </div>
      `).join('');
    }

    // Legger til event listeners til hver knapp
    document.getElementById('htmlButton').addEventListener('click', () => updateContent('HTML'));
    document.getElementById('cssButton').addEventListener('click', () => updateContent('CSS'));
    document.getElementById('jsButton').addEventListener('click', () => updateContent('JavaScript'));
    document.getElementById('reactButton').addEventListener('click', () => updateContent('React'));
    document.getElementById('sanityButton').addEventListener('click', () => updateContent('Sanity and headless CMS'));

    // Initial oppdatering med første kategori (for eksempel HTML)
    updateContent('HTML');