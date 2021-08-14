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
                <Title>วงจรไฟฟ้า</Title>
                <Paragraph>
                    ทางเดินของกระแสไฟฟ้าซึ่งไหลมาจากแหล่งกำเนิดผ่านตัวนำ 
                    และเครื่องใช้ไฟฟ้าหรือโหลด แล้วไหลกลับไปยังแหล่งกำเนิดเดิม
                </Paragraph>
                <Title level={2}>ส่วนประกอบที่สำคัญ 3 ส่วน</Title>
                <Paragraph>
                <img src="https://sites.google.com/site/withyasastrbeuxngtnp661/kar-kin-xahar-hi-thuk-hlak-phochnakar/afdgdsfbxcvbcxv.JPG?attredirects=0"></img>
                <Title level={3}>แหล่งกำเนิดไฟฟ้า</Title>
                <Paragraph>แหล่งจ่ายแรงดันไฟฟ้าไปยังวงจรไฟฟ้า เช่น แบตเตอรี่</Paragraph>
                <Title level={3}>ตัวนำไฟฟ้า</Title>
                <Paragraph>สายไฟฟ้าหรือสื่อที่จะเป็นตัวนำให้กระแสไฟฟ้าไหลผ่านไปยังเครื่องใช้ไฟฟ้า ซึ่งต่อระหว่างแหล่งกำเนิดกับเครื่องใช้ไฟฟ้า</Paragraph>
                <Title level={3}>เครื่องใช้ไฟฟ้า</Title>
                <Paragraph>เครื่องใช้ที่สามารถเปลี่ยนพลังงานไฟฟ้าให้เป็นพลังงานรูปอื่น ซึ่งจะเรียกอีกอย่างหนึ่งว่า โหลด</Paragraph>
                   
                </Paragraph>
                <Title level={2}>ไฟฟ้าสำคัญขนาดไหน ?</Title>
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
