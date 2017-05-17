import React from "react";

import ListTitle from "./listTitle";
import ListItems from "./listItems";

import "../UI/list-view.css";

const ListItem = props => {
	const {
		title,
		count,
		countTotal,
		list
	} = props;

	return (
		<div>
			<ListTitle title={title} count={count} countTotal={countTotal} />
			<ListItems list={list} />
		</div>
	);
};

export default ListItem;
