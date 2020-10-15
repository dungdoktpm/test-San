export default {
  title: 'Components/Form',
};

export const FormSubscribe = () => {
  return /* html */ `
  <form action="" class=" form form--subscribe">
    <div class="form__item">
      <input type="text" name="" id="" placeholder="Enter Your Email Adress">
      <button class="btn btn--subscribe">
        Subscribe
      </button>
    </div>
  </form>
  `;
};

export const FormSearch = () => {
  return /* html */ `
  <form action="" class=" form form--search">
    <div class="form__item">
      <input type="text" name="" id="" placeholder="Enter Keyword">
      <button class="btn btn--search">
         <i class="fas fa-search"></i>
      </button>
    </div>
  </form>
  `;
};

export const FormRepy = () => {
  return /* html */ `
  <form action="" method="post" class="form form--reply">
    <div class="form__title">
        LEAVE A REPLY
    </div>
    <div class="form__main">
      <div class="group-field">
        <div class="form__item">
          <input type="text" name="" id="" placeholder="Your Name">
        </div>
        <div class="form__item">
          <input type="text" name="" id="" placeholder="Enter Email">
        </div>
      </div>
      <div class="form__item">
        <textarea name="" id="" cols="30" rows="6" placeholder="Comment"></textarea>
      </div>
      <button class="btn btn--submit">Submit</button>
    </div>
  </form>
  `;
};
