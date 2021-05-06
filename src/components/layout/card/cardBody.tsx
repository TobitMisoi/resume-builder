import { Card } from "@material-ui/core";
import * as React from "react";
import PropTypes from "prop-types";

type Props = {
  children: React.ReactNode;
};

const CardBody: React.FC<Props> = (props) => {
  const { children } = props;

  return <Card>{children}</Card>;
};

CardBody.propTypes = {
  children: PropTypes.node,
};

export default CardBody;
