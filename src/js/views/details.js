import React from "react";
import { Consumer } from "../store/appContext";

import "../../styles/demo.scss";

export const Detail = () => {
	return (
		<Consumer>
			{({ store }) => {
				return (
					<main className="container">
						<article className="row">
							<img className="col-6 px-0" src="https://via.placeholder.com/800x600" />
							<div className="col-6 text-center">
								<h2 className="py-2">{store.details[0].name}</h2>
								<p>
									The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke
									now deploys his merciless legions to seize military control of the galaxy. Only
									General Leia Organas band of RESISTANCE fighters stand against the rising tyranny,
									certain that Jedi Master Luke Skywalker will return and restore a spark of hope to
									the fight. But the Resistance has been exposed. As the First Order speeds toward the
									rebel base, the brave heroes mount a desperate escape....
								</p>
							</div>
						</article>

						<div className="row border-top border-danger text-danger text-center">
							{Object.keys(store.details).map((item, i) => (
								<div className="col-2 p-4" key={i}>
									<h6>Name</h6>
									<p>{item.name}</p>
								</div>
							))}
						</div>
					</main>
				);
			}}
		</Consumer>
	);
};
