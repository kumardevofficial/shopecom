import PriceFilter from "./filter-button-group/PriceFilter";
import RatingFilter from "./filter-button-group/RatingFilter";
import "../App.css";

const SearchPage = () => {
  return (
    <>
      <div className="container m-5 search-container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form className="form-inline search-line">
              <input
                className="form-control mr-sm-2 w-75"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="container w-75 m-auto mt-5 search-container filterDiv">
          <PriceFilter />
          <RatingFilter />
        </div>
      </div>
    </>
  );
};

export default SearchPage;
