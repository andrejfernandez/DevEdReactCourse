const LibrarySong = ({
	audioRef,
	isPlaying,
	song,
	id,
	key,
	songs,
	setCurrentSong,
}) => {
	// Handler
	const songSelectHandler = () => {
		setCurrentSong(song);
		audioRef.current.play();
		// Check if the song is playing
		if (isPlaying) {
			const playPromise = audioRef.current.play();
			if (playPromise !== undefined) {
				playPromise.then((audio) => {
					audioRef.current.play();
				});
			}
		}
	};

	return (
		<div className="library-song" onClick={songSelectHandler}>
			<img src={song.cover} alt={song.name}></img>
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
