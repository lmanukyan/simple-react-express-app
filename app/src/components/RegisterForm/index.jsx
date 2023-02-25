import { useState } from 'react';
import * as yup from 'yup';
import moment from 'moment';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthService from '../../services/auth';
import { getSelectedImageDataURI } from '../../helpers/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';



const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  birthdate: yup.string().required(),
  password: yup.string().min(6).required(),
  gender: yup.string().required(),
  avatar: yup.mixed()
    .test({
      message: 'avatar is a required field',
      test: (files) => files.length > 0
    })
    .test({
      message: 'avatar must be a file of type: jpeg, png, jpg.',
      test: (files) => {
        const type = files.length ? files[0].type : null;
        return ['image/jpeg', 'image/jpg', 'image/png'].includes(type);
      }
    })
    .required(),
}).required();



function RegisterForm() {
  const [ birthDate, setBirthDate ] = useState(null);
  const [ avatar, setAvatar ] = useState(null);

  const { handleSubmit, register, control, formState:{ errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const formdata = new FormData();

    for(let field in data) {
      if(field === 'avatar') {
        formdata.append(field, data.avatar[0]);
      } else if(field === 'birthdate') {
        formdata.append(field, moment(data.birthdate).format('YYYY-MM-DD'));
      } else {
        formdata.append(field, data[field]);
      }
    }

    await AuthService.register(formdata);
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
        <Controller
          name="birthdate"
          control={control}
          defaultValue={birthDate}
          render={
            ({ field: { onChange, ...restField } }) =>
            <LocalizationProvider dateAdapter={AdapterMoment}>
                <DesktopDatePicker
                    label="Date of birth"
                    inputFormat="DD.MM.YYYY"
                    onChange={(event) => {  onChange(event); setBirthDate(event); }}
                    renderInput={(params) =>
                    <TextField
                        {...params}
                        variant="standard"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        error={Boolean(errors?.birthdate)}
                        helperText={errors?.birthdate?.message}
                    />}
                    {...restField}
                />
            </LocalizationProvider>
           }
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
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          row
          defaultValue="male"
        >
          <FormControlLabel value="male" control={<Radio size="small" 
          {...register('gender')} />} label="Male" />
          <FormControlLabel value="female" control={<Radio size="small" 
          {...register('gender')} />} label="Female" />
        </RadioGroup>
        <FormHelperText error={Boolean(errors?.gender)}>{errors?.gender?.message}</FormHelperText>
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
        <Button type="submit" variant="contained">Register</Button>
      </FormControl>

    </Box>
  );

}

export default RegisterForm;
