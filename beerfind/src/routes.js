import Home from "./pages/Home";
import About from "./pages/About";
import AbvGreater from "./components/Buttons/AbvGreater";
import AbvLower from "./components/Buttons/AbvLower";


const routes = [
  { title: "Home", path: "/", element: Home, isNav: true },
  { title: "About", path: "/about", element: About, isNav: true },
  {
    title: 'AbvDetail',
    path: '/https://api.punkapi.com/v2/beers?abv_gt=:value',
    element: <AbvGreater />,
    isNav: false,
  },
  {
    title: 'AbvDetail',
    path: 'abv_lt',
    element: <AbvLower />,
    isNav: false,
  },
];

export default routes;
