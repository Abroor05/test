import React, { useEffect, useState } from "react";
import { getProdact } from "../../services/App";
import Cards from "../../components/cards/Cards";

function Search() {
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getProdact().then(setSearchData);
  }, []);

  console.log(searchData?.results);
  

  return (
    <>
      <section>
        <div className="container">
          <div className="cards">
            {searchData?.results?.map((item) => {
              return <Cards item={item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Search;
