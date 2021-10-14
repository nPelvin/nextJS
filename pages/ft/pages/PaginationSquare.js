import React from 'react';

function PaginationSquare({ page, arrayIndex, setOffset, setPage, maxResults, currentPagination }) {
   if (page === currentPagination[arrayIndex]) {
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