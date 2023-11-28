import PrimaryLayout from "../../Components/Layout/PrimaryLayout";
import Style from "./style";
import { api } from "../../utils/api";
import { useEffect, useState, useRef } from "react";
import { useSearchParams, createSearchParams } from "react-router-dom";

export default function Search() {
  const input = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [data, setData] = useState({
    data: [],
    metadata: {
      current_page: 1,
      per_page: 10,
      page_count: 1,
      total_count: 1,
    },
  });
  useEffect(function () {
    if (searchParams.get("q")) {
      getApi(searchParams.get("q"));
    }
  }, []);
  useEffect(function () {
    console.log(input.current.focus());
  }, []);
  function getApi(search) {
    api
      .get("movies", { params: { q: search } })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {});
  }
  function typing(event) {
    getApi(event.target.value);
    setSearchParams(createSearchParams({ q: event.target.value }));
  }
  function renderFarm() {
    return data.data.map(({ id, title, poster }) => {
      return (
        <li key={id}>
          <h2>{title}</h2>
          <img src={poster} style={{ width: "150px" }} />
        </li>
      );
    });
  }
  return (
    <PrimaryLayout>
      <Style>
        <div className="container">
          <div className="content">
            <input
              ref={input}
              onChange={typing}
              type="text"
              value={searchParams.get("q") ? searchParams.get("q") : ""}
              placeholder="type something..."
            />
          </div>
        </div>
        <ul>{renderFarm()}</ul>
      </Style>
    </PrimaryLayout>
  );
}
