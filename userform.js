import React, { Component, useState } from 'react';
import PersonalDetails from './PersonalDetails';
import Companydetails from './CompanyDetails';
import Emailverify from './emailVerficatoin';


export class UserForm extends Component {
  state = {
 
    step: 1,
    fullName: '',
    gender: '',
    country: 'India',
    state: 'Tamil Nadu',
    phone: '',
    logo: '',
    companyname: '',
    emailid: '',
    jobtitle: '',
    experience: '',
    otp: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  
       
  render() {
    const { step } = this.state;
    const { fullName,gender,country,state,phone,logo,companyname,emailid,jobtitle,experience,otp } = this.state;
    const values = { fullName,gender,country,state,phone,logo,companyname,emailid,jobtitle,experience,otp};

    switch (step) {
      case 1:
        return (
          <PersonalDetails   
            label="Personal Details"
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 2:
        return (
            <Companydetails            
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
         
        );
      case 3:
        return (
            <Emailverify            
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;

