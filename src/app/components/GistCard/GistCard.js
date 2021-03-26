import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AssignmentIcon from '@material-ui/icons/Assignment'
import CommentIcon from '@material-ui/icons/Comment'
import moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Badge from '../UI/Badge/Badge'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  type: {
    marginTop: 6,
  },
})
export const GistCard = ({ gistList }) => {
  const classes = useStyles()
  const colors = {
    Markdown: 'burlywood',
    JavaScript: 'cadetblue',
    Text: 'teal',
    SVG: 'darkgoldenrod',
    CSS: 'darkcyan',
    HTML: 'cornflowerblue',
  }
  const gistContent = (gist) => {
    const languages = []
    Object.keys(gist.files).map((fileName) => {
      languages.push(gist.files[fileName].language)
    })

    return languages
  }
  return (
    <React.Fragment>
      {gistList &&
        gistList.map((gist, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Paper  variant='outlined' elevation={3}>
              <Card >
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
                <CardContent style={{ paddingBottom: '10px' }}>
                  <Typography className={classes.pos} color='textSecondary'>
                    {`Created ${moment.utc(gist.created_at).fromNow()}`}
                  </Typography>
                  <Typography
                    variant='body2'
                    component='h5'
                    style={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {gist.description || 'No Description'}
                  </Typography>{' '}
                  <Badge files={gist.files} />
                </CardContent>

                <CardActions style={{ justifyContent: 'centre' }}>
                  <AssignmentIcon />
                  <Typography variant='body2' component='p'>
                    {`${Object.keys(gist.files).length} file(s)`}
                  </Typography>
                  <CommentIcon />
                  <Typography variant='body2' component='p'>
                    {`${gist.comments} comments`}
                  </Typography>

                  <Link
                    style={{ color: 'darksalmon' }}
                    to={{
                      pathname: `/${gist.owner.login}/${gist.id}`,
                    }}
                  >
                    <Typography variant='body2' component='p'>
                      {'Learn More'}
                    </Typography>
                    {/* <Button size='small' color='primary'></Button> */}
                  </Link>
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
