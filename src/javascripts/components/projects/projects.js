import utilities from '../../helpers/utilities';
import projectData from '../../helpers/data/projectData';
import './projects.scss';

const createProjectCards = () => new Promise((resolve, reject) => {
  let domString = '';
  projectData.getProjectData()
    .then((projects) => {
      projects.forEach((project) => {
        // col-sm-4
        domString += `
        <div class="project">
            <h3>${project.title}</h3>
            <div id="imageContainer">
            <img src="${project.screenshot}" alt="${project.title}">
            </div>
            <div class="project-container">${project.description}</div>
            <div><strong>Technologies Used:</strong> ${project.technologiesUsed}</div>
            <a href="${project.url}" target="_blank">Project Link</a>
            <a href="${project.githubUrl}" target="_blank"><i class="githubProj fab fa-github"></i> GitHub</a>
        </div>
            `;
        domString += '</div>';
      });
      utilities.printToDom('projectsBody', domString);
    })
    .catch((error) => reject(error));
});


export default { createProjectCards };
