import React from 'react';
import "./App.css";
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel"
import {alpha,withStyles,} from '@material-ui/core/styles';
import { InputBase } from "@material-ui/core";

const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }))(InputBase);

  


class Emailverify extends React.Component{

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    render(){
        const { values, handleChange } = this.props;
        const {values:{emailid}}=this.props;
        
        return(
            <MuiThemeProvider>
            <div className="root">
               <AppBar title="Email Verification" width ="50px" height="50px">Email Verification</AppBar>
               <br/><br/>
               <h3 >Enter the OTP </h3>
               <p onChange={handleChange('emailid')}>For your security, we need to verify your identity. We sent a 5-digit code to <span id="mails">{emailid} </span> Please enter it below.</p><br/>
               <div>
                <card >
                    <div class="form2">
                      <span class="mobile-text">
                          Enter the code
                      </span>
                          <div class="d-flex flex-row mt-5">
                              <input type="text" class="form-control" autofocus=""/>
                              <input type="text" class="form-control"/>
                              <input type="text" class="form-control"/>
                              <input type="text" class="form-control"/>
                              <input type="text" class="form-control"/>
                          </div><br/>
                        <div class="text-center mt-5">
                            <span class="d-block mobile-text">
                            Didn’t receive the email?  Check your spam filter for an email from <span id="mails">{emailid} </span> </span>
                            <span class="font-weight-bold text-danger cursor">Resend</span>
                        </div>
                    </div>
                </card>
               
                
                < br/>
                <Button variant="contained" color="#ED5901"
                onClick={this.back}>
                    Back
                </Button>
                
                
                <Button variant="disabled" color="#ED5901"
                onClick={this.continue}>
                    Verify
                </Button>
               </div>
            </div>
        </MuiThemeProvider>

        )
    }
}
export default Emailverify;



