import bgImage1 from '../assets/images/BG01.png';
export default {
  title: 'Components/Pagination',
};

export const Pagination = () => {
  return /* html */ `
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
        </a>
      </li>
      <li class="page-item active"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
        </a>
      </li>
    </ul>
  </nav>
  `;
};
