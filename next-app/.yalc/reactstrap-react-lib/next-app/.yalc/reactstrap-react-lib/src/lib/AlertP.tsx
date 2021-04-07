import React, { Component } from 'react'
import {Alert} from "reactstrap"

interface Props {
    
}
interface State {
    text:string,
    color:string
}

export default class AlertP extends Component<Props, State> {
    state = {
        text:"", color:""
    }
        /**
         * This set boostrap color to  Alert
         * @param color Bootstrap color as string
         */
        alertColor = (color:string):void=>{
            this.setState({
                ...this.state,
                color:color

            })
        }
        /**
         * This sets the text to Alert
         * @param text text dispaly in Alert
         */
        alertText = (text:string):void=>{
            this.setState({
                ...this.state,
                text:text
            })

        }
        /**
         *  Along with setting text it converts the color of Alert to boostrap light
         * @param text text dispaly in Alert
         */
        alertLight = (text:string=""):void=>{
            this.setState({
                text:text, 
                color:"light"
            })


        }

        /**
         * Along with setting text it converts the color of Alert to boostrap success
         * @param text text dispaly in Alert
         */
        alertSuccess = (text:string):void=>{
    
            this.setState({
                text:text, 
                color:"success"
            })
            
        }

        /**
         * This sets the color of Alert to boostrap danger
         * extracts the text from error.response.data if error is not a string
         * @param error This is https retuirn error response 
         */
        alertError = (error:any)=>{

            if(error.response !== "undefined" ){
                this.setState({
                    text:error.response.data,
                    color : "danger"
                })
            }else{
                this.setState({
                    text:error,
                    color : "danger"
                })
            }
        }

         
    

    render() {
        return (
            <Alert color={this.state.color} style={{margin : "10px"}}>
              {this.state.text}
            </Alert>
        )
    }
}

