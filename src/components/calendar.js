import React from "react";
import PropTypes from "prop-types";
import "./calendar.css"

class Calendar extends React.Component {
  handleClick = buttonName => this.props.clickHandler(buttonName);

  render() {
    const monthHtml = [];
    let datenow = new Date("1994-01-01");
    for (let i = 0; i < 12; i++) {
      let dateHtml = [], weekHtml = [];
      let startWith = datenow.getDay();
      if (startWith == 0 ) {startWith = 7;}
      for (let j = 0; j < startWith - 1; j++) {
          dateHtml.push(<td>&nbsp;</td>);
      }
      for (let j = 0; j < 8 -startWith; j++) {
          dateHtml.push(<td>{datenow.getDate()}</td>);
          // dateHtml.push(<td>{datenow.toISOString().substr(0,10)}</td>);
          datenow.setDate(datenow.getDate() + 1);
      }
      weekHtml.push(<tr>{dateHtml}</tr>);
      for (var j = 0; j < 5; j++) {
        dateHtml = []
        for (var k = 0; k < 7; k++) {
          if(datenow.getMonth() == i) {
            dateHtml.push(<td>{datenow.getDate()}</td>);
            datenow.setDate(datenow.getDate() + 1);
          }
          else {
            dateHtml.push(<td>&nbsp;</td>);
          }
        }
        weekHtml.push(<tr>{dateHtml}</tr>);
      }
      monthHtml.push(
        <table>
          <tbody>
            <tr><th colSpan="7">{i+1}月</th></tr>
            <tr className="cl"><td>M</td><td>T</td><td>W</td><td>T</td><td>F</td><td>S</td><td>S</td></tr>
            {weekHtml}
          </tbody>
        </table>
      );
    }
    return (
      <div className="">
          {monthHtml}
      </div>
    );
  }
}
Calendar.propTypes = {
  clickHandler: PropTypes.func,
  dates: PropTypes.array,
};
export default Calendar;
