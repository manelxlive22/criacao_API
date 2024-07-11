import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import BMW from './bmw';
import './car.css';

function Car() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('api.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Falha ao carregar os dados');
        }
        return response.json();
      })
      .then(data => {
        setCars(data);
      })
      .catch(error => {
        console.error('Erro ao carregar os dados:', error);
      });
  }, []);

  return (
    <>
      <div className="card-container">
        {cars.map(car => (
          <div key={car.id} className="card">
              <h2 id='nameskin'>{car.nome}</h2>
              <img className='img' src={car.imgUrl} alt={car.nome} />
              <p>Data de Lançamento: {car.ano}</p>
              <p>Velocidade Máxima: {car.velocidadeMaxima}</p>
              <p>Edição: {car.modelo}</p>
              <p>HP: {car.hp}</p>
           
          </div>
        ))}
      </div>
    </>
  );
}

export default Car;
