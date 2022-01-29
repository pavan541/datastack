import { Search as SearchIcon } from "@mui/icons-material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Button, InputAdornment, Stack, TextField } from "@mui/material";

export const CustomToolbar = () => {

    const handleClick = () =>  {
        alert('button clicked');
    }

    return(
        <Stack
  direction="row"
  justifyContent="space-around"
  alignItems="center"
  spacing={2}
>
            <Button variant="outlined"><FilterAltIcon /> Filter</Button>
            <TextField
          
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          placeholder="Search by name or date"
          
          id="search"
          type="search"
          
          size="small"
        />
        <Button variant="contained" onClick={handleClick}>Add</Button>
        </Stack>
    );
}