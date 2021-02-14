import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import { Row, Col, Carousel } from 'react-bootstrap'
import { Paper, Typography } from '@material-ui/core'
import { Spring } from 'react-spring/renderprops'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  box: {
      height: 300,
      background: '#ffd9cc',
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
        },
        media: {
            margin: '25%',
        }
      }),
)

const Footer = () => {
  const classes = useStyles()
  const paper = paperStyles()

  return (
    <>
      <Row className={classes.root +' ' + classes.box}>
        <Col md={4} xs={6}>
          <div className={paper.root}>
            <Paper variant="outlined" />
          </div>
        </Col>
        <Col md={4} xs={6}>
          <div className={paper.root}>
            <Paper variant="outlined" />
          </div>
        </Col>
        <Col md={4} xs={6}>
          <div className={paper.root}>
            <Paper variant="outlined" />
          </div>
        </Col>
        <Col md={4} xs={6}>
          <div className={paper.root}>
            <Paper variant="outlined" />
          </div>
        </Col>
      </Row>
    </>
  );
}
export default Footer;