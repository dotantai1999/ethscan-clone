import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import AssessmentIcon from "@material-ui/icons/Assessment";

const useStyles = makeStyles((theme) => ({
  explorer_root: {
    width: "100%",
    height: "100%",
  },
  paper: {
    margin: "20px 5px",
    height: "80px",
    display: "flex",
    justifyContent: "space-between",
  },
  lastest_block: {
    display: "flex",
    margin: "10px 10px",
    height: "50px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  lastest_transaction: {
    display: "flex",
    margin: "10px 10px",
    height: "50px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    height: 48,
  },
}));
Explorer.propTypes = {};

function Explorer(props) {
  const classes = useStyles();
  return (
    <div className={classes.explorer_root}>
      <div className="transactions">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className="transaction-left">
                  <AssessmentIcon
                    classes={classes.icon}
                    viewBox="0 0 24 24"
                  ></AssessmentIcon>
                  <span className="transaction_title">TRANSACION</span>
                  <div className="transaction_price">
                    <span className="transaction_price-first">1,124.71 M</span>
                    <span className="transactoin_price-second">(18.6 TPS)</span>
                  </div>
                </div>
                <div className="transaction_right">
                  <span className="transaction_title">MED GAS PRICE</span>
                  <div className="transaction_price">
                    <span className="transaction_price-first">121 GWEI</span>
                    <span className="transaction_price-second">($10,37)</span>
                  </div>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <span className="latest_block-first-title">Lastest Blocks</span>
              <Paper className={classes.lastest_block}>
                <div className="lastest_block-first">
                  <span className="lastest_block-first-icon">BK</span>
                  <div className="lastest_block-first-content">
                    <span className="lastest_block-first-content-info">
                      1240943
                    </span>
                    <span className="lastest_block-first-content-time">
                      21 secs ago
                    </span>
                  </div>
                </div>
                <div className="lastest_block-second">
                  <div className="lastest_block-second-content">
                    <div className="lastest_block-second-content-top">
                      <span className="lastest_block-second-content-info">
                        Miner
                      </span>
                      <a href="">Spark pool</a>
                    </div>

                    <div className="lastest_block-second-content-bottom">
                      <a href="">294txns</a>
                      <span className="lastest_block-second-content-time">
                        21 secs ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lastest_block-third">
                  <span className="lastest_block-third-price">4.23224 Eth</span>
                </div>
              </Paper>
              <Paper className={classes.lastest_block}>
                <div className="lastest_block-first">
                  <span className="lastest_block-first-icon">BK</span>
                  <div className="lastest_block-first-content">
                    <span className="lastest_block-first-content-info">
                      1240943
                    </span>
                    <span className="lastest_block-first-content-time">
                      21 secs ago
                    </span>
                  </div>
                </div>
                <div className="lastest_block-second">
                  <div className="lastest_block-second-content">
                    <div className="lastest_block-second-content-top">
                      <span className="lastest_block-second-content-info">
                        Miner
                      </span>
                      <a href="">Spark pool</a>
                    </div>

                    <div className="lastest_block-second-content-bottom">
                      <a href="">294txns</a>
                      <span className="lastest_block-second-content-time">
                        21 secs ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lastest_block-third">
                  <span className="lastest_block-third-price">4.23224 Eth</span>
                </div>
              </Paper>
              <Paper className={classes.lastest_block}>
                <div className="lastest_block-first">
                  <span className="lastest_block-first-icon">BK</span>
                  <div className="lastest_block-first-content">
                    <span className="lastest_block-first-content-info">
                      1240943
                    </span>
                    <span className="lastest_block-first-content-time">
                      21 secs ago
                    </span>
                  </div>
                </div>
                <div className="lastest_block-second">
                  <div className="lastest_block-second-content">
                    <div className="lastest_block-second-content-top">
                      <span className="lastest_block-second-content-info">
                        Miner
                      </span>
                      <a href="">Spark pool</a>
                    </div>

                    <div className="lastest_block-second-content-bottom">
                      <a href="">294txns</a>
                      <span className="lastest_block-second-content-time">
                        21 secs ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lastest_block-third">
                  <span className="lastest_block-third-price">4.23224 Eth</span>
                </div>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6}>
              <span className="latest_transaction-title">
                Lastest Transaction
              </span>
              <Paper className={classes.lastest_transaction}>
                <div className="latest-transaction-first">
                  <span className="latest-transaction-first-icon">TX</span>
                  <div className="latest-transaction-first-content">
                    <span className="latest-transaction-first-content-info">
                      1240943
                    </span>
                    <span className="latest-transaction-first-content-time">
                      21 secs ago
                    </span>
                  </div>
                </div>
                <div className="latest-transaction-second">
                  <div className="latest-transaction-second-content">
                    <div className="latest-transaction-second-content-top">
                      <span className="latest-transaction-second-content-info">
                        Miner
                      </span>
                      <a href="">Spark pool</a>
                    </div>

                    <div className="latest-transaction-second-content-bottom">
                      <a href="">294txns</a>
                      <span className="latest-transaction-second-content-time">
                        21 secs ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="latest-transaction-third">
                  <span className="latest-transaction-third-price">
                    4.23224 Eth
                  </span>
                </div>
              </Paper>
              <Paper className={classes.lastest_transaction}>
                <div className="latest-transaction-first">
                  <span className="latest-transaction-first-icon">TX</span>
                  <div className="latest-transaction-first-content">
                    <span className="latest-transaction-first-content-info">
                      1240943
                    </span>
                    <span className="latest-transaction-first-content-time">
                      21 secs ago
                    </span>
                  </div>
                </div>
                <div className="latest-transaction-second">
                  <div className="latest-transaction-second-content">
                    <div className="latest-transaction-second-content-top">
                      <span className="latest-transaction-second-content-info">
                        Miner
                      </span>
                      <a href="">Spark pool</a>
                    </div>

                    <div className="latest-transaction-second-content-bottom">
                      <a href="">294txns</a>
                      <span className="latest-transaction-second-content-time">
                        21 secs ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="latest-transaction-third">
                  <span className="latest-transaction-third-price">
                    4.23224 Eth
                  </span>
                </div>
              </Paper>
              <Paper className={classes.lastest_transaction}>
                <div className="latest-transaction-first">
                  <span className="latest-transaction-first-icon">TX</span>
                  <div className="latest-transaction-first-content">
                    <span className="latest-transaction-first-content-info">
                      1240943
                    </span>
                    <span className="latest-transaction-first-content-time">
                      21 secs ago
                    </span>
                  </div>
                </div>
                <div className="latest-transaction-second">
                  <div className="latest-transaction-second-content">
                    <div className="latest-transaction-second-content-top">
                      <span className="latest-transaction-second-content-info">
                        Miner
                      </span>
                      <a href="">Spark pool</a>
                    </div>

                    <div className="latest-transaction-second-content-bottom">
                      <a href="">294txns</a>
                      <span className="latest-transaction-second-content-time">
                        21 secs ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="latest-transaction-third">
                  <span className="latest-transaction-third-price">
                    4.23224 Eth
                  </span>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Explorer;
