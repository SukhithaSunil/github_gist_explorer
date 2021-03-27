import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Skeleton from '@material-ui/lab/Skeleton'
import { ForkDetailsDiv, ForkBadge } from './Fork.styled'
function Fork({ forks, error, loading }) {
  return (
    <ForkDetailsDiv>
      {loading &&
        Array.from(new Array(3)).map((index) => (
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
          <ForkBadge
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
                <Typography color='textPrimary'>{fork.user.login}</Typography>
              </a>
            </React.Fragment>
          ))}
        </React.Fragment>
      )}

      {forks?.length == 0 && (
        <Typography color='textSecondary'>{'No forks'}</Typography>
      )}
    </ForkDetailsDiv>
  )
}

export default Fork
