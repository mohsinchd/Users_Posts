import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ totalPosts, postPerPage, nextPage }) => {
  let pages = [];

  for (let i = 0; i < totalPosts / postPerPage; i++) {
    pages.push(i + 1);
  }

  return (
    <>
      <p className="mb-0">Pages</p>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pages.map((value, index) => (
            <li key={index} className="page-item">
              <span
                onClick={() => nextPage(value)}
                className="page-link pointer"
              >
                {value}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
