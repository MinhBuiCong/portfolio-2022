import { skills } from "../data/skills-data.js";

const skillsContainer = document.querySelector(".skills-container");

for (let i = 0; i < skills.length; i++) {
  skillsContainer.innerHTML += `<div class="skill-card">
                                    <h2 class="skill-name">${skills[i].name}</h2>
                                    <p class="skill-description">${skills[i].description}</p>
                                </div>`;
}
