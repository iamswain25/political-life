import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import './calendar.css'

class Calendar extends React.Component {
  render() {
    const dates = this.props.dates
    let pointer = 1
    const monthHtml = []
    let datenow = new Date('1994-1-1')
    for (let i = 0; i < 12; i++) {
      let dateHtml = [],
        weekHtml = []
      let startWith = datenow.getDay()
      if (startWith === 0) {
        startWith = 7
      }
      for (let j = 0; j < startWith - 1; j++) {
        dateHtml.push(<td key={Math.random()}>&nbsp;</td>)
      }
      for (let j = 0; j < 8 - startWith; j++) {
        if (dates[pointer] === undefined) {
          dateHtml.push(
            <td key={Math.random()} className="grey">
              {datenow.getDate()}
            </td>
          )
        } else if (
          Date.parse(dates[pointer].node.frontmatter.date) ===
          Date.parse(datenow)
        ) {
          let node = dates[pointer].node
          let convertedPath = node.fileAbsolutePath
            .split('/')
            .slice(-2)
            .join('/')
          convertedPath =
            '/' + convertedPath.substring(0, convertedPath.lastIndexOf('.'))
          dateHtml.push(
            <td key={Math.random()}>
              <Link to={convertedPath}>{datenow.getDate()}</Link>
            </td>
          )
          pointer++
        } else {
          dateHtml.push(
            <td key={Math.random()} className="grey">
              {datenow.getDate()}
            </td>
          )
          // dateHtml.push(<td>{dates[pointer].node.frontmatter.date}</td>);
        }
        datenow.setDate(datenow.getDate() + 1)
      }
      weekHtml.push(<tr key={Math.random()}>{dateHtml}</tr>)
      for (var j = 0; j < 5; j++) {
        dateHtml = []
        for (var k = 0; k < 7; k++) {
          if (datenow.getMonth() === i) {
            if (dates[pointer] === undefined) {
              dateHtml.push(
                <td key={Math.random()} className="grey">
                  {datenow.getDate()}
                </td>
              )
            } else if (
              Date.parse(dates[pointer].node.frontmatter.date + ' ') ===
              Date.parse(datenow)
            ) {
              let node = dates[pointer].node
              let convertedPath = node.fileAbsolutePath
                .split('/')
                .slice(-2)
                .join('/')
              convertedPath =
                '/' + convertedPath.substring(0, convertedPath.lastIndexOf('.'))
              dateHtml.push(
                <td key={Math.random()}>
                  <Link to={convertedPath}>{datenow.getDate()}</Link>
                </td>
              )
              pointer++
            } else {
              dateHtml.push(
                <td key={Math.random()} className="grey">
                  {datenow.getDate()}
                </td>
              )
            }
            datenow.setDate(datenow.getDate() + 1)
          } else {
            dateHtml.push(<td key={Math.random()}>&nbsp;</td>)
          }
        }
        weekHtml.push(<tr key={Math.random()}>{dateHtml}</tr>)
      }
      monthHtml.push(
        <table key={Math.random()}>
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
      )
    }
    return <div>{monthHtml}</div>
  }
}
Calendar.propTypes = {
  dates: PropTypes.array,
}
export default Calendar
