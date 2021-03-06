import React from 'react';
import fetch from 'node-fetch';

export class SubmitButton extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        let URL = 'https://apistage.gohealthuc.com:1981/v1/eligibility_demo/';
        let myBodyData = buildRequestBody(this.props.member, this.props.insuranceCarrierID);
        fetch(URL, {
            method: 'POST',
            body:    JSON.stringify(myBodyData),
            headers: { 'Content-Type': 'application/json',
                'authtoken': 'ghWhite145'},
        })
            .then(res => res.json())
            .then(json => updateInsurance(json, this.props.handleChange));
    }

    render(){
        return(
            <button onClick={this.handleSubmit}>Submit</button>
        );

    }
}

function updateInsurance(json, onChange){
    let copayAmount,
        active;

    if(!(typeof json['data'] === "undefined")){
        copayAmount = json['data']['coverage']['copay'][0]['copayment']['amount'];
        active = json['data']['coverage']['active'];
    }

    onChange(copayAmount, active);
}

function buildRequestBody(patient, insuranceCarrierID){
    let myData;

    let member = {
        first_name: patient.firstName,
        last_name: patient.lastName,
        id: patient.insuranceID,
        birth_date: patient.dateOfBirth
    };

    let provider = {
        first_name: "Marty",
        last_name: "Seeger",
        npi: "1234567890"
    };

    let trading_partner_id = insuranceCarrierID;
    myData = {
        member,
        provider,
        trading_partner_id
    };

    return myData;

}