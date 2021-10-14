import React from 'react';
import PaginationSquare from './PaginationSquare';

function PaginationRow({
  page,
  arrayIndex,
  offset,
  setOffset,
  setPage,
  maxResults,
  currentPagination,
}) {
    let paginationArray = [ 0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="o-buttons-pagination pagination">
      {page > 1 ? (
        <PaginationSquare
          page={page}
          arrayIndex={"<"}
          setOffset={setOffset}
          offset={offset}
          setPage={setPage}
          maxResults={maxResults}
          currentPagination={currentPagination}
        />
      ) : null}
      {paginationArray.map((square, index) => (
        <PaginationSquare
          page={page}
          arrayIndex={square}
          setOffset={setOffset}
          setPage={setPage}
          maxResults={maxResults}
          currentPagination={currentPagination}
          key={index}
        />
      ))}
      {page < 40 ? (
        <PaginationSquare
          page={page}
          arrayIndex={">"}
          setOffset={setOffset}
          offset={offset}
          setPage={setPage}
          maxResults={maxResults}
          currentPagination={currentPagination}
        />
      ) : null}
    </div>
  );
}

export default PaginationRow;