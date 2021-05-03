import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import "./Product.css"
import { getProduct } from '../Network/Product'
import { isMobileSafari } from 'react-device-detect'

function ProductDetail() {
    const { id } = useParams()
    const [content, setContent] = useState(null)

    useEffect(()=>{
        const fetchData = () =>{
            getProduct(id,
                (data)=>{
                    console.log(data)
                    setContent(data)
                },
                (error)=>{
                    window.alert(error.message)
                })
        }
        fetchData()

        if(isMobileSafari){
            window.location = "cosmeticas://cosmetic?id=" + id
        }
    },[])

    return (
        <Container id="product-container">
            { content !== null ?
            <div>
                <div className="brand-name">{content.brand_name}</div>
                <div className="product-img">
                    <img src={content.product_img}/>
                </div>
                <div className="product-name">
                    {content.product_name}
                </div>
                <div className="desc">
                    {content.description}
                </div>
                <Row className="detail-row">
                    <Col sm={6}>
                        <DetailRow
                        title="Price"
                        value={content.product_price.toLocaleString() + " Baht"}
                        />
                    </Col>
                    <Col sm={6}>
                        <DetailRow
                        title="Category"
                        value={content.categories_name}
                        />
                    </Col>
                    <Col sm={6}>
                        <DetailRow
                        title="Category Type"
                        value={content.categories_type}
                        />
                    </Col>
                </Row>
            </div>
            : null
            }           
        </Container>
    )
}

function DetailRow(props){
    return(
        <div className="detail">
            <div className="title">{props.title}</div>
            <div className="value">
                {props.value}
            </div>
        </div>
    )
}

export default ProductDetail
