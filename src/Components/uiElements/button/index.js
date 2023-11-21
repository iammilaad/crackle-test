import { Fragment } from "react";
import { Style } from "./style";

export default function Button(props) {
  const {
    children,
    className,
    icon,
    size = "medium",
    type = "default",
  } = props;
  function renderFarm() {
    if (icon) {
      return (
        <div className="flex align-center gap-5">
          <span>
            <i className={icon} />
          </span>
          <span>{children}</span>
        </div>
      );
    } else {
      return <Fragment>{children}</Fragment>;
    }
  }
  return (
    <Style size={size} type={type}>
      <a className={className} href="#">
        {renderFarm()}
      </a>
    </Style>
  );
}
