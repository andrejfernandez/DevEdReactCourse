const LibrarySong = ({
	audioRef,
	isPlaying,
	song,
	setSongs,
	id,
	songs,
	setCurrentSong,
}) => {
	// Handler
	const songSelectHandler = async () => {
		await setCurrentSong(song);
		// Add active state
		const newSongs = songs.map((song) => {
			if (song.id === id) {
				//Song.id is from state, id is from selected song
				// If they match, set active to true
				return {
					...song,
					active: true,
				};
			} else {
				return {
					...song,
					active: false,
				};
			}
		});
		setSongs(newSongs); // Updates the songs list to show which one is active
		if (isPlaying) audioRef.current.play();
	};

	return (
		<div
			className={`library-song ${song.active ? "selected" : ""}`}
			onClick={songSelectHandler}
		>
			<img src={song.cover} alt={song.name}></img>
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
