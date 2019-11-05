import React, { useState } from 'react';
import api from '../services/api';


//import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
//import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';  
import Container from '@material-ui/core/Container';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        People
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({ history }) {
  const classes = useStyles();
  
  const [email,setEmail] = useState('')
  const [nome,setNome] = useState('')
  const [senha,setSenha] = useState('')
  const [cidade,setCidade] = useState('')
  const [confirmar_senha,setConfirmar_senha] = useState('')
  const [jogos,setJogos] = useState('')

  async function handleSubmit(event){
    event.preventDefault();

    const response = await api.post('/CadastrarUsers',{
      email,
      nome,
      senha,
      confirmar_senha,
      cidade,
      jogos,
    })
    const { _id } = response.data;
    localStorage.setItem('user',_id);
    if(response.data.message ==  'email ja cadastrado' || response.data.message == 'senhas não batem'){
      alert(`Erro!!! ${response.data.message}`)
    }else{
      history.push('/Login')
    }
    //console.log(response.data.message)
    //console.log(response.statusText)
    
  }

  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          CADASTRO
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Nome"
                name="nome"
                autoComplete="nome"
                value = {nome}
                onChange = {event => setNome(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value = {email}
                onChange = {event => setEmail(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cidade"
                label="Cidade"
                name="cidade"
                autoComplete="cidade"
                value = {cidade}
                onChange = {event => setCidade(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="senha"
                label="senha"
                type="password"
                id="senha"
                autoComplete="current-password"
                value = {senha}
                onChange = {event => setSenha(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirmar_senha"
                label="Confirme sua senha"
                type="password"
                id="confirmar_senha"
                autoComplete="current-password"
                value = {confirmar_senha}
                onChange = {event => setConfirmar_senha(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lista_jogos"
                label="Lista de jogos (obs.: separados por vírgula)"
                name="Lista_jogos"
                autoComplete="Lista de jogos"
                value = {jogos}
                onChange = {event => setJogos(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Aceito os termos e condições"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Cadastrar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Já tem uma conta? Fazer Login.
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}