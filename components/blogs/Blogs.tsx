import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import { Grid } from '@material-ui/core'
import { Row, Col } from 'react-bootstrap'
import { Spring } from 'react-spring/renderprops'
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
      maxWidth: 250,
    },
    media: {
      height: 140,
    },
    marginTop: {
        marginTop: 35,
    }
})

const gridStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        margin: '5% 10% 5% 10%',
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
    margin: {
        margin: '3% 0',
    }
  }),
)

const BlogPosts = (props: any) => {
    const classes = useStyles()
    const grid = gridStyles()
    const { collections } = props
    const [delay, setDelay] = useState(false);

    useEffect(() => {
      if(!delay){
        document.addEventListener("scroll", () => {
          const d = window.scrollY < 200 ? false : true;
          setDelay(d)
        })
      }
    })

    return (
      <>
      <Row className={ classes.marginTop}>
        <Col className="text-center">
          <Typography variant="h4" component="h4">
            Latest Blogs
          </Typography>
        </Col>
      </Row>
      {
        delay === true ? (
          <>
            <Row className={grid.root}>
              { 
                collections.map((item:any, index:number) => {
                  let d = 10
                  if(index < 4){
                      return(
                          <Col key={index} md={3} xs={6} className={grid.margin}>                            
                            <Spring
                            from={{ opacity: 0.5, marginLeft: -500, }}
                            to={{ opacity:1,marginLeft: 0, }}
                            config={{ delay: d + (index * 10), duration: 1000 }}
                            > 
                            {ps=>(
                                <Card style={ps} className={classes.root}>
                                    <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            Share
                                        </Button>
                                        <Button size="small" color="primary">
                                            Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                                )}
                              </Spring>
                          </Col>
                      )
                  }
              })}
            </Row>
          </>
        ) : (
          <>
          <Row className={grid.root}>
              { 
                collections.map((item:any, index:number) => {
                  let d = 10
                  if(index < 4){
                      return(
                        <Col key={index} md={3} xs={6} className={grid.margin}> 
                          <Card className={classes.root}>
                            <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                        </Col>
                    )
                  }
              })}
            </Row>
          </>
        )
      }
        
      </>
    );
}
  export default BlogPosts