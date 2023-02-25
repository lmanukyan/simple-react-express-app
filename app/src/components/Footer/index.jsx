import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const AppFooter = styled('footer')({
  backgroundColor: '#f4f4f4',
  padding: 10,
  textAlign: 'center'
});

function Footer() {
  return (
    <AppFooter>
      <Container maxWidth="xl">
        <Typography>© {new Date().getFullYear()}. All rights reserved.</Typography>
      </Container>
    </AppFooter>
  );
}

export default Footer;
