import Button from "../uiElements/button";
import { Style } from "./style";

export default function HeroMovie({ data }) {
  const { poster, title, age, genres, playLink, infoLink, description } = data;
  return (
    <Style>
      <div className="hero-movie">
        <img className="poster" src={poster} />
        <div className="content flex align-center h-full relative">
          <div className="container">
            <h1 className="name">{title}</h1>
            <div className="flex gap-10 align-center">
              <div className="age">{`TV-${age}`}</div>
              <div className="genres">{genres.join(" . ")}</div>
            </div>
            <div className="flex gap-10">
              <div className="btn-group flex gap-10">
                <Button icon="fa-solid fa-play" size="large" type="primary">
                  Watch Now
                </Button>
                <Button size="large" type="dark">
                  More Info
                </Button>
              </div>
            </div>
            <div className="description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
