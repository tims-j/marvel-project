import React from "react";

const ListTitle = props => {
	const {
		title,
		count,
		countTotal
	} = props;

	return (
		<div className="list-item__title">
			{title}
			<span className="list-item--count">{count} / {countTotal}</span>
		</div>
	);
};

export default ListTitle;
