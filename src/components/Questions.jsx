import React, { useEffect, useState } from 'react'
import Card from './Card'
import questionsData from "../../constant/questions.json";
import { useNavigate } from 'react-router-dom'

import { signOut } from 'firebase/auth';
import { auth } from '../Firebase'; // Adjust path

const handleLogout = async () => {
  await signOut(auth);
  localStorage.clear();
  window.location.href = '/';
};


const getRandomItems = (array, count) => {
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};


const Questions = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  
  const handleSubmit = () => {
    const jsonData = JSON.stringify({ answers }, null, 2);
    console.log("Submitted Answers:", jsonData);
    window.scrollTo(0, 0);
    navigate('/personality');
  };
    

  useEffect(() => {
    const allMcqs = [];
    const allSliders = [];

    // Step 1: Collect all mcqs and sliders
    Object.values(questionsData).forEach((category) => {
      category.forEach((q) => {
        if (q.type === "mcq") allMcqs.push(q);
        if (q.type === "slider") allSliders.push(q);
      });
    });

    // Step 2: Pick 10 random mcqs and 5 sliders
    const selectedMcqs = getRandomItems(allMcqs, 10);
    const selectedSliders = getRandomItems(allSliders, 5);

    // Step 3: Merge and shuffle
    const finalQuestions = [...selectedMcqs, ...selectedSliders].sort(() => Math.random() - 0.5);

    setQuestions(finalQuestions);
  }, []);

  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSelect = (id, value) => {
    setAnswers((prev) => {
      // Remove any previous answer for this id
      const filtered = prev.filter((item) => item.id !== id);
      return [
        ...filtered,
        { id, value: typeof value === "string" ? value : parseFloat(value) },
      ];
    });
  };
  

  

  return (
    <div className='w-[60%] mx-auto mt-[6rem] flex flex-col items-center '>
      <h1 className='bungee-regular text-[4rem]'>The Path Within</h1>
      <p className='raleway text-neutral-400 text-2xl mb-[2rem]'>A 15-question odyssey to reveal your cultural soul and hidden strengths.</p>
      <div>
      {questions.map((q) =>
        q.type === "mcq" ? (
          <Card
          key={q.id}
          id={q.id}
          question={q.question}
          op1={q.options[0]}
          op2={q.options[1]}
          op3={q.options[2]}
          op4={q.options[3]}
          type={q.type}
          onAnswerSelect={handleAnswerSelect}
          />
        ) : (
          <Card key={q.id} id={q.id} question={q.question} type={q.type}  onAnswerSelect={handleAnswerSelect} />
        )
      )}
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white w-[40%] outline-0 cursor-pointer raleway font-semibold text-xl mt-[4rem]   mb-[10rem] px-6 py-4 rounded-2xl hover:bg-blue-700 transition-all hover:scale-105 duration-300"
      >
        Submit
      </button>
    </div>
  )
}

export default Questions