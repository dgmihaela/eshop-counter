import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';


const CartContainer = () => {

    return(
        <div>
            <table className="table-fixed">
  <thead>
    <tr>
      <th class="w-1/2 ...">Title</th>
      <th class="w-1/4 ...">Author</th>
      <th class="w-1/4 ...">Views</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Intro to CSS</td>
      <td>Adam</td>
      <td>858</td>
    </tr>
    <tr class="bg-blue-200">
      <td>A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
      <td>Adam</td>
      <td>112</td>
    </tr>
    <tr>
      <td>Intro to JavaScript</td>
      <td>Chris</td>
      <td>1,280</td>
    </tr>
  </tbody>
</table>
        </div>
    )
}

export default CartContainer;