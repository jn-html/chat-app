import React, {Component} from 'react';
import './contact.css';


class Contact extends Component {
      render (){
        return(
            <div className="Contact">
                <img className="avatar" src ={this.props.avatar} alt=""></img>
                <div>
                    <h3 className="name">{this.props.name}</h3>
                    <div className="status">
                        <i className={this.props.online ? "status-online": "status-offline"}></i>
                        <span>{this.props.online ? "online": "offline"}</span>
                    </div>
                </div>
            </div>
        );
    }
}



export default Contact;