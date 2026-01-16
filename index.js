const projects = [
  {
    name: "Railgun Spider",
    description: "A fully rigged cyber-mechanical spider inspired by my obsession with railguns and futuristic creature design. I created a short animation to showcase its movement and personality.",
    image: "railgun.png"
  },
  {
    name: "Project HOPE",
    description: "A 3-5 minute animated short film created as a personal and school project. The goal was to prove that a single creator can produce a complete short film — and hopefully inspire others to try the same.",
    image: "hope.png"
  },
  {
    name: "Deluxo Animation",
    description: "A complete recreation of the DeLorean DMC-12 known as the Deluxo from GTA V or the iconic Back to the Future car. I modeled the entire vehicle from scratch and brought it to life in a stylized animation.",
    image: "deluxo.png"
  },
  {
    name: "Liminal Shot",
    description: "A shot exploring the concept of liminal spaces in a surreal environment.",
    image: "liminal.png"
  },
  {
    name: "Dune Ornithopter",
    description: "A recreation of the iconic Ornithopter from the Dune universe, focusing on hard-surface modeling and realistic texturing.",
    image: "ornithopter.png"
  },
  {
    name: "Steampunk Airship",
    description: "A detailed steampunk airship model showcasing intricate design and atmospheric rendering techniques.",
    image: "steampunk.png"
  }
];

const projectContainer = document.getElementById("Projects_Container");
const projectTemplate = document.getElementById("project_template");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const imagePath = "./images/";

let currentIndex = 0;
let projectElements = [];

/* =========================
   CREATE PROJECT ELEMENTS
========================= */

projects.forEach((project, index) => {
  const projectElement = projectTemplate.content.cloneNode(true);
  const article = projectElement.querySelector(".Project");

  article.dataset.index = index;

  article.querySelector(".Project_Name").textContent = project.name;
  article.querySelector(".Project_Description").textContent = project.description;
  article.querySelector("img").src = imagePath + project.image;

  projectContainer.appendChild(projectElement);
});

projectElements = [...document.querySelectorAll(".Project")];

/* =========================
   CAROUSEL LOGIC
========================= */

function updateCarousel() {
  projectElements.forEach(el => {
    el.classList.remove("active", "prev", "next");
  });

  const total = projectElements.length;

  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  projectElements[currentIndex].classList.add("active");
  projectElements[prevIndex].classList.add("prev");
  projectElements[nextIndex].classList.add("next");
}

/* =========================
   CONTROLS
========================= */

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projectElements.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + projectElements.length) %
    projectElements.length;
  updateCarousel();
});

/* =========================
   INIT
========================= */

updateCarousel();
