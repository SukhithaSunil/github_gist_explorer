import Chip from '@material-ui/core/Chip'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles({
  languageChip: {
    marginTop: 6,
  },
})
const Badge = ({ files }) => {
  const classes = useStyles()
  const languages = []
  Object.keys(files).map((fileName) => {
    const language = files[fileName].language
    if (languages.indexOf(language) < 0)
      languages.push(files[fileName].language)
  })

  return (
    <React.Fragment>
      {languages &&
        languages?.map((language,index) => (
          <Chip key={index}
            className={classes.languageChip}
            size='small'
            label={language}
            color='secondary'
          />
        ))}
    </React.Fragment>
  )
}
export default Badge
