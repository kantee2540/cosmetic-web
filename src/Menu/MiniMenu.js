import React from 'react'
import './MiniMenu.css'
import { Link } from 'react-router-dom'

class MiniMenu extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            showMenu: false
        }
    }

    componentDidMount(){
        document.getElementById("container").addEventListener('mousedown', ()=>{this.setState({showMenu: false})})
    }

    closeMenu(){
        this.setState({showMenu: false})
    }

    render(){
        const { showMenu } = this.state
        return(
            <div id="mini-menu">
                <button className="menu-button" onClick={()=>this.setState({showMenu: !showMenu ? true: false})}>
                    <i className="fas fa-th" style={{fontSize: 20}}></i>
                </button>
                <div id="toggle-menu" style={{display: showMenu ? 'block':'none'}}>
                    <Link to="/" onClick={()=>this.closeMenu()} className="menu-link">Home</Link>
                    <Link to="/product" onClick={()=>this.closeMenu()} className="menu-link">Product</Link>
                    <Link to="/beautyset" onClick={()=>this.closeMenu()} className="menu-link">Beauty set</Link>
                    <hr/>
                    <Link to="/" onClick={()=>this.closeMenu()} className="menu-link">Get application</Link>
                </div>
            </div>
        )
    }
}

export default MiniMenu