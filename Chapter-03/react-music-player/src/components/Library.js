import { library } from "@fortawesome/fontawesome-svg-core";
import LibrarySong from "./LibrarySong";

const Library = ({
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  libraryStatus,
}) => {
  return (
    // library===default, if libraryStatus is true, activate-library to use scss
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {/* For each song in songs, map it to a LibrarySong */}
        {songs.map((song) => (
          <LibrarySong
            song={song}
            id={song.id}
            key={song.id}
            songs={songs}
            setSongs={setSongs}
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
