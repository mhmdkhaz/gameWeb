import UseFetchGet from "../hooks/UseGetData";
import Loader from "../component/Loader";

function LoaderData({ params }) {
  const { id } = params;

  const [data, isLoading] = UseFetchGet(
    "https://free-to-play-games-database.p.rapidapi.com/api/games"
  );

  console.log(id);

  if (isLoading) {
    return <Loader />;
  }

  return data;
}

export default LoaderData;
