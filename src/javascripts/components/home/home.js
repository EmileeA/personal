import utilities from '../../helpers/utilities';
import image from '../../../../screenshots/tevin-trinh-npGw8vk83WQ-unsplash.jpg';
import './home.scss';

const displayHome = () => {
  let domString = '';
  domString += `<img src="${image}" id="mainImg">`;

  utilities.printToDom('homeId', domString);
};

export default { displayHome };
