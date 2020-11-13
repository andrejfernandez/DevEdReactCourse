import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong }) => {
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
					/>
				))}
			</div>
		</div>
	);
};

export default Library;
