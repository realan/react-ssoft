import * as React from "react";
import { useState } from "react";
import { dataOk } from "./data/dataOk";
import { dataNotOk } from "./data/dataNotOk";
import DocsDialogView from "./DocsDialogView/DocsDialogView";

function App() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});

  const handleOk = () => {
    console.log(dataOk);
    setData(dataOk);
    setOpen(true);
  };
  const handleNotOk = () => {
    setData(dataNotOk);
    setOpen(true);
  };

  return (
    <div>
      <header>Stimulsoft</header>
      <button onClick={handleOk}> OK</button>
      <button onClick={handleNotOk}> Not OK</button>
      <DocsDialogView
        open={open}
        onClose={() => setOpen(false)}
        data={data}
        template={"bill.mrt"}
      />
    </div>
  );
}

export default App;
