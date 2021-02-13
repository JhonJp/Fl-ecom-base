import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'

const useStyles = makeStyles((theme) => ({
    root: {
      height: '55vh',
    },
    container: {
      display: 'flex',
    },
    paper: {
      width:'100%',
    },
    svg: {
      width: 100,
      height: 100,
    },
    polygon: {
      fill: theme.palette.common.white,
      stroke: theme.palette.divider,
      strokeWidth: 1,
    },
}))


const Expands = (props: any) => {
    const { checked } = props
    const classes = useStyles()
    const [expandColor, setColor] = useState('none')

    useEffect(() => {
      document.addEventListener("scroll", () => {
        const bgColor = window.scrollY < 100 ? "none":"#ffd9cc";
        setColor(bgColor)
      })
    })

    return (
        <>
            <Collapse in={checked}>
                <Paper elevation={4} className={classes.paper}>
                    <div className="expandedDropDown" style={{ background: expandColor }}></div>
                </Paper>
            </Collapse>
        </>
    );
}
export default Expands;