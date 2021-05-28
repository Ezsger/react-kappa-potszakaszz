import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [huf, setHuf] = useState('');

  return (
    <div>
      <div className="inputBox">
        <div className="row">
          <div className="column-sm">
            <h2>Deviza váltás</h2>
          </div>
        </div>
        <div className="row">
          <label name="forint">Forint (HUF)</label>

          <input type="text" name="forint" value={huf} onChange={setHuf} />
        </div>
      </div>
    </div>
  );
}
