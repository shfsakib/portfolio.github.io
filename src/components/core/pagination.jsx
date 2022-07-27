import React from 'react';

export const Pagination = ({ pageNumber, pageSize, count, onPageChange }) => {

  var totalPages = Math.ceil(count / pageSize);

  return (
    <ul className='pagination pagination-sm float-right'>
      {totalPages === 1 ?
        (<li></li>)
        :
        totalPages >= 1 && totalPages <= 3 ?
          (<>
            {[...Array(totalPages)].map((item, i) => (
              <li className={`page-item ${pageNumber === i + 1 && 'active'}`} key={i}>
                <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(i + 1)}>
                  {i + 1}
                </span>
              </li>
            ))}
          </>)
          :
          pageNumber <= 1 && totalPages > 3 ?
            <>
              <li className={`page-item ${pageNumber === 1 && 'active'}`} key={1}>
                <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(1)}>
                  1
                </span>
              </li>
              <li className={`page-item ${pageNumber === 2 && 'active'}`} key={2}>
                <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(2)}>
                  2
                </span>
              </li>
              <li className={`page-item ${pageNumber === 3 && 'active'}`} key={3}>
                <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(3)}>
                  3
                </span>
              </li>
              <li className='page-item'>
                <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(pageNumber + 1)}>
                  ›
                </span>
              </li>
              <li className='page-item'>
                <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(totalPages)}>
                  »
                </span>
              </li>
            </>
            :
            pageNumber > 1 && pageNumber <= totalPages - 2 ? (
              <>
                <li className='page-item'>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(1)}>
                    «
                  </span>
                </li>
                <li className='page-item'>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(pageNumber - 1)}>
                    ‹
                  </span>
                </li>
                <li className={`page-item ${pageNumber === pageNumber - 1 && 'active'}`} key={pageNumber - 1}>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(pageNumber - 1)}>
                    {pageNumber === 1 ? pageNumber : pageNumber - 1}
                  </span>
                </li>
                <li className={`page-item ${pageNumber === pageNumber && 'active'}`} key={pageNumber}>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(pageNumber)}>
                    {pageNumber}
                  </span>
                </li>
                <li className={`page-item ${pageNumber === pageNumber + 1 && 'active'}`} key={pageNumber + 1}>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(pageNumber + 1)}>
                    {pageNumber === totalPages ? totalPages : pageNumber + 1}
                  </span>
                </li>
                <li className='page-item'>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(pageNumber + 1)}>
                    ›
                  </span>
                </li>
                <li className='page-item'>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(totalPages)}>
                    »
                  </span>
                </li>
              </>)
              :
              pageNumber >= totalPages - 1 && pageNumber <= totalPages && totalPages > 3 &&
              (<>
                <li className='page-item'>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(1)}>
                    «
                  </span>
                </li>
                <li className='page-item'>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(pageNumber - 1)}>
                    ‹
                  </span>
                </li>
                <li className={`page-item ${pageNumber === totalPages - 2 && 'active'}`} key={1}>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(totalPages - 2)}>
                    {totalPages - 2}
                  </span>
                </li>
                <li className={`page-item ${pageNumber === totalPages - 1 && 'active'}`} key={2}>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(totalPages - 1)}>
                    {totalPages - 1}
                  </span>
                </li>
                <li className={`page-item ${pageNumber === totalPages && 'active'}`} key={3}>
                  <span className='page-link' style={{ cursor: "pointer" }} onClick={() => onPageChange(totalPages)}>
                    {totalPages}
                  </span>
                </li>
              </>)

      }
    </ul >
  );
};
