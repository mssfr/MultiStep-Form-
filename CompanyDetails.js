import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel"
import {alpha,withStyles } from '@material-ui/core/styles';
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




class Companydetails extends React.Component{

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
        return(
            <MuiThemeProvider>
            <>
               <AppBar title="PersonalDetails" width ="50px">Company Details</AppBar>
               <br/><br/>
               <h3>Add your company details </h3>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p><br/>
               <div class="form1">
               <div>
               <InputLabel shrink htmlFor="bootstrap-input">
              Company Name
                </InputLabel><br/>
               <BootstrapInput 
                placeholder=""
                label="Country" onChange={handleChange('companyname')}
                   defaultValue={values.companyname}
                   margin="normal"
                   Width="500px" id="bootstrap-input" />
               
               <br/>
               <br/>
               <InputLabel shrink htmlFor="bootstrap-input">
               Email-Id
                </InputLabel><br/>
                <BootstrapInput 
                 placeholder=""
                 label="Country" onChange={handleChange('emailid')}
                   defaultValue={values.emailid}
                   margin="normal"
                   Width="500px" id="bootstrap-input" />
               <br/>
               <br/>
               <InputLabel shrink htmlFor="bootstrap-input">
               Job Title
                </InputLabel><br/>
                <BootstrapInput 
                 placeholder=" "
                 label="Job Title"
                 onChange={handleChange('jobtitle')}
                 defaultValue={values.jobtitle}
                 margin="normal"
                 Width="500px" id="bootstrap-input" />
                   
               <br/><br/>

               <InputLabel shrink htmlFor="bootstrap-input">
               Years of Experience
                </InputLabel>
                <BootstrapInput 
                 placeholder=""
                 label="Country"
                 onChange={handleChange('experience')}
                 defaultValue={values.experience}
                 margin="normal"
                 Width="500px" id="bootstrap-input" />
                  
               
             <br/>
             <br/><div id="buttons">
             <Button variant="contained" color="#ED5901" 
               onClick={this.back}>
                   Back
               </Button>
               
            
               <Button variant="contained" color="#ED5901"
               onClick={this.continue}>
                   Next
               </Button></div>
               </div></div>
            </>
        </MuiThemeProvider>

        )
    }
}
export default Companydetails;