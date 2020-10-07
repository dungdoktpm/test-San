export default {
  title: 'Components/Box',
};

export const Box = () => {
  return /* html */ `
  <div class="box">
    <h3 class="box__title">
      See all your accounts, credit cards, expenses and incomes in one place.
    </h3>
    <div class="box__content">
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
    <a href="" class="box__link">Learn More <i class="fas fa-chevron-right"></i></a>
  </div>
  `;
};

