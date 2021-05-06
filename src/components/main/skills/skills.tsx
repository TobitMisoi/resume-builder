import React from 'react'

// local imports
import store from './store'
import { GridContainer, GridItem } from 'components/layout/grid'
import { CustomForm } from 'components/layout/customForm'

const Skill: React.FC = () => {
  return (
    <GridContainer>
      <GridItem>
        {store.map((item) => (
          <CustomForm
            key={item.id}
            inputProps={{
              variant: 'outlined',
              multiline: true
            }}
            labelText='Employment'
          />
        ))}
      </GridItem>
    </GridContainer>
  )
}

export default Skill
