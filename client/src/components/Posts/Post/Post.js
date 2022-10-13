import React from  'react';
import useStyles from  './style';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons-material/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons-material/Delete';
import MoreHorizIcon from '@material-ui/icons-material/MoreHoriz';
import moment from 'moment';

const Post = ({post}) =>{

    const classes = useStyles();
    
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color: 'white'}} size='small' onClick={()=>{}}>
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>{post.tags.map((tag)=>)}</Typography>
            </div>
            <CardContent>
                <Typography className={classes.title} variant='h5' gutterButton>{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <ThumbUpAltIcon fontSize='small'/>
                    Like
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={()=>{}}>
                    <DeleteIcon fontSize='small'/>
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}

export default Post;