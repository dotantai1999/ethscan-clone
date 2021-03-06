import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./styles.scss";
import { useForm } from "react-hook-form";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
  },

  title: {
    fontSize: "20px",
    color: "#fff",
    marginLeft: "20px",
  },
  button: {
    backgroundColor: "#05C0A5",
    width: "270px",
    height: "60px",
    color: "#fff",
    marginTop: "20px",
  },
  guide: {
    color: "#506175",
    lineHeight: "21px",
    marginTop: "20px",
  },
  container: {
    width: "650px",
    height: "560px",
    border: "1px solid ",
    // backgroundColor:"blue",
    // border:"1px solid"
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "3px ",
  },
  icon: {
    color: "#fff",
    marginRight: "20px",
  },
});
LoginForm.propTypes = {};

function LoginForm(props) {
  const { handleSubmitLoginForm } = props;
  const classes = useStyles();
  const { register, handleSubmit } = useForm({});
  const onSubmit = (data) => {
    handleSubmitLoginForm(data);
  };
  return (
    <div className={classes.container}>
      <div className="header">
        <Typography className={classes.title} variant="h1" component="h2">
          Verification
        </Typography>
        <CloseIcon className={classes.icon}></CloseIcon>
      </div>
      <div className="sub-root">
        <span className="sub_title">Do not have a wallet?</span>
        <a className="sub_title-link" href="">
          Create a new Wallet
        </a>
      </div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <TextField {...register("1")} id="standard-basic" label="1. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("2")} id="standard-basic" label="2. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("3")} id="standard-basic" label="3. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("4")} id="standard-basic" label="4. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("5")} id="standard-basic" label="5. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("6")} id="standard-basic" label="6. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("7")} id="standard-basic" label="7. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("8")} id="standard-basic" label="8. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("9")} id="standard-basic" label="9. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("10")} id="standard-basic" label="10. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("11")} id="standard-basic" label="11. " />
          </Grid>
          <Grid item xs={4}>
            <TextField {...register("12")} id="standard-basic" label="12. " />
          </Grid>
        </Grid>
        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
