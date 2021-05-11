import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import "./styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import signupApi from "./../../api/signupApi";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: "500",
    fontSize: "30px",
    lineHeight: "42px",
    marginBottom: "15px",
    margin: "auto",
  },
  root: {
    display: "flex",
    justifyContent: "center",

    "& > *": {
      margin: theme.spacing(1),
      width: "50%",
    },
  },
  button: {
    backgroundColor: "#05C0A5",
    width: "365px",
    height: "65px",
    color: "#fff",
  },
}));

Signup.propTypes = {};

function Signup(props) {
  const classes = useStyles();

  const [wordList, setWordList] = useState([]);
  useEffect(() => {
    const fetchSignUpWords = async () => {
      const wordArray = await signupApi.signup();
      setWordList(wordArray.data.mnemonic.split(" "));
    };
    fetchSignUpWords();
  }, []);

  return (
    <div className="root-login">
      <Typography className={classes.title} variant="h1" component="h2">
        Get a New Wallet
      </Typography>
      <div className="sub-root">
        <span className="sub_title">Already have a wallet?</span>
        <a className="sub_title-link" href="">
          Access My Wallet
        </a>
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={3}>
          {wordList.map((item, index) => {
            return (
              <Grid item xs={4} key={index}>
                <TextField
                  id="standard-basic"
                  label={`${index + 1}. ${item}`}
                />
              </Grid>
            );
          })}
        </Grid>
      </form>
      <Button className={classes.button} variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default Signup;
