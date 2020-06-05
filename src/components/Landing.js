import React, { Fragment } from "react";

class Landing extends React.Component {
	constructor() {
		super();
		this.landingRef = React.createRef();
		this.state = {
			shadow: "0",
			mouseDown: false,
		};
	}

	changeShadow = (e) => {
		if (!this.state.mouseDown) return;
		e.persist();
		e.preventDefault();
		const {
			offsetHeight: height,
			offsetWidth: width,
		} = this.landingRef.current;
		const { clientX: x, clientY: y } = e;

		const walk = 80;
		const xWalk = Math.round((x / width) * walk - walk / 2);
		const yWalk = Math.round((y / height) * walk - walk / 2);

		this.setState({
			shadow: `${xWalk * 2}px ${yWalk * 2}px 0 rgba(255,0,0,0.3)`,
		});
	};

	render() {
		console.log("rendering");
		return (
			<Fragment>
				<div
					className="landing"
					ref={this.landingRef}
					onMouseDown={() => this.setState({ mouseDown: true })}
					onMouseMove={this.changeShadow}
					onMouseUp={() => this.setState({ mouseDown: false })}
					onMouseLeave={() => this.setState({ mouseDown: false })}
					style={{ textShadow: this.state.shadow }}
				>
					The Un-Productivity App
				</div>
			</Fragment>
		);
	}
}

export default Landing;
