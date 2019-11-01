import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";

export class CharacterCard extends React.Component {
	render() {
		return (
			<div className="card col-7 col-md-4 col-lg-3 p-0 mx-3">
				<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{this.props.character.name}</h5>
					<p className="card-text my-0">Gender: {this.props.character.gender} </p>
					<p className="card-text my-0">Hair color: {this.props.character.hair_color} </p>
					<p className="card-text pb-3">Eye-color: {this.props.character.eye_color}</p>
					<Link to={`/single/${this.props.id}`}>
						<button className="btn btn-outline-primary">Learn more!</button>
					</Link>
					<Consumer>
						{({ store, actions }) => {
							return (
								<button
									className="btn btn-outline-warning float-right"
									onClick={() => actions.handleFav(this.props.character)}>
									<i
										className={
											store.favs.filter(i => i.name === this.props.character.name).length === 0
												? "far fa-heart"
												: "fas fa-heart"
										}
									/>
								</button>
							);
						}}
					</Consumer>
				</div>
			</div>
		);
	}
}

CharacterCard.propTypes = {
	character: PropTypes.object,
	name: PropTypes.string,
	gender: PropTypes.string,
	eyes: PropTypes.string,
	hair: PropTypes.string,
	id: PropTypes.number
};
