import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Consumer } from "../store/appContext";

export class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fav: false
		};

		this.saveFav = this.saveFav.bind(this);
	}

	saveFav(e) {
		e.preventDefault();
		this.setState({
			fav: !this.state.fav
		});
	}

	render() {
		return (
			<Consumer>
				{({ store, actions }) => {
					return (
						<>
							{store.characters.map((item, index) => (
								<div className="card col-7 col-md-4 col-lg-3 p-0 mx-3" key={index}>
									<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{item.name}</h5>
										<p className="card-text my-0">Gender: {item.gender} </p>
										<p className="card-text my-0">Hair color: {item["hair_color"]} </p>
										<p className="card-text pb-3">Eye-color: {item["eye_color"]}</p>
										<button className="btn btn-outline-primary">Learn more!</button>
										<button className="btn btn-outline-warning float-right" onClick={this.saveFav}>
											<i className={this.state.fav ? "fas fa-heart" : "far fa-heart"} />
										</button>
									</div>
								</div>
							))}
						</>
					);
				}}
			</Consumer>
		);
	}
}
