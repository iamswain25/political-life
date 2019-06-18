import React from "react";
import { Link } from "react-router-dom";
import "./calendar.css";

export default props => {
  const { lang } = props.match.params;
  const dates = props.dates;
  let pointer = 0;
  const monthHtml = [];
  let datenow = new Date("1994-1-1");
  for (let i = 0; i < 12; i++) {
    let dateHtml = [],
      weekHtml = [];
    let startWith = datenow.getDay();
    if (startWith === 0) {
      startWith = 7;
    }
    for (let j = 0; j < startWith - 1; j++) {
      dateHtml.push(<td key={`${datenow.getDate()}${i}${j}`}>&nbsp;</td>);
    }
    for (let j = 0; j < 8 - startWith; j++) {
      if (Date.parse(dates[pointer]) === Date.parse(datenow)) {
        const lpad = `/${lang}/${String(pointer).padStart(4, "0")}`;
        dateHtml.push(
          <td key={datenow}>
            <Link to={lpad}>{datenow.getDate()}</Link>
          </td>
        );
        pointer++;
      } else {
        dateHtml.push(
          <td key={datenow} className="grey">
            {datenow.getDate()}
          </td>
        );
      }
      datenow.setDate(datenow.getDate() + 1);
    }
    weekHtml.push(<tr key={`months`}>{dateHtml}</tr>); //row with empty dates
    for (var j = 0; j < 5; j++) {
      dateHtml = [];
      for (var k = 0; k < 7; k++) {
        if (datenow.getMonth() === i) {
          /** must include " " since the timezone changes between 1994-10-09 vs. 1994-10-9 */
          if (Date.parse(dates[pointer] + " ") === Date.parse(datenow)) {
            const lpad = `/${lang}/${String(pointer).padStart(4, "0")}`;
            dateHtml.push(
              <td key={datenow}>
                <Link to={lpad}>{datenow.getDate()}</Link>
              </td>
            );
            pointer++;
          } else {
            dateHtml.push(
              <td key={datenow} className="grey">
                {datenow.getDate()}
              </td>
            );
          }
          datenow.setDate(datenow.getDate() + 1);
        } else {
          dateHtml.push(<td key={`${datenow.getDate()}${j}${k}`}>&nbsp;</td>);
        }
      }
      weekHtml.push(<tr key={`${i}${j}`}>{dateHtml}</tr>);
    }
    monthHtml.push(
      <table key={`${i}month`}>
        <tbody>
          <tr className="red">
            <th colSpan="7">{i + 1}月</th>
          </tr>
          <tr className="red">
            <td>M</td>
            <td>T</td>
            <td>W</td>
            <td>T</td>
            <td>F</td>
            <td>S</td>
            <td>S</td>
          </tr>
          {weekHtml}
        </tbody>
      </table>
    );
  }
  return monthHtml;
};
