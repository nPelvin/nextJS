import { useEffect, useState } from "react";
import PaginationSmall from "../ft/PaginationSmall";
import Script from "next/script";

export function Home() {
	const [searchTerm, setSearchTerm] = useState(null);
	const [apiData, setApiData] = useState("Loading");
	//pagination variables
	const [offset, setOffset] = useState(0);
	const [maxResults, setMaxResults] = useState(100);
	const [resultsReturned, setResultsReturned] = useState(0);
	const [page, setPage] = useState(1);

	const api2 =
		"https://guarded-dusk-77491.herokuapp.com/https://api.ft.com/content/search/v1?";

	useEffect(() => {
		fetch(api2, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-Api-Key": "59cbaf20e3e06d3565778e7b6e0044a4fa7f43429198e666d8c855a0",
			},
			body: JSON.stringify({
				queryString: `${
					searchTerm
						? `title:\"${searchTerm}\" AND lastPublishDateTime:>2017-01-01T00:00:00Z`
						: `lastPublishDateTime:>2017-01-01T00:00:00Z`
				} `,
				resultContext: {
					aspects: [
						"title",
						"lifecycle",
						"location",
						"summary",
						"editorial",
						"images",
					],
					offset: `${offset}`,
					sortOrder: "DESC",
					sortField: "initialPublishDateTime",
				},
			}),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setApiData(body);
				console.log(body);
				setResultsReturned(body.results[0].indexCount);
			})
			.catch((err) => {
				console.error(err);
			});
	}, [searchTerm, offset]);

	return (
    <main role="main" className="o-colors-page-background">
      <PaginationSmall
        apiData={apiData}
        setApiData={setApiData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        resultsReturned={resultsReturned}
        offset={offset}
        setOffset={setOffset}
        maxResults={maxResults}
        page={page}
        setPage={setPage}
      />
      <div className="o-colors-page-background o-grid-container o-typography-wrapper">
 
      </div>
      <>
        <Script src="https://www.ft.com/__origami/service/build/v3/bundles/js?components=o-grid@^6.0.0,o-normalise@^3.0.0,o-fonts@^5.0.0,o-table@^9.0.2,o-autoinit@^3.0.0&system_code=origami" />
      </>
    </main>
  );
}

export default Home;
