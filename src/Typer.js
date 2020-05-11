import React from 'react';
import './Typer.css';
import TypingTests from './TypingTests'

class Typer extends React.Component {
	render() {
		return (
			<div className="Typer">
				<h1>Type Tester</h1>
				<TyperTextArea />
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
			cpm: 0,
			curTime: 0,
			incorrectness: false,
			startTime: 0,
			text: "",
			value: ""
		};
	}

	getTest() {
		let str = "";
		do {
			str = TypingTests[Math.floor(Math.random() * TypingTests.length)];
		} while (str === this.state.text)

		this.setState({
			text: str
		});
	}

	componentDidMount() {
		this.getTest();
	}

	handleChange(e) {
		if (!this.state.active) {
			this.setState({
				active: true,
				startTime: new Date()
			});
			this.interval = setInterval(() => this.updateTime(), 100);
		}
		this.setState({ value: e.target.value });

		if (e.target.value === this.state.text) {
			clearInterval(this.interval);
			this.setState({
				active: false,
				value: ""
			});
		} else {
			this.updateTime();
			this.checkIncorrectness(e.target.value);
		}
	}

	handleKeyDown(e) {
		if (e.keyCode === 27) {
			e.target.value = "";
		}
	}

	checkIncorrectness(inputText) {
		this.setState({
			background: (this.state.text.substring(0, inputText.length) === inputText) ? "#ffffff24" : "red"
		});
	}

	getBackground() {
		if (!this.isIncorrect) {
			return "#ffffff24";
		} else {
			return "red";
		}
	}

	updateTime() {
		this.setState({ curTime: new Date()});
		let str = this.state.value.replace(/\s/g, '');
		this.setState({cpm: (Math.round(str.length / ((this.state.curTime - this.state.startTime) / (1000 * 60))))});
	}

	render() {
		return (
			<div className="TyperTextArea">
				<p className="textToType">{this.state.text}</p>

				<p className="stats">Time: {((this.state.curTime - this.state.startTime) / 1000).toFixed(2)} sec | CPM: {this.state.cpm}</p>

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