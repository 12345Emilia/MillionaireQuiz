import './App.css';
import { useEffect, useMemo, useState } from 'react';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import Start from './components/Start';

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$ 0');

  const data = [
    {
      id: 1,
      question: 'Which color is not on the American flag?',
      answers: [
        {
          text: 'Blue',
          correct: false,
        },
        {
          text: 'Red',
          correct: false,
        },
        {
          text: 'Green',
          correct: true,
        },
        {
          text: 'White',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "What's the capital of the United States?",
      answers: [
        {
          text: 'New York',
          correct: false,
        },
        {
          text: 'Los Angeles',
          correct: false,
        },
        {
          text: 'Miami',
          correct: false,
        },
        {
          text: 'Washington D.C',
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "What's not a right in the Declaration of Independence?",
      answers: [
        {
          text: 'Life',
          correct: false,
        },
        {
          text: 'Love',
          correct: true,
        },
        {
          text: 'Liberty',
          correct: false,
        },
        {
          text: 'Pursuit of Happiness',
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: 'Which weekend is the start of summer?',
      answers: [
        {
          text: 'Labour Day Weekend',
          correct: false,
        },
        {
          text: '4th of July Weekend',
          correct: false,
        },
        {
          text: 'First weekend of June',
          correct: false,
        },
        {
          text: 'Memorial Day Weekend',
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: 'Which city is also known as the big apple?',
      answers: [
        {
          text: 'Los Angeles',
          correct: false,
        },
        {
          text: 'Washington D.C.',
          correct: false,
        },
        {
          text: 'New York',
          correct: true,
        },
        {
          text: 'Miami',
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: 'When is Black Friday?',
      answers: [
        {
          text: 'Thursday following Thanksgiving Day',
          correct: false,
        },
        {
          text: 'Friday following Thanksgiving Day',
          correct: true,
        },
        {
          text: 'Friday before Thanksgiving Day',
          correct: false,
        },
        {
          text: 'Friday following Halloween',
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: 'When was the Declaration of Independence adopted?',
      answers: [
        {
          text: 'July 4th, 1776',
          correct: true,
        },
        {
          text: 'July 24th, 1777',
          correct: false,
        },
        {
          text: 'July 14th, 1778',
          correct: false,
        },
        {
          text: 'July 4th, 1775',
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "What's the population of America?",
      answers: [
        {
          text: '333,300,000',
          correct: true,
        },
        {
          text: '400,200,000',
          correct: false,
        },
        {
          text: '280,200,000',
          correct: false,
        },
        {
          text: '333,999,000',
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: 'Who was Americas first President?',
      answers: [
        {
          text: 'Franklin Roosevelt',
          correct: false,
        },
        {
          text: 'Donald Trump',
          correct: false,
        },
        {
          text: 'Benjamin Franklin',
          correct: false,
        },
        {
          text: 'George Washington',
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: 'How many amendments does the Constitution have?',
      answers: [
        {
          text: '21',
          correct: false,
        },
        {
          text: '25',
          correct: false,
        },
        {
          text: '27',
          correct: true,
        },
        {
          text: '29',
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: 'Which one is not one of the 13 original states?',
      answers: [
        {
          text: 'New York',
          correct: false,
        },
        {
          text: 'New Orleans',
          correct: true,
        },
        {
          text: 'New Hampshire',
          correct: false,
        },
        {
          text: 'New Jersey',
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: 'What ocean is on the west coast of the United States?',
      answers: [
        {
          text: 'Pacific Ocean',
          correct: true,
        },
        {
          text: 'Atlantic Ocean',
          correct: false,
        },
        {
          text: 'Black Sea',
          correct: false,
        },
        {
          text: 'Gulf of Mexico',
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: 'What season is pumpkin spice associated with?',
      answers: [
        {
          text: 'Summer',
          correct: false,
        },
        {
          text: 'Winter',
          correct: false,
        },
        {
          text: 'Autumn',
          correct: true,
        },
        {
          text: 'Spring',
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: 'How many states are there in America?',
      answers: [
        {
          text: '50',
          correct: true,
        },
        {
          text: '49',
          correct: false,
        },
        {
          text: '52',
          correct: false,
        },
        {
          text: '51',
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "What's often referred to as America's National Pastime?",
      answers: [
        {
          text: 'American Football',
          correct: false,
        },
        {
          text: 'Idol',
          correct: false,
        },
        {
          text: 'Dancing with the Stars',
          correct: false,
        },
        {
          text: 'Baseball',
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: '$ 100' },
        { id: 2, amount: '$ 200' },
        { id: 3, amount: '$ 300' },
        { id: 4, amount: '$ 500' },
        { id: 5, amount: '$ 1000' },
        { id: 6, amount: '$ 2000' },
        { id: 7, amount: '$ 4000' },
        { id: 8, amount: '$ 8000' },
        { id: 9, amount: '$ 16000' },
        { id: 10, amount: '$ 32000' },
        { id: 11, amount: '$ 64000' },
        { id: 12, amount: '$ 125000' },
        { id: 13, amount: '$ 250000' },
        { id: 14, amount: '$ 500000' },
        { id: 15, amount: '$ 1000000' },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  const handleClick = () => {};

  return (
    <div className='app'>
      {username ? (
        <>
          <div className='main'>
            {stop ? (
              <h1 className='endText'>
                Congratulations {username}! <br /> You earned: {earned} <br />
                <button className='playAgain' onClick={handleClick}>
                  Play again!
                </button>
              </h1>
            ) : (
              <>
                <div className='top'>
                  <div className='timer'>
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className='bottom'>
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className='pyramid'>
            <ul className='moneyList'>
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? 'moneyListItem active'
                      : 'moneyListItem'
                  }>
                  <span className='moneyListItemNumber'>{m.id}</span>
                  <span className='moneyListItemAmount'>{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
