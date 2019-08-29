import React, {Component} from "react"
class Table extends React.Component {
  
   constructor(props) {
      super(props)
      this.state = {
         details: [
            {description: 'paid to',  date: "Sep 18, 2018 by 11:26 PM", amount:"$20",  region: "Adelaide, Astralia" },
            {description: 'paid to', date: "Sep 18, 2018 by 11:26 PM", amount:"$20",  region: "Adelaide, Astralia" },
            {description: 'paid to', date: "Sep 18, 2018 by 11:26 PM", amount:"$20",  region: "Adelaide, Astralia"},
            {description: 'paid to', date :"Sep 18, 2018 by 11:26 PM", amount:"$20",  region: "Adelaide, Astralia" },
            {description: 'paid to', date: "Sep 18, 2018 by 11:26 PM", amount:"$20",  region: "Adelaide, Astralia" }
            
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
         const artistName=<span className="artistBold">Artist Name</span>
         const { description, date, amount,  region } = detail 
         return (
            <tr className="otherInfo">
               <td >{artistName} {description} <span className="italized" > name@mail.com</span></td>
               <td> {date}</td>
               <td className="centerBold">{amount}</td>
               <td className="region">{region}</td>
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