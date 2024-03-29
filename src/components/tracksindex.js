import SongCard from './trackscontainer.tsx';

const Songs = ({mergedTracks, handleSelect}) => {
  return mergedTracks.map((track) => {
    const {uri} = track;
    return (
      <div className="" key={track.id}>
        <SongCard
          uri={uri}
          imgSrc={track.album.images[1].url}
          title={track.name}
          artists={track.artists}
          album={track.album.name}
          releasedate={track.album.release_date}
          handleSelect={handleSelect}
          Selected={track.Selected}
        />
      </div>
    );
  });
};

export default Songs;