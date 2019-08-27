import React, {Component} from "react"
class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         details: [
            { info: 'uploaded a song', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Astralia", CPS: "" },
            { info: 'uploaded a song', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Astralia", CPS: ""},
            { info: 'uploaded a song', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Astralia", CPS: ""},
            { info:  'uploaded a song', date: "Sep 18, 2018 by 11:26 PM", region: "Adelaide, Astralia", CPS: ""}
         ]
      }
   }

   renderTableHeader() {
      let header = Object.keys(this.state.details[0])
      return header.map((key, index) => {
         return <th className="tableTitle" key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.details.map((detail, index) => {
         const cps=<div className="cps"/>
         const { info, date, region } = detail 
         return (
            <tr className="otherInfo">
               <td><span className="artistBold">Artist Name </span>{info}</td>
               <td>{date}</td>
               <td>{region}</td>
               <td>{cps}</td>
            </tr>
         )
      })
   }

   render() {
      return (
         <div>
            <table className='infoTable'>
               <tbody>
                  <tr className="detailsTitle">{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table;