import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBoxArchive(props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={props.files}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.label} />}
    />
  );
}
