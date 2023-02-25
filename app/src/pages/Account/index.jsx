import Box from '@mui/material/Box';
import MainLayout from '../../layouts/Main';
import Container from '@mui/material/Container';
import UpdateUserForm from '../../components/UpdateUserForm';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function AccountPage() {
  return (
    <MainLayout>
      <Container maxWidth="xs">
      <Box sx={{ py: 2 }}>
        <Stack direction="column" alignItems="center" gap={1}>
          <AccountCircleIcon fontSize="large" />
          <Typography align="center" variant="h6">Update profile</Typography>
        </Stack>
        <UpdateUserForm />
        </Box>
      </Container>
    </MainLayout>
  );
}

export default AccountPage;
