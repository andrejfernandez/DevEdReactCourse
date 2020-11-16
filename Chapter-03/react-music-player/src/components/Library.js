import LibrarySong from "./LibrarySong";

const Library = ({ audioRef, songs, setCurrentSong, isPlaying }) => {
	return (
		<div className="library">
			<h2>Library</h2>
			<div className="library-songs">
				{/* For each song in songs, map it to a LibrarySong */}
				{songs.map((song) => (
					<LibrarySong
						song={song}
						id={song.id}
						key={song.id}
						songs={songs}
						setCurrentSong={setCurrentSong}
						audioRef={audioRef}
						isPlaying={isPlaying}
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
