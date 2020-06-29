import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actionCreators";

function mapStateToProps(state) {
	return {
		todos: state.todos,
		canvas: state.canvas,
		memos: state.memos,
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

class Canvas extends React.Component {
	constructor() {
		super();
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.handleTouch = this.handleTouch.bind(this);
		this.draw = this.draw.bind(this);
		this.handleMouseDown = this.handleMouseDown.bind(this);
		this.touchDraw = this.touchDraw.bind(this);
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
		this.ctx.lineJoin = "round";
		this.ctx.lineCap = "round";
	}

	componentDidUpdate() {
		this.ctx.strokeStyle = this.props.canvas.hex; // required to override the default state initialised when component mounts
		this.ctx.lineWidth = this.props.canvas.size;
	}

	handleMouseDown(e) {
		this.isDrawing = true;
		[this.lastX, this.lastY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
	}

	handleTouch(e) {
		e.persist();
		this.isDrawing = true;
		const rect = e.target.getBoundingClientRect();
		[this.lastX, this.lastY] = [
			"X",
			e.nativeEvent.touches[0].pageX - rect.left,
			e.nativeEvent.touches[0].pageY - rect.top,
		];
	}

	touchDraw(e) {
		e.persist();
		const rect = e.target.getBoundingClientRect();
		if (!this.isDrawing) return; // cancels if mouse is not down
		this.ctx.lineWidth = this.props.canvas.size;
		this.ctx.strokeStyle = this.props.canvas.hue
			? `hsl(${this.hue}, 100%, 50%)`
			: this.colourRef.current.value;
		this.ctx.beginPath();
		this.ctx.moveTo(this.lastX, this.lastY);
		this.ctx.lineTo(
			e.nativeEvent.touches[0].pageX - rect.left,
			e.nativeEvent.touches[0].pageY - rect.top
		);
		this.ctx.stroke();
		[this.lastX, this.lastY] = [
			e.nativeEvent.touches[0].pageX - rect.left,
			e.nativeEvent.touches[0].pageY - rect.top,
		];
		this.hue = this.hue + 15;
		console.log(this.lastX, this.lastY);
	}

	draw(e) {
		console.log("drawing");
		e.persist();
		if (!this.isDrawing) return; // cancels if mouse is not down
		this.ctx.lineWidth = this.props.canvas.size;
		this.ctx.strokeStyle = this.props.canvas.hue
			? `hsl(${this.hue}, 100%, 50%)`
			: this.colourRef.current.value;
		this.ctx.beginPath();
		this.ctx.moveTo(this.lastX, this.lastY);
		this.ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		this.ctx.stroke();
		[this.lastX, this.lastY] = [e.nativeEvent.offsetX, e.nativeEvent.offsetY]; // updates draw location
		this.hue = this.hue + 15;
	}

	clear = () => {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};

	render() {
		return (
			<div className="canvas-landing">
				<div className="canvas-inputs">
					<input
						ref={this.sizeRef}
						type="range"
						name="size"
						min="1"
						max="200"
						onInput={() => {
							this.props.changeSize(this.sizeRef.current.value);
						}}
					/>
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
					<button
						className={this.props.canvas.hue ? "hue-active" : ""}
						onClick={() => this.props.changeHue(!this.props.canvas.hue)}
					>
						<span role="img" aria-label="party-emoji">
							🎉🎉🎉
						</span>
					</button>
					<button onClick={this.clear}>Clear</button>
				</div>
				<canvas
					className="canvas"
					ref={this.canvasRef}
					/*onMouseDown={(e) => this.handleMouseDown(e)}
					onMouseMove={(e) => this.draw(e)}
					onMouseUp={() => (this.isDrawing = false)}
					onMouseLeave={() => (this.isDrawing = false)}*/
					onTouchStart={(e) => this.handleTouch(e)}
					onTouchMove={(e) => this.touchDraw(e)}
					onTouchEnd={() => (this.isDrawing = false)}
				></canvas>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Canvas);
