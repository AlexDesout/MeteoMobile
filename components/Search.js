import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

export default function Search() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <Input
          id="input-with-icon-adornment"
          placeholder='Saisir une ville'
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon></SearchIcon>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}