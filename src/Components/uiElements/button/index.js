import { Fragment } from "react";
import { Style } from "./style";

export default function Button(props) {
  const { children, className, icon } = props;
  function renderFarm() {
    if (icon) {
      return (
        <div className="with-icon">
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
    <Style className={className} href="#">
      {renderFarm()}
    </Style>
  );
}
