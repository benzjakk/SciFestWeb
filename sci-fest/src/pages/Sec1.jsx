import React from 'react'
import './pages.scss'
import { Typography, Divider,Carousel } from 'antd'

const { Title, Paragraph, Text, Link } = Typography;
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

export const Sec1 = () => {
    return (
        <div className="container">
            <Typography>
            <img src="https://images.freeimages.com/images/large-previews/4c7/sushi-and-chinese-food-on-a-table-1329342.jpg"></img>
                <Title>อาหารและสารอาหาร</Title>         
                <Paragraph>
                    อาหารและสารอาหารคืออะไร? อาหาร หมายถึง สิ่งที่รับประทานเข้าไปแล้วก่อให้เกิดประโยชน์ ทำให้ร่างกายเจริญเติบโต ช่วยซ่อมแซมส่วนที่สึกหรอของร่างกาย อาหารส่วนใหญ่ได้มาจากพืชและสัตว์ ส่วน สารอาหาร คือ สารที่เป็นองค์ประกอบในอาหารที่สิ่งมีชีวิตนำไปใช้ในกระบวนการดำรงชีวิต สารอาหารที่เป็นองค์ประกอบของอาหาร ได้แก่ โปรตีน คาร์โบไฮเดรต ไขมัน เกลือแร่ และวิตามิน
                </Paragraph>
                <Title level={2}>คุณค่าของสารอาหาร</Title>
                <Paragraph>
                    สารอาหารต่างๆ ล้วนให้ประโยชน์ต่อร่างกายดังนี้
                    <ul>
                        <li>
                            ให้พลังงานแก่ร่างกาย ทำให้ทำงานได้และให้ความอบอุ่นแก่ร่างกาย
                        </li>
                        <li>
                            ป้องกันและต้านทานโรค
                        </li>
                        <li>
                            สร้างและซ่อมแซมเนื้อเยื่อส่วนที่สึกหรอ และทำให้ร่างกายเจริญเติบโต
                        </li>
                        <li>
                            ช่วยให้ระบบต่างๆ ในร่างกายทำงานได้ปกติ
                        </li>
                    </ul>
                </Paragraph>
                <Title level={2}>อาหารหลัก 5 หมู่</Title>
                <Title level={3}>หมู่ที่ 1</Title>
                <Paragraph>
                    <img src="https://images.freeimages.com/images/large-previews/16a/beef-lots-of-it-1461922.jpg"></img>
                    อาหารหมู่ที่ 1 กลุ่มโปรตีน ได้แก่ อาหารจำพวก เนื้อ นม ไข่ ถั่วเมล็ดต่างๆ อาหารในหมู่นี้จะมีสารโปรตีนสูง เมื่อร่างกายย่อยแล้วจะให้สารอาหารประเภทโปรตีน ซึ่งให้ประโยชน์ต่อร่างกายในด้านการเจริญเติบโตของร่างกาย ช่วยซ่อมแซมส่วนที่สึกหรอ ช่วยสร้างเซลล์และเนื้อเยื่อต่างๆ ของร่างกาย ให้พลังงาน และช่วยควบคุมการทำงานของอวัยวะต่างๆ ภายในร่างกาย ในแต่ละวันมนุษย์เราต้องการสารโปรตีนในปริมาณ 10 กรัมต่อน้ำหนักตัว 1 กิโลกรัม
                </Paragraph>
 
            </Typography>
        </div>
    )
}
