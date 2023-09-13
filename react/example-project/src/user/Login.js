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
import { useContext, useState } from 'react';
import { GeneralContext } from '../App';
import { RoleTypes } from '../components/Navbar';
import Joi from 'joi';

const defaultTheme = createTheme();

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const navigate = useNavigate();
    const { setUser, setLoader, setUserRoleType } = useContext(GeneralContext);

    const schema = Joi.object({
        email: Joi.string().email({ tlds: false }).required(),
        password: Joi.string()
                     .pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@%$#^&*\-_*]).{8,32}$/)
                     .required()
                     .messages({
                        "string.pattern.base": "Password must meet the specified criteria",
                        "any.required": "Password is required",
                      }),
    });

    const handelChange = ev => {
        const { name, value } = ev.target;
        const obj = { ...formData, [name]: value };
        setFormData(obj);

        const validate = schema.validate(obj, { abortEarly: false });
        const tempErrors = { ...errors };
        delete tempErrors[name];

        if (validate.error) {
            const item = validate.error.details.find(e => e.context.key == name);

            if (item) {
                tempErrors[name] = item.message;
            }
        }

        setIsFormValid(!validate.error);
        setErrors(tempErrors);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setLoader(true);
    
        fetch(`https://api.shipap.co.il/clients/login?token=d2960d76-3431-11ee-b3e9-14dda9d4a5f0`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                email: data.get('email'),
                password: data.get('password'),
            }),
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
        .then(data => {
            setUser(data);
            setUserRoleType(RoleTypes.user);

            if (data.business) {
                setUserRoleType(RoleTypes.business);
            } else if (data.admin) {
                setUserRoleType(RoleTypes.admin);
            }

            navigate('/');
        })
        .catch(err => {
            alert(err.message);
        })
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
                        <TextField
                            error={Boolean(errors.email)}
                            helperText={errors.email}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handelChange}
                            value={formData.email}
                        />
                        <TextField
                            error={Boolean(errors.password)}
                            helperText={errors.password}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handelChange}
                            value={formData.password}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={!isFormValid}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Login
                        </Button>
                        <Grid container justifyContent="center">
                            <Grid item>
                                <Link to="/signup">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}