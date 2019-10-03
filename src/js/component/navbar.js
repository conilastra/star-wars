import React from "react";
import { Link } from "react-router-dom";

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
						<Link to="/demo">
							<div className="btn-group">
								<button
									type="button"
									className="btn btn-primary dropdown-toggle"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false">
									Favorites
								</button>
								<div className="dropdown-menu">Hello :)</div>
							</div>
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}
