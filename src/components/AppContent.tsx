import CloseIcon from '@mui/icons-material/Close';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, Button, Container, FormControl, Grid, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import { AppDataGrid } from './AppDataGrid';

const styles = () => ({
  notchedOutline: {
    border: '2px 0 0 0',
    borderColor: '#303f9f !important'
  },
});

export const AppContent = () => {

  return (
    <>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          py: 3,
        }}
      >
        <Container>
          <Grid container spacing={3} sm={12} lg={12} md={12}>
            <Grid item sm={12} lg={12} md={12}>
              <Typography variant='subtitle1'>Location *</Typography>
            </Grid>
            <Grid item sm={12} lg={12} md={12}>
              <FormControl sx={{ backgroundColor: 'background.paper', width: '25ch' }} variant="outlined">
                <OutlinedInput
                  id="location"
                  placeholder='Enter name of your location'
                />

              </FormControl>

            </Grid>
            <Grid item sm={12} lg={12} md={12}>
              <TextField
                id=""
                label="Description"
                multiline
                rows={4}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FavoriteBorderIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <CloseIcon />
                    </InputAdornment>
                  ),
                  style: {
                    border: "2px 0px 0px 0px !important",
                    borderColor: '#303f9f !important'
                  }
                }}
                sx={{ backgroundColor: 'background.paper', width: '25ch', boxShadow: 3 }}
              />
            </Grid>
            <Grid item md={12} sm={12} lg={12}>
              <AppDataGrid />
            </Grid>
            <Grid item md={12} sm={12} lg={12} sx={{ alignSelf: "flex-end" }}>
              <Stack
                direction="row"
                justifyContent="right"
                alignItems="right"
                spacing={2}
              >
                <Button variant="contained">Save</Button>
                <Button variant='outlined' sx={{ backgroundColor: "background.paper" }}>Cancel</Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}