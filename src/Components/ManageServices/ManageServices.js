import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import imge from "../img/quotes.png"
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Avatar from "./Avatar";

function Item(props) {
  const {sx, ...other} = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : '#fff'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        p: 1,
        m: 1,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const useStyles = makeStyles({
  root: {
    width: "100%",
    textAlign: "left"
  },
  contextSection: {
    paddingTop: "20px"
  },
  message: {
    alignItems: "baseline",
    justifyContent: "center",
    marginTop: 40,
    padding: 20,
    border: 1,
    background: "rgba(147,213,180,0.1)",
    transition: "ease 0.7s",
  }

});

export default function ManageServices() {
  const classes = useStyles()
  return (
    <div style={{width: '100%'}}>
      <Box md={12} xs={6} sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        <Item>
          <img
            className={classes.root}
            src={imge}
            alt="he"
            loading="lazy"
          />
        </Item>
        <Item md={12} xs={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div>
            <Typography fontWeight={600} justifyContent="center" variant="h5" gutterBottom>
              Let us manage it for you
            </Typography>
            <Typography fontSize={20} fontWeight={600} gutterBottom color="#747474">
              Managed Services means you can lean on us Browse 200+<br/> qualified market entry service
              providers,across 31 countries
            </Typography>
            <Typography fontSize={16} fontWeight={600} gutterBottom color="grey" mt={3}>
              We get it, you're busy. So we'll give you a dedicated Greenhouse resource to <br/> manage the entire
              project for you, at just a 15% premium.
            </Typography>
            <Button
              size="large"
              sx={{
                backgroundColor: "#24b277",
                ":hover": {
                  color: "white"
                }
              }}
              color="secondary"
              variant="contained"
              className="CheckButton"
            >
              Managed Services
            </Button>
            <div className={classes.message}>
              <Typography fontSize={10} justifyContent="center" gutterBottom>
                Greenhouse’s platform provides great value. Their network of service providers are trustworthy <br/>
                and helped us better understand the entire Southeast Asian region. In turn, <br/>
                that empowered us to make more educated decisions about our go-to-market strategy.
              </Typography>
            </div>
            <Avatar/>
          </div>
        </Item>
      </Box>
    </div>
  );
}


