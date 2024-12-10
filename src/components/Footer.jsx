import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Chris Tzouvaras ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
