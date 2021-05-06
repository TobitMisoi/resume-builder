import * as React from 'react'
import { GridContainer, GridItem } from 'components/layout/grid'
import { CustomForm } from 'components/layout/customForm'
import { useForm } from 'react-hook-form'

// local import
import store from './store'
import { ResumeContext } from 'context/resumeContext'

const PersonalInfo: React.FC = () => {
  const context = React.useContext(ResumeContext)
  const { content, removeFakeData, updatePersonalInfoData } = context

  const { handleSubmit } = useForm()

  const onSubmit = (data: never) => {
    removeFakeData()
    updatePersonalInfoData(data)
  }

  console.log(content.personalInfo)

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
              variant: 'outlined',
              defaultValue: content.data,
              onChange: handleSubmit(onSubmit)
            }}
          />
        ))}
      </GridItem>
    </GridContainer>
  )
}

export default PersonalInfo
