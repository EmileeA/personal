import utilities from '../../helpers/utilities';

const createNavBar = () => {
  let domString = '';
  domString += `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#" id="navToBio">Bio <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" id="navToTechnologies">Technology</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" id="navToProjects">Projects</a>
    </li>
  </ul>
</div>
</nav>`;

  utilities.printToDom('navBody', domString);
};
const scrollToId = (divId) => {
  const height = document.getElementById(divId).scrollHeight;
  window.scrollTo({ top: height, behavior: 'smooth' });
};

const navClick = () => {
  document.getElementById('navToBio').addEventListener('click', () => {
    scrollToId('bioPage');
  });
  document.getElementById('navToTechnologies').addEventListener('click', () => {
    scrollToId('bioPage');
  });
  document.getElementById('navToProjects').addEventListener('click', () => {
    scrollToId('bioPage');
  });
};

export default { createNavBar, navClick };
