import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import { Row, Col, Carousel } from 'react-bootstrap'
import { Paper, Typography } from '@material-ui/core'
import { Spring } from 'react-spring/renderprops'
import Particle from 'particles-bg'

const useStyles = makeStyles((theme) => ({
    root: {
      marginBottom: 10,
    },
    box: {
        minHeight: 500,
        background: '#ffd9ccc7',
        borderBottomRightRadius: '25%',
        borderTopLeftRadius: '25%',
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

const paperStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                '& > *': {
                    margin: theme.spacing(15),
                    width: 500,
                    height: 250,
                },
            },
            media: {
                margin: '25%',
            }
        }),
    )

const Feature = (props: any) => {
    const classes = useStyles()
    const paper = paperStyles()

    return (
        <>
            <Row className={classes.root}>
                <Col md={12} className={classes.box + ' text-center'}>
                <Particle type="polygon" bg={true} />
                    <Row>
                        <Col md={6} xs={12}>
                            <div className={paper.root}>
                                <Paper variant="outlined" />
                            </div>
                        </Col> 
                        <Col md={6} xs={12}>
                            <Spring
                                from={{ opacity:0 }}
                                to={{ opacity:1 }}
                                config={{ delay: 0, duration: 1000 }}
                                > 
                                {ps=>(
                                    <Carousel style={ps} controls={false} indicators={false} className={paper.root}>
                                        <Carousel.Item interval={3000} >
                                            <Typography variant="h5" gutterBottom>    
                                                "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                                            </Typography>
                                        </Carousel.Item>
                                    </Carousel>
                                )}
                            </Spring>
                        </Col> 
                    </Row>
                </Col>
            </Row>
        </>
    );
}
  export default Feature