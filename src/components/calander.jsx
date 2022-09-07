import * as React from 'react';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import "./calendar.css";
import Modal from './ModalCalendar';



export default function ActionBarComponentProps() {
  const [value, setValue] = React.useState(() => dayjs('2022-02-01T00:00'));
console.log(value.$D, value.$M, value.$y)  

return (
  <div className='calendarcss'>
    <LocalizationProvider className="calendar" dateAdapter={AdapterDayjs}>
      <StaticDatePicker
        onChange={(newValue) => setValue(newValue)}
        value={value}
        renderInput={(params) => <TextField {...params} />}
        componentsProps={{
          actionBar: {
            actions: ['today'],

          },
        }
    }
      />
      <div className='Modal'>
        <Modal day={value.$D} mounth={value.$M+1} year={value.$y}/>,
      </div>
    </LocalizationProvider>
    </div>
  );
}
 