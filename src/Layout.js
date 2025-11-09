import { Outlet } from "react-router-dom";
import "./assets/css/layout.css";
import "./assets/css/fonts.css";
import MenuBox from "./layouts/MenuBox";
import Footer from "./layouts/Footer";
const Layout = () => {
  return (
    <body>
      <header id="header" style={{ minHeight: 169 }}>
        <div id="main_menu"></div>

        <div class="header">
          <div class="container_main">
            <div class="logo">
              <a href="/">
                <img
                  src="https://free.vector6.com/wp-content/uploads/2020/04/072-Vector-Viet-Nam-poeqrc003.jpg"
                  alt="Logo"
                />
              </a>
            </div>

            <div id="main_menu">
              <MenuBox />
            </div>
          </div>
        </div>
      </header>

      <div class="news-home">
        <div class="container_main" style={{ minHeight: 600 }}>
          <Outlet />
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Layout;
