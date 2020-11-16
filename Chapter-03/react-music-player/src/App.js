//Import Styles
import "./styles/app.scss";
// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";

//Import Data
import data from "./data";
import { useState, useRef } from "react";

function App() {
	//Ref
	const audioRef = useRef(null); // References the audio element

	// State
	const [songs, setSongs] = useState(data()); // Grabbing song data
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [songInfo, setSongInfo] = useState({
		currentTime: 0,
		duration: 0,
	});

	// Event handlers
	const timeUpdateHandler = (e) => {
		// Update the time using the event
		const currentTime = e.target.currentTime;
		const duration = e.target.duration;
		//console.log(e.target.duration);
		setSongInfo({ ...songInfo, currentTime, duration });
	};

	return (
		<div className="App">
			<Song currentSong={currentSong} />
			<Player
				currentSong={currentSong}
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				audioRef={audioRef}
				songInfo={songInfo}
				setSongInfo={setSongInfo}
			/>
			<Library
				audioRef={audioRef}
				songs={songs}
				setCurrentSong={setCurrentSong}
				isPlaying={isPlaying}
			/>
			<audio
				onTimeUpdate={timeUpdateHandler}
				onLoadedMetadata={timeUpdateHandler}
				ref={audioRef}
				src={currentSong.audio}
			></audio>
		</div>
	);
}

export default App;
