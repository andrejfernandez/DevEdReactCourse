import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPlay,
	faPause,
	faAngleLeft,
	faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
	//Ref
	const audioRef = useRef(null); // References the audio element

	// Event Handlers
	const playSongHandler = () => {
		// Play/Pause the current song
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};

	const timeUpdateHandler = (e) => {
		// Update the time using the event
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		//console.log(e.target.duration);
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	const dragHandler = (e) => {
		// Update the audio element
		audioRef.current.currentTime = e.target.value;
		//...keep everything from before, set currentTime to: value
		setSongInfo({ ...songInfo, currentTime: e.target.value });
	};

	const getTime = (time) => {
		//Formats the current time to minutes and seconds
		return (
			Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
		);
	};

	//State
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	return (
		<div className="player">
			<div className="time-control">
				<p>{getTime(songInfo.currentTime)}</p>
				<input
					min={0}
					max={songInfo.duration}
					value={songInfo.currentTime}
					onChange={dragHandler}
					type="range"
				/>
				<p>{getTime(songInfo.duration)}</p>
			</div>
			<div className="play-control">
				{/* Import the icons, create components, and pass them in as props */}
				<FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
				<FontAwesomeIcon
					onClick={playSongHandler}
					className="play"
					size="2x"
					icon={isPlaying ? faPause : faPlay}
				/>
				<FontAwesomeIcon
					className="skip-forward"
					size="2x"
					icon={faAngleRight}
				/>
			</div>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
			></audio>
		</div>
	);
};

export default Player;
