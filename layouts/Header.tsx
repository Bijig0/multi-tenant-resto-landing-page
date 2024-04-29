"use client";
import Link from "next/link";
import { Nav } from "react-bootstrap";

const Header = ({ onePage }) => {
  const menus = [
    { id: 1, href: "home", title: "Home" },
    { id: 8, href: "about", title: "about" },
    { id: 3, href: "services", title: "services" },
    { id: 2, href: "projects", title: "project" },
    { id: 5, href: "testimonials", title: "testimonials" },
    { id: 6, href: "blog", title: "blog" },
  ];
  return (
    <header className="main-header menu-absolute header-white no-border">
      {/*Header-Upper*/}
      <div className="header-upper">
        <div className="container container-1660 clearfix">
          <div className="header-inner py-15 rel d-flex align-items-center">
            <div className="logo-outer">
              <div className="logo">
                <Link href="/">
                  <img
                    src="assets/images/logos/logo.png"
                    alt="Logo"
                    title="Logo"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-outer ms-lg-auto clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-lg">
                <Nav
                  logo="assets/images/logos/logo.png"
                  menus={menus}
                  onePage={onePage}
                />
              </nav>
              {/* Main Menu End*/}
            </div>
            {/* Nav Search */}
            {/* <div className="nav-search ms-xl-2 ms-4 py-10">
              <NavSearch />
            </div> */}
            {/* Menu Button */}
            <div className="menu-btns ms-lg-auto d-none d-xl-flex">
              <Link href="contact" className="theme-btn">
                Get Started <i className="far fa-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*End Header Upper*/}
    </header>
  );
};

export default Header;
