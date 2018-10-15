import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinkes = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Note</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating ping lighten-1">
          JS
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinkes;
