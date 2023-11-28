import Button from "../uiElements/button";
import { Style } from "./style";

export default function HeroMovie({ data, children }) {
  const { poster, title, age, genres, playLink, infoLink, description } = data;
  return (
    <Style className="hero-section">
      <div className="hero-movie">
        <div
          className="poster"
          style={{
            backgroundImage:
              "url(https://us-thumbnail.s3-us-west-1.amazonaws.com/1/7/mm/p6izb_tnl_1920x1080.jpg?ts=20231122192623)",
          }}
          src={poster}
        />
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
        <div className="children relative"> {children}</div>
      </div>
    </Style>
  );
}
