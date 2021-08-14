import React from 'react'
import { Typography, Divider,Carousel,Button,Card,Row,Col } from 'antd'
import './pages.scss'

const { Title, Paragraph, Text, Link } = Typography;
const { Meta } = Card;

export const Home = () => {
    return ( 
        <div className="container"> 
            <img className='banner'
                src="https://images.pexels.com/photos/355938/pexels-photo-355938.jpeg?cs=srgb&dl=pexels-pixabay-355938.jpg&fm=jpg"></img>
            <Typography className="textArea">
                <Title>สัปดาห์วิทยาศาสตร์</Title>
                <Paragraph>
                วันวิทยาศาสตร์แห่งชาติ เป็นวันสำคัญของประเทศไทย
                และมีความสำคัญต่อวงการวิทยาศาสตร์และดาราศาสตร์ไทย กำหนดให้ตรงกับวันที่ 18 สิงหาคม ของทุกๆปีซึ่งเป็นวันที่พระบาทสมเด็จพระจอมเกล้าเจ้าอยู่หัว รัชกาลที่ 4 ได้ทอดพระเนตรสุริยุปราคาเต็มดวงเมื่อ พ.ศ. 2411 ที่บ้านหว้ากอ จ.ประจวบคีรีขันธ์ ปัจจุบันมีการจัดงานสัปดาห์วิทยาศาสตร์ขึ้นเป็นประจำทุกปี
                </Paragraph>
               
                <Title level={2}>เข้าร่วมกิจกรรม</Title>
            </Typography>
            <Row gutter={[16,16]} style={{padding:'10px'}}>
                <Col span={8}>
                    <Card 
                    hoverable
                    cover={<img alt="foodsec" src="https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />}
                    >
                        <Meta title="ํฐานที่ 1" description="อาหารและสุขภาพ" />
                        
                    </Card>
                </Col>
                <Col span={8}>
                    <Card 
                    hoverable
                    cover={<img alt="bodysec" src="https://images.pexels.com/photos/5114952/pexels-photo-5114952.jpeg?cs=srgb&dl=pexels-dids-5114952.jpg&fm=jpg" />}
                    >
                        <Meta title="ํฐานที่ 2" description="ร่างกาย" />
                        
                    </Card>
                </Col>
                <Col span={8}>
                    <Card 
                    hoverable
                    cover={<img alt="mattersec" src="https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?cs=srgb&dl=pexels-rfstudio-3825527.jpg&fm=jpg" />}
                    >
                        <Meta title="ํฐานที่ 3" description="การแยกสาร" />
                        
                    </Card>
                </Col>
                <Col span={8}>
                    <Card 
                    hoverable
                    cover={<img alt="skysec" src="https://images.pexels.com/photos/3567673/pexels-photo-3567673.jpeg?cs=srgb&dl=pexels-dom-le-roy-3567673.jpg&fm=jpg" />}
                    >
                        <Meta title="ํฐานที่ 4" description="ปรากฎการณ์บนท้องฟ้า" />
                        
                    </Card>
                </Col>
                <Col span={8}>
                    <Card 
                    hoverable
                    cover={<img alt="elecsec" src="https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg?cs=srgb&dl=pexels-led-supermarket-577514.jpg&fm=jpg" />}
                    >
                        <Meta title="ํฐานที่ 5" description="ไฟฟ้า" />
                        
                    </Card>
                </Col>
                
            </Row>
            
        </div>
    )
}
