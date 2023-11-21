import ReactPaginate from "react-paginate";
import Style from "./style";

export default function Pagination(props) {
  return (
    <Style>
      <ReactPaginate renderOnZeroPageCount={null} {...props} />
    </Style>
  );
}
