import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'


function Fork({ forks , error,loading}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px',
        borderRadius: '20px',
        backgroundColor: 'black',
      }}
    >
      {loading &&
        Array.from(new Array(3)).map(( index) => (
          <React.Fragment key={index}>
            <Skeleton
              animation='wave'
              variant='circle'
              width='40%'
              height={40}
            />
            <Skeleton width='50%' animation='wave' variant='rect' />
          </React.Fragment>
        ))}

      {forks?.length > 0 && (
        <React.Fragment>
          <Chip
            style={{ marginRight: '10px' }}
            size='small'
            avatar={<Avatar>F</Avatar>}
            label={`Forks`}
            color='primary'
          />
          {forks.slice(0, 3).map((fork, index) => (
            <React.Fragment key={index}>
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
        </React.Fragment>
      )}

      {forks?.length == 0 && (
        <Typography color='textSecondary'>{'No forks'}</Typography>
      )}
    </div>
  )
}

export default Fork
