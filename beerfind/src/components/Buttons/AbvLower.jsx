import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Card from '../Card';
import { useLocation, useNavigate } from 'react-router-dom';
//import { Grommet, Box, Text, Button } from "grommet";




export default function AbvLower(){
    const [value, setValue] = React.useState(0);
  const [data, setData] = useState([]);
  //const GT_URL = `https://api.punkapi.com/v2/beers?abv_gt=${value}`;
  useEffect(() => {
    const LT_URL = `https://api.punkapi.com/v2/beers?abv_lt=${value}`;
    fetch(LT_URL)
    .then(response => response.json())
    .then((json) => {
      setData(json);
    });
}, []);
  
 
  // data.map((item,index) => <Card item={item} key={index}/>)
 
 
    return (
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            {data.map((item) => <Card item={item} />)}{" "}
          </div>
          
        </div>
      );
}
  
     

//}