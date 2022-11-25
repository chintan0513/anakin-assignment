import React from 'react';
import '../styles/page.css'

  const Items = ({issuePerPage, totalIssue,paginate}) => {

    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(totalIssue / issuePerPage); i++) {
      pageNumber.push(i);     
    }

    return (
        <div className='page'>
            <ul className='li'>
                {
                    pageNumber.map(number => (
                        <li key={number} className='page-item'>
                            <a onClick={() => paginate(number)} href='!#' className='page-link'>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
      );
  }   

export default Items;