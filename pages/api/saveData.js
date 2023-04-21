import fs from 'fs';
import path from 'path';

export default async (req, res) => {
  const { note } = req.body;

  try {
    // Save the note data to a file
    const filename = `notes_${Date.now()}.txt`; // Generate a unique filename
    const notesDir = path.join(process.cwd(), 'notes'); // Specify the directory to save the notes
    fs.mkdirSync(notesDir, { recursive: true }); // Create the notes directory if it doesn't exist
    fs.writeFileSync(path.join(notesDir, filename), note); // Write the note data to the file
    console.log(`Note saved: ${note}`);
    res.status(200).json({ message: 'Data saved successfully' });
  } catch (err) {
    console.error('Failed to save data', err);
    res.status(500).json({ message: 'Failed to save data', error: err });
    
  }
};
