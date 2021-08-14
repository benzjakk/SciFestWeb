import React from 'react'
import { Typography, Divider,Carousel,Button,Row } from 'antd'
import ReactPlayer from 'react-player/lazy'
import './pages.scss'

const { Title, Paragraph, Text, Link } = Typography;

export const Sec4 = () => {
    return (
        <div className="container">
            <Typography className="textArea">
                <img className="banner" src="https://images.pexels.com/photos/3567673/pexels-photo-3567673.jpeg?cs=srgb&dl=pexels-dom-le-roy-3567673.jpg&fm=jpg"></img>
                <Title>ปรากฎการณ์บนท้องฟ้า</Title>
                <Title level={2}>ข้างขึ้นข้างแรม (The Moon’s Phases)</Title>
                <Paragraph>
                    เกิดจากดวงจันทร์มีรูปร่างเป็นทรงกลม ไม่มีแสงในตัวเอง ด้านสว่างได้รับแสงจากดวงอาทิตย์ ส่วนด้านตรงข้ามไม่ได้รับแสงจากดวงอาทิตย์ การโคจรของดวงจันทร์รอบโลกทำให้มุมระหว่างดวงอาทิตย์ ดวงจันทร์ และโลก เปลี่ยนเปลี่ยนแปลงไป เมื่อมองดูดวงจันทร์จากพื้นโลก เราจึงมองเห็นเสี้ยวของดวงจันทร์มีขนาดเปลี่ยนไปเป็นวงรอบ โดยเราเรียกว่า ข้างขึ้น และข้างแรม
                </Paragraph>
                <Title level={2}>เดือนมืด (New Moon)</Title>
                <Paragraph>
                    ตรงกับแรม 15 ค่ำ เป็นตำแหน่งที่ดวงจันทร์อยู่ระหว่างโลกกับดวงอาทิตย์ ในวันนี้ ผู้สังเกตที่อยู่บนโลกจะมองเห็นดวงจันทร์ด้านที่ไม่มีแสงอาทิตย์มาตกกระทบ จึงดูเหมือนดวงจันทร์ไม่ส่องแสง เราจึงเรียกว่าคืนเดือนมืด หรือจันทร์ดับ
                </Paragraph>
                <Title level={2}>วันเพ็ญ (Full Moon)</Title>
                <Paragraph>
                    ตรงกับขึ้น 15 ค่ำ เป็นตำแหน่งที่ดวงจันทร์อยู่ตรงข้ามกับดวงอาทิตย์ ซึ่งแสงจากดวงอาทิตย์จะตกกระทบตั้งฉากกับดวงจันทร์พอดี ผู้สังเกตที่อยู่บนโลกจะเห็นดวงจันทร์ส่องแสงเต็มดวง
                </Paragraph>
                <img src="https://i2.wp.com/ngthai.com/app/uploads/2019/01/%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%82%E0%B8%B6%E0%B9%89%E0%B8%99%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%A1.jpg?resize=768%2C366&ssl=1"></img>
                <Title level={2}>ดวงจันทร์</Title>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=6AviDjR9mmo&t=7s'
                    width='100%'
                    height='100%'
                    controls
                    />
                </div>
            </Typography>
            
            <div className="buttonNavi">
                <Button type="primary" href="/sec5">
                    ฐานต่อไป
                </Button>
                <Button style={{marginTop:'10px',marginBottom:'10px'}} type="secondary" href="/">
                    หน้าแรก
                </Button>
            </div>
        </div>
    )
}
