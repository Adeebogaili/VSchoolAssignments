import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} All rights reserved | This app was made by <span>Adeeb Ogaili</span></p>
    </footer>
  );
}