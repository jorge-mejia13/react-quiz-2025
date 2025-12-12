import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Question from './components/Question';
import Score from './components/Score';
import Footer from './components/Footer'

const quizQuestions = [
  {
    question: "What is the purpose of useState in React?",
    options: [
      "To manage state in a functional component",
      "To handle side effects",
      "To perform HTTP requests",
      "To create a new component"
    ],
    answer: "To manage state in a functional component"
  },
  {
    question: "What does JSX stand for?",
    options: [      
      "JavaScript",
      "JavaScript XML",
      "Java Styling Extension",
      "JavaScript Syntax Expression"
    ],
    answer: "JavaScript XML"
  },
  {
    question: "Which hook is used to handle side effects in functional components?",
    options: [
      "useState",
      "useEffect",
      "useReducer",
      "useContext"
    ],
    answer: "useEffect"
  },  
  {
    question: "What does the useEffect hook primarily manage in React?",
    options: [
      "Rendering components",
      "Handling side effects",
      "Creating new components",
      "Managing user input"
    ],
    answer: "Handling side effects"
  },
  {
    question: "What is the correct way to pass props to a child component?",
    options: [
      "<Child props={value} />",
      "<Child value={props} />",
      "<Child value={value} />",
      "<Child {value} />"
    ],
    answer: "<Child value={value} />"
  },
  {
    question: "Which statement best describes state in React?",
    options: [
      "State cannot be changed after initialization",
      "State refers to data that can change over time",
      "State is only available in class components",
      "State holds static values"
    ],
    answer: "State refers to data that can change over time"
  },
  {
    question: "How do you render a list in React?",
    options: [
      "Using a for loop directly in JSX",
      "Using the map() method to return JSX elements",
      "Using a renderList() hook",
      "Using list.render()"
    ],
    answer: "Using the map() method to return JSX elements"
  },
  {
    question: "Which hook lets you create a piece of state inside a functional component?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useRef"
    ],
    answer: "useState"
  },
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A browser feature that improves navigation",
      "A lightweight copy of the actual DOM used to optimize UI updates",
      "A database used to store component data",
      "A styling tool for React components"
    ],
    answer: "A lightweight copy of the actual DOM used to optimize UI updates"
  },
  {
    question: "What is the purpose of keys when rendering lists in React?",
    options: [
      "To style each list item",
      "To identify which items have changed, been added, or removed",
      "To encrypt list data",
      "To pass props to child components"
    ],
    answer: "To identify which items have changed, been added, or removed"
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption('');

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption('');
  };

  return (
    <div className="quiz-app">
      <Header />    
      {showScore ? (
        <Score score={score} totalQuestions={quizQuestions.length} handleRestartQuiz={handleRestartQuiz} />
      ) : (
        <Question
          questionData={quizQuestions[currentQuestion]}
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
          handleNextQuestion={handleNextQuestion}
          currentQuestion={currentQuestion}
          totalQuestions={quizQuestions.length}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;