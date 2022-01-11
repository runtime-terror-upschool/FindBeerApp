import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState, useEffect } from 'react';
import Card from '../Card';


export default function SrmSlider() {

  const BASE_URL = 'https://api.punkapi.com/v2/beers';
  const [data, setData] = useState([]);
  const [value, setValue] = React.useState([]);
  const [isActive, setActive] = useState(true);
  const [checked, setChecked] = React.useState(true);
  
  useEffect(() => {
    
    fetch(BASE_URL)
    .then(response => response.json())
    .then((json) => {
      setData(json);
    });
}, []);
  
console.log(data);

const handleChange = (event, newValue) => {
    setValue(newValue);
    data
        .filter((item) => item.srm>=value)
        .map((item) => ( console.log("item", item),
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
             <Card item={item} />
          </div>))
 console.log("srm data", data);
 console.log("srm min value", value);
  };
  const handleChangeCheckbox = (event) => {
    setChecked(event.target.checked);
   if(checked===true){
    setActive(true);
   }
  else{
    setActive(false);
  }
  };

  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container>
        <Grid item xs={8} md={2}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleChangeCheckbox} />}
              label="SRM"
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6} md={2}>
        <Slider
          size="medium"
          aria-label="Medium"
          valueLabelDisplay="auto"
          onChange={handleChange}
          //defaultValue={0} 
          step={10}  min={0} max={100}
          disabled={isActive}
        />
        </Grid>
      </Grid>
    </Box>
  );
}
