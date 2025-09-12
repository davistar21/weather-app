const SearchBox = (props) => {
  return (
    <section className="search-box">
      <div className="input-wrapper">
        <img src="/images/icon-search.svg" alt="" />
        <input type="text" placeholder="Search for a place..." />
      </div>
      <button>Search</button>
    </section>
  );
};

export default SearchBox;
