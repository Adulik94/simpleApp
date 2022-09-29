import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import hongkong from "../img/hong-kong.png"
import indonesia from "../img/indonesia.png"
import malaysia from "../img/malaysia.png"
import myanmar from "../img/myanmar.png"
import philippines from "../img/philippines.png"
import singapore from "../img/singapore.png"
import thailand from "../img/thailand.png"
import vietnam from "../img/vietnam.png"
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row-reverse",
    justifyContent: "center"

  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  flag: {
    minWidth: 40,
  },
  customSelect: {
    width: 200,
    "& .img": {
      height: 40,
      borderRight: "none",
      paddingRight: 0,
      marginRight: 0
    },
    "& .country": {
      display: "none"
    }
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: "",
    name: "hai"
  });

  const handleChange = (event) => {
    setValues((oldValues) => {
      console.log(event.target.value, event.target.name);
      return {
        ...oldValues,
        [event.target.name]: event.target.value
      };
    });
  };

  return (
    <form className={classes.root}>
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Button onChange={handleChange} variant="contained"
                style={{backgroundColor: "#24b277"}}>
          Get Started
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Select your country</InputLabel>
          <Select
            value={values.age}
            onChange={handleChange}
            inputProps={{
              name: "age",
              id: "age-simple"
            }}
            className={classes.customSelect}
          >
            <MenuItem value={0}>
            <span className={`${classes.flag} img`}>
              <img src={hongkong} alt="hongkong" height="25px"/>
            </span>
              <span className={`country`}>Hong Kong</span>
            </MenuItem>
            <MenuItem value={1}>
            <span className={`${classes.flag} img`}>
              <img src={indonesia} alt="indonesia" height="25px"/>
            </span>
              <span className={`country`}>Indonesia</span>
            </MenuItem>
            <MenuItem value={2}>
            <span className={`${classes.flag} img`}>
              <img src={malaysia} alt="malaysia" height="25px"/>
            </span>
              <span className={`country`}>Malaysia </span>
            </MenuItem>
            <MenuItem value={3}>
            <span className={`${classes.flag} img`}>
              <img src={myanmar} alt="myanmar" height="25px"/>
            </span>
              <span className={`country`}>Myanmar </span>
            </MenuItem>
            <MenuItem value={4}>
            <span className={`${classes.flag} img`}>
              <img src={philippines} alt="philippines" height="25px"/>
            </span>
              <span className={`country`}>Philippines </span>
            </MenuItem>
            <MenuItem value={5}>
            <span className={`${classes.flag} img`}>
              <img src={singapore} alt="Singapore" height="25px"/>
            </span>
              <span className={`country`}>Singapore </span>
            </MenuItem>
            <MenuItem value={6}>
            <span className={`${classes.flag} img`}>
              <img src={thailand} alt="thailand" height="25px"/>
            </span>
              <span className={`country`}>Thailand </span>
            </MenuItem>
            <MenuItem value={7}>
            <span className={`${classes.flag} img`}>
              <img src={vietnam} alt="thailand" height="25px"/>
            </span>
              <span className={`country`}>Vietnam </span>
            </MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </form>
  );
}
