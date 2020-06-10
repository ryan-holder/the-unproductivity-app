// Add filters to voice

import React from "react";
import MicRecorder from "mic-recorder-to-mp3";
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

const mp3Recorder = new MicRecorder({ bitRate: 128 });

class Memos extends React.Component {
	componentDidMount() {
		navigator.getUserMedia(
			{ audio: true },
			() => {
				console.log("Permission granted");
				this.props.isBlocked(false);
			},
			() => {
				console.log("Permission denied");
				this.props.isBlocked(true);
			}
		);
	}

	startRecording = () => {
		if (this.props.memos.recording) return; // stops recording bug when spamming play
		if (this.props.memos.blocked) {
			// could use permissions.query instead, but limited support on IE...
			alert(
				"You need to give permission for us to use the microphone and then reload the page"
			);
		} else {
			this.props.isRecording(true);
			mp3Recorder
				.start()
				.catch((e) => console.error("Something went wrong", e));
		}
	};

	stopRecording = () => {
		//this prevents empty audio files from loading when stopRecording is clicked
		if (!this.props.memos.recording) return;
		mp3Recorder
			.stop()
			.getMp3()
			.then(([buffer, blob]) => {
				const file = new File(buffer, "test.mp3", {
					type: blob.type,
					lastModified: Date.now(),
				});
				const recording = new Audio(URL.createObjectURL(file));
				this.props.isRecording(false);
				this.props.saveMemo(recording, Date.now());
			});
	};

	render() {
		return (
			<div className="memos-landing">
				<div className="button-container">
					<button
						className={this.props.memos.recording ? "play-active" : ""}
						onClick={this.startRecording}
					>
						&#x25b6;
					</button>
					<button
						className={this.props.memos.recording ? "stop-active" : ""}
						onClick={this.stopRecording}
					>
						&#9632;
					</button>
				</div>
				<div
					className={
						this.props.memos.recordings.length === 0 ? "" : "recordings"
					}
				>
					{this.props.memos.recordings.map((recording, i) => (
						<div className="recording" key={i}>
							<audio controls index={i} src={recording.audio.src}>
								Your browser does not support the audio element.
							</audio>
							<button
								className="recordings-remove"
								index={i}
								onClick={() => this.props.removeMemo(i)}
							>
								&times;
							</button>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Memos);
