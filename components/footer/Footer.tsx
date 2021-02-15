import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import { Row, Col, Image } from 'react-bootstrap'
import { Typography } from '@material-ui/core'
import { NavLink } from 'reactstrap'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '3%',
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
        },
        color: {
          color: '#3c3b3d',
        }
      }),
)

const Footer = (props: any) => {
  const { navigation, footer } = props
  const classes = useStyles()
  const paper = paperStyles()

  return (
    <>
      <Row className={classes.root +' ' + classes.box}>
        <Col md={6} xs={6}>
          <div className={paper.root + ' d-inline-block'}>
            <Image
              src={navigation.logo[0].url}
              height="50"
              className="d-inline-block"
              alt="Logo"
            />
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </div>
        </Col>
        <Col md={3} xs={6}>
          <div className={paper.root + ' d-inline-block'}>
            <Typography variant="subtitle1"></Typography>
            {
              navigation.navbar.map((e:any,index:number) => {
                  return(
                      <NavLink className={paper.color + ' pointer-cursor'} key={index} href={e.url}>{e.label}</NavLink>
                  )
              })
            }
          </div>
        </Col>
        <Col md={3} xs={6}>
          <Typography variant="subtitle1">
            Social Media
          </Typography>
          <div className={paper.root + ' d-inline-block'}>
              {
                footer.social.map((e:any,index:number) => {
                    return(
                        <NavLink key={index} className={paper.color + ' pointer-cursor'} href={e.url}>{e.label}</NavLink>
                    )
                })
              }
          </div>
        </Col>
      </Row>
    </>
  );
}
export default Footer;