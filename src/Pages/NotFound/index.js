import { Fragment } from "react";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <PrimaryLayout>
      <img src="https://www.digikala.com/statics/img/png/page-not-found.webp" />
      <h1>404 page</h1>
      <Link to="/">go to home</Link>
    </PrimaryLayout>
  );
}
