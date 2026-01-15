//SERVER? - NEED to think about if the API for the Projects is worth it
let projects = [
  {
     id: 1, 
     name: "Railgun Spider", 
     description: "A fully rigged cyber-mechanical spider inspired by my obsession with railguns and futuristic creature design. I created a short animation to showcase its movement and personality." 
  },
  {
    id: 2, 
    name: "Project HOPE", 
    description: "A 3-5 minute animated short film created as a personal and school project. The goal was to prove that a single creator can produce a complete short film — and hopefully inspire others to try the same." 
  },
  {
    id: 3, 
    name: "Deluxo Animation", 
    description: "A complete recreation of the DeLorean DMC-12  known as the Deluxo from GTA V or the iconic Back to the Future car. I modeled the entire vehicle from scratch and brought it to life in a stylized animation."
  }
];

projects.forEach(project => {
    console.log(`Project Name: ${project.name}, Description: ${project.description}`);
});

projectContainer = document.getElementById('Projects_Container');
projectTemplate = document.getElementById('Project_Template');