import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";
const SongDetails = () => {
  const { songid } = useParams();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });
  console.log({ songData });
  return (
    <div className="flex flex-col">
      <div className={`mb-10 mt-5 bg-${songData?.images.background}`}>
        <div>
          <h2 className="text-3xl font-bold text-white">
            Title : {songData?.title}
          </h2>
          <h3 className="text-2xl font-bold text-white">
            Genres : {songData?.genres.primary}
          </h3>
        </div>
        <h2 className="text-white text-2xl font-bold mt-5">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1].text.map((line, i) => (
              <p key={i} className="text-base font-normal text-gray-400">
                {line}
              </p>
            ))
          ) : (
            <p className="text-base font-normal text-gray-400">
              Sorry, no Lyrics found!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
