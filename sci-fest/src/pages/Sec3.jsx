import React from 'react'
import { Typography, Divider,Carousel,Button,Row } from 'antd'
import ReactPlayer from 'react-player/lazy'
import './pages.scss'

const { Title, Paragraph, Text, Link } = Typography;

export const Sec3 = () => {
    return (
        <div className="container">
            <Typography className="textArea">
                <img  className="banner" src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?cs=srgb&dl=pexels-rfstudio-3825527.jpg&fm=jpg"></img>
                <Title >การแยกสาร</Title>
                <Title level={2}>แยกของในครัว</Title>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=K1--R6uw0kM'
                    width='100%'
                    height='100%'
                    controls
                    />
                </div>
            </Typography>

            <div className="buttonNavi">
                <Button type="primary" href="/sec4">
                    ฐานต่อไป
                </Button>
                <Button style={{marginTop:'10px',marginBottom:'10px'}} type="secondary" href="/">
                    หน้าแรก
                </Button>
            </div>
        </div>
    )
}
