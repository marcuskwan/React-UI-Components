import React from "react";
import "./Header.css";
import ImageThumbnail from "./ImageThumbnail";
import HeaderTitle from "./HeaderTitle";
import HeaderContent from "./HeaderContent";

function HeaderContainer() {
  return (
    <div className="header-container">
      <header>
        <ImageThumbnail />
        <div className="right-header">
        <HeaderTitle />
        <HeaderContent />
        </div>
      </header>
    </div>
  );
}

export default HeaderContainer;
