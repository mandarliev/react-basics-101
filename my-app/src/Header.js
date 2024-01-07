import React from "react";

// BEM - Block Element Modifier

function Header() {
  return (
    <div>
      <h1 className="header__title">This is the Header</h1>
      <h2 className="header__user">Dimitar is signed in</h2>
    </div>
  );
}

export default Header;
