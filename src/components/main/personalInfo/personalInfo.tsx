import { GridContainer, GridItem } from "components/layout/grid";
import { CustomForm } from "components/layout/customForm";

import * as React from "react";

// local import
import store from "./store";

const PersonalInfo: React.FC = () => {
  return (
    <GridContainer>
      <GridItem>
        {store.map((item) => (
          <CustomForm
            key={item.name}
            labelText={item.label}
            inputProps={{
              name: item.name,
              label: item.label,
              variant: "outlined",
            }}
          />
        ))}
      </GridItem>
    </GridContainer>
  );
};

export default PersonalInfo;
