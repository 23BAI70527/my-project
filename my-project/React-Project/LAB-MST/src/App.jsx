import React, { useState } from 'react';
import './App.css'; 

function App() {
  const players = [
    { id: 1, name: 'TANISHA', role: 'Defender' },
    { id: 2, name: 'BOB CHARLIE', role: 'Defender' },
    { id: 3, name: 'MOHIT SONI', role: 'Fielder' },
    { id: 4, name: 'MUSKAN', role: 'Goalkeeper' },
    { id: 5, name: 'PRATHAM SAINI', role: 'Forward' },
    { id: 6, name: 'PRATIK SEHAJPAL', role: 'Fielder' },
    { id: 7, name: 'PIYUSH JOSHI', role: 'Defender' },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const filteredPlayers = players.filter(player =>
    player.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Sports Team </h1>

      <div className="search-bar">
        <label htmlFor="role-filter">Filter by Role:</label>
        <input
          type="text"
          id="role-filter"
          placeholder="e.g., Forward, Defender"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="player-list">
        {filteredPlayers.length > 0 ? (
          filteredPlayers.map(player => (
            <div key={player.id} className="player-card">
              <h2>{player.name}</h2>
              <p>Role: {player.role}</p>
            </div>
          ))
        ) : (
          <p>No players found for this role.</p>
        )}
      </div>
    </div>
  );
}

export default App;