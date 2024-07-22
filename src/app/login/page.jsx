'use client';
import Image from 'next/image';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './loginpage.module.css';
import { FcGoogle } from "react-icons/fc";

const defaultTheme = createTheme();

export default function LoginPage() { 
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const { status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
      }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ 
          borderRadius: '8px', 
          backgroundColor: 'var(--bgBox)',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' 
        }}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <Image src='/assets/logo.png' width={45} height={30} alt="Company logo" />
            </Avatar>
            <Grid sx={{ color: 'var(--softTextColor)' }}> 
              Sign in
            </Grid>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{ style: { color: 'var(--softTextColor)' } }}
                inputProps={{ style: { color: 'var(--softTextColor)' } }}
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'var(--softTextColor)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--softTextColor)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--softTextColor)',
                    },
                  }
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                InputLabelProps={{ style: { color: 'var(--softTextColor)' } }}
                inputProps={{ style: { color: 'var(--softTextColor)' } }}
                sx={{ 
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'var(--softTextColor)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'var(--softTextColor)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'var(--softTextColor)',
                    },
                  }
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ color: 'var(--softTextColor)' }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, height: 56 }}
              >
                Sign In
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{ 
                  mt: 1, 
                  mb: 2, 
                  height: 56,
                  backgroundColor: '#DB4437', 
                  color: '#FFFFFF', 
                  '&:hover': { 
                    backgroundColor: '#C33D2D' 
                  },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1
                }}
                onClick={() => signIn('google')}
              >
                <FcGoogle size={28}/>
                Sign in with Google
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" sx={{ color: 'var(--softTextColor)' }}>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2" sx={{ color: 'var(--softTextColor)' }}>
                    Don&apos;t have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
