import React, { useState } from "react";
import Link from "next/link";
import Headline from "./Headline";
import PaginationSmall from "./PaginationSmall";

function Header({
	apiData,
	setSearchTerm,
	resultsReturned,
	offset,
	maxResults,
	page,
	setPage,
	setOffset,
}) {
	const [searchInput, setSearchInput] = useState("");

	function handleSearchInput(event) {
		setSearchInput(event.target.value);
	}

	function handleSubmit(event) {
		setSearchTerm(searchInput);
		event.preventDefault();
        setPage(1);
        setOffset(0);
	}
	return (
    <div>
      <header
        className="o-header o-header--simple"
        data-o-component="o-header"
        data-o-header--no-js
      >
        <div className="o-header__row o-header__top">
          <div className="o-header__container">
            <div className="o-header__top-wrapper">
              {/* <div className="o-header__top-column o-header__top-column--left">
								<a
									href="#o-header-search"
									className="o-header__top-link o-header__top-link--search"
									aria-controls="o-header-search"
									title="Open search bar"
								>
									<span className="o-header__top-link-label">
										Open search bar
									</span>
								</a>
							</div> */}

              <div className="o-header__top-column o-header__top-column--center">
                {/* <!--<div className="o-header__top-takeover"></div>--> */}
                <Link href="/">
                  <a
                    className="o-header__top-logo"
                    title="Go to Financial Times homepage"
                  >
                    {/* <span className="o-header__visually-hidden">
											Financial Times
										</span> */}
                  </a>
                </Link>
              </div>

              {/* <div className="o-header__top-column o-header__top-column--right"> */}
              {/* <!--<div className="o-header__top-takeover"></div>--> */}
              {/* <a
									className="o-header__top-link o-header__top-link--myft"
									href="/myft"
									aria-label="My F T"
								>
									<span className="o-header__visually-hidden">myFT</span>
								</a>
							</div> */}
            </div>
          </div>
        </div>

        <div
          id="o-header-search"
          className="o-header__row o-header__search o--if-js"
          role="search"
          data-o-header-search
        >
          <div className="o-header__container">
            <form
              className="o-header__search-form"
              action="/search"
              role="search"
              aria-label="Site search"
            >
              <label
                // className="o-header__visually-hidden"
                htmlFor="o-header-search-term-js"
                id="o-header-search-term-js-label"
              >
                Search the <abbr title="Financial Times">FT</abbr>
                <input
                  className="o-header__search-term"
                  id="o-header-search-term-js"
                  name="q"
                  type="text"
                  placeholder="Search the FT"
                />{" "}
              </label>
              <button
                // className="o-header__search-submit"
                // type="submit"
                onClick={handleSubmit}
              >
                &gt; Search
              </button>
              <button
                className="o-header__search-close"
                type="button"
                aria-controls="o-header-search"
                title="Close search bar"
              >
                <span className="o-header__visually-hidden">
                  Close search bar
                </span>
              </button>
            </form>
          </div>
        </div>
      </header>

      <div
        className="o-header__drawer"
        id="o-header-drawer"
        role="navigation"
        aria-label="Drawer menu"
        data-o-header-drawer
        data-o-header-drawer--no-js
      >
        <div className="o-header__drawer-inner">
          {/* <div className="o-header__drawer-tools"> */}
          {/* <a className="o-header__drawer-tools-logo" href="/">
								<span className="o-header__visually-hidden">
									Financial Times
								</span>
							</a> */}
          {/* <button
								type="button"
								className="o-header__drawer-tools-close"
								aria-controls="o-header-drawer"
								title="Close drawer menu"
							>
								<span className="o-header__visually-hidden">
									Close drawer menu
								</span>
							</button> */}
          {/* <p className="o-header__drawer-current-edition">UK Edition</p> */}
          {/* </div> */}

          <div className="o-header__drawer-search search-span">
            <form
              className="o-header__drawer-search-form"
              action="/search"
              role="search"
              aria-label="Site search"
            >
              <label
                className="o-header__visually-hidden"
                htmlFor="o-header-drawer-search-term"
                id="o-header-drawer-search-term"
              >
                Search the <abbr title="Financial Times">FT</abbr>
              </label>
              <input
                className="o-header__drawer-search-term"
                id="o-header-drawer-search-term"
                name="q"
                type="text"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder="Search the FT"
                value={searchInput}
                onChange={handleSearchInput}
              />
              <button
                className="o-header__drawer-search-submit"
                onClick={handleSubmit}
              >
                <span
                 className="o-header__visually-hidden"
                >
                  Search
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* <span className="startingPagination">
            can be removed later
				Results returned: {resultsReturned}, Page:{" "}
				{(maxResults + offset) / maxResults}/
				{Math.ceil(resultsReturned / maxResults)}
			</span> */}
      {/* <PaginationSmall page={page} /> */}
    </div>
  );
}

export default Header;
