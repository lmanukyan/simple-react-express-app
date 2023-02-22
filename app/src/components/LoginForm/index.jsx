import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

import AuthService from '../../services/auth'

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
}).required();

function LoginForm() {

  const { handleSubmit, register, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formdata = new FormData();
    formdata.append('email', data.email);
    formdata.append('password', data.password);
    await AuthService.login(formdata);
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl>
        <TextField 
          fullWidth
          type="email"
          label="Email"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          {...register('email')}
          error={Boolean(errors?.email)}
          helperText={errors?.email?.message}
        />
      </FormControl>

      <FormControl>
        <TextField 
          fullWidth
          type="password"
          label="Password"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          {...register('password')}
          error={Boolean(errors?.password)}
          helperText={errors?.password?.message}
        />
      </FormControl>

      <FormControl variant="standard" fullWidth>
        <Button type="submit" variant="contained">Login</Button>
      </FormControl>
    </Box>
  );

}

export default LoginForm;
