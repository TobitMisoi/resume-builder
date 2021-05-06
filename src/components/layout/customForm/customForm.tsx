/* eslint-disable react/prop-types */
import * as React from "react";
import { TextField, FormLabel, makeStyles } from "@material-ui/core";

// local imports
import styles from "./styles";

type Props = {
  labelText: string;
  inputProps: Record<string, unknown>;
};

const useStyles = makeStyles(styles);

const CustomForm: React.FC<Props> = (props) => {
  const classes = useStyles();

  const { labelText, ...inputProps } = props;

  return (
    <form action="" className={classes.form}>
      {labelText ? <FormLabel>{labelText}</FormLabel> : null}
      <TextField className="" {...inputProps} />
    </form>
  );
};

export default CustomForm;
