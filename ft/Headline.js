import React from "react";

function Headline({ apiData }) {
	return (
    <div className="headline">
      {apiData !== "Loading" ? (
        apiData.results[0].results.map((x, index) => (
          <div key={index}>
            <h3>{x.title.title}</h3>
            <p>
              {x.editorial.subheading}
              {` - `}
              <a href={x.location.uri}>Link</a>
            </p>
            <br />
          </div>
        ))
      ) : (
        <div className="loading">
          <br />
          <h2>Fetching latest headlines...</h2>

          <br />
        </div>
      )}
      {/* {apiData ? console.log(apiData.results[0].results) : null} */}
    </div>
  );
}

export default Headline;
