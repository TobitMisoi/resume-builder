import { Grid, makeStyles } from "@material-ui/core";
import * as React from "react";
import PropTypes from "prop-types";

// local imports
import styles from "./styles";

const useStyles = makeStyles(styles);

const GridContainer: React.FC = (props) => {
  const classes = useStyles();

  const { children } = props;

  return (
    <Grid container className={classes.gridContainer}>
      {children}
    </Grid>
  );
};

GridContainer.propTypes = {
  children: PropTypes.node,
};

export default GridContainer;
