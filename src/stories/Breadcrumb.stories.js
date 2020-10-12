export default {
  title: 'Components/Breadcrumb',
};

export const Breadcrumb = () => {
  return /* html */ `
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb text--uppercase">
      <li class="breadcrumb-item"><a href="#">Home <i class="fas fa-angle-right"></i></a></li>
      <li class="breadcrumb-item active" aria-current="page">
      Library</li>
    </ol>
  </nav>
  `;
};
