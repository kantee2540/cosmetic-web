import React from 'react'
import './MiniMenu.css'

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

    render(){
        const { showMenu } = this.state
        return(
            <div id="mini-menu">
                <button className="menu-button" onClick={()=>this.setState({showMenu: !showMenu ? true: false})}>
                    <i className="fas fa-th" style={{fontSize: 20}}></i>
                </button>
                <div id="toggle-menu" style={{display: showMenu ? 'block':'none'}}>
                    <a href="#" className="menu-link">Home</a>
                    <a href="#" className="menu-link">Product</a>
                    <a href="#" className="menu-link">Beauty set</a>
                    <hr/>
                    <a href="#" className="menu-link">Sign in</a>
                    <a href="#" className="menu-link">Get application</a>
                </div>
            </div>
        )
    }
}

export default MiniMenu