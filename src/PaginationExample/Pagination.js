import React from 'react';
import "./PaginationExample.css"

function Pagination({nPages, currentPage, setCurrentPage}) {
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  return (
    <ul className='character-pagination'>
      {pageNumbers.map((pgNumber) =>(
        <li key= {pgNumber}>
            <a className={`page-button ${currentPage == pgNumber ? "active" : ""}`} onClick={()=> setCurrentPage(pgNumber)}>{pgNumber}</a>
        </li>
    ))}</ul>
  )
}

export default Pagination;
