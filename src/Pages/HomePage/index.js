import HeroMovie from "../../Components/HeroMovie";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import MovieList from "../../Components/MovieList";

const HeroData = {
  poster:
    "https://static.cdn.asset.filimo.com/flmt/mov_cvr_33374_860.jpg?width=1440&quality=85&secret=I6Oy0kCcNs12AYDELLMrmQ",
  title: "ted lasso",
  age: "14",
  genres: ["drama", "comody", "sport"],
  playLink: "https://www.filimo.com/m/33374",
  infoLink: "#",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};
export default function HomePage() {
  return (
    <PrimaryLayout>
      <HeroMovie data={HeroData} />
      <MovieList title="Spotlight" url="movies" />
      <MovieList title="Popular TV" url="movies?page=2" />
      <MovieList title="New On Crackle" url="movies?page=3" />
    </PrimaryLayout>
  );
}
