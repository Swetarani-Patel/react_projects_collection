import React from "react";
import { FaRegNewspaper } from "react-icons/fa";
const Navbar = ({ setCategory }) => {
  const categoryData = [
    {
      name: "All",
      category: "general",
    },
    {
      name: "Technology",
      category: "technology",
    },
    {
      name: "Business",
      category: "business",
    },
    {
      name: "Health",
      category: "health",
    },
    {
      name: "Sports",
      category: "sports",
    },
    {
      name: "Entertainment",
      category: "entertainment",
    },
  ];
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div
            className="navbar-brand d-flex justify-content-center align-items-center"
            href="#"
          >
            <FaRegNewspaper size={25} />
            <span className="badge fs-4">News App</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ cursor: "pointer" }}
            >
              {categoryData.map((ele) => (
                <li className="nav-item">
                  <div
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => setCategory(ele.category)}
                  >
                    {ele.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
