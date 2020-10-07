export default {
  title: 'Components/Footer Block',
};

export const FooterBlock = () => {
  return /* html */ `
  <div class="footer-block">
    <h4>Company</h4>
    <ul>
      <li><a href="">Service</a></li>
      <li><a href="">About</a></li>
      <li><a href="">Careers</a></li>
      <li><a href="">Contact</a></li>
    </ul>
  </div>
  `;
};

export const FooterBlockIcon = () => {
  return /* html */ `
  <div class="footer-block footer-block--icon">
    <h4>Social</h4>
    <ul>
      <li>
        <a href=""><i class="fab fa-twitter"></i></a>
      </li>
      <li>
        <a href=""><i class="fab fa-facebook-square"></i></a>
      </li>
      <li>
        <a href=""><i class="fab fa-instagram"></i></a>
      </li>
      <li>
        <a href=""><i class="fab fa-google-drive"></i></a>
      </li>
    </ul>
  </div>
  `;
};
