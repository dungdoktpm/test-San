import logo from '../assets/images/Logo.png';
import img01 from '../assets/images/blog01.png';
export default {
  title: 'Components/Blog',
};

export const BlogStandard = () => {
  return /* html */ `
  <div class="blog blog--standard">
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
  <div class="blog blog--single">
    <img src="${img01}"/>
    <div class="blog__inner">
      <h3 class="blog__title">
        How to lead employees through technology changes
      </h3>
      <p class="text--desc">
      Technology is now integrated into almost every part of our jobs. We use computers, Wi-Fi, email, applications or our smartphones for everything. The thing about technology, though, is that it’s always changing. Software and programs are constantly updating, becoming better versions of themselves. New hardware is constantly outdating older laptop and desktop versions, and new applications are being developed every day.
      </p>
      <p class="text--desc">
      To help lead employees through changes to the technology they use for work every day — and to empower each team member to succeed — consider these five steps.
      </p>
      <div class="blog__text-content">
        <ol class="blog__paragraph">
          <li>Give The 'Why'
            <p class="text--desc">
              No one likes just being told what to do (OK, maybe some people enjoy that, but most employees don’t). Instead of bossing around, try giving the full picture. Explain why the change ahead is important. Explain what exactly the new technology will help with. How will it impact your overall efficiency? How will technology changes affect other parts of the processes?
            </p>
          </li>
          <li>Be Transparent
            <p class="text--desc">
              No one likes just being told what to do (OK, maybe some people enjoy that, but most employees don’t). Instead of bossing around, try giving the full picture. Explain why the change ahead is important. Explain what exactly the new technology will help with. How will it impact your overall efficiency? How will technology changes affect other parts of the processes?
            </p>
          </li>
          <li>Provide A Timeline
            <p class="text--desc">
              No one likes just being told what to do (OK, maybe some people enjoy that, but most employees don’t). Instead of bossing around, try giving the full picture. Explain why the change ahead is important. Explain what exactly the new technology will help with. How will it impact your overall efficiency? How will technology changes affect other parts of the processes?
            </p>
          </li>
        </ol>
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
