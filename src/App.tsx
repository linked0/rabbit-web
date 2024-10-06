import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CourseGoalList from './components/CourseGoalList'
import Header from './components/Header'
import goalsImg from './assets/goals.jpg'
import NewGoal from './components/NewGoal'

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<Array<CourseGoal>>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    console.log('Deleting Goal with ID: ', id);
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
      <h1>Your Course Goals</h1>
    </Header>
    <NewGoal onAddGoal={handleAddGoal} />
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
  </main>
  )
}

export default App
