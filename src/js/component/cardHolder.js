import React from "react";
import { Card } from "./card";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";

export class CardHolder extends React.Component {
	render() {
		const { title } = this.props;

		return (
			<section className="container py-2 mb-5 vw-100">
				<h2 className="text-danger py-3">{title}</h2>
				<div className="row flex-row flex-nowrap overflow-auto">
					<Consumer>
						{({ store }) => {
							return store["characters"].map(item => (
								<Card
									name={item.name}
									gender={item.gender}
									hair={item.hair}
									eyes={item.eyes}
									key={item.name}
								/>
							));
						}}
					</Consumer>
				</div>
			</section>
		);
	}
}

CardHolder.propTypes = {
	title: PropTypes.string,
	name: PropTypes.string,
	gender: PropTypes.string,
	eyes: PropTypes.string,
	hair: PropTypes.string
};
