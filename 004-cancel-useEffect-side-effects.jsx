import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [showPage, togglePage] = React.useState(true);

  return (
    <div>
      {showPage ? <Page /> : null}
      <button onClick={() => togglePage(!showPage)}>
        Toggle Page component
      </button>
    </div>
  );
}

function Page() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    let unmounted = false;
    console.log("Running effect to fetch data");

    setTimeout(() => {
      console.log("Data loaded for page");

      if (!unmounted) {
        setData("Some data you loaded from a server somewhere...");
      }
    }, 3000);

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <div>
      <div>Data: {data}</div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
