import bgImage1 from '../assets/images/BG01.png';
export default {
  title: 'Components/Background',
};

export const Background = () => {
  return /* html */ `
  <div class="background" style="background-image: url('${bgImage1}')">
  </div>
  `;
};
