import logo from './logo.svg';
import './App.css';
import Sum from './components/sum';
import Clock from './components/clock';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import * as React from 'react';
import ChuyenDoiTien from './components/chuyen-doi-tien';

function App() {
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App">
      <Sum />
      <Clock />
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider color='secondary' aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      <ChuyenDoiTien/>
    </div>
  );
}

export default App;
