import React, { useState } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import { Grid } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 250,
    },
    image: {
        height: 300,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }))

const gridStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      margin: '5% 10% 5% 10%',
      textAlign: 'center',
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
)

const Collections = (props: any) => {
    const classes = useStyles()
    const grid = gridStyles()
    const { collections } = props

    return (
        <Grid container className={grid.root} spacing={2}>
            {collections.map((item:any, index:number) => {
                if(index < 4){
                    return(
                        <Grid item>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.media}
                                    image="/static/images/cards/paella.jpg"
                                    title="Paella dish"
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                }
            })}
        </Grid>
    );
}
  export default Collections