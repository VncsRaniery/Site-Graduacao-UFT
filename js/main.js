window.onscroll = function () {
  showButton();
  addScrolledClass();
};

function showButton() {
  var button = document.querySelector('.scroll-up-btn');
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    button.classList.add('show');
  } else {
    button.classList.remove('show');
  }
}

function addScrolledClass() {
  var navbar = document.getElementById('navbar');
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Função para animação de rolagem suave para o topo
document.querySelector('.scroll-up-btn').addEventListener('click', function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

AOS.init({
  duration: 800,
});




/* ===== FAQs ===== */
let accordions = document.querySelectorAll('.accordion-container .accordion');

accordions.forEach((acco, index) => {
  acco.onclick = () => {
    const isActive = acco.classList.contains('active');

    accordions.forEach(subAcco => {
      subAcco.classList.remove('active');
    });

    if (!isActive) {
      acco.classList.add('active');
    }
  };

  // Feche todas as FAQs ao iniciar o site
  acco.classList.remove('active');
});