import { useState } from "react";
import Button from "../uiElements/button";
import { Style } from "./style";

export default function Header() {
  return (
    <Style>
      <div className="full-container">
        <div className="header-inner flex space-between">
          <div className="left flex gap-40 align-center">
            <div className="logo">
              <img src="assets/images/logo.svg" />
            </div>
            <div className="menu">
              <ul className="flex align-center gap-5">
                <li>
                  <Button size="large" icon="fa-solid fa-film">
                    movies
                  </Button>
                </li>
                <li>
                  <Button size="large" icon="fa-solid fa-tv">
                    tv shows
                  </Button>
                </li>
                <li>
                  <Button size="large" icon="fa-solid fa-plus">
                    wathlist
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="right flex gap-10 align-center">
            <Button icon="fa-solid fa-search">search</Button>
            <Button className="bold" type="primary">
              create account
            </Button>
            <Button className="bold" type="dark">
              sign in
            </Button>
          </div>
        </div>
      </div>
    </Style>
  );
}
