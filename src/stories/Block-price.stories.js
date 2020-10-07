export default {
  title: 'Components/Block Pricing',
};

export const BlockPricing = () => {
  return /* html */ `
  <div class="block-pricing text--center block-pricing--video">
    <div class="block-pricing__title">
      <h4>Basic</h4>
      <span class="text--desc">Most popular</span>
    </div>
    <div class="block-pricing__price">
      <p><span>$</span>120 <span>month</span></p>
    </div>
    <div class="block-pricing__content">
      <p>2 users</p>
      <p>Unlimited clients</p>
      <p>Unlimited comments</p>
      <p>API support</p>
    </div>
    <div class="btn-download">
      <button class="btn btn--secondary">
        Download
      </button>
    </div>
  </div>
  `;
};
