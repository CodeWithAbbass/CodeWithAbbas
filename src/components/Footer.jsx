import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="Footer container-fluid d-sm-flex flex-wrap align-items-center justify-content-between text-center py-sm-2 w-100 h-auto">
      <div className="py-2">© 2023 CodeWithAbbas All Rights Reserved.</div>
      <div className="Footer_Email py-2">
        <span>Email: </span><a href="mailto:abbas152052@gmail.com" target="_blank">Abbas152052@gmail.com</a>
      </div>
    </footer>
  );
};

export default Footer;
