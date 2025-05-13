import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const forbiddenWords = ['sex', 'fuck', 'shit', 'piss', 'ass', 'bitch', 'damn', 'hell']; // Add more words as needed

  try {
    const body = await request.json();
    const name = body.name;

    if (!name) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }

    console.log('Received name for validation:', name);
    const lowerCaseName = name.toLowerCase();

    // Check if the name contains any forbidden words
    const isForbidden = forbiddenWords.some(word => lowerCaseName.includes(word));

    if (isForbidden) {
      return NextResponse.json({ success: false, message: 'Please enter an appropriate name.' }, { status: 400 });
    }

    // If the name is not forbidden, return a success response
    return NextResponse.json({ success: true, message: 'Name is appropriate.' });

  } catch (error) {
    console.error('Error processing name validation request:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}