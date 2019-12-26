import utilities from '../../helpers/utilities';
import './technologies.scss';

const createTechnologies = () => {
  const domString = `
          <h2> Technologies </h2>
          <div class="icons container">
          <i class="devicon-html5-plain-wordmark"></i>
          <i class="devicon-css3-plain-wordmark"></i>
          <i class="devicon-javascript-plain"></i>
          <i class="devicon-bootstrap-plain-wordmark"></i>
          <i class="devicon-sass-original"></i>
          <i class="devicon-jquery-plain-wordmark"></i>
          <i class="devicon-react-original-wordmark"></i>
          <i class="devicon-git-plain-wordmark"></i>
          <i class="devicon-github-plain-wordmark"></i>
          <i class="devicon-webpack-plain-wordmark"></i>
          <i class="devicon-visualstudio-plain"></i>
          <i class="devicon-firebase-plain"></i>
        </div>
  `;
  utilities.printToDom('technologiesPage', domString);
};

export default { createTechnologies };
