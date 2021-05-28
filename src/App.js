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
        <h2 className="euro">{`${huf} HUF = ${huf !== "" ? parseInt(huf)/320} EUR`}</h2>
        <h2 className="dollar"></h2>
      </div>
      <div className="infoBox">
        <div className = "row">
          <h6>Árfolyam:</h6>
        </div>
        <div className = "row">
           <h8>1 EUR = 320 HUF</h8>
        </div>
        <div className = "row">
           <h8>1 USD = 250 HUF</h8>
        </div>
        
       
       
      </div>
    </div>
  );
}
