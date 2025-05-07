const projects = [
    {
      title: "Weather App",
      description: "A web app that shows weather info using OpenWeather API.",
      link: "https://github.com/yourusername/weather-app"
    },
    {
      title: "To-Do List",
      description: "A simple to-do list application with local storage.",
      link: "https://github.com/yourusername/todo-list"
    },
    {
      title: "Portfolio Website",
      description: "My personal portfolio built with HTML, CSS, and JavaScript.",
      link: "https://yourwebsite.com"
    }
  ];
// Select the container
const container = document.getElementById("projects-container");

// Dynamically add projects
projects.forEach(project => {
  // Create project div
  const projectDiv = document.createElement("div");
  projectDiv.className = "project";

  // Add content
  projectDiv.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">View Project</a>
  `;

  // Append to container
  container.appendChild(projectDiv);
});  