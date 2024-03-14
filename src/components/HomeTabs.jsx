import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import all from '../assets/images/all.png';
import hot from '../assets/images/hot.png';
import sport from '../assets/images/sport.png';
import esport from '../assets/images/esports.png';
import slot from '../assets/images/slot.png';
import casino from '../assets/images/casino.png';
import fish from '../assets/images/fish.png';
import sp1 from '../assets/images/sp1.png';
import sp2 from '../assets/images/sp2.png';
import sp3 from '../assets/images/sp3.png';
import sp4 from '../assets/images/sp4.png';
import ep1 from '../assets/images/es1.png';
import cs1 from '../assets/images/cs1.png';
import cs2 from '../assets/images/cs2.png';
import cs3 from '../assets/images/cs3.png';
import cs4 from '../assets/images/cs4.png';
import cs5 from '../assets/images/cs5.png';
import sl1 from '../assets/images/sl1.png';
import sl2 from '../assets/images/sl2.png';
import sl3 from '../assets/images/sl3.png';
import sl4 from '../assets/images/sl4.png';
import sl5 from '../assets/images/sl5.png';
import f1 from '../assets/images/f1.png';
import f2 from '../assets/images/f2.png';
import f3 from '../assets/images/f3.png';
import f4 from '../assets/images/f4.png';


function HomeTabs() {
    const tabs = [
        { id: 1, title: 'All', img: all },
        { id: 2, title: 'Hot Games', img: hot },
        { id: 3, title: 'Sports', img: sport },
        { id: 4, title: 'E-sports', img: esport },
        { id: 5, title: 'Live Casinos', img: casino },
        { id: 6, title: 'Slots', img: slot },
        { id: 7, title: 'Fish Hunter', img: fish },
    ];
    const tabsContent = [
        { id: 2, title: 'Hot Games', imgs: [f2, sp3, sl1, f4, sp2, sl3, sl4] },
        { id: 3, title: 'Sports', imgs: [sp1, sp2, sp3, sp4] },
        { id: 4, title: 'E-sports', imgs: [ep1, ep1, ep1, ep1] },
        { id: 5, title: 'Live Casinos', imgs: [cs1, cs2, cs3, cs4, cs5] },
        { id: 6, title: 'Slots', imgs: [sl1, sl2, sl3, sl4, sl5] },
        { id: 7, title: 'Fish Hunter', imgs: [f1, f2, f3, f4] },
    ]
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={1}>
            <Row className=''>
                <Col xs={4} sm={2}>
                    <Nav variant="pills" className="  flex-column ">

                        {tabs.map((tab) => {
                            return <Nav.Item >
                                <Nav.Link eventKey={tab.id} className='p-0 my-2  d-flex flex-wrap flex-sm-nowrap flex-column flex-sm-row justify-content-center
                                  align-items-sm-center  justify-content-sm-start   '>
                                    <img className='tabImg ' src={tab.img} />
                                    <p className='  p-0 m-0 text-light'>{tab.title}</p>
                                </Nav.Link>
                            </Nav.Item>
                        })}
                    </Nav>
                </Col>
                <Col xs={8} sm={10}>
                    <Tab.Content  >
                        <AllGamesTab />
                        {tabsContent.map((tab) => {
                            return <Tab.Pane className='text-light' eventKey={tab.id}>
                                <h4 className='text-light'>{tab.title}</h4>
                                <div className="row  ">
                                    {tab.imgs.map((img, index) => {
                                        return <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                                            <img src={img} style={{ width: '100%', height: '100%' }} />
                                        </div>
                                    })}
                                </div>
                            </Tab.Pane>
                        })}
                    </Tab.Content>
                </Col>
            </Row>

        </Tab.Container >
    );
}

export default HomeTabs;


const AllGamesTab = () => {
    const allGames = [
        { id: 3, title: 'Sports', imgs: [sp1, sp2, sp3, sp4] },
        { id: 4, title: 'E-sports', imgs: [ep1, ep1, ep1, ep1] },
        { id: 5, title: 'Live Casinos', imgs: [cs1, cs2, cs3, cs4, cs5] },
        { id: 6, title: 'Slots', imgs: [sl1, sl2, sl3, sl4, sl5] },
        { id: 7, title: 'Fish Hunter', imgs: [f1, f2, f3, f4] },]
    return <Tab.Pane className='text-light' eventKey={1}>
        {allGames.map((item) => {
            return <> <h4 className='text-light'>{item.title}</h4>
                <div className="row  ">
                    {item.imgs.map((img, index) => {
                        return <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                            <img src={img} style={{ width: '100%', height: '100%' }} />
                        </div>
                    })}
                </div></>
        })}
    </Tab.Pane>
}