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

const Input = styled(MuiInput)`
  width: 42px;
`;


function AbvButton(){
  //const BASE_URL = 'https://api.punkapi.com/v2';
  const [data, setData] = useState([]);
  const [isActive, setActive] = useState(false);
  const [value, setValue] = React.useState(0);
  const GT_URL = `https://api.punkapi.com/v2/beers?abv_gt=${value}`;
  const LT_URL = `https://api.punkapi.com/v2/beers?abv_lt=${value}`;
  const navigate = useNavigate();
 

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) =>{
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
  const handleNone = () =>{
    setActive(prev=>!prev);
  };
  const handleGreater = () => {
    navigate(`https://api.punkapi.com/v2/beers?abv_gt=${value}`);
    console.log("handle greater");
    fetch(GT_URL)
  .then(response => response.json())
  .then((json) => {
    setData(json);
  });

  // data.map((item,index) => <Card item={item} key={index}/>)
  console.log(data);
  data.map((item,index) => (
    <div className="col col-sm-6 col-md-3 py-3">
    <div className="card rounded" key={item.id}>
      <img
        src={item.image_url}
        className="card-img-top mx-auto"
        alt="Beer"
        height={"200vh"}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{item.tagline}</li>
        <li className="list-group-item">{item.first_brewed} </li>
      </ul>
    </div>
  </div>
    ))
  };

  const handleLower = () => {
    fetch(LT_URL)
    .then(response => response.json())
    .then(data => console.log(data));
   navigate(`https://api.punkapi.com/v2/beers?abv_lt=${value}`);
  };
    return (
        <Box
      
      width={300}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignItems: 'space-between',
        justifyContent: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <div className="container">
     
      <ButtonGroup  type="button" className="btn btn-dark btn-lg" variant="outlined"aria-label="outlined button group" >
        <Button className="btn btn-dark btn-lg" value="none" disabled={false} onClick={handleNone}>None</Button>
        <Button className="btn btn-dark btn-lg" value="greater" onClick={handleGreater} disabled={isActive}>Greater</Button>
        <Button className="btn btn-dark btn-lg" value="lower" onClick={handleLower} disabled={isActive}>Lower</Button>
        <Slider
          size="medium"
          aria-label="Medium"
          valueLabelDisplay="auto"
          onChange={handleSliderChange}
          defaultValue={30} 
          step={0.5}  min={0} max={50}
          disabled={isActive}
        />
      </ButtonGroup>
      
      </div>
      <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            inputProps={{
              step: 0.5,
              min: 0,
              max: 50,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
    </Box>
      );

}
export default AbvButton;