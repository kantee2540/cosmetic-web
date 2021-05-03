import React from 'react'
import { Container } from 'react-bootstrap'
import { beautyset } from "../Network/Beautyset";
import { withRouter, Redirect } from 'react-router-dom'
import './Beautyset.css'
import { Link } from 'react-router-dom'
import { isMobileSafari } from 'react-device-detect'
import Placeholder from '../Images/placeholder_image.png'

class BeautysetDetail extends React.Component {

    constructor(props){
        super(props)
        this.topicId = this.props.match.params.id
        this.state={
            data: {data: {topic_name: ""}}
        }
    }

    componentDidMount(){
        if(isMobileSafari){
            window.location = "cosmeticas://topic?id=" + this.topicId
        }
        this.fetchdata()
    }

    fetchdata(){
        beautyset(this.topicId,
            (data)=>{
                console.log(data)
                this.setState({data: data})
            },
            (error)=>{
                alert(error)
            })
    }

    render(){
        const { data } = this.state
        const packages = data.packages || []
        const topic = data.data

        return(
            <>
            <div id="beauty-set-detail">
                <Container style={{height: '100%'}}>
                    <div id="image-cover">
                        { topic.topic_img !== "" ?
                        <img src={topic.topic_img} style={{objectFit:'cover', width: '100%'}}/> :
                        <img src={Placeholder} style={{ width:100, height: 100 }}/>
                        }
                    </div>
                    <div id="detail">
                        <h1>{topic.topic_name}</h1>
                        <div className="detail-text">{topic.topic_description}</div>
                    </div>
                    <div className="package">
                        <b id="product-title">Products</b>
                        <div>
                            { packages.map((item, key)=>
                            <PackageItem
                            key={key}
                            title={item.product_name}
                            image={item.product_img}
                            description={item.categories_name}
                            price={item.product_price}
                            to={"/product/"+item.product_id}
                            />
                            )}
                        </div>
                    </div>
                </Container>
            </div>
            </>
        )
    }
}

function PackageItem(props){
    return(
        <Link className="package-item" to={props.to}>
            <div className="image">
                <img src={props.image} />
            </div>
            <div className="detail">
                <div className="title">{props.title}</div>
                <div className="desc">{props.description}</div>
                <div className="price-tag">{props.price.toLocaleString()} Baht</div>
            </div>
        </Link>
    )
}

export default withRouter(BeautysetDetail)