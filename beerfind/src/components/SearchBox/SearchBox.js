import React from "react";

function SearchBox({ onSubmit, query, onChange, onReset }) {
  return (
    <div className="box">
      <form
        className="form-outline"
        id="searchForm"
        onSubmit={onSubmit}
        onReset={onReset}
      >
        <div className="mb-3 mt-3">
          <label htmlFor="searchInput" className="form-label">
            Search beer
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            id="searchInput"
            value={query}
          />
        </div>
        <button type="submit" className="btn btn-warning ms-2">
          Search
        </button>
        <button type="reset" className="btn btn-warning ms-2">
          Reset
        </button>
      </form>
    </div>
  );
}

export default SearchBox;
