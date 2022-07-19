import React from 'react'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typhography,
} from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAl'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import useStyles from './styles'
import moment from 'moment'

const Post = ({ post, setCurrentId }) => {
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={postMessage.selectedFile}
        title={postMessage.title}
      />
      <div className={classes.overlay}>
        <Typhography variant="h6">{post.creator}</Typhography>
        <Typhography variant="body2">
          {moment(post.creatorAt).fromNow()}
        </Typhography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white}' }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typhography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typhography>
      </div>
      <CardContent>
        <Typhography classNme={classes.title} variant="h5" gutterBottom>
          {post.message}
        </Typhography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small" />
          Like
          {postMessage.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
