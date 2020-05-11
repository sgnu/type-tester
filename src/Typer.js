import React from 'react';
import './Typer.css'

const textVar = "The quick brown fox jumps over the lazy brown dog.";

class Typer extends React.Component {
	render() {
		return (
			<div className="Typer">
				<h1>Type Tester</h1>
				<TyperTextArea typeText={textVar} />
			</div>
		)
	}
}

class TyperTextArea extends React.Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			active: false,
			background: "#ffffff24",
			incorrectness: false,
			value: ""
		};
	}

	handleChange(e) {
		if (!this.state.active) {
			this.setState({ active: true });
		}
		this.setState({
			value: e.target.value
		});
		this.checkinCorrectness(e.target.value);
	}

	handleKeyDown(e) {
		if (e.keyCode === 27) {
			e.target.value = "";
		}
	}

	checkinCorrectness(inputText) {
		this.setState({
			background: (this.props.typeText.substring(0, inputText.length) == inputText) ? "#ffffff24" : "red"
		});
	}

	getBackground() {
		if (!this.isIncorrect) {
			return "#ffffff24";
		} else {
			return "red";
		}
	}

	render() {
		return (
			<div className="TyperTextArea">
				<p className="textToType">{this.props.typeText}</p>
				<textarea autoFocus
					placeholder="Type text here"
					className="userInput"
					style={{ background: this.state.background }}
					onKeyDown={this.handleKeyDown}
					onChange={this.handleChange}
				>
				</textarea>
			</div>
		)
	}
}

export default Typer;