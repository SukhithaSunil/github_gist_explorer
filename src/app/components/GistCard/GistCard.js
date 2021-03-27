import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AssignmentIcon from '@material-ui/icons/Assignment'
import CommentIcon from '@material-ui/icons/Comment'
import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import Badge from '../Badge/Badge'
import { CardContentDiv, Description, GistLink } from './GistCard.styled'

export const GistCard = ({ gistList }) => {
  return (
    <React.Fragment>
      {gistList &&
        gistList.map((gist, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Paper variant='outlined' elevation={3}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label={gist.owner.login}
                      src={gist.owner.avatar_url}
                    />
                  }
                  title={gist.owner.login}
                  subheader={Object.keys(gist.files)[0]}
                />

                <CardContentDiv>
                  <Typography color='textSecondary'>
                    {`Created ${moment.utc(gist.created_at).fromNow()}`}
                  </Typography>
                  <Description variant='body2' component='h5'>
                    {gist.description || 'No Description'}
                  </Description>{' '}
                  <Badge files={gist.files} />
                </CardContentDiv>

                <CardActions>
                  <AssignmentIcon />
                  <Typography variant='body2' component='p'>
                    {`${Object.keys(gist.files).length} file(s)`}
                  </Typography>
                  <CommentIcon />
                  <Typography variant='body2' component='p'>
                    {`${gist.comments} comments`}
                  </Typography>

                  <GistLink
                    to={{
                      pathname: `/${gist.owner.login}/${gist.id}`,
                    }}
                  >
                    <Typography variant='body2' component='p'>
                      {'Learn More'}
                    </Typography>
                  </GistLink>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        ))}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({ gistList: state.gistsDetails.gists })

export default connect(mapStateToProps, {})(GistCard)
