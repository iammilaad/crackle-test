import { useParams } from "react-router-dom";
import { Style } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";

export default function SingleMovie() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(function () {
    api
      .get(`/movies/${id}`)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function () {});
  }, []);

  return (
    <Style>
      <h1>{data.title}</h1>
      <img src={data.poster} />
    </Style>
  );
}
