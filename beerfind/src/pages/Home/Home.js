import React, { useState } from "react";

//
import useFetch from "../../hooks/useFetch";
import useQuery from "../../hooks/useQuery";
import Card from "../../components/Card";
import Pagination from "../../components/PaginationC";
import SearchBox from "../../components/SearchBox/SearchBox";
import PhSlider from "../../components/Sliders/PhSlider";
import SrmSlider from "../../components/Sliders/SrmSlider";
import VolumeSlider from "../../components/Sliders/VolumeSlider";
import { buttonData } from "../../components/Sliders/buttonData";
import VolumeButton from "../../components/Sliders/VolumeButton";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [ph, setPh] = useState([0, 7]);
  const [volume, setVolume] = useState(20);
  const [srm, setSrm] = useState(0);
  const [button, setButton] = useState("none");

  const URL = `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=60&${button}=${volume}`;
  const SURL = `https://api.punkapi.com/v2`;
  const { data } = useFetch(URL, currentPage);
  console.log(data);
  const { results } = useQuery(SURL, query);
  console.log(results);
  console.log(button);
  console.log(ph);
  console.log(URL);
  const itemsCountPerPage = 3;
  const offset = currentPage * itemsCountPerPage;
  const currentPageData = data
    .filter((item) => ph[0] <= item.ph && ph[1] >= item.ph && item.srm >= srm)
    .slice(offset, offset + itemsCountPerPage);
  const itemsCount = Math.ceil(data.length / itemsCountPerPage);
  function handleChangePage(pageNumber) {
    setCurrentPage(pageNumber);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleReset() {
    setQuery("");
  }
  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div>
      <div className="container">
        <SearchBox
          onSubmit={handleSubmit}
          onChange={handleChange}
          onReset={handleReset}
          query={query}
        />
        <div className="row my-5 mx-0 justify-centent-center">
          <h5>Alcohol by Volume</h5>
          <VolumeSlider
            value={volume}
            onChange={(volume) => setVolume(volume)}
          />
          <div className="col-xl-4 col-lg-4">
            {buttonData.map((item) => (
              <VolumeButton
                key={item.id}
                name={item.name}
                btnName={item.btnName}
                button={button}
                isActive={item.isActive}
                setButton={setButton}
              />
            ))}
          </div>
        </div>
        <div className="row my-4 mx-0 justify-centent-center">
          <h5 className="font-small">Ph</h5>
          <PhSlider value={ph} onChange={(ph) => setPh(ph)} />
          <h5 className="font-small">Srm</h5>
          <SrmSlider value={srm} onChange={(srm) => setSrm(srm)} />
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 ">
          {results
            ? results.map((item) => <Card item={item} />)
            : currentPageData &&
              currentPageData.map((item) => <Card item={item} />)}
        </div>
      </div>
      <div className="container">
        <Pagination
          onChange={handleChangePage}
          activePage={currentPage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={itemsCount}
        />
      </div>
    </div>
  );
}

export default Home;
