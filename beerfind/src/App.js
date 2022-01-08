import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import routes from "./routes";

import { fetchSearchResults } from './utils/utils';
import ListItem from './utils/ListItem';
import SearchInput from './utils/SearchInput';
import debounce from 'lodash.debounce';

const fetchData = async (query, cb) => {
  console.warn('fetching ' + query);
  const res = await fetchSearchResults(query);
  cb(res);
};

const debouncedFetchData = debounce((query, cb) => {
  fetchData(query, cb);
}, 300);

function App() {

  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);

  React.useEffect(() => {
    debouncedFetchData(query, res => {
      setResults(res);
    });
  }, [query]);

  return (
    <>
      <Navbar />
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            key={route.title}
            element={<route.element />}
          ></Route>
        ))}
      </Routes>
     <SearchInput
        value={query}
        onChangeText={e => {
          setQuery(e.target.value);
        }}
      />
      {results.map((result, index) => (
        <div key={index}>
          <ListItem
            title={result.name}
            imageUrl={result.image_url}
            caption={result.tagline}
          />
        </div>
      ))}
      <Footer />
    </>
  );
}

export default App;
