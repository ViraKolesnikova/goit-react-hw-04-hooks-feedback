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

  const updateFeedback = optionName => {
    switch (optionName) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const CountFeedbackPercentage=(total, feedbackType)=>{
  if (total === 0) {
    return '0%';
  }
  return Math.round((feedbackType / total) * 100) + '%';
}

  const total = good + neutral + bad;
  const percentage=CountFeedbackPercentage(total, good);

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={options} onLeaveFeedback={e=>updateFeedback(e.target.textContent)} />
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

