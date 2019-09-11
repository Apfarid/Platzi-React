import React, { Component } from 'react';
import '../components/styles/BadgeNew.css'
import Navbar from '../components/Navbar.js';
import header from '../images/header.svg'
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends Component {
    state = {
        form : {
            firstName :'',
            lastName:'',
            jobTitle:'',
            twitter:'',
            email:''
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value 
            }
        })

    }

    render(){
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img src={header} alt="Logo" className="img-fluid"/>
                </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge
                            firstName = {this.state.form.firstName}
                            lastName= {this.state.form.lastName}
                            jobTitle={this.state.form.jobTitle}
                            twitter={this.state.form.twitter}
                            email={this.state.form.email}
                            avatarUrl = "https://www.gravatar.com/avatar?d=identicon"
                        />
                    </div>
                    <div className="col-6">
                        <BadgeForm 
                            onChange={this.handleChange}
                            formValues = {this.state.form}
                        />
                    </div>
                </div>
            </div>
            
            </div>
            
        )
    }
}

export default BadgeNew;