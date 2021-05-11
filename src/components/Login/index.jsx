import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import './styles.scss';



const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 500,
    },

    title: {
        fontSize: "20px",
        color: "#fff",
        marginLeft:"20px",

    },
    button: {
        backgroundColor: "#05C0A5",
        width: "270px",
        height: "60px",
        color: "#fff",
        marginTop: "20px"

    },
    guide: {
        color: "#506175",
        lineHeight: "21px",
        marginTop:"20px",
    },
    container:{
        width:"650px",
        height:"560px",
        border:"1px solid " ,
        // backgroundColor:"blue",
        // border:"1px solid"
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        borderRadius:"3px ",
    },
    icon:{
        color:"#fff",
        marginRight:"20px"
    }

});
Login.propTypes = {

};

function Login(props) {
    const classes = useStyles();
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
                <a className="sub_title-link" href="">Create a new Wallet</a>
            </div>
            <form className={classes.root} noValidate autoComplete="off">
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="1. furnace" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="2. issue" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="3. " />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="4. " />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="5. now" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="6. runway" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="7. " />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="8. engine" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="9. deer" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="10. " />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="11. birth" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="standard-basic" label="12. zone" />
                    </Grid>
                </Grid>


            </form>
            <Button className={classes.button} variant="contained" color="primary">
                Primary
            </Button>




        </div>
    );
}

export default Login;