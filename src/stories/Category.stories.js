export default {
  title: 'Components/Category',
};

export const Category = () => {
  return /* html */ `
  <ul class="list-group">
    <li class="list-group__item active d-flex justify-content-between align-items-center">
      App
      <span class="badge badge--primary badge-pill">5</span>
    </li>
    <li class="list-group__item d-flex justify-content-between align-items-center">
      Design
      <span class="badge badge--primary badge-pill">3</span>
    </li>
    <li class="list-group__item d-flex justify-content-between align-items-center">
      Software
      <span class="badge badge--primary badge-pill">8</span>
    </li>
    <li class="list-group__item d-flex justify-content-between align-items-center">
      Technology
      <span class="badge badge--primary badge-pill">5</span>
    </li>
  </ul>
  `;
};
