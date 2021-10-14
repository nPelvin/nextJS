import React from 'react';

function PaginationSquare({ page, arrayIndex, setOffset, setPage, maxResults, currentPagination }) {

	if (
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