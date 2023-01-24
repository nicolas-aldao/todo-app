import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOs_V1") {
        console.log('hubo cambios');
        setStorageChange(true);
      }
    });
    
    const toggleShow = () => {
      props.synchronize();
      setStorageChange(false);
    }

    return (
      <WrappedComponent show={storageChange} toggleShow={toggleShow} />
    );
  };
}

export { withStorageListener };
