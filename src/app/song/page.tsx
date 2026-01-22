'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SongGeneratorPage() {
  const [name, setName] = useState('');
  const [song, setSong] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateSong = async () => {
    setError('');
    setSong('');
    setIsLoading(true);

    if (name.trim() === '') {
      setError('Please enter a name.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/validate-name', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();

      if (data.success) {
        const generatedSong = `${name}, ${name}, ${name} is a friend!\nYes, ${name} is a friend of mine!\n${name}, ${name}, I love to sing for you!`;
        setSong(generatedSong);
      } else {
        setError(data.message || 'An error occurred during validation.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-center pt-[50px] text-[34px] pb-[50px]">
        Name Song Generator
      </h1>
      <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mr-2 p-2 border rounded-md"
        />
        <Button onClick={generateSong} disabled={isLoading}>
          {isLoading ? 'Generating...' : 'Generate Song'}
        </Button>
      </div>

      {error && (
        <div className="mt-5 text-red-500">
          <p>{error}</p>
        </div>
      )}
      {song && (
        <div className="mt-5 border border-gray-300 p-4 whitespace-pre-wrap rounded-md">
          <h2 className="text-lg font-semibold mb-2">Your Song:</h2>
          <p>{song}</p>
        </div>
      )}

      <div className="mt-5">
        <Link href="/">
          <Button variant="outline" size="default">
            Take Me to the Activities
          </Button>
        </Link>
      </div>
    </div>
  );
}
