import { projects } from "../data/project-data.js";

const projectsContainer = document.querySelector(".projects-container");
const projectDetailContainer = document.querySelector(
  ".project-detail-container"
);

for (let i = 0; i < projects.length; i++) {
  projectsContainer.innerHTML += `  <a class="project-link" href="project-detail.html?id=${projects[i].id}">
                                    <div class="project-card">
                                    <div class="project-top">
                                    <h2 class="project-name name-${projects[i].id}">${projects[i].name}</h2>
                                    <span class="project-launch">${projects[i].launch}</span>
                                    </div>
                                    <p class="project-description">${projects[i].descriptions}</p>
                                    </div>
                                    </a>`;
}
