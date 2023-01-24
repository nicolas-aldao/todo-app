import React from "react";
import ReactDOM from "react-dom";

// HOC class

function App(props) {
  return (
    <h1>
      {props.saludo}, {props.name}
    </h1>
  );
}

function withGreetings(WrappedComponent) {
  return function WrappedComponentWithSaludo(saludo) {
    return function RealComponent(props) {
      return (
        <>
          <WrappedComponent {...props} saludo={saludo}/>
          <h2>Aditional Information</h2>
        </>
      );
    };
  }
}

const AppWithGreetings = withGreetings(App)("Ye");

ReactDOM.render(
  <React.StrictMode>
    <AppWithGreetings name="Nicolás" />
  </React.StrictMode>,
  document.getElementById("root")
);
