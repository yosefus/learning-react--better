import React from 'react';

function NavBar({ Items }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-md">
        <a className="navbar-brand" href="#">
          <span className="badge badge-pill bg-success p-2">{Items.length}</span>
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
