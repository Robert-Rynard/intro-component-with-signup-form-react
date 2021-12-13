import "./App.css";

import Form from "./components/Form";

function App() {
  return (
    <div className="grid">
      <div className="info">
        <h1 className="info__title">Learn to code by watching others</h1>
        <p className="info__body">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="cta">
        <p>Try it free 7 days then $20/mo. thereafter</p>
      </div>
      <Form />
    </div>
  );
}

export default App;
