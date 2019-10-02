import React from "react";
import { Card } from "./card";
import PropTypes from "prop-types";

export class CardHolder extends React.Component {
	render() {
		return (
			<section className="container py-2 mb-5">
				<h2 className="text-danger py-3">{this.props.title}</h2>
				<div className="row flex-row flex-nowrap">
					<Card name="Luke Skywalker" gender="Male" hair="blond" eyes="blue" />
					<Card name="Luke Skywalker" gender="Male" hair="blond" eyes="blue" />
					<Card name="Luke Skywalker" gender="Male" hair="blond" eyes="blue" />
					<Card name="Luke Skywalker" gender="Male" hair="blond" eyes="blue" />
					<Card name="Luke Skywalker" gender="Male" hair="blond" eyes="blue" />
					<Card name="Luke Skywalker" gender="Male" hair="blond" eyes="blue" />
				</div>
			</section>
		);
	}
}

CardHolder.propTypes = {
	title: PropTypes.string
};
