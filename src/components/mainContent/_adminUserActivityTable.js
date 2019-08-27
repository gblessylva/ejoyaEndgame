import React, {Component} from "react"
class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         details: [
            { info: 'Artist Name uploaded a song', date: "Sep 18, 2018", time: '11:26 PM' },
            { info: 'Artist Name uploaded a song', date: "Sep 18, 2018 ", time: '11:26 PM'},
            { info: 'Artist Name uploaded a song', date: "Sep 18, 2018", time: '11:26 PM'},
            { info: 'Artist Name uploaded a song', date: "Sep 18, 2018 ", time: '11:26 PM' }
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
         const { info, date, time } = detail 
         return (
            <tr className="otherInfo">
               <td>{info}</td>
               <td>on {date}</td>
               <td>By {time}</td>
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