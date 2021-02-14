import React, { useState, useEffect } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import { Grid } from '@material-ui/core'
import { Row, Col } from 'react-bootstrap'
import { Spring } from 'react-spring/renderprops'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

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
    margin: {
      margin: '2% 0',
    }
  }),
)

const Collections = (props: any) => {
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
      <Row>
        <Col className="text-center">
          <Typography variant="h4" component="h4">
            Products
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
                          <Col xs={6} md={3} className={grid.margin}>                            
                            <Spring
                            from={{ opacity: 0.5, marginLeft: -500, }}
                            to={{ opacity:1,marginLeft: 0, }}
                            config={{ delay: d + (index * 10), duration: 1000 }}
                            > 
                            {ps=>(
                                <Card style={ps} className={classes.root}>
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
                        <Col> 
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
  export default Collections