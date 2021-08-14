import React from 'react'
import { Typography, Divider,Carousel,Button,Row } from 'antd'
import ReactPlayer from 'react-player/lazy'
import './pages.scss'

const { Title, Paragraph, Text, Link } = Typography;

export const Sec5 = () => {
    return (
        <div className="container">
            <Typography className="textArea">
                <img className="banner" src="https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?cs=srgb&dl=pexels-led-supermarket-577514.jpg&fm=jpg"></img>
                <Title>พลังงานไฟฟ้า</Title>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=N8-KbVHX0GM'
                    width='100%'
                    height='100%'
                    controls
                    />
                </div>
            </Typography>

            <div className="buttonNavi">
                <Button style={{marginTop:'10px',marginBottom:'10px'}} type="primary" href="/">
                    หน้าแรก
                </Button>
            </div>
            
        </div>
    )
}
