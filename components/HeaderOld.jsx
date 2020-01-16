import * as React from "react";

const Header = ({ children }) => (
  <header>
    <div>{children}</div>
    <style jsx>
      {/* CSS */ `
        header {
          left: 0;
          width: 100%;
          height: 80px;
          position: sticky;
          top: 0;
          z-index: 100;
          border-bottom: 1px solid rgba(0, 0, 0, 0.25);
          -webkit-backdrop-filter: saturate(100%) blur(40px);
          backdrop-filter: saturate(100%) blur(40px);
        }
      `}
    </style>
  </header>
);
export default Header;
