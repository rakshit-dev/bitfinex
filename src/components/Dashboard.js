import React, { Component } from "react";
import Header from "./Header";

import {
  Grid,
  Typography,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  AppBar,
  Box,
  TextField,
  Input,
  MenuItem,
  NativeSelect,
  InputAdornment,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Divider,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SettingsIcon from "@material-ui/icons/Settings";
import SearchIcon from "@material-ui/icons/Search";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const styles = {
  textColor: {
    color: "#ffffff",
  },
  accordionHeading: {
    fontSize: "15px",
    color: "#ffffff",
  },
  AppBarRoot: {
    background: "#FFFFFF",

    boxShadow: "none",
  },
  indicator: {
    backgroundColor: "#ffffff",
  },
  tab: {
    minWidth: "50px", // a number of your choice
    width: "50px", // a number of your choice
  },
};

const client = new W3CWebSocket("wss://api-pub.bitfinex.com/ws/2");
class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: 0,
    };
  }

  handleChange = (e, value) => {
    this.setState({ tabValue: value });
  };

  componentDidMount = () => {
    let msg = JSON.stringify({
      event: "subscribe",
      channel: "trades",
      symbol: "ALL",
    });
    client.onopen = () => {
      console.log("Connected");
      client.send(msg);
    };

    client.onmessage = (message) => {
      console.clear();
      console.log(JSON.parse(message.data));
    };
  };

  data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        type: "line",
        label: "USD",
        data: [
          12,
          19,
          3,
          5,
          2,
          3,
          12,
          19,
          3,
          5,
          2,
          3,
          12,
          19,
          3,
          5,
          2,
          3,
          12,
          19,
          3,
          5,
          2,
          3,
          ,
          12,
          19,
          3,
          5,
          2,
          3,
        ],
        fill: false,
        backgroundColor: "red",
        borderColor: "red",
      },
    ],
  };

  options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  render() {
    const { classes } = this.props;
    return (
      <>
        <Header />
        <Grid container direction="row" style={{ background: "#273640" }}>
          <Grid item xs={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card style={{ marginTop: "10px", marginLeft: "10px" }}>
                  <CardContent style={{ background: "#1B262D" }}>
                    <Grid container direction="row">
                      <Grid item xs={2}>
                        <AttachMoneyIcon
                          style={{ fontSize: "70px", color: "#ffffff" }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container>
                          <Grid item xs={12}>
                            <a href="#">
                              <Typography
                                variant="body2"
                                className={classes.textColor}
                              >
                                USD
                              </Typography>
                            </a>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="body2"
                              className={classes.textColor}
                            >
                              VOL 654,594,811 USD
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="body2"
                              className={classes.textColor}
                            >
                              {" "}
                              LOW 0.002000%
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="body2"
                              className={classes.textColor}
                            >
                              FRR APR 11.8%
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={3}>
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography
                              variant="body2"
                              className={classes.textColor}
                              style={{ fontSize: "18px" }}
                            >
                              0.020435%
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="body2"
                              style={{ color: "red" }}
                            >
                              0.00 (11.15%)
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="body2"
                              className={classes.textColor}
                            >
                              HIGH 7.0000%
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Accordion
                  style={{
                    background: "#1B262D",
                    marginTop: "0px",
                    marginLeft: "10px",
                  }}
                  defaultExpanded
                >
                  <AccordionSummary
                    expandIcon={<SettingsIcon style={{ color: "#ffffff" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ExpandMoreIcon style={{ color: "#ffffff" }} />
                    <Typography className={classes.accordionHeading}>
                      Tickers
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12}>
                        <AppBar
                          position="static"
                          className={this.props.classes.AppBarRoot}
                          style={{ background: "#1B262D" }}
                        >
                          <Tabs
                            value={this.state.tabValue}
                            onChange={this.handleChange}
                            classes={{
                              indicator: this.props.classes.indicator,
                            }}
                          >
                            <Tab
                              style={{
                                width: "75px",
                                minWidth: "10px",
                              }}
                              label={
                                <span
                                  style={{
                                    color: "#ffffff",

                                    fontSize: "10px",
                                  }}
                                  classes={{ root: classes.tab }}
                                >
                                  Trading
                                </span>
                              }
                            />
                            <Tab
                              style={{
                                width: "75px",
                                minWidth: "10px",
                              }}
                              label={
                                <span
                                  style={{
                                    color: "#ffffff",

                                    fontSize: "10px",
                                  }}
                                  classes={{ root: classes.tab }}
                                >
                                  Derivatives
                                </span>
                              }
                            />
                            <Tab
                              style={{
                                width: "75px",
                                minWidth: "10px",
                              }}
                              label={
                                <span
                                  style={{
                                    color: "#ffffff",

                                    fontSize: "10px",
                                  }}
                                  classes={{ root: classes.tab }}
                                >
                                  Funding
                                </span>
                              }
                            />
                          </Tabs>
                        </AppBar>
                        {this.state.tabValue === 0 ? (
                          <Grid container spacing={1}>
                            <Grid item xs={8}>
                              <Input
                                disableUnderline
                                style={{ border: "1px solid #384952" }}
                                type="text"
                                endAdornment={
                                  <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility">
                                      <SearchIcon />
                                    </IconButton>
                                  </InputAdornment>
                                }
                              />
                            </Grid>
                            <Grid item xs={4}>
                              <NativeSelect
                                disableUnderline
                                style={{
                                  border: "1px solid #384952",
                                  color: "white",
                                }}
                                inputProps={{
                                  name: "age",
                                  id: "age-native-helper",
                                }}
                              >
                                <option
                                  value={10}
                                  style={{
                                    background: "#384952",
                                    color: "#ffffff",
                                  }}
                                >
                                  Ten
                                </option>
                                <option
                                  value={20}
                                  style={{
                                    background: "#384952",
                                    color: "#ffffff",
                                  }}
                                >
                                  Twenty
                                </option>
                                <option
                                  value={30}
                                  style={{
                                    background: "#384952",
                                    color: "#ffffff",
                                  }}
                                >
                                  Thirty
                                </option>
                              </NativeSelect>
                            </Grid>
                            <Grid item xs={12}>
                              <TableContainer>
                                <Table
                                  style={{ background: "#1B262D" }}
                                  aria-label="simple table"
                                >
                                  <TableHead>
                                    <TableRow>
                                      <TableCell
                                        style={{
                                          fontSize: "13px",
                                          borderBottom: "0px",
                                          color: "#ffffff",
                                        }}
                                      >
                                        Name
                                      </TableCell>
                                      <TableCell
                                        style={{
                                          fontSize: "13px",
                                          borderBottom: "0px",
                                          color: "#ffffff",
                                        }}
                                      >
                                        Last
                                      </TableCell>
                                      <TableCell
                                        style={{
                                          fontSize: "13px",
                                          borderBottom: "0px",
                                          color: "#ffffff",
                                        }}
                                      >
                                        24H
                                      </TableCell>
                                      <TableCell
                                        style={{
                                          fontSize: "13px",
                                          borderBottom: "0px",
                                          color: "#ffffff",
                                        }}
                                      >
                                        VOL USD
                                      </TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    <TableRow>
                                      <TableCell
                                        style={{
                                          fontSize: "13px",
                                          borderBottom: "0px",
                                          color: "#ffffff",
                                        }}
                                      >
                                        BTC
                                      </TableCell>
                                      <TableCell
                                        style={{
                                          fontSize: "13px",
                                          borderBottom: "0px",
                                          color: "#ffffff",
                                        }}
                                      >
                                        1044USD
                                      </TableCell>
                                      <TableCell
                                        style={{
                                          fontSize: "13px",
                                          borderBottom: "0px",
                                          color: "#ffffff",
                                        }}
                                      >
                                        26.25%
                                      </TableCell>
                                      <TableCell
                                        style={{
                                          fontSize: "13px",
                                          borderBottom: "0px",
                                          color: "#ffffff",
                                        }}
                                      >
                                        14801
                                      </TableCell>
                                    </TableRow>
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Grid>
                          </Grid>
                        ) : this.state.tabValue === 1 ? (
                          <>
                            <Grid container spacing={1}>
                              <Grid item xs={8}>
                                <Input
                                  disableUnderline
                                  style={{ border: "1px solid #384952" }}
                                  type="text"
                                  endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton aria-label="toggle password visibility">
                                        <SearchIcon />
                                      </IconButton>
                                    </InputAdornment>
                                  }
                                />
                              </Grid>
                              <Grid item xs={4}>
                                <NativeSelect
                                  disableUnderline
                                  style={{ border: "1px solid #384952" }}
                                  inputProps={{
                                    name: "age",
                                    id: "age-native-helper",
                                  }}
                                >
                                  <option aria-label="None" value="" />
                                  <option value={10}>Ten</option>
                                  <option value={20}>Twenty</option>
                                  <option value={30}>Thirty</option>
                                </NativeSelect>
                              </Grid>
                              <Grid item xs={12}>
                                <TableContainer>
                                  <Table
                                    style={{ background: "#1B262D" }}
                                    aria-label="simple table"
                                  >
                                    <TableHead>
                                      <TableRow>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          Name
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          Last
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          24H
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          VOL USD
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      <TableRow>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          BTC
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          1044USD
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          26.25%
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          14801
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              </Grid>
                            </Grid>
                          </>
                        ) : (
                          <>
                            <Grid container spacing={1}>
                              <Grid item xs={12}>
                                <TableContainer>
                                  <Table
                                    style={{ background: "#1B262D" }}
                                    aria-label="simple table"
                                  >
                                    <TableHead>
                                      <TableRow>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          Name
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          Last
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          24H
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          VOL USD
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      <TableRow>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          BTC
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          1044USD
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          26.25%
                                        </TableCell>
                                        <TableCell
                                          style={{
                                            fontSize: "13px",
                                            borderBottom: "0px",
                                            color: "#ffffff",
                                          }}
                                        >
                                          14801
                                        </TableCell>
                                      </TableRow>
                                    </TableBody>
                                  </Table>
                                </TableContainer>
                              </Grid>
                            </Grid>
                          </>
                        )}
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion
                  style={{
                    background: "#1B262D",
                    marginTop: "0px",
                    marginLeft: "10px",
                  }}
                  defaultExpanded
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ExpandMoreIcon style={{ color: "#ffffff" }} />
                    <Typography className={classes.accordionHeading}>
                      Funding Form
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <span style={{ fontSize: "13px", color: "#ffffff" }}>
                          DELTA FFR OFFSET{" "}
                        </span>
                        <Input
                          id="standard-full-width"
                          disableUnderline
                          style={{
                            border: "1px solid #384952",
                            color: "#ffffff",
                          }}
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <span style={{ fontSize: "13px", color: "#ffffff" }}>
                          AMOUNT USD
                        </span>
                        <Input
                          id="standard-full-width"
                          disableUnderline
                          style={{
                            border: "1px solid #384952",
                            color: "#ffffff",
                          }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ fontSize: "13px", color: "#ffffff" }}>
                          PERIOD DAYS MIN MAX
                        </span>
                        <Input
                          id="standard-full-width"
                          disableUnderline
                          style={{
                            border: "1px solid #384952",
                            color: "#ffffff",
                          }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          style={{ background: "green", width: "100%" }}
                        >
                          {" "}
                          <span style={{ color: "#ffffff" }}>USD BID </span>
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <Button
                          variant="contained"
                          style={{ background: "red", width: "100%" }}
                        >
                          {" "}
                          <span style={{ color: "#ffffff" }}>USD OFFER </span>
                        </Button>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion
                  style={{
                    background: "#1B262D",
                    marginTop: "0px",
                    marginLeft: "10px",
                  }}
                  defaultExpanded
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <ExpandMoreIcon style={{ color: "#ffffff" }} />
                    <Typography className={classes.accordionHeading}>
                      BALANCES
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={1}>
                      <Grid item xs={6}>
                        <Input
                          id="standard-full-width"
                          disableUnderline
                          style={{
                            border: "1px solid #384952",
                            color: "#ffffff",
                          }}
                          fullWidth
                        />
                      </Grid>

                      <Grid item xs={6}>
                        <span
                          style={{
                            fontSize: "13px",
                            color: "blue",
                            display: "block",
                            marginLeft: "13px",
                            marginTop: "-8px",
                          }}
                        >
                          BALANCE DETAILS
                        </span>
                        <Checkbox />
                        <span style={{ fontSize: "10px", color: "#ffffff" }}>
                          HIDE SMALL BALANCESS
                        </span>
                      </Grid>

                      <Grid item xs={12}>
                        <TableContainer>
                          <Table
                            style={{ background: "#1B262D" }}
                            aria-label="simple table"
                          >
                            <TableHead>
                              <TableRow>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Name
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  EXCHANGE
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  MARGIN
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  FUNDING
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  USD
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  <span style={{ display: "block" }}>0</span>
                                  <span>0</span>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  <span style={{ display: "block" }}>0</span>
                                  <span>0</span>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  <span style={{ display: "block" }}>0</span>
                                  <span>0</span>
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  BTC
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  <span style={{ display: "block" }}>0</span>
                                  <span>0</span>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  <span style={{ display: "block" }}>0</span>
                                  <span>0</span>
                                </TableCell>
                                <TableCell
                                  style={{
                                    fontSize: "13px",
                                    borderBottom: "0px",
                                    color: "#ffffff",
                                  }}
                                >
                                  <span style={{ display: "block" }}>0</span>
                                  <span>0</span>
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ fontSize: "12px", color: "#ffffff" }}>
                          USD EQUIVALENT{" "}
                        </span>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={12}>
                <Accordion
                  style={{
                    background: "#1B262D",
                    marginTop: "10px",
                    marginLeft: "5px",
                    width: "100%",
                  }}
                  defaultExpanded
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container direction="row">
                      <Grid item xs={4} style={{ display: "flex" }}>
                        <ExpandMoreIcon style={{ color: "#ffffff" }} />
                        <Typography className={classes.accordionHeading}>
                          Chart USD
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12}>
                        <Line data={this.data} options={this.options} />
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion
                  style={{
                    background: "#1B262D",
                    marginTop: "10px",
                    marginLeft: "5px",
                    width: "100%",
                  }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container direction="row">
                      <Grid item xs={4} style={{ display: "flex" }}>
                        <ExpandMoreIcon style={{ color: "#ffffff" }} />
                        <Typography className={classes.accordionHeading}>
                          TAKEN: UNUSED
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} style={{ textAlign: "center" }}>
                        <span
                          style={{
                            color: "#ffffff",
                            fontSize: "13px",
                            textAlign: "center",
                          }}
                        >
                          No elements to show
                        </span>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion
                  style={{
                    background: "#1B262D",
                    marginTop: "10px",
                    marginLeft: "5px",
                    width: "100%",
                  }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container direction="row">
                      <Grid item xs={4} style={{ display: "flex" }}>
                        <ExpandMoreIcon style={{ color: "#ffffff" }} />
                        <Typography className={classes.accordionHeading}>
                          TAKEN: USING
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} style={{ textAlign: "center" }}>
                        <span
                          style={{
                            color: "#ffffff",
                            fontSize: "13px",
                            textAlign: "center",
                          }}
                        >
                          No elements to show
                        </span>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion
                  style={{
                    background: "#1B262D",
                    marginTop: "10px",
                    marginLeft: "5px",
                    width: "100%",
                  }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container direction="row">
                      <Grid item xs={4} style={{ display: "flex" }}>
                        <ExpandMoreIcon style={{ color: "#ffffff" }} />
                        <Typography className={classes.accordionHeading}>
                          PROVIDED
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} style={{ textAlign: "center" }}>
                        <span
                          style={{
                            color: "#ffffff",
                            fontSize: "13px",
                            textAlign: "center",
                          }}
                        >
                          No elements to show
                        </span>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion
                  style={{
                    background: "#1B262D",
                    marginTop: "10px",
                    marginLeft: "5px",
                    width: "100%",
                  }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container direction="row">
                      <Grid item xs={4} style={{ display: "flex" }}>
                        <ExpandMoreIcon style={{ color: "#ffffff" }} />
                        <Typography className={classes.accordionHeading}>
                          BIDS & OFFERS
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} style={{ textAlign: "center" }}>
                        <span
                          style={{
                            color: "#ffffff",
                            fontSize: "13px",
                            textAlign: "center",
                          }}
                        >
                          No elements to show
                        </span>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion
                  style={{
                    background: "#1B262D",
                    marginTop: "10px",
                    marginLeft: "5px",
                    width: "100%",
                  }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container direction="row">
                      <Grid item xs={4} style={{ display: "flex" }}>
                        <ExpandMoreIcon style={{ color: "#ffffff" }} />
                        <Typography className={classes.accordionHeading}>
                          AUTO-RENEW
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} style={{ textAlign: "center" }}>
                        <span
                          style={{
                            color: "#ffffff",
                            fontSize: "13px",
                            textAlign: "center",
                          }}
                        >
                          No elements to show
                        </span>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
              <Grid item xs={12}>
                <Accordion
                  style={{
                    background: "#1B262D",
                    marginTop: "10px",
                    marginLeft: "5px",
                    width: "100%",
                  }}
                >
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Grid container direction="row">
                      <Grid item xs={4} style={{ display: "flex" }}>
                        <ExpandMoreIcon style={{ color: "#ffffff" }} />
                        <Typography className={classes.accordionHeading}>
                          FUNDING BOOK
                        </Typography>
                      </Grid>
                    </Grid>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container>
                      <Grid item xs={12} style={{ textAlign: "center" }}>
                        <span
                          style={{
                            color: "#ffffff",
                            fontSize: "13px",
                            textAlign: "center",
                          }}
                        >
                          No elements to show
                        </span>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Dashboard);
