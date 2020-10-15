export default {
  title: 'Components/Widget',
};

export const Widget = () => {
  return /* html */ `
  <div class="widget">
    <h4 class="widget__title widget__title--small text--desc">
      Our Office
    </h4>
    <div class="widget__content">
      <h3 class="widget__title">
        Address
      </h3>
      <p class="text--desc widget__desc">112 W 34th St.</p>
      <p class="text--desc widget__desc email">New York, NY 10120, USA</p>
    </div>
  </div>
  `;
};
