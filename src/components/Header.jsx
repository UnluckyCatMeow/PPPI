// Header.jsx
import { useState } from "react";
import Search from "./Search";
import MenuButton from "./MenuButton";
import MainMenu from "./MainMenu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <img src="logoDUIKT.png" className="logo" alt="Logo" />
      <p>Меню в наявності сьогодні:</p>

      <div className="header">
        <Search />
        <MenuButton onClick={() => setMenuOpen(true)} />
      </div>

      <MainMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}

export default Header;
