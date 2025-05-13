'use client';

import React, { useState } from 'react'; // Import useState

export default function SongGeneratorPage() {
  const [name, setName] = useState(''); // State for the input name
  const [song, setSong] = useState(''); // State for the generated song

  const generateSong = () => {
    if (name.trim() === '') {
      setSong('Please enter a name.'); // Handle empty input
      return;
    }

    // Simple song generation logic
    const generatedSong = `${name}, ${name}, ${name} is a friend!\nYes, ${name} is a friend of mine!\n${name}, ${name}, I love to sing for you!`;

    setSong(generatedSong); // Update the song state
  };

  return (
    <div style={{ padding: '20px' }}> {/* Added some padding for basic layout */}
      <h1>Name Song Generator</h1>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          // Bind input value to name state
          // Update name state on change
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <button onClick={generateSong} style={{ padding: '8px 15px' }}> {/* Call generateSong on button click */}

          {/* Basic styling */}
          Generate Song
        </button>
      </div>
      {song && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', whiteSpace: 'pre-wrap' }}>
          <h2>Your Song:</h2>
          <p>{song}</p>
        </div>
      )}
    </div>
  );
}