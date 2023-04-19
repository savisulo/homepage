import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const feedback = [
  {
    type: 'Feedback as numbers',
    id: 1,
    values: [
      {
        name: 'Grade: good',
        value: 1,
        given: 1,
        id: 1
      },
      {
        name: 'Grade: neutral',
        value: 0,
        given: 0,
        id: 2
      },
      {
        name: 'Grade: bad',
        value: -1,
        given: 1,
        id: 3
      }
    ]
  },
  {
    type: 'Feedback as messages',
    id: 2,
    values: [
      {
        name: 'feedback',
        value: 'nice work',
        given: null,
        id: 1
      },
      {
        name: 'feedback',
        value: 'great page',
        given: null,
        id: 2
      },
      {
        name: 'feedback',
        value: 'good job!',
        given: null,
        id: 3
      }
    ]
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(<App feedback={feedback} />)