'use client';

import React, { useState } from 'react'; // Import useState
import Link from 'next/link'; // Import Link
import { Button } from '@/components/ui/button'; // Import Button

export default function SongGeneratorPage() {
  const [name, setName] = useState('');
  const [song, setSong] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(''); // State for displaying error messages

  const generateSong = async () => { // Made function async
    setError(''); // Clear previous errors
    setSong(''); // Clear previous song
    setIsLoading(true); // Set loading to true

    if (name.trim() === '') {
      setError('Please enter a name.');
      setIsLoading(false);
      return;
    }

    try {
      // Call the validation API
      const response = await fetch('/api/validate-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();

      if (data.success) {
        // If validation is successful, generate the song
        const generatedSong = `${name}, ${name}, ${name} is a friend!\nYes, ${name} is a friend of mine!\n${name}, ${name}, I love to sing for you!`;
        setSong(generatedSong);
      } else {
        // If validation fails, display the error message from the API
        setError(data.message || 'An error occurred during validation.');
      }
    } finally {
      setIsLoading(false); // Set loading to false after request is complete
    }
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
          style={{ marginRight: '10px', padding: '8px' }}
        />
        <button onClick={generateSong} style={{ padding: '8px 15px' }} disabled={isLoading}> {/* Disable button while loading */}
          {isLoading ? 'Generating...' : 'Generate Song'} {/* Button text changes based on loading */}
        </button>
      </div>

      {error && ( // Display error message if there's an error
        <div style={{ marginTop: '20px', color: 'red' }}>
          <p>{error}</p>
        </div>
      )}
      {song && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '15px', whiteSpace: 'pre-wrap' }}>
          <h2>Your Song:</h2>
          <p>{song}</p>
        </div>
      )}

      {/* Add the new button here */}
      <div style={{ marginTop: '20px', textAlign: 'center' }}> {/* Add some top margin and center the button */}
        <Link href="/"> {/* Link back to the home page */}
          <Button variant="outline" size="default"> {/* Use outline variant and default size for consistency */}
            Take Me to the Activities
          </Button>
        </Link>
      </div>
    </div>
  );
}