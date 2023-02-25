import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MainLayout from '../../layouts/Main';
import Container from '@mui/material/Container';
import PeopleCard from '../../components/PeopleCard';

function PeoplePage() {
  return (
    <MainLayout>
      <Container maxWidth="md">
        <Box sx={{ py: 2 }}>
          <Grid container spacing={2}>
            {[1, 2, 3, 4].map(item => (
              <Grid item xs={12} sm={6} md={4} key={item}>
                <PeopleCard />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default PeoplePage;
