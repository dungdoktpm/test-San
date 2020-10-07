import { action } from '@storybook/addon-actions';
import logo from '../assets/images/Logo.png';
export default {
  title: 'Components/Logo',
};

export const Logo = () => {
  return /* html */ `
  <div class="logo">
    <img src="${logo}" alt=""/>
    <span>San</span>Francisco
  </div>
  `;
};
