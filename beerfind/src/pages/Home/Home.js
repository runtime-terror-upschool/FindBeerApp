import React, { useState } from "react";
import { Grommet, Box, Text, Button } from "grommet";
import useFetch from "../../hooks/useFetch";
import Card from "../../components/Card";
import SearchBar from "./SearchBar";
import AbvButton from "../../components/Buttons/AbvButton";
import PhSlider from "../../components/Sliders/PhSlider";


function Home() {
  const PAGE_SIZE = 10;
  const [page, setPage] = useState(1);

  const URL = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${PAGE_SIZE}`;
  const { data } = useFetch(URL, page);
  console.log(data);
  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return (<>
   <div>
     <PhSlider/>
   </div>
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 ">
        {data && data.map((item) => <Card item={item} />)}{" "}
      </div>
      <Grommet>
        <Box justify="center" direction="row">
          <Button
            disabled={page === 1}
            primary
            label="<"
            size="small"
            focusIndicator={true}
            onClick={prevPage}
          />
          <Text margin="10px">Page {page}</Text>
          <Button
            disabled={data.length < PAGE_SIZE}
            primary
            label=">"
            size="small"
            focusIndicator={true}
            onClick={nextPage}
          />
        </Box>
      </Grommet>
    </div>
    </>
  );
}

export default Home;
