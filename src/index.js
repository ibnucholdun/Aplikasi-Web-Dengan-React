import React from 'react';
import NoteApp from './component/NoteApp';
import { createRoot } from 'react-dom/client';

// import style
import './style/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<NoteApp />);