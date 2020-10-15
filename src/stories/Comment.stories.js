import { action } from '@storybook/addon-actions';
import user01 from '../assets/images/avata02.png';
import user02 from '../assets/images/avata03.png';
export default {
  title: 'Components/CommentBox',
};

export const CommentBox = () => {
  return /* html */ `
    <div class="comment">
      <div class="comment__author">
        <img src="${user01}" class="comment__user"/>
      </div>
      <div class="comment__content">
        <h3 class="comment__user-name">
            RYAN STEWART
        </h3>
        <p class="comment__time">March 31, 2015 at 5:30 pm</p>
        <p class="text--desc">
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.
        </p>
        <div class="comment__action mb-10">
          <div class="">
            <a href="">Reply</a>
          </div>
        </div>
      </div>
    </div>
  `;
};
