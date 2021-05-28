import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [huf, setHuf] = useState('');

  const write = event => {
    setHuf(event.target.value);
  };

  return (
    <div className="box">
      <div className="inputBox">
        <div className="row">
          <div className="column-sm">
            <h2>Deviza váltás</h2>
          </div>
        </div>
        <div className="row">
          <label name="forint">Forint (HUF)</label>
          <input type="number" name="forint" value={huf} onChange={write} />
        </div>
      </div>
      <div className="outputBox">
        <h2 className
      </div>
    </div>
  );
}
