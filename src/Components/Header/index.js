import Button from "../uiElements/button";
import { Style } from "./style";

export default function Header() {
  return (
    <Style>
      <div className="header">
        <div className="container">
          <div className="header-inner flex space-between">
            <div className="left flex gap-40 align-center">
              <div className="logo">
                <img src="assets/images/logo.svg" />
              </div>
              <div className="menu">
                <ul className="flex align-center gap-20">
                  <li>
                    <Button className="default" icon="fa-solid fa-film">
                      movies
                    </Button>
                  </li>
                  <li>
                    <Button className="default" icon="fa-solid fa-tv">
                      tv shows
                    </Button>
                  </li>
                  <li>
                    <Button className="default" icon="fa-solid fa-plus">
                      wathlist
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right flex gap-10 align-center">
              <Button icon="fa-solid fa-search" className="default">
                search
              </Button>
              <Button className="primary">create account</Button>
              <Button className="dark bold">sign in</Button>
            </div>
          </div>
        </div>
      </div>
    </Style>
  );
}
