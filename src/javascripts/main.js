/* eslint-disable max-len */
import 'bootstrap';
import firebase from 'firebase/app';
import navBar from './components/navBar/navBar';

import '../styles/main.scss';
import myProjects from './components/projects/projects';
import '@fortawesome/fontawesome-free/js/all';

import apiKeys from './helpers/apiKeys.json';
import technologies from './components/technologies/technologies';
import home from './components/home/home';
//   {
//     title: 'Tamagotchi',
//     screenshot: 'https://raw.githubusercontent.com/EmileeA/tamagotchi/master/src/screenshots/Tamagotchi%20-%20load.png',
//     description: 'Relive your childhood with this virtual tamagotchi', // A good project description includes 'the what', 'the why', and 'the how'.
//     technologiesUsed: 'HTML5, CSS, and Javascript, SCSS, ES6 Modules',
//     available: true,
//     url: 'https://github.com/EmileeA', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
//     githubUrl: 'https://github.com/EmileeA/tamagotchi',
//   },
// ];

// const createProjectCards = () => {
//   console.log(projects);
//   let domString = '';
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < projects.length; i++) {
//     // if (projects[i].available === true) {
//     domString += '<div class="project">';
//     domString += `<h3>${projects[i].title}</h3>`;
//     domString += `<img class="projectImages" src="${projects[i].screenshot}">`;
//     domString += `<p>${projects[i].description}</p>`;
//     domString += `<p>${projects[i].technologiesUsed}</p>`;
//     domString += `<p>${projects[i].url}</p>`;
//     domString += `<p>${projects[i].githubUrl}</p>`;
//     domString += '</div>';
//     // }
//   }
//   console.log(domString);
//   utilities.printToDom('projectsBody', domString);
// };

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  navBar.createNavBar();
  navBar.navClick();
  myProjects.createProjectCards();
  technologies.createTechnologies();
  home.displayHomeImg();
};

init();
