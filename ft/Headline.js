import React from "react";

function Headline({ apiData }) {
	return (
		<div className="headline">
			{apiData
				? apiData.results[0].results.map((x, index) => (
						<div key={index}>
							<h3>{x.title.title}</h3>
							{/* Initial:{x.lifecycle.initialPublishDateTime}<br />
							Last:{x.lifecycle.lastPublishDateTime} */}
							{/* <br /> */}
							<p>
								{x.editorial.subheading}
								{` - `}
								<a href={x.location.uri}>Link</a>
							</p>
							<br />
						</div>
				  ))
				: null}
			{apiData ? console.log(apiData.results[0].results) : null}
		</div>
	);
}

export default Headline;
