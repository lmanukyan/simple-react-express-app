import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import MainLayout from '../../layouts/Main';
import Container from '@mui/material/Container';
import PeopleCard from '../../components/PeopleCard';
import Pagination from '@mui/material/Pagination';
import Typography from '@mui/material/Typography';
import userService from '../../services/user';

function PeoplePage() {
  const [people, setPeople] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const fetchPeople = async () => {
    const data = await userService.getPeople({ page: page });
    if(data !== false) {
      setPeople(data.people);
      setCount( Math.ceil(data.count / data.limit) );
    }
  }

  const changePage = (e, value) => {
    setPage(value)
  }

  useEffect(() => {
    fetchPeople();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return (
    <MainLayout>
      <Container maxWidth="lg">
        <Box sx={{ pt: 5, pb: 2 }}>
          <Grid container spacing={2}>
            {people.map(item => (
              <PeopleCard item={item} key={item._id} />
            ))}
          </Grid>
          <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item>
              { count ? (
                <Pagination count={count} page={page} onChange={changePage} />
              ) : (
                <Typography>Not found</Typography>
              )}
            </Grid>
          </Grid>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default PeoplePage;
