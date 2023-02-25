import { useState } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import UserService from '../../services/user';
import { getSelectedImageDataURI } from '../../helpers/utils';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const schema = yup.object({
  name: yup.string().notRequired(),
  password: yup.string().test(
      'empty-or-6-characters-check',
      'Password must be at least 6 characters',
      password => !password || password.length >= 8,
  ),
  avatar: yup.mixed()
    .test({
      message: 'avatar must be a file of type: jpeg, png, jpg.',
      test: (files) => {
        const type = files.length ? files[0].type : null;
        return ['image/jpeg', 'image/jpg', 'image/png'].includes(type) || files.length === 0;
      }
    }).notRequired(),
}).required();

function UpdateUserForm() {
  const [ avatar, setAvatar ] = useState(null);

  const { handleSubmit, register, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formdata = new FormData();

    for(let field in data) {
      if(data[field].length === 0) {
        continue;
      }
      if(field === 'avatar') {
        formdata.append(field, data.avatar[0]);
      } else {
        formdata.append(field, data[field]);
      }
    }

    await UserService.update(formdata);
  };

  const setAvatarData = async (e) => {
    if (e.target.files && e.target.files[0]) {
      const dataUri = await getSelectedImageDataURI(e);
      setAvatar(dataUri);
    } else {
      setAvatar(null);
    }
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
          label="Name"
          variant="standard"
          InputLabelProps={{
            shrink: true,
          }}
          {...register('name')}
          error={Boolean(errors?.name)}
          helperText={errors?.name?.message}
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

      <FormControl variant="standard">
        <FormLabel>Avatar</FormLabel>
        <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
          <IconButton component="label">
            <AddPhotoAlternateIcon fontSize="large" />
            <input 
              hidden
              accept="image/*"
              type="file"
              onInput={setAvatarData}
              {...register('avatar')}
            />
          </IconButton>
          <Paper>
          { avatar && 
            <Avatar alt="Avatar" src={avatar} />
          }
          </Paper>
        </Stack>
        <FormHelperText error={Boolean(errors?.avatar)}>{errors?.avatar?.message}</FormHelperText>
      </FormControl>

      <FormControl variant="standard" fullWidth>
        <Button type="submit" variant="contained">Update</Button>
      </FormControl>

    </Box>
  );

}

export default UpdateUserForm;
