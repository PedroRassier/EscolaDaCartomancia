const apiUrl =
  'https://script.google.com/macros/s/AKfycbw6SECNG7nUSuds_otbjlRBa77c4pI3GnOm5Yp5C_RG_2tIZ253ZigyF5He2Tqobkos/exec';

function renderStatus(status) {
  const configs = {
    abertas: {
      classe: 'status-open',
      texto: 'Inscrições Abertas',
      href: 'https://wa.me/seunumerodewhatsapp',
      target: '_blank',
    },
    encerrando: {
      classe: 'status-ending',
      texto: 'Últimas Vagas!',
      href: 'https://wa.me/seunumerodewhatsapp',
      target: '_blank',
    },
    encerradas: {
      classe: 'status-closed',
      texto: 'Encerradas',
      href: '#proximos',
      target: '_self',
    },
  };

  const cfg = configs[status] ?? configs['encerradas'];

  return `<a class="status-badge ${cfg.classe}" href="${cfg.href}" target="${cfg.target}">${cfg.texto}</a>`;
}

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
        <div>${renderStatus(card.status)}</div>
      </div>
    `;
  });
}

carregarCards();
