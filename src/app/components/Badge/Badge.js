
import React from 'react'
import {LanguageBadge} from './Badge.style'

const Badge = ({ files }) => {
  const languages = []
  Object.keys(files).map((fileName) => {
    const language = files[fileName].language
    if (languages.indexOf(language) < 0)
      languages.push(files[fileName].language)
  })

  return (
    <React.Fragment>
      {languages &&
        languages?.map((language, index) => (
          <LanguageBadge
            key={index}
            size='small'
            label={language}
            color='secondary'
          />
        ))}
    </React.Fragment>
  )
}
export default Badge
