import utilities from '../../helpers/utilities';
import image from '../../screenshots/tevin-trinh-npGw8vk83WQ-unsplash.jpg';

const displayHomeImg = () => {
  const domString = `img src="${image}"`;

  utilities.printToDom('.homeImg', domString);
};

export default { displayHomeImg };
