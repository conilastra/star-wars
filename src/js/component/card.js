import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export class Card extends React.Component {
	render() {
		return (
			<div className="card col-4 p-0 mx-3">
				<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{this.props.name}</h5>
					<p className="card-text my-0">Gender: {this.props.gender}</p>
					<p className="card-text my-0">Hair color: {this.props.hair}</p>
					<p className="card-text pb-3">Eye-color: {this.props.eyes}</p>

					<button className="btn btn-outline-primary">Learn more!</button>
					<button className="btn btn-outline-warning float-right">
						<FontAwesomeIcon icon={faHeart} />
					</button>
				</div>
			</div>
		);
	}
}

Card.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair: PropTypes.string,
	eyes: PropTypes.string
};
