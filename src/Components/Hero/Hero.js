import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { CardContent, Grid, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import map from "../img/map.svg";
import "./heroStyle"
import Item from "./heroStyle";
import SimpleSelect from "./selectButton";
import Container from "@mui/material/Container";

const Hero = () => {
  return (
    <CssBaseline>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Stack direction="row" alignItems="center">
              <Item>
                <CardContent
                  style={{
                    display: "flex",
                    height: "375px",
                    flexDirection: "column",
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center"
                  }}>
                  <Typography color="black" variant="h4" align="center"
                              style={{
                                alignItems: "center",
                                textAlign: 'left',
                                paddingBottom: 15,
                                paddingRight: 15
                              }}>
                    Scaling your business <br/> in Asia is hard, we<br/> make it easy.
                  </Typography>
                  <Typography color="black" style={{
                    alignItems: "center",
                    textAlign: 'left',
                    paddingBottom: 15,
                    paddingLeft: 90
                  }}>
                    Find trusted partners, to help you grow
                    revenues, and access new markets across Asia.
                  </Typography>
                  <SimpleSelect/>
                </CardContent>
              </Item>
            </Stack>
          </Grid>
          <Grid item xs={8} md={6}>
            <Item>
              <img src={map} alt="map" style={{height: "auto", zIndex: "-1"}}/>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </CssBaseline>

  )

}

export default Hero;