import avata from '../assets/images/Img01.png';
export default {
  title: 'Components/Box',
};

export const Box01 = () => {
  return /* html */ `
  <div class="box box--style01">
    <h3 class="box__title">
      See all your accounts, credit cards, expenses and incomes in one place.
    </h3>
    <div class="box__content">
      <div class="box__content-inner">
        <div class="box__icon">
          <i class="far fa-check-circle"></i>
          <p class="pl-30">Create Monthly Budgets</p>
        </div>
        <div class="box__icon">
          <i class="far fa-check-circle"></i>
          <p class="pl-30">Create Monthly Budgets</p>
        </div>
        <div class="box__icon">
          <i class="far fa-check-circle"></i>
          <p class="pl-30">Create Monthly Budgets</p>
        </div>
        <div class="box__icon">
          <i class="far fa-check-circle"></i>
          <p class="pl-30">Create Monthly Budgets</p>
        </div>
      </div>
    </div>
    <a href="" class="box__link">Learn More <i class="fas fa-chevron-right"></i></a>
  </div>
  `;
};

export const Box02 = () => {
  return /* html */ `
  <div class="box box--style02 text--center">
    <div class="box__inner">
      <img src="${avata}" alt="">
      <h3 class="box__title">Excellent Service</h3>
      <div class="box__content">
        <p class="text--desc">
        “We wanted to spend more of our time on our technology and product and San Francisco has
          allowed us to do that.”
        </p>
        <div class="star">
          <i class="far fa-star checked"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
          <i class="far fa-star"></i>
        </div>
        <div class="author">
          <p class="name">Stella Smith</p>
          <p class="job">SF Technology</p>
        </div>
      </div>
    </div>
  </div>
  `;
};
