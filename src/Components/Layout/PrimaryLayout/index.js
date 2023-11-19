import { Fragment } from "react";
import Footer from "../../Footer";
import Header from "../../Header";

export default function PrimaryLayout(props) {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
}
