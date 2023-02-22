import { useState } from 'react';
import MainLayout from '../../layouts/Main';
import Container from '@mui/material/Container';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

function AuthorizationPage () {
  const [activeTab, setActiveTab] = useState('1');

  const changeTab = (e, value) => {
    setActiveTab(value);
  }

  return (
    <MainLayout>
      <Container maxWidth="xs">
        <Box sx={{ py: 2 }}>
          <TabContext value={activeTab}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                onChange={changeTab}
                variant="fullWidth"
              >
                <Tab label="Registration" value="1" />
                <Tab label="Login" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1" sx={{ p: 1 }}>
              <RegisterForm />
            </TabPanel>
            <TabPanel value="2" sx={{ p: 1 }}>
              <LoginForm />
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
    </MainLayout>
  );
}

export default AuthorizationPage;
