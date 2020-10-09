export default {
  title: 'Components/Form',
};

export const Form = () => {
  return /* html */ `
  <form action="" class=" form form--subscribe">
    <div class="form__item">
      <input type="text" name="" id="" placeholder="Enter Your Email Adress">
      <button class="btn btn--subscribe">
        Subscribe
      </button>
    </div>
    <div class="spam text--center">
      <p>
        <span>*</span>We won't spam you, we promise!
        <i class="fas fa-thumbs-up"></i>
      </p>
    </div>
  </form>
  `;
};
