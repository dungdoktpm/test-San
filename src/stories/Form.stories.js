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
