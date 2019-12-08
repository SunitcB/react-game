import React from 'react'

class CountDownTimer extends React.Component {
  constructor() {
    super();
    this.state = { time: {}, seconds: 60 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.startTimer = this.startTimer()
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    console.log('asfdasdassdasdasdasd')
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
      document.getElementById("txtInputWord").blur();
      document.getElementById("txtInputWord").disabled = true;
      document.getElementById('submitBtn').disabled = true;
      document.getElementById('game-over-container').style.display = "block";
    }
  }

  render() {
    return (
      <div on={this.startTimer}>
        <div className='timer-container'>
          Count Down Timer <span style={{marginLeft:'30%'}}>{this.state.time.m} : {(this.state.time.s < 10) ? `0${this.state.time.s}` : this.state.time.s}</span>
        </div>
      </div>
    );
  }
}

// const CountDownTimer = ({ timer }) => {

//   const minute = () => {
//     return Math.floor(timer / 60)
//   }

//   const second = () => {
//     let s = timer % 60;
//     return (s < 10) ? `0${s}` : s
//   }

//   return (
//     <div className="boggle-timer">
//       {minute()}: {second()}
//     </div>
//   )

// }

export default CountDownTimer;
