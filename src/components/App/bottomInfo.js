import React, { Component } from "react";
import Utils from '../../utils/index.js';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';

 class BottomInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      messages: []
    }
  }

  componentDidMount() { 
    let currentComponent = this;
    let initialList = [];

    let date = new Date();

    Utils.tronWeb.getEventResult(
      Utils.tronWeb.address.fromHex(Utils.contract.address), 
      {
        eventName:'winTriggered',
        size: 20
      }
    )
    .then(result => {
      result.map((res) => {

        let message = [
          SliceArrr(Utils.tronWeb.address.fromHex(res.result.who_win)),
          res.result.bet_trx_value / 1000000,
          res.result.bet_value,
          res.result.win_amount / 1000000,
          res.result.lucky_number
        ]
        initialList.push(message);
      });

      currentComponent.setState({
          messages: initialList
      });
    }).catch((err) => {
      console.log(err,);
    });
	

    Utils.contract.winTriggered().watch({filters: {"_address": window.tronWeb.defaultAddress.hex}}, (err, res) => {
      if (res !== undefined){


        let updatedList = Object.assign([], currentComponent.state.messages);
        let message = [
          SliceArrr(Utils.tronWeb.address.fromHex(res.result.who_win)),
          res.result.bet_trx_value / 1000000,
          res.result.bet_value,
          res.result.win_amount / 1000000,
          res.result.lucky_number
        ]

        updatedList.unshift(message);
       
        
        if (updatedList.length > 20){
          updatedList.splice(-1,1);
        }

        currentComponent.setState({
          messages: updatedList
        });
      }
      if (err !== null){
        console.log('betIsPlaced error:',err);
      }
    });

    
  }

  
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>who_win</th>
            <th>bet_trx_value</th>
            <th>bet_value</th>
            <th>win_amount</th>
            <th>lucky_number</th>
          </tr>
        </thead>
        <tbody>
          {this.state.messages.map( (colls, index) => (
            <Rows key={index} row={colls} />
          ))}
        </tbody>

      </table>//
    );
  }
}


function Rows(props) {
  return (
    
          <tr key={props.index}>
            <td>{props.row[0]}</td>
            <td>{props.row[1]}</td>
            <td>{props.row[2]}</td>
            <td>{props.row[3]}</td>
            <td>{props.row[4]}</td>
          </tr>
        
        
    
  );//
}

function SliceArrr(addr){
  let _1 = addr.slice(0,4);
  let _2 = '...';
  let _3 = addr.slice(-4);
  return _1 + _2 + _3;
}
        
          
           
          



export default BottomInfo;