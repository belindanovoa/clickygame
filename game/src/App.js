import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListItem from "./ListItem/ListItem.js";
const titles = [
  {
    id: 1, 
    title: "Title 1"
  }, 
  {
    id: 2, 
    title: "Title 2"
  }
];

// const listItems = [
//   <ListItem title={titles[0]} />,
//   <ListItem title={titles[1]} />
// ];



function App() {
  return (
    <div className="App">
      {/* {[
        <ListItem title={titles[0]} />,
        <ListItem title={titles[1]} />
      ]} */}
      {titles.map( item => <ListItem key={item.id} title={item.title} />)}

    </div>
  );
}

export default App;



// function List(props) {
//   return (
//     <ul className="list-group">
//       {props.groceries.map(item => (
//         <li className="list-group-item" key={item.id}>
//           {item.name}
//         </li>
//       ))}
//     </ul>
//   );