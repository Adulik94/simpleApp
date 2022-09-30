import React, { useState } from "react";
import { Box, Typography, } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";


const useStyles = makeStyles({
  img_root: {
    display: "flex",
    width: "100px",
    height: "100px",
    borderRadius: "70%",
    border: "1px #24b277 solid ",
    margin: "0 auto",
    transition: "ease 0.7s",
    cursor: "pointer",
    "&:hover ": {
      border: "4px dotted #24b277"
    }
  },
  img_responsive: {
    maxHeight: "70px",
    width: "70%",
    textAlign: "center",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center"
  },
  gridItem: {
    margin: "10px",
    transition: "ease 2s"
  },
  borderColor: {color: "#24b277", transition: "ease 0.7s"},
  borderHover: {color: "#000", transition: "ease 0.7s"}
});

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

const WhyGreenhouse = () => {
  const [carHover, setcarHover] = useState(false);
  const classes = useStyles();

  return (
    <div style={{width: '100%'}}>
      <Box md={12} xs={6} sx={{display: 'grid'}}>
        <Item>
          <Typography variant="h4" color="black"
                      style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            Why Greenhouse?
          </Typography>
        </Item>
      </Box>
    </div>
  );
};
export default WhyGreenhouse;
