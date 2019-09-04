import React, {Component}from "react";
class CheckBox extends Component {

  render() {
    return (
      <>
          <label className="check-container">Select All
              <input type="checkbox"  />
              <span className="checkmark"></span>
           </label>
          <label className="check-container">User One
              <input type="checkbox"  />
              <span className="checkmark"></span>
           </label>
            <label className="check-container">User Two
              <input type="checkbox"  />
              <span className="checkmark"></span>
           </label>
           <label className="check-container">User Three
              <input type="checkbox"  />
              <span className="checkmark"></span>
           </label>
            <label className="check-container">User Four
              <input type="checkbox"  />
              <span className="checkmark"></span>
           </label>
           <label className="check-container">User Five
              <input type="checkbox"  />
              <span className="checkmark"></span>
           </label>
            <label className="check-container">User Six
              <input type="checkbox"  />
              <span className="checkmark"></span>
           </label>
  

					
  

</>
    );
  }
}

export default CheckBox;

