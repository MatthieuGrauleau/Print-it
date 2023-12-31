const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const containerDots = document.querySelector(".dots");
const imagePicture = document.querySelector(".banner-img");
const text = document.querySelector("p");
let counter = 0;

arrowLeft.addEventListener("click", precedenteSlide);
arrowRight.addEventListener("click", suivanteSlide);

for (let i = 0; i < slides.length; i += 1) {
  const dot = document.createElement("div");
  dot.className = "dot";
  containerDots.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");
dots[0].classList.add("dot_selected");

/**
 * La fonction precendente slide permet au click de faire déffiler le carrousel sur le côté droit et d'aller à la slide suivante en bouclant à l'infini.
 * @param {Function} suivanteSlide
 */
function suivanteSlide() {
  const newCounter = counter < slides.length - 1 ? counter + 1 : 0;
  carrousel(counter, newCounter);
}
/**
 * La fonction precendente slide permet au click de faire déffiler le carrousel sur le côté gauche et de revenir à la slide précédente en bouclant à l'infini.
 * @param {Function} precedenteSlide
 */
function precedenteSlide() {
  const newCounter = counter === 0 ? slides.length - 1 : counter - 1;
  carrousel(counter, newCounter);
}

/**
 * La fonction carrousel permet de mettre à jour le slider du dessus afin
 * que l'image, le texte et les bulles soient bien sur le même niveau du tableau.
 * @param {Number} oldCounter
 * @param {Number} newCounter
 */
function carrousel(oldCounter, newCounter) {
  counter = newCounter;
  dots[oldCounter].classList.remove("dot_selected");
  imagePicture.src = "./assets/images/slideshow/" + slides[newCounter].image;
  text.innerHTML = slides[newCounter].tagLine;
  dots[newCounter].classList.add("dot_selected");
}
