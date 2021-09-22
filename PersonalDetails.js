import React from "react";
import "./App.css";
import Dialog from '@material-ui/core/Dialog';
import Header from "@material-ui/core/CardHeader";
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Select from "@material-ui/core/Select";
import Selectfeild from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import InputLabel from "@material-ui/core/InputLabel"
import {alpha,ThemeProvider,withStyles,makeStyles,createTheme } from '@material-ui/core/styles';
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
class PersonalDetails extends React.Component{

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
             <div id="card">
                <AppBar title="PersonalDetails" width ="50px">PersonalDetails</AppBar>
                <br/><br/>
                <h3> Add your personal details</h3>
                <p>Lorum lupsum is simply dummy text of the printing and typesetting industry</p><br/>
                
                <div class="form1">
                
                 <div id="input1">
                    <InputLabel shrink htmlFor="bootstrap-input">
                    Full Name
                   </InputLabel>
                   <BootstrapInput  onChange={handleChange('fullName')}
                      defaultValue={values.fullName}
                      margin="normal"
                      Width="500px" id="bootstrap-input" />
                    <br/>
                  
                    <InputLabel shrink htmlFor="bootstrap-input">
                    Gender
                    </InputLabel><br/>
                    <Button color="#ED5901" variant="outlined" onChange={handleChange('gender')}>Male</Button>
                    <Button color="#ED5901" variant="outlined" onChange={handleChange('gender')}>Female</Button>
                    <Button color="#ED5901" variant="outlined" onChange={handleChange('gender')}>Others</Button>
                    <br/>
                    <br/>
                    <InputLabel shrink htmlFor="bootstrap-input">
                    Country
                    </InputLabel><br/>
                    <Select
                    native
                    placeholder="Select the Country"
                    label="Country"
                    onChange={handleChange('country')}
                    defaultValue={values.country}
                    margin="normal"
                    fullwidth 
                    >
                    <option aria-label="None" value="" />
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iraq">Iraq</option>
                    </Select>
                    <br/><br/>
                  
                    <InputLabel shrink htmlFor="bootstrap-input">
                    State
                    </InputLabel><br/>
                    <Select
                    native
                    placeholder="Select the State"
                    label="State"
                    onChange={handleChange('state')}
                    defaultValue={values.state}
                    margin="normal"
                    fullwidth 
                    >
                    <option aria-label="None" value="" />
                    <option value="Tamil Nadu">Tamil Nadu</option>
                     <option value="Telangana">Telangana</option>
                     <option value="Tripura">Tripura</option>
                    </Select><br/>
                    <br/>
                    <InputLabel shrink htmlFor="bootstrap-input">
                    Phone
                    </InputLabel>
                    <BootstrapInput  onChange={handleChange('phone')}
                        defaultValue={values.phone}
                        margin="normal"
                        fullwidth id="bootstrap-input" />
                        <br/>
                        <br/>
                      <Button id="next1" variant="contained" color="#ED5901"
                      onClick={this.continue}>
                        Next
                      </Button><br/>
                  
                    <div  ><br/>Already have an account?<a href="" color="red">Log in</a> </div>
                  </div>
                </div>
              </div>
             </>
         </MuiThemeProvider>
    )
}

}
export default PersonalDetails;