import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import DoneIcon from '@mui/icons-material/Done';
import { Box } from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";
import greenhouse from "../img/greenhouse.jpeg"

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none"
    }
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },

  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700]
  },
  cardTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(1)
  },
}));

const tiers = [
  {
    image: {greenhouse},
    title: "Outsourced Business Development Services",
    description: [
      "Market Research",
      "B2B Lead Generation",
      "Appointment Setting",
      "Outsourced Sales Team",
      "Add more..."
    ],
    buttonText: "Visit Revenue ",
    buttonVariant: "outlined"

  },
  {
    image: {greenhouse},
    title: "Outsourced Business Development Services",
    description: [
      "Market Research",
      "B2B Lead Generation",
      "Appointment Setting",
      "Outsourced Sales Team",
      "Add more..."
    ],
    buttonText: "Visit Revenue ",
    buttonVariant: "outlined"

  },
  {
    image: {greenhouse},
    title: "Outsourced Business Development Services",
    description: [
      "Market Research",
      "B2B Lead Generation",
      "Appointment Setting",
      "Outsourced Sales Team",
      "Add more..."
    ],
    buttonText: "Visit Revenue ",
    buttonVariant: "outlined"

  },
];

export default function Carusel() {
  const classes = useStyles();

  return (
    <Container maxWidth={false} style={{background: "aliceblue"}}>
      <CssBaseline>
        <Box pt={15} pb={8}>
          <Typography
            variant="h4"
            fontWeight="500"
            fontSize={28}
            align="center"
            sx={{mx: "auto",}}
            maxWidth="md"
          >Greenhouse is your one-stop shop for expansion into <br/> Asia
          </Typography>
          <Typography
            fontSize={20}
            align="center"
            sx={{mx: "auto",}}
            maxWidth="sm"
          >Quick access to all of the market entry services you need, with none of the hassle.
          </Typography>
        </Box>
        <Container maxWidth="lg" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Market Expansion Services" ? 12 : 6}
                md={4}
              >
                <Card>
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  {<img src={greenhouse} height="auto" alt="IMAGE"/>}
                  <CardContent>
                    <div className={classes.cardTitle}>
                      <Typography align="center" component="h6" variant="h6" color="textPrimary">
                        {tier.title}
                      </Typography>
                    </div>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="left"
                          key={line}
                          style={{paddingLeft: 3}}
                        >
                          <DoneIcon color="action" style={{paddingRight: 6}}/>{line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant={tier.buttonVariant}
                      color="primary"
                    >
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </CssBaseline>
    </Container>
  )
    ;
}
