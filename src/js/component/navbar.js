import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light mb-3">
				<div className="container">
					<Link to="/">
						<img
							height="70"
							src="https://icon-library.net/images/star-wars-icon-png/star-wars-icon-png-8.jpg"
						/>
					</Link>
					<div className="ml-auto">
						<Consumer>
							{({ store, actions }) => {
								return (
									<div className="dropdown">
										<button
											type="button"
											className="btn btn-primary dropdown-toggle"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false">
											Favorites <span className="badge badge-secondary">{store.favs.length}</span>
										</button>
										<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
											<a className="dropdown-item" href="#">
												Action
											</a>
										</div>
									</div>
								);
							}}
						</Consumer>
					</div>
				</div>
			</nav>
		);
	}
}
