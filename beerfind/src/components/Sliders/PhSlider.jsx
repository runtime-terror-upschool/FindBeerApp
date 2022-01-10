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

function valuetext(value) {
  return `${value}`;
}

export default function PhSlider() {
  const [value, setValue] = React.useState([0, 0]);
  const [isActive, setActive] = useState(true);
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Grid item xs={2} md={1}>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleChangeCheckbox} />}
              label="PH"
              
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6} md={2}>
          <Slider
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={0}
            step={1}
            max={7}
            disabled={isActive}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
