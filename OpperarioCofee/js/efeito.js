$(document).ready(function () {
	// Adicione a classe 'scroll' a todos os links de navegação
	$("nav a").addClass("scroll");

	// Role suavemente quando um link de navegação for clicado
	$("a.scroll").on("click", function (event) {
		if (this.hash !== "") {
			event.preventDefault();

			const hash = this.hash;

			// Animação de rolagem
			$("html, body").animate(
				{
					scrollTop: $(hash).offset().top
				},
				800, // A duração da animação em milissegundos
				function () {
					// Adicione o hash (#) à URL após a animação terminar
					window.location.hash = hash;
				}
			);
		}
	});
});

// Adiciona o evento de clique em cada imagem
const imagensRedesSociais = document.querySelectorAll("#redes-sociais, #menuSanduiche");

imagensRedesSociais.forEach((imagem) => {
	imagem.addEventListener("click", () => {

		imagensRedesSociais.forEach((imagem) => {
			imagem.classList.remove("active");
		});


		imagem.classList.add("active");
	});
});

//Muda texto do botton



// Captura os elementos <a> e <img> e a div que os contém
var link = document.getElementById("Abutton, Abutton2");
var imagem = document.getElementById("wppInicio, wppContato");
var div = document.getElementById("link_wrapper2");

// Adiciona um ouvinte de evento para o evento "mouseover" (mouse sobre o elemento)
link.addEventListener("mouseover", function() {
  // Altera o texto do link
  link.textContent = "WhatsApp";
  
  // Oculta a imagem
  imagem.style.display = "none";
});

// Adiciona um ouvinte de evento para o evento "mouseout" (mouse fora do elemento)
link.addEventListener("mouseout", function() {
  // Restaura o texto original
  link.textContent = "Mande-nos uma mensagem.";
  
  // Exibe a imagem novamente
  imagem.style.display = "block";
});

// Maquina de Escrever

const texto = "O amor pelo café nos movimenta";

const textElement = document.getElementById('subTextoBV');

const velocidadeDigitacao = 100;

let i = 0;
const typeEffect = setInterval(() => {
  textElement.textContent += texto.charAt(i);
  i++;
  if (i > texto.length) {
    clearInterval(typeEffect);
  }
}, velocidadeDigitacao);



