/* eslint-disable max-len */
// 1. Create an array and save it to a projects variable; this array should hold a bunch of objects that will represent projects you complete
//    throughout this course that you will want to include in your portfolio.
// 2. Each object in the array should have the following properties (you will use dummy data for now):
// 3. Create two functions:
//    printToDom: This function should accept 2 arguments: the ID of the element to print it in and a string to print.
//    createProjectCards: This function should loop through the projects array and build up a 'dom string' (a complex HTML structure represented
//    by a string) that includes all the information on the project. It should call the printToDom function for each project
//    (hint: For this one, you'll be printing to the div with the ID projectsPage).
// 4. Only print 'available' projects. In your createProjectCards function, add logic to only show the project on the page
//    if it has a value of true in the available property.
// 5. Call the createProjectCards(); function in an init function that runs when the project loads.
import '../styles/main.scss';
import utilities from './helpers/utilities';
import navBar from './components/navBar/navBar';

// const printToDom = (divId, textToPrint) => {
//   const selectedDiv = document.getElementById(divId);
//   selectedDiv.innerHTML = textToPrint;
// };

const projects = [
  {
    title: 'Product Cards',
    screenshot: 'https://raw.githubusercontent.com/EmileeA/product-cards/master/screenshots/product-cards.png',
    description: 'Product cards using html, css, and flexbox for positioning', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/EmileeA', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/EmileeA/product-cards',
  },
  {
    title: 'Pet Adoption',
    screenshot: 'https://raw.githubusercontent.com/EmileeA/pet-adoption/master/screenshots/pet-adoption.png',
    description: 'Pet adoption page using html, css, and javascript', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Version Control with Github',
    available: true,
    url: 'https://github.com/EmileeA', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/EmileeA/pet-adoption',
  },
  {
    title: 'Sorting Hat',
    screenshot: 'https://raw.githubusercontent.com/EmileeA/sortinghat/master/screenshots/sorting-hat.png',
    description: 'Allows you to sort students into one of the harry potter houses.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, Bootsrap, Version Control with Github',
    available: true,
    url: 'https://github.com/EmileeA', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/EmileeA/sortinghat',
  },
  {
    title: 'Sandwich Maker',
    screenshot: 'https://raw.githubusercontent.com/EmileeA/sandwich-maker/master/screenshots/Sammich%20-%20On%20Load.png',
    description: 'An application allowing users to create a custom sandwich.', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML5, CSS, and Javascript, Bootstrap, ES6 Modules',
    available: true,
    url: 'https://github.com/EmileeA', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/EmileeA/sandwich-maker',
  },
  {
    title: 'Tamagotchi',
    screenshot: 'https://raw.githubusercontent.com/EmileeA/tamagotchi/master/src/screenshots/Tamagotchi%20-%20load.png',
    description: 'Relive your childhood with this virtual tamagotchi', // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: 'HTML5, CSS, and Javascript, SCSS, ES6 Modules',
    available: true,
    url: 'https://github.com/EmileeA', // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: 'https://github.com/EmileeA/tamagotchi',
  },
];

const createProjectCards = () => {
  let domString = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].available === true) {
      domString += '<div class="project">';
      domString += `<h3>${projects[i].title}</h3>`;
      domString += `<img class="projectImages" src="${projects[i].screenshot}">`;
      domString += `<p>${projects[i].description}</p>`;
      domString += `<p>${projects[i].technologiesUsed}</p>`;
      domString += `<p>${projects[i].url}</p>`;
      domString += `<p>${projects[i].githubUrl}</p>`;
      domString += '</div>';
    }
  }
  utilities.printToDom('projectsBody', domString);
};

const init = () => {
  navBar.createNavBar();
  navBar.navClick();
  createProjectCards();
};

init();
