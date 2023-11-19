import { Fragment } from "react";
import { Style } from "./style";

export default function FooterMenu(props) {
  const { menuTitle, items } = props;
  function renderFarm() {
    return items.map(({ name, link }, index) => {
      return (
        <li key={index}>
          <a href={link}>{name}</a>
        </li>
      );
    });
  }
  return (
    <Style>
      <h3 className="title">{menuTitle}</h3>
      <ul>{renderFarm()}</ul>
    </Style>
  );
}
