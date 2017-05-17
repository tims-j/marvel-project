import React from "react";

import "../UI/list-item.css";

const ListItem = ({ list }) => {
	if (list.length === 0) {
		return (
			<div className="list-item list-item--empty">REDACTED</div>
		);
	} return (
		<div>
			{list.map(item => {
				return (
					<div className="list-item" key={item.name}>{item.name}</div>
				);
			})}
		</div>
	);
};

export default ListItem;
