import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const Discover = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  console.log(data);
  const genreTitle = "";

  if (isFetching) return <Loader title="Loading Songs...." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          # Explore Your Song
        </h2>
        <select
          onClick={() => {}}
          value=""
          className="bg-blue-500 text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre, idx) => (
            <option className="outline-none" value={genre.value} key={idx}>
              {genre.title}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.tracks?.map((song, ix) => (
          <SongCard key={song.key} song={song} i={ix} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
