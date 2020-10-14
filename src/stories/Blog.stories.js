import logo from '../assets/images/Logo.png';
import img01 from '../assets/images/blog01.png';
export default {
  title: 'Components/Blog',
};

export const BlogStandard = () => {
  return /* html */ `
  <div class="blog">
    <img src="${img01}"/>
    <div class="blog__inner">
      <h3 class="blog__title">
        How to lead employees through technology changes
      </h3>
      <p class="blog__title--small">Technology</p>
      <div class="blog__meta">
        <img src="${logo}" alt="" class="logo">
        <p>Written by <span>Admin</span>, March 10, 2020</p>
      </div>
      <p class="text--desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus delectus veritatis eius repellat ex? Officiis aut, fuga dolor, ipsam delectus veritatis magnam debitis harum laboriosam, eius cupiditate commodi mollitia id?
      </p>
      <button class="btn btn--read">
        Read More
      </button>
    </div>
  </div>
  `;
};

export const BlogSingle = () => {
  return /* html */ `
  <div class="blog">
    <img src="${img01}"/>
    <div class="blog__inner">
      <h3 class="blog__title">
        How to lead employees through technology changes
      </h3>
      <p class="text--desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus delectus veritatis eius repellat ex? Officiis aut, fuga dolor, ipsam delectus veritatis magnam debitis harum laboriosam, eius cupiditate commodi mollitia id?
      </p>
      <p class="text--desc">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus delectus veritatis eius repellat ex? Officiis aut, fuga dolor, ipsam delectus veritatis magnam debitis harum laboriosam, eius cupiditate commodi mollitia id?
      </p>
      <div class="blog__text-content">
      </div>
      <div class="blog__meta">
        <img src="${logo}" alt="" class="logo">
        <p>Written by <span>Admin</span>, March 10, 2020</p>
        <p class="blog__title--small">Technology</p>
      </div>
    </div>
  </div>
  `;
};
