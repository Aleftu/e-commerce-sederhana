import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`navbar sticky top-0 z-50 shadow transition-colors duration-300 ${
        scroll ? "bg-[#808dc4] text-white" : "bg-[#35467e] text-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label
  tabIndex={0}
  className="btn btn-ghost lg:hidden bg-transparent hover:bg-[#5d7ea7] hover:text-white border-none"
>
  ☰
</label>

          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content mt-3 z-[1] p-2 shadow-md bg-slate-300 text-black rounded-box w-52"
          >
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/list-produk">Produk</Link></li>
            <li><Link to="/kontak">Kontak</Link></li>
          </ul>
        </div>
        <Link
          to="/"
          className="mx-5 text-xl font-extrabold first-letter:text-[#567af3] first-letter:text-3xl"
        >
          45Motor
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl">
          <li><Link to="/">Beranda</Link></li>
          <li><Link to="/list-produk">Produk</Link></li>
          <li><Link to="/kontak">Kontak</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
