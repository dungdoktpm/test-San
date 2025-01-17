import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Button',
};

export const Primary = () => {
  return /* html */ `
  <button class="btn">
     Button Priamry
  </button>
  `;
};
export const Secondary = () => {
  return /* html */ `
    <button class="btn btn--secondary">
      Button Secondary
    </button>
  `;
};
export const Tertiary = () => {
  return /* html */ `
    <button class="btn btn--tertiary">
      Button Tertiary
    </button>
  `;
};
