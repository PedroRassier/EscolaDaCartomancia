const apiUrl =
  'https://script.google.com/macros/s/AKfycbw6SECNG7nUSuds_otbjlRBa77c4pI3GnOm5Yp5C_RG_2tIZ253ZigyF5He2Tqobkos/exec';

async function carregarCards() {
  const container = document.querySelector('.course-table-container');

  container.innerHTML += `
    <div class="loading" id="loading">
      <div class="loading-spinner"></div>
    </div>
  `;

  const res = await fetch(apiUrl);
  const cards = await res.json();

  document.getElementById('loading').remove();

  cards.forEach((card) => {
    container.innerHTML += `
      <div class="course-row">
        <div><strong>${card.curso}</strong></div>
        <div>${card.data}</div>
        <div>${card.valor}</div>
        <div>
          <a class="status-badge status-open" href="https://wa.me/seunumerodewhatsapp">Inscrições Abertas</a>
        </div>
      </div>
    `;
  });
}

carregarCards();
