import React, { useState } from 'react';

const DynamicNumberDisplay = () => {
  const [number, setNumber] = useState(0);           // Untuk angka pertama
  const [multiplier, setMultiplier] = useState(1);    // Untuk angka multiplier
  const [result, setResult] = useState(0);            // Hasil dari perhitungan

  // Fungsi untuk menghitung hasil perkalian
  const calculateResult = () => {
    setResult(number * multiplier);
  };

  return (
    <div className="input2">
      {/* Display angka yang dihitung */}
      <div className="number-display">
        {result}
      </div>

      {/* Input untuk angka pertama */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Enter a number"
      />

      {/* Input untuk multiplier */}
      <input
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.value)}
        placeholder="Enter multiplier"
      />

      {/* Tombol untuk menghitung hasil */}
      <button onClick={calculateResult}>
        Calculate
      </button>
    </div>
  );
};

export default DynamicNumberDisplay;
