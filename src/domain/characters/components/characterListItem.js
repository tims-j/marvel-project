import React from "react";
import { Link } from "react-router-dom";

import "./characterListItem.css";

const characterListItem = props => {
	const {
		id,
		name,
		thumbnail
	} = props;

	const characterImage = `${thumbnail.path}.${thumbnail.extension}`;

	return (
		<div className="col-sm-4 col-md-3">
			<Link className="character-list-item" to={`/character/${id}`}>
				<div className="character-list-item__image" style={{ backgroundImage: `url(${characterImage})` }} />
				<div className="character-list-item__overlay">
					<div className="character-list-item__title" to={`/character/${id}`}>{name}</div>
				</div>
			</Link>
		</div>
	);
};

export default characterListItem;
