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
    marginTop: 40,
    padding:20,
    border: 1,
    background: "rgba(147,213,180,0.1)",
    transition: "ease 0.7s",
  }

});

export default function ProductFeatures() {
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
              Get vendor quotes, in 24 hours
            </Typography>
            <Typography fontSize={20} fontWeight={600} gutterBottom color="#747474">
              Flip the script. Let them come to you...
            </Typography>
            <Typography fontSize={16} fontWeight={600} gutterBottom color="grey" mt={3}>
              We'll take 3 minutes to understand your project, and deliver <br/>your case to the most suitable service
              providers for bidding.
            </Typography>
            <Button
              size="large"
              style={{paddingLeft: 40, paddingRight: 40}}
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
              Get Quotes
            </Button>
            <div className={classes.message}>
              <Typography fontSize={12} justifyContent="center" gutterBottom>
                Greenhouse is the go-to partner for any company which needs market entry support in <br/> company set
                up,
                legal, regulatory, or market access across South East Asia.
              </Typography>
            </div>
            <Avatar />
          </div>
        </Item>
      </Box>
    </div>
  );
}


