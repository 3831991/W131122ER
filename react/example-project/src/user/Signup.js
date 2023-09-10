import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GeneralContext } from '../App';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';

const defaultTheme = createTheme();

export const clientStructure = [
    { name: 'firstName', type: 'text', label: 'First Name', required: true, block: false },
    { name: 'middleName', type: 'text', label: 'Middle Name', required: true, block: false },
    { name: 'lastName', type: 'text', label: 'Last Name', required: true, block: false },
    { name: 'phone', type: 'tel', label: 'Phone', required: true, block: false },
    { name: 'email', type: 'email', label: 'Email', required: true, block: false },
    { name: 'password', type: 'password', label: 'Password', required: true, block: false, initialOnly: true },
    { name: 'imgUrl', type: 'text', label: 'Img Url', required: true, block: true },
    { name: 'imgAlt', type: 'text', label: 'Img Alt', required: true, block: false },
    { name: 'state', type: 'text', label: 'State', required: true, block: false },
    { name: 'country', type: 'text', label: 'Country', required: true, block: false },
    { name: 'city', type: 'text', label: 'City', required: true, block: false },
    { name: 'street', type: 'text', label: 'Street', required: true, block: false },
    { name: 'houseNumber', type: 'number', label: 'House Number', required: true, block: false },
    { name: 'zip', type: 'number', label: 'Zip', required: true, block: false },
    { name: 'business', type: 'boolean', label: 'Business', required: true, block: false },
];

export default function Signup() {
    const navigate = useNavigate();
    const { setLoader } = useContext(GeneralContext);

    const handleSubmit = ev => {
        ev.preventDefault();
        const obj = {};
        const elements = ev.target.elements;

        clientStructure.forEach(s => {
            if (s.type === 'boolean') {
                obj[s.name] = elements[s.name].checked;
            } else {
                obj[s.name] = elements[s.name].value;
            }
        });

        setLoader(true);
    
        fetch(`https://api.shipap.co.il/clients/signup?token=d2960d76-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(obj),
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.text().then(x => {
                    throw new Error(x);
                });
            }
        })
        .then(() => navigate('/login'))
        .catch(err => alert(err.message))
        .finally(() => setLoader(false));
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Login</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Grid container spacing={2}>
                            {
                                clientStructure.map(s =>
                                    <Grid key={s.name} item xs={12} sm={s.block ? 12 : 6}>
                                        {
                                            s.type === 'boolean' ?
                                            <FormControlLabel
                                                control={<Switch color="primary" name={s.name} />}
                                                label={s.label}
                                                labelPlacement="start"
                                            /> :
                                            <TextField
                                                margin="normal"
                                                required={s.required}
                                                fullWidth
                                                id={s.name}
                                                label={s.label}
                                                name={s.name}
                                                type={s.type}
                                                autoComplete={s.name}
                                            />
                                        }
                                    </Grid>
                                )
                            }
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Signup
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link to="/login">
                                    Already have an account? Login
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
            <br /> <br /> <br /> <br />
        </ThemeProvider>
    );
}