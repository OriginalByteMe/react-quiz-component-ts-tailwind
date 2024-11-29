import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Quiz from '../lib/Quiz';
import quiz from './quiz';
import './index.css';

const container = document.getElementById('app');
if (!container) {
  throw new Error('Failed to find the root element');
}
const root = createRoot(container);

function App() {
  const [quizResult, setQuizResult] = useState<any>();

  return (
    <div className="mx-auto w-[500px]">
      <Quiz
        quiz={quiz}
        shuffle
        shuffleAnswer
        showInstantFeedback
        onComplete={setQuizResult}
        onQuestionSubmit={(obj) => console.log('user question results:', obj)}
        disableSynopsis
        timer={60}
        allowPauseTimer
        enableProgressBar
      />
    </div>
  );
}

root.render(<App />);
