import React, { useState } from 'react';
import './App.css';

function App() {
  const [quotations, setQuotations] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

const handleUpload = () => {
  if (file) {   
    const newQuotation = {
      id: quotations.length + 1, 
      name: file.name, 
      url: URL.createObjectURL(file), 
    }; 
    setQuotations([...quotations, newQuotation]);

    setFile(null);
  }
};

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ferretería Industrial</h1>
      </header>
      <main className="App-main">
        <div className="upload-section">
          <h2>Subir Cotización</h2>
          <input type="file" onChange={handleFileChange} />
          <button class="button" onClick={handleUpload}>Enviar Cotización</button>
          <h3>Cliente Destino</h3>
          <input type="text" />
        </div>
        <div className="download-section">
          <h2>Descargar Cotizacion</h2>
          <button class="button">Descargar</button>
        </div>
        <div className="quotations-section">
          <ul>
            {quotations.map((quotation) => (
              <li key={quotation.id}>
                <a href={quotation.url} download={quotation.name}>
                  Descargar {quotation.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;

