import React from 'react';

class BadgeForm extends React.Component{
    
    state = {}
    /*


    handleChange = (e) => (
        this.setState({
            
            [e.target.name] : e.target.value
        })  

    )
    */

    handleSubmit = e => {

        e.preventDefault()
        console.log(this.state)
    }
        
    




    render(){
        return(
            <div className="">
                <h1>New Attendant</h1>
                <form >
                    <div className="form-group">
                        <label>First Name </label>
                        <input className="form-control" type="text" name="firstName" id="" onChange={this.props.onChange} value={this.props.formValues.firstName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name </label>
                        <input className="form-control" type="text" name="lastName" id="" onChange={this.props.onChange} value={this.props.formValues.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Email </label>
                        <input className="form-control" type="email" name="email" id="" onChange={this.props.onChange} value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group">
                        <label>Job Title </label>
                        <input className="form-control" type="text" name="jobTitle" id="" onChange={this.props.onChange} value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Twitter </label>
                        <input className="form-control" type="text" name="twitter" id="" onChange={this.props.onChange} value={this.props.formValues.twiter}/>
                    </div>

                    <button onClick={this.handleSubmit} className="btn btn-primary">Save</button>

                </form>
            </div>
        )
    }
}

export default BadgeForm;