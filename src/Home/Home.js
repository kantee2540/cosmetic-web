import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { beautySetLimit } from '../Network/Beautyset'
import welcome from './welcome.png'
import './Home.css'

class Home extends React.Component{

    constructor(props){
        super(props)
        this.wrapper = React.createRef()
        this.state = {
            beautysetItem: []
        }
    }

    componentDidMount(){
        beautySetLimit(6, 
        (data)=>{
            console.log(data)
            this.setState({beautysetItem: data})
        },
        (error)=>{
            alert(error)
        })
    }

    render(){
        const { beautysetItem } = this.state
        return(
            <Container>
                <div id="home" ref={this.wrapper}>
                    <img src={welcome} className="welcome-image"/>
                    <input placeholder="Search Cosmetic" className="search-input"/>
                    <div id="bottom-view">
                        <div className="bottom-view-title">
                            <b>Beauty set</b>
                        </div>
                        <Row>
                            { beautysetItem.map((data, key)=>
                                <Col md={6} lg={4} key={key}>
                                <BeautysetItem
                                topicId={data.topic_id}
                                title={data.topic_name}
                                description={data.topic_description}
                                image={data.topic_img}
                                />
                                </Col>
                            )}
                        </Row>
                    </div>
                </div>
            </Container>

        )
    }
}

class BeautysetItem extends React.Component{
    render(){
        return(
            <Link to={"/beautyset/" + this.props.topicId} className="beautyset-item">
                <img src={this.props.image} className="beautyset-image"/>
                <div className="content-container">
                    <div className="content-title"><b>{this.props.title}</b></div>
                    <div className="content-desc">{this.props.description}</div>
                </div>
            </Link>
        )
    }
}

export default Home