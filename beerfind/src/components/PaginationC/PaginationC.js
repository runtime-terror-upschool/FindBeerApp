import React from "react";
import Pagination from "react-js-pagination";

function PaginationC({
  activePage,
  itemsCountPerPage,
  onChange,
  totalItemsCount,
}) {
  return (
    <div className="d-flex justify-content-center mt-5 ">
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={totalItemsCount}
        onChange={onChange}
        nextPageText={"Next"}
        prevPageText={"Prev"}
        firstPageText={"First"}
        lastPageText={"Last"}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
}

export default PaginationC;
