import moment from 'moment';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function PeopleCard({ item }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <img
          style={{ width: '100%', maxHeight: 300, objectFit: 'cover' }}
          src={item.avatar}
          alt="People"
          loading="lazy"
        />
        <CardContent style={{ paddingBottom: 16 }}>
          <Typography gutterBottom variant="h5" component="div" sx={{ m: 0 }}>
            {item.name}, {moment().diff(item.birthdate, 'years')}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PeopleCard;