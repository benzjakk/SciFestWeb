import React from 'react'
import './pages.scss'
import { Typography, Divider,Carousel,Button,Row } from 'antd'

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
            <Typography className="textArea">
                <img  src="https://images.freeimages.com/images/large-previews/4c7/sushi-and-chinese-food-on-a-table-1329342.jpg"></img>
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
                <Title level={3}>หมู่ที่ 2</Title>
                <Paragraph>
                    <img src="https://6d4cd56c-a-62cb3a1a-s-sites.googlegroups.com/site/withyasastrbeuxngtnp661/hnwy-kar-reiyn-thi-1-xahar-laea-sar-xahar/%E0%B8%A12.jpg?attachauth=ANoY7cqowI6InL_cMwZ-yvZdX6uqsLnrKb9pdqxAUhyPSVyi8uEIZcrJ3rX7vI2Dh87uIwQLjG3R7dA9g2h6gmzLGa1lI3MvCjDQDg9uS6HYTcnzuDSgXqICMuzPoq5aLyFUYjprUx2yABat-ynkSnQc2BsweFPKrxFVHbckFyQ3ddJVlHXZGP_ABgjzFZJVKEFPr0bCVEhbATf-JZyeD9svkv1qRZXqkwdtCeW-j1yvG9sA4d1QXji9O9is3T_wOMWop4_m4q8mhOKffb0R9GiHUBZQqemMeUTrnuTyNpDQy8Bzh_aljZQ%3D&attredirects=0"></img>
                    อาหารหมู่ที่ 2 กลุ่มคาร์โบไฮเดรต ได้แก่ อาหารจำพวกแป้ง เผือก มัน น้ำตาล อาหารหมู่นี้เมื่อร่างกายย่อยแล้วจะให้สารอาหารประเภทคาร์โบไฮเดรต และเปลี่ยนสารคาร์โบไฮเดรตให้เป็นพลังงานที่ใช้ทำกิจกรรมต่างๆ และให้ความอบอุ่นแก่ร่างกาย
                </Paragraph>
                <Title level={3}>หมู่ที่ 3</Title>
                <Paragraph>
                    <img src="https://6d4cd56c-a-62cb3a1a-s-sites.googlegroups.com/site/withyasastrbeuxngtnp661/hnwy-kar-reiyn-thi-1-xahar-laea-sar-xahar/%E0%B8%A13.jpg?attachauth=ANoY7comLPbkc_jR9yI5BqUTLKQmb4xznLxHiEQXv-ZXljtO7mAcMSQn_gi-A2cTkupoH1CYheh5F2EsXYdZQxoW9c43ZS7REEgFdC8Dh_RMqNnAraZ0D1eIdiQ4aT92cX6zTWMytTl1WofgttAqrbtcBSgNci_kfljY8RhHzEFp3nE6sOqepWRk8MvuYt5bY3pbYSCsCp9JiAhDiM5bwt2E4ruEyHGiQajeozH9l14B4Mshmagd1qogCrkvt8LTbVTH4exMQrU7llEIc2YPZz9sbVfVUfOdGxDDLsgw2GzWKLXNSx-D-qw%3D&attredirects=0"></img>
                    อาหารหมู่ที่ 3 กลุ่มเกลือแร่หรือแร่ธาตุต่างๆ ได้แก่ อาหารจำพวกผักใบเขียว และพืชผักอื่นๆ แร่ธาตุเป็นสารอาหารที่ร่างกายต้องการและขาดไม่ได้ เพราะแร่ธาตุบางชนิดเป็นส่วนประกอบของอวัยวะและกล้ามเนื้อบางอย่าง เช่น กระดูก ฟัน เลือด บางชนิดเป็นส่วนของสารต่างๆ ที่เกี่ยวกับการเจริญเติบโตในร่างกาย เช่น ฮอร์โมน เฮโมโกลบิน เอนไซม์ ฯลฯ นอกจากนี้ แร่ธาตุยังช่วยในการควบคุมการทำงานของอวัยวะต่างๆ ของร่างกายให้ทำหน้าที่ปกติ เช่น ควบคุมการทำงานของกล้ามเนื้อและระบบประสาท การแข็งตัวของเลือด ช่วยควบคุมสมดุลของน้ำในการไหลเวียนของของเหลวในร่างกาย ที่สำคัญช่วยให้ระบบการย่อยและการขับถ่ายเป็นปกติ อาหารในหมู่นี้มีในพืช ผัก ชนิดต่างๆ ทั้งผักใบเขียว และสีต่างๆ เช่น สีแดง สีเหลือง สีม่วง สีขาว ฯลฯ ซึ่งมีทั้งพืชผักที่เรารับประทาน ใบ ดอก ผล ลำต้น หัว หรือ รับประทานได้ทุกส่วน ซึ่งจะให้คุณค่าอาหารที่แตกต่างกัน เช่น ผักตำลึง ดอกแค ฟักทอง แครอท ฯลฯ
                </Paragraph>
                <Title level={3}>หมู่ที่ 4</Title>
                <Paragraph>
                    <img src="https://6d4cd56c-a-62cb3a1a-s-sites.googlegroups.com/site/withyasastrbeuxngtnp661/hnwy-kar-reiyn-thi-1-xahar-laea-sar-xahar/%E0%B8%A14.jpg?attachauth=ANoY7crpZ3nYVsNGOiikLNiDT9AxqAXeNpXT_x2G1OM786l2s3JKtnbq-2E-LDYRxX4o4zn15WwnSA0mYAqEeP74CPZQWhedLWUg7vy3w5FZhZJANueMwt4pI-aInb_FEuIXPjREnjWooTZ_y6GHcO-lP3tpOmAWCsR2ULNRIKNeizETrzcTSnl2buo5Ur7f6ex9ex5BXd9QaKQOzli8X_vJtzO6LrjB52k4KUy0R-WjTvE8EtICmL1PmrPl3N_RLbax-hX5nfP8uIZdRq97VDpu8VKBxhWNbw2hxMh9jEs3S8fmaHFJznc%3D&attredirects=0"></img>
                    อาหารหมู่ที่ 4 กลุ่มวิตามิน ได้แก่ อาหารจำพวกผลไม้ต่างๆ อาหารหมู่นี้เมื่อร่างกายย่อยแล้วจะให้สารอาหารประเภทเกลือแร่และวิตามิน คล้ายกับอาหารหลักหมู่ที่ 3 ซึ่งให้ประโยชน์ต่อร่างกายในด้านบำรุงสุขภาพของผิวหนังให้สดชื่น บำรุงสุขภาพปาก เหงือก และฟัน ช่วยให้ระบบการย่อยและการขับถ่ายเป็นปกติ อาหารในหมู่นี้นอกจากจะให้วิตามิน เกลือแร่ แล้วยังให้กากใยอาหารที่ช่วยในการขับถ่ายที่เป็นปกติ ทำให้ระบบต่างๆ ในร่างกายทำงานได้ตามปกติ
                </Paragraph>
                <Title level={4}>วิตามิน</Title>
                <Paragraph>
                    <img src="https://sites.google.com/site/withyasastrbeuxngtnp661/_/rsrc/1548939410099/hnwy-kar-reiyn-thi-1-xahar-laea-sar-xahar/v1.jpg?height=320&width=320"></img>
                    วิตามินเป็นอาหารที่ทำหน้าที่ช่วยเสริมสร้างความเจริญเติบโต สร้างภูมิต้านทานโรค ทำให้ระบบต่างๆ ของร่างกายทำงานปกติ
                </Paragraph>
                <Title level={5}>ประเภทของวิตามิน</Title>
                <Paragraph>
                    <Text strong>วิตามินที่ละลายในน้ำ</Text> ได้แก่ วิตามินบี และวิตามินซี <br/>

                    <Text strong>วิตามินที่ละลายในน้ำมัน</Text> ได้แก่ วิตามินเอ วิตามินดี วิตามินอี และวิตามินเค<br/>

                    นอกจากนี้ ร่างกายยังต้องการวิตามินและเกลือแร่เพื่อใช้ในการเจริญเติบโตอีกด้วย อาหารที่ให้วิตามิน มีดังนี้<br/>

                    <Text strong>วิตามินเอ</Text> แหล่งอาหาร ข้าวโพด ไข่แดง ตับ นม เนย ผลไม้ โรคที่เกิดจากการขาดวิตามินเอ เช่น<br/>

                    โรคตาฟางในเวลากลางคืนร่างกายไม่เจริญเติบโตเต็มวัย<br/>

                    <Text strong>วิตามินบี</Text> แหล่งอาหาร ข้าวซ้อมมือ ตับ ยีสต์ โรคที่เกิดจากการขาดวิตามินบี เช่น โรคเหน็บชาประสาททำงานไม่ปกติ<br/>

                    <Text strong>วิตามินซี</Text> แหล่งอาหาร ส้ม มะเขือเทศ กล้วย ฝรั่ง โรคที่เกิดจากการขาดวิตามินซี เช่น เลือดออกตามไรฟัน เหงือกบวม<br/>

                    <Text strong>วิตามินดี</Text> แหล่งอาหาร ส้ม ไข่แดง น้ำมันตับปลา โรคที่เกิดจากการขาดวิตามินดี เช่น ฟันผุ กระดูกอ่อน<br/>
                </Paragraph>           
                <Title level={3}>หมู่ที่ 5</Title>
                <Paragraph>
                    <img src="https://6d4cd56c-a-62cb3a1a-s-sites.googlegroups.com/site/withyasastrbeuxngtnp661/hnwy-kar-reiyn-thi-1-xahar-laea-sar-xahar/%E0%B8%A15.jpg?attachauth=ANoY7co4Kh43ZLlftGYgdAvvywWgEcj7fmXrRMJxhh5FwCQslY0h113MaOz6T29GoSl9W1HwV0LGZZxT0lqVNgxC8BCF3ZLWl54LuC98JwrdXNrhh6T8593sD_gvJyyVFMjpaKlqL8Di8Qd9b8moZqTjStr7qCFqSS2v5BQdM6I-H8Hd25vXqt4DFXcD_3mqRsppCjPlaOllWKzrPHb2fdP3Lnjh2L0E4rLjOYcSqpAV-wyz9a59Wo_RmNlqN1TvaLevunDNlmBRhlXxDeixpDCHlXM-lEg0mmszI6LyxAVuRQa6pfkNniI%3D&attredirects=0"></img>
                    อาหารหมู่ที่ 5 กลุ่มไขมัน ได้แก่ อาหารจำพวกไขมันจากพืชและสัตว์ เช่น นม เนย ชีส น้ำมันพืช น้ำมันหมู เมื่อร่างกายได้รับไขมันที่กินเข้าไปแล้วจะเปลี่ยนให้เป็นพลังงาน ไขมันทำหน้าที่ให้ความอบอุ่นและเป็นแหล่งพลังงานของร่างกาย ถ้าเรารับประทานแต่พอดี จะทำให้ระบบการทำงานภายในเป็นปกติ ไขมันยังช่วยปกป้องเซลล์และห่อหุ้มอวัยวะต่างๆ โดยเฉพาะจะห่อหุ้มเส้นประสาทช่วยในการป้องกันเส้นประสาทให้ทำงานได้อย่างมีประสิทธิภาพ
                </Paragraph>
                <Title level={3}>การทดสอบอาหาร</Title>
                <Paragraph>
                <ul>
                        <li>
                        แป้ง ใช้ไอโอดีน เปลี่ยนจากสีน้ำตาลเป็นสีน้ำเงิน 
                        </li>
                        <li>
                        น้ำตาล ใช้เบเนดิกซ์ เปลี่ยนสีจากฟ้าเป็นตะกอนสีแดงอิฐ
                        </li>
                        <li>
                        โปรตีน ใช้ไบยูเรต เปลี่ยนสีจากฟ้าเป็นสีม่วง
                        </li>
                        <li>
                        ไขมัน ใช้กระดาษ เปลี่ยนจากทึบแสงเป็นโปร่งแสง
                        </li>
                    </ul>
                </Paragraph>
                <Paragraph>
                    <blockquote>นอกจากนี้ แล้วไขมันยังทำหน้าที่เป็นตัวทำละลายวิตามินเอ วิตามินดี วิตามินอี และวิตามินเค ที่ร่างกายรับจากอาหาร ไขมันเป็นอาหารที่ย่อยยาก ร่างกายจะต้องใช้เวลาในการย่อยสลายนานกว่าอาหารกลุ่มอื่นๆ ร่างกายของมนุษย์เราต้องการไขมันวันละไม่มากในปริมาณที่แตกต่างกันไปตามวัย</blockquote>
                </Paragraph>
                <Paragraph>
                    <blockquote>
                    คาร์โบไฮเดรต     : 1 กรัม ให้พลังงาน 4 กิโลแคลลอรี<br />
                    โปรตีน              : 1 กรัม ให้พลังงาน 4 กิโลแคลลอรี<br />
                    ไขมัน                : 1 กรัม ให้พลังงาน 9 กิโลแคลลอรี  <br />  
                    </blockquote>
                </Paragraph>
                <Paragraph>
                    <blockquote>
                        <a target="_blank" href="https://sites.google.com/site/withyasastrbeuxngtnp661/hnwy-kar-reiyn-thi-1-xahar-laea-sar-xahar">อ้างอิง</a>
                    </blockquote>
                </Paragraph>
            </Typography>
            <div className="buttonNavi">
                <Button type="primary" href="/sec2">
                    ฐานต่อไป
                </Button>
                <Button style={{marginTop:'10px',marginBottom:'10px'}} type="secondary" href="/">
                    หน้าแรก
                </Button>
            </div>
        </div>
    )
}
