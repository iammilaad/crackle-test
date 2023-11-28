import { Button } from "antd";
import HeroMovie from "../../Components/HeroMovie";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import MovieList from "../../Components/MovieList";
import { useNavigate } from "react-router-dom";

const HeroData = {
  poster:
    "https://us-thumbnail.s3-us-west-1.amazonaws.com/1/7/mm/p6izb_tnl_1920x1080.jpg?ts=20231122192623",
  title: "ted lasso",
  age: "14",
  genres: ["drama", "comody", "sport"],
  playLink: "https://www.filimo.com/m/33374",
  infoLink: "#",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};
export default function HomePage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/movies");
  }
  return (
    <PrimaryLayout>
      <HeroMovie data={HeroData}>
        <MovieList title="Spotlight" url="movies" />
      </HeroMovie>
      <Button onClick={handleClick} type="primary">
        go to movies
      </Button>
      <MovieList title="Popular TV" url="movies?page=2" />
      <MovieList title="New On Crackle" url="movies?page=3" />
    </PrimaryLayout>
  );
}
