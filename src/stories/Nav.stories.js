import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Nav',
};

export const Navbar = () => {
  return /* html */ `
    <nav class="navbar text-center">
      <div class="menu">
        <ul class="menu__list">
          <li class="menu__item"><a href="" class="menu__link">Home</a></li>
          <li class="menu__item"><a href="" class="menu__link">About</a></li>
          <li class="menu__item"><a href="" class="menu__link">Services</a></li>
          <li class="menu__item"><a href="" class="menu__link">Work</a></li>
          <li class="menu__item"><a href="" class="menu__link">Pricing</a></li>
          <li class="menu__item"><a href="" class="menu__link">Blog</a></li>
          <li class="menu__item"><a href="" class="menu__link">Contact</a></li>
        </ul>
        <div class="cart">
          <i class="fas fa-shopping-cart"></i>
        </div>
        <div class="search">
          <i class="fas fa-search"></i>
        </div>
        <div class="download">
          <button class="btn btn-download text-white">Download</button>
        </div>
      </div>
    </nav>
  `;
};

