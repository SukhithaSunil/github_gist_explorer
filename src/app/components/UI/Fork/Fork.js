import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'

function Fork({ forks }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
      }}
    >
      <Chip
        style={{ marginRight: '10px' }}
        size='small'
        avatar={<Avatar>F</Avatar>}
        label={`Forks`}
        color='primary'
      />
      {forks?.length > 0 &&
        forks.slice(0, 3).map((fork) => (
          <React.Fragment>
            <Avatar alt={fork.user.login} src={fork.user.avatar_url} />
            <a
              href={`https://gist.github.com/${fork.id}`}
              target='_blank'
              style={{ paddingRight: '10px' }}
            >
              <Typography color='textSecondary'>{fork.user.login}</Typography>
            </a>
          </React.Fragment>
        ))}
      {forks?.length == 0 && (
        <Typography color='textSecondary'>{'No forks'}</Typography>
      )}
    </div>
  )
}

export default Fork
