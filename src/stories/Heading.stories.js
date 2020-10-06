import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Heading',
};

export const Primary = () => {
  return /* html */ `
  <div class="headingn text--center">
    <h3 class="heading__title">
    Expense tracker that works anywhere, anytime.
    </h3>
    <p class="heading__desc">
    Stop using spreadsheets and start tracking your money with the best expense tracker apps available.
    </p>
  </div>
  `;
};
