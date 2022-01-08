import React from "react";

function SearchBox({ onSubmit, query, onChange }) {
  return (
    <div className="box">
      <form className="form-outline" id="searchForm" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="searchInput" className="form-label">
            Search Meal
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="searchInput"
            value={query}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
