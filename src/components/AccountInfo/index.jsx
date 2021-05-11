import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Avatar from '@material-ui/core/Avatar';
import { Button, makeStyles, TextField } from '@material-ui/core';
import { Height } from '@material-ui/icons';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';
import ChangeHistoryOutlinedIcon from '@material-ui/icons/ChangeHistoryOutlined';

const useStyles = makeStyles((theme) => ({
    root_account_info:{
        width: "80%",
        backgroundColor:"#fff",
    },
    address: {
        height: theme.spacing(10),
        width: theme.spacing(10),
        marginLeft: '20px',
        border: 'solid 5px #fff',
    },
    balance_icon: {
        color: "#fff",
        height: theme.spacing(10),
        width: theme.spacing(10),
        fontWeight: "400",
        marginLeft: "20px"
    },
    refresh_icon: {
        marginTop: "10px",

        width: "30px",
        height: "30px",

    },
    explorer_icon: {
        color: "#fff",
        height: theme.spacing(10),
        width: theme.spacing(10),
        fontWeight: "400",
        marginLeft: "20px"
    },
    input: {
        backgroundColor: "#f9f9f9",
        margin:"5px 0",
    },
    button:{
        margin:"20px 0",
        width:"200px",
    },
}));

AccountInfo.propTypes = {

};

function AccountInfo(props) {
    const classes = useStyles();
    return (
        <div className={classes.root_account_info}>
            <div className="dashboard">
                <div className="address">
                    <Avatar className={classes.address} alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/23.jpg" />
                    <div className="address-info">
                        <h6 className="title">
                            Address
                         </h6>
                        <span className="content">
                            0xc2b2C445fc16A5013AaA560228bFff26Cb7778e8
                        </span>
                    </div>
                </div>
                <div className="balance">
                    <div className="balance">
                        <AccountBalanceWalletOutlinedIcon className={classes.balance_icon}></AccountBalanceWalletOutlinedIcon>
                        <div className="balance-info">
                            <h6 className="title">
                                Balance
                         </h6>
                            <span className="blance-content">
                                0 ETH
                        </span>
                            <AutorenewOutlinedIcon className={classes.refresh_icon}></AutorenewOutlinedIcon>
                        </div>

                    </div>

                </div>
                <div className="explorer">
                    <div className="explorer">
                        <ChangeHistoryOutlinedIcon className={classes.explorer_icon}></ChangeHistoryOutlinedIcon>
                        <h6 className="title">Explorer</h6>
                    </div>
                </div>
            </div>
            <div className="form-transaction">
                <h3 className="transaction-title">
                    Send Transaction
                </h3>
                <div className="amount">
                    <span >Amount</span>
                    <TextField className={classes.input} id="standard-search" label="" />
                </div>
                <div className="to-address">
                    <span> To Adress</span>
                    <TextField className={classes.input} id="standard-search" label="" />
                </div>
                <Button className={classes.button} variant="contained" color="primary" disableElevation>
                    Send
                </Button>

            </div>
        </div>
    );
}

export default AccountInfo;