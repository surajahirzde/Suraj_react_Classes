// const App = () => {
//   return (
//     <div>
//       <h1>this is react app</h1>
//       <p>this isp paragraph </p>
//     </div>
//   );
// };
// import PropTypes from "prop-types";

import ChildComp from "./ChildComp";

function App() {
  const myName= "Suraj";
  return (
    <div>
      <h1>this is react app</h1>
      <p>this is paragraph</p>
      <ChildComp name={myName} />
    </div>
  );
}

// export default App;

// function MyApp({ children }) {
//   return (
//     <div>
//       <h2> this is new react app </h2>
//       {children}
//     </div>
//   );
// }

export { App };
