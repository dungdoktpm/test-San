import logo from '../assets/images/Logo.png';
export default {
  title: 'Components/Blog',
};

export const Blog = () => {
  return /* html */ `
  <div class="blog">
    <img src="${logo}" alt="">
    <h3 class="blog__titile">
      How to lead employees through technology changes
    </h3>
    <p>Technology</p>
    <div class="blog__meta">
      <img src="" alt="" class="logo">
      <p>Written by <span>Admin</span>, March 10, 2020</p>
    </div>
    <p class="text--desc">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus delectus veritatis eius repellat ex? Officiis aut, fuga dolor, ipsam delectus veritatis magnam debitis harum laboriosam, eius cupiditate commodi mollitia id?
    </p>
    <button class="btn">
      Button Priamry
    </button>
  </div>
  `;
};
