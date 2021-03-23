import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper'

import CardActions from '@material-ui/core/CardActions'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Gist from 'react-gist';
import moment from  'moment';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CommentIcon from '@material-ui/icons/Comment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  type: {
    marginLeft: 6,
  },
  
})
export const GistCard = ({ gistList }) => {
   
const classes = useStyles();
  const gistContent = (gist) => {
    const fileName = Object.keys(gist.files)[0]
    const fileDetails = gist.files[fileName]
    console.log(fileDetails)
    return fileDetails;
  }
  return (
    <React.Fragment>
      {gistList &&
        gistList.map((gist, index) => (
          <Grid item xs={12} md={6} lg={4} style={{ height: '20%' }}>
            <Paper className={classes.paper} variant='outlined' elevation={3}>
              <Card className={classes.root}>
                <CardContent style={{paddingBottom:"10px"}}>
                  <Typography
                    className={classes.title}
                    color='textSecondary'
                    gutterBottom
                  >
                    {gist.owner.login}
                  </Typography>
                  <Typography variant='h5' component='h2'>
                    {Object.keys(gist.files)[0]}
                  </Typography>
                  <Typography className={classes.pos} color='textSecondary'>
                    {`Created ${moment.utc(gist.created_at).fromNow()}`}
                  </Typography>
                  <Typography variant='body2' component='p'>
                    {gist.description || 'No Description'}
                    <Chip
                      className={classes.type}
                      size='small'
                      label={gistContent(gist).language}
                      color='primary'
                    />
                  </Typography>{' '}
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
                  <Button size='small' color='primary'>{"Learn More"}</Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
        ))}
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({ gistList: state.gistsDetails.gists })

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GistCard)
