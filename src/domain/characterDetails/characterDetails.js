import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchCharacterDetails } from "../characterDetails/characterDetailsActions";
import ListView from "../UI/listView";

import "./characterDetails.css";

class CharacterDetails extends Component {
	componentDidMount() {
		this.props.fetchCharacterDetails(this.props.characterID);
	}

	render() {
		const { characterDetails } = this.props;

		if (characterDetails) {
			const characterImage = `${characterDetails.thumbnail.path}.${characterDetails.thumbnail.extension}`;
			return (
				<div className="character-details">
					<div className="character-details__banner" style={{ backgroundImage: `url(${characterImage})` }} >
						<Link to="/" className="character-details__back-link">Back</Link>
						<div className="character-details__overlay">
							<div className="character-details__title">{characterDetails.name}</div>
						</div>
					</div>
					<div className="row list-view">
						<div className="col-sm-4 col-md-3">
							<ListView
								title="Comics"
								count={characterDetails.comics.returned}
								countTotal={characterDetails.comics.available}
								list={characterDetails.comics.items}
							/>
						</div>
						<div className="col-sm-4 col-md-3">
							<ListView
								title="Series"
								count={characterDetails.series.returned}
								countTotal={characterDetails.series.available}
								list={characterDetails.series.items}
							/>
						</div>
						<div className="col-sm-4 col-md-3">
							<ListView
								title="Stories"
								count={characterDetails.stories.returned}
								countTotal={characterDetails.stories.available}
								list={characterDetails.stories.items}
							/>
						</div>
						<div className="col-sm-4 col-md-3">
							<ListView
								title="Events"
								count={characterDetails.events.returned}
								countTotal={characterDetails.events.available}
								list={characterDetails.events.items}
							/>
						</div>
					</div>
				</div>
			);
		} return (
			<div> Loading... </div>
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		characterID: ownProps.match.params.id,
		characterDetails: state.characterDetails[0]
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCharacterDetails }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails);

