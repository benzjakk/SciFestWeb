import React from 'react'
import { Typography, Divider,Carousel,Button,Row } from 'antd'
import ReactPlayer from 'react-player/lazy'
import './pages.scss'

const { Title, Paragraph, Text, Link } = Typography;

export const Sec2 = () => {
    return (
        <div className="container">
            <Typography className="textArea">
                <img  className="banner" src="https://images.pexels.com/photos/5114952/pexels-photo-5114952.jpeg?cs=srgb&dl=pexels-dids-5114952.jpg&fm=jpg"></img>
                <Title >ร่างกายมนุษย์</Title>
                <Title level={2}>แผลรักษาตัวเองได้อย่างไร ?</Title>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=ykbFsY6uV80'
                    width='100%'
                    height='100%'
                    controls
                    />
                </div>
            </Typography>
            
            <div className="buttonNavi">
                <Button type="primary" href="/sec3">
                    ฐานต่อไป
                </Button>
                <Button style={{marginTop:'10px',marginBottom:'10px'}} type="secondary" href="/">
                    หน้าแรก
                </Button>
            </div>
            
        </div>
    )
}
