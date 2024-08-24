import "../App.css";
const Footer = () => {
  return (
    <footer
      className="bg-primary text-center text-lg-start"
      style={{ height: "10rem" }}
    >
      <div
        className="text-center p-3 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        created By <span className="text-white">Dev Kumar</span>
      </div>
    </footer>
  );
};

export default Footer;
