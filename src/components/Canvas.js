import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

function mapStateToProps(state) {
	return {
		canvas: state.canvas,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

class Canvas extends React.Component {
	constructor() {
		super();
		this.draw = this.draw.bind(this);
		this.canvasRef = React.createRef();
		this.sizeRef = React.createRef();
		this.colourRef = React.createRef();
	}

	isDrawing = false;
	lastX = 0;
	lastY = 0;
	hue = 1;

	componentDidMount() {
		this.canvas = this.canvasRef.current;
		this.ctx = this.canvas.getContext("2d");
		this.canvas.width = this.ctx.canvas.clientWidth;
		this.canvas.height = this.ctx.canvas.clientHeight;
		/*this.ctx.strokeStyle = this.props.canvas.hex;*/
	}

	componentDidUpdate() {
		this.ctx.strokeStyle = this.props.canvas.hex; // needed to override the default state initialised when component mounts
		this.ctx.lineWidth = this.props.canvas.size;
	}

	draw(e) {
		e.persist();
		if (!this.isDrawing) return; // cancels if mouse is not down
		this.ctx.lineWidth = this.props.canvas.size;
		this.ctx.lineJoin = "round";
		this.ctx.lineCap = "round";
		this.ctx.strokeStyle = this.props.canvas.hue
			? `hsl(${this.hue}, 100%, 50%)`
			: this.colourRef.current.value;
		this.ctx.beginPath();
		this.ctx.moveTo(this.lastX, this.lastY);
		this.ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		this.ctx.stroke();
		[this.lastX, this.lastY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY]; // updates draw location
		this.hue = this.hue + 20;
	}

	render() {
		console.log("rendering");
		return (
			<div className="canvas-landing">
				<div className="canvas-inputs">
					<form action="">
						<label htmlFor="size">Size</label>
						<input
							ref={this.sizeRef}
							type="range"
							name="size"
							min="1"
							max="200"
							// onInput triggers too many renders
							onInput={() => {
								this.props.changeSize(this.sizeRef.current.value);
							}}
						/>
					</form>
					<form action="">
						<label htmlFor="colour">Colour</label>
						<input
							ref={this.colourRef}
							type="color"
							name="colour"
							value={this.props.canvas.hex}
							onChange={() => {
								this.props.changeHue(false);
								this.props.changeColour(this.colourRef.current.value);
							}}
						/>
					</form>
					<button onClick={() => this.props.changeHue(!this.props.canvas.hue)}>
						Go wild
					</button>
				</div>
				<canvas
					className="canvas"
					ref={this.canvasRef}
					onMouseDown={(e) => {
						this.isDrawing = true;
						[this.lastX, this.lastY] = [
							e.nativeEvent.offsetX,
							e.nativeEvent.offsetY,
						];
					}}
					onMouseMove={(e) => this.draw(e)}
					onMouseUp={() => (this.isDrawing = false)}
					onMouseLeave={() => (this.isDrawing = false)}
				></canvas>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
