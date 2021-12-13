import React, { useState } from 'react';

import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {good, neutral, bad};

  const updateFeedback = event => {
    switch (event.target.textContent) {
      case 'good':
        addFeedback(setGood);
        break;
      case 'neutral':
        addFeedback(setNeutral);
        break;
      case 'bad':
        addFeedback(setBad);
        break;
      default:
        return;
    }
  };

  const total = good + neutral + bad;
  const percentage=countPositiveFeedbackPercentage(total, good);

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={updateFeedback} />
      </Section>
      <Section title={'Statistics'}>
        {total > 0 ? (
          <Statistics
            feedbacks={options}
            total={total}
            positivePercentage={percentage}
          />
        ) : (
          <Notification message="There is no feedback yet..." />
        )}
      </Section>
    </>
  );
}


function addFeedback(callback) {
  callback(prevState => prevState + 1);
}

function countPositiveFeedbackPercentage(total, positive) {
  if (total === 0) {
    return '0%';
  }
  return Math.round((positive / total) * 100) + '%';
}

