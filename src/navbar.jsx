import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <a href="" className="nav-logo">
          PXE.
        </a>
        <div className="nav-right">
          <a href="">Projects</a>
          <a href="">About</a>
          <button class="nav-btn">
            <span>Get a quote</span>
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
