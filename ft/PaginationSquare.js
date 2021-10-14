import React from 'react';

function PaginationSquare({ page, arrayIndex, offset, setOffset, setPage, maxResults, currentPagination }) {
	if (
    arrayIndex == "<"
  ) {
    return (
      <button
        onClick={() => {
          setOffset(offset - maxResults);
          setPage(page-1);
        }}
        className="o-buttons o-buttons--secondary"
      >
        {arrayIndex}
      </button>
    );}

	else if (arrayIndex == ">") {
    return (
      <button
        onClick={() => {
          setOffset(offset + maxResults);
          setPage(page + 1);
        }}
        className="o-buttons o-buttons--secondary"
      >
        {arrayIndex}
      </button>
    );
  } else if (
    currentPagination[arrayIndex] < 1 ||
    currentPagination[arrayIndex] == "."
  ) {
    return <button className="o-buttons o-buttons--secondary">.</button>;
  } else if (page === currentPagination[arrayIndex]) {
    return (
      <button
        onClick={() => {
          setOffset((currentPagination[arrayIndex] - 1) * maxResults);
          setPage(currentPagination[arrayIndex]);
        }}
        className="o-buttons o-buttons--secondary"
        aria-current="page"
      >
        {currentPagination[arrayIndex]}
      </button>
    );
  }
    return (
			<button
				onClick={() => {
					setOffset((currentPagination[arrayIndex] - 1) * maxResults);
					setPage(currentPagination[arrayIndex]);
				}}
				className="o-buttons o-buttons--secondary"
			>
				{currentPagination[arrayIndex]}
			</button>
		);
}

export default PaginationSquare;