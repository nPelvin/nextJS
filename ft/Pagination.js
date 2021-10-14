import React, { useState, useEffect } from "react";
import Header from "./Header";
import Headline from "./Headline";
import PaginationRow from "./PaginationRow";

function Pagination({
  apiData,
  setSearchTerm,
  resultsReturned,
  offset,
  setOffset,
  maxResults,
  page,
  searchTerm,
  setPage,
}) {
  const [currentPagination, setCurrentPagination] = useState([
    1, 2, 3, 4, 5, 6, 7,
  ]);

  function paginationArray(activePage, resultsReturned) {
    let maxPages = Math.ceil(resultsReturned / 100);

    // It's always a 1 at Position 1 in Pagination array
    let answer = [1];

    // If there are less than 7 pages or the active page is less than 3 than P2 is number 2. Else it is a Dot.
    activePage < 4 && maxPages < 8
      ? answer.push(2, 3, 4, 5, 6, 7)
      : answer.push(".");

    //less than 7 pages - no dots
    maxPages > 40 ? (maxPages = 40) : null;
    maxPages < 8 ? (answer = [1, 2, 3, 4, 5, 6, 7]) : null;
    maxPages < 8 ? answer.splice(maxPages) : null;

    //greater than 7 pages dot at P2 and P6
    activePage > 3 &&
    maxPages > 7 &&
    activePage < maxPages - 2 &&
    answer[1] === "."
      ? answer.push(activePage - 1, activePage, activePage + 1, ".", maxPages)
      : null;

    //dot at p3 when on maxpage-2
    maxPages > 7 && activePage === maxPages - 2
      ? (answer = [
          1,
          2,
          ".",
          maxPages - 3,
          maxPages - 2,
          maxPages - 1,
          maxPages,
        ])
      : null;

    //dot at p4 when on p1,2 or mp or mp-1
    (maxPages > 7 && activePage < 3) || activePage > maxPages - 2
      ? (answer = [1, 2, 3, ".", maxPages - 2, maxPages - 1, maxPages])
      : null;

    //dot at p5 when on p3 and mp=8 or greater
    maxPages > 7 && activePage === 3
      ? (answer = [1, 2, 3, 4, ".", maxPages - 1, maxPages])
      : null;

    return answer;
  }
  useEffect(() => {
    // Update the document title using the browser API
    setCurrentPagination(paginationArray(page, resultsReturned));
  }, [page, resultsReturned]);

  return (
    <div>
      <Header
        apiData={apiData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        resultsReturned={resultsReturned}
        offset={offset}
        maxResults={maxResults}
        page={page}
        setPage={setPage}
        setOffset={setOffset}
      />

      <div className="o-buttons-pagination pagination">
        <a
          href="#"
          className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-left o-buttons-icon--icon-only
        "
          disabled
        >
          <span className="o-buttons-icon__label">Fewer results</span>
        </a>
        <PaginationRow
          page={page}
          setOffset={setOffset}
          offset={offset}
          setPage={setPage}
          maxResults={maxResults}
          currentPagination={currentPagination}
        />

        <a
          href="#"
          className="
          o-buttons o-buttons--secondary
          o-buttons-icon o-buttons-icon--arrow-right o-buttons-icon--icon-only
        "
          disabled
        >
          <span className="o-buttons-icon__label">More results</span>
        </a>
      </div>

      <br className="demo-break" />
      <Headline apiData={apiData} />
      <PaginationRow
        page={page}
        setOffset={setOffset}
        offset={offset}
        setPage={setPage}
        maxResults={maxResults}
        currentPagination={currentPagination}
      />
    </div>
  );
}

export default Pagination;