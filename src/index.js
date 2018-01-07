import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {InfoInput} from "./InfoInput";
import {SubmitButton} from "./SubmitButton";

class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            insuranceCarrierID: '1',
            insuranceID: '',
            copayment: '',
            active: ''
        };
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render(){
        return(
            <div className="page">
                <div className="patientInformation">
                    <fieldset>
                        <legend>Patient Information</legend>

                        <InfoInput name="First Name"
                                   id="firstName"
                                   type="text"
                                   handleChange={this.handleChange}/>

                        <br />

                        <InfoInput name="Last Name"
                                   id="lastName"
                                   type="text"
                                   handleChange={this.handleChange}/>

                        <br />

                        <InfoInput name="Date of Birth"
                                   id="dateOfBirth"
                                   type="date"
                                   handleChange={this.handleChange}/>
                    </fieldset>
                </div>

                <div>
                    <fieldset>
                        <legend>Insurance Information</legend>

                        <label htmlFor="insuranceCarrierID">Insurance Carrier:</label>
                        <select
                            name="insuranceCarrierID"
                            defaultValue='1'
                            onChange={this.handleChange}>
                            <option value='1' disabled>Select</option>
                            <option value="aetna">Aetna</option>
                            <option value="blue_cross_blue_shield">Blue Cross/Blue Shield</option>
                            <option value="united_health_care">United Health Care</option>
                            <option value="cigna">Cigna</option>
                        </select>

                        <InfoInput name="Insurance ID"
                                   id="insuranceID"
                                   type="text"
                                   handleChange={this.handleChange}/>
                    </fieldset>
                </div>
                <SubmitButton member={buildMember(this.state)}
                              insuranceCarrierID={this.state.insuranceCarrierID}/>
            </div>
        );
    }
}

function buildMember(patient){
    let member = {
        firstName: patient.firstName,
        lastName: patient.lastName,
        insuranceID: patient.insuranceID,
        dateOfBirth: patient.dateOfBirth};

    return member;
}

ReactDOM.render(<SignUpForm />, document.getElementById('root'));
registerServiceWorker();

