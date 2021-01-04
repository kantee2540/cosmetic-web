import React from 'react'
import IconCosmetic from './icon_white.png'
import './Menu.css'

class Menu extends React.Component{
    render(){
        return(
            <div>
                <div className="menu-bg d-flex justify-content-between">
                    <div></div>   
                    <div>
                        <ul>
                            <li>
                                <a href="#" className="menu-head">
                                    <img src={IconCosmetic} width={35} height={35}/>
                                </a>
                            </li>
                            <li><a href="#" className="menu-link">Beauty set</a></li>
                            <li><a href="#" className="menu-link">Product</a></li>
                            <li><a href="#" className="menu-link">About</a></li>
                        </ul>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Menu