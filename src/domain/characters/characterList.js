import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchCharacters } from "../characters/characterActions";
import CharacterListItem from "./components/characterListItem";

import "./characterList.css";

class CharacterList extends Component {
	constructor(props) {
		super(props);
		this.state = { characters: [] };
	}

	componentDidMount() {
		this.props.fetchCharacters();
	}

	render() {
		const characters = this.props.characters.characters;

		if (characters) {
			return (
				<div className="row character-list">
					{ characters && characters.map(character => {
						return (
							<CharacterListItem
								key={character.id}
								id={character.id}
								name={character.name}
								thumbnail={character.thumbnail}
							/>
						);
					})}
				</div>
			);
		}
		return (
			<div> Loading Marvel Characters </div>
		);
	}
}

function mapStateToProps(state) {
	return {
		characters: state.characters
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchCharacters }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
