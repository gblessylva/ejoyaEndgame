import React, {Component}from "react";
class UsersSelect extends Component {

  render() {
    return (
      <>
 <select>
  <option value="user-b">User B</option>
  <option selected value="auser-a">User A</option>
  <option value="user-c">User C</option>
  <option value="user-d">User D</option>
</select>

					
  

</>
    );
  }
}

export default UsersSelect;
