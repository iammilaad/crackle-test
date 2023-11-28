import { Fragment, useState } from "react";
import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import { api } from "../../utils/api";

export default function NewMovie() {
  const [data, setData] = useState({});
  //   function onChange(e) {
  //     setData({
  //       ...data,
  //       [e.target.name]: e.target.value,
  //     });
  //   }
  function submit(e) {
    e.preventDefault();
    console.log(e.target);
    // api
    //   .post("/movies", {
    //     title: title,
    //     imdb_id: imdb_id,
    //     country: country,
    //     year: year,
    //   })
    //   .then(function (res) {})
    //   .catch(function (e) {});
  }
  return (
    <Fragment>
      <PrimaryLayout>
        <div className="content">
          <form onSubmit={submit}>
            <input name="title" placeholder="title" />
            <input name="imdb_id" placeholder="imdb_id" />
            <input name="country" placeholder="country" />
            <input name="year" placeholder="year" />
            <button type="submit">send</button>
          </form>
        </div>
      </PrimaryLayout>
    </Fragment>
  );
}
