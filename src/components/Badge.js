import React, { Component } from 'react';
import confLogo from '../images/header.svg';
import './styles/Badge.css';

class Badge extends Component {
    render(){
        return<div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt="Logo"/>
            </div>
            <div className="Badge__section-name">
                <img className="Badge__avatar" src={this.props.avatarUrl} alt="avatar"/>
                <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
            </div>
            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>@{this.props.twitter}</div>
            </div>
            <div className="Badge__footer">
                <p>Todos los derechos reservados &copy;2019</p>
            </div>
        </div>

    }


}

export default Badge;
