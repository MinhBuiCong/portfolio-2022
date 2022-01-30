import { projects } from "../data/project-data.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const projectTitle = document.querySelector(".main-title");
const projectDetailContainer = document.querySelector(
  ".project-detail-container"
);
projectTitle.innerText = `${projects[id].name}`;
projectDetailContainer.innerHTML += `<div class="section">
                                        <h2 class="project-list-name">Requirements</h2>
                                        <ul class="requirements-container list-container">
                                        </ul>
                                        </div>
                                        <div class="section">
                                        <h2 class="project-list-name">Technology</h2>
                                        <ul class="technology-container list-container">
                                        </ul>
                                        </div>
                                        <div class="section">
                                        <h2 class="project-list-name">Duration</h2>
                                        <span>${projects[id].duration}</span>
                                        </div>
                                        <div class="section">
                                        <h2 class="project-list-name">Link</h2>
                                        <a href="${projects[id].link}">${projects[id].link}</a>
                                        </div>
                                        `;

const requirementContainer = document.querySelector(".requirements-container");
const technologyContainer = document.querySelector(".technology-container");

for (let i = 0; i < projects[id].requirements.length; i++) {
  requirementContainer.innerHTML += `<li>${projects[id].requirements[i]}</li>`;
}
for (let i = 0; i < projects[id].technology.length; i++) {
  technologyContainer.innerHTML += `<li>${projects[id].technology[i]}</li>`;
}
