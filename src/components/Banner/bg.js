import React from 'react'
import Lottie from 'react-lottie';
// import animationData from './Loading.json'
// import animationData from './data2.json'
// import animationData from './night-vs-day.json'
import animationData from './background/data.json'


export default class BgAnimation extends React.Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return <div className="bg">
      <Lottie options={defaultOptions}/>
    </div>
  }
}