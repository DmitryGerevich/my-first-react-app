import { useState } from 'react';
import './App.css';

function ServiceCard({ title, description }) {
  // Локальное состояние для лайков
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="like-btn" onClick={handleLike}>
        👍 {likes}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Мои услуги</h1>
      <div className="cards-container">
        <ServiceCard 
          title="Разработка сайтов" 
          description="Создаю современные адаптивные сайты под ключ"
        />
        <ServiceCard 
          title="Вёрстка" 
          description="Верстаю макеты любой сложности (HTML, CSS, React)"
        />
        <ServiceCard 
          title="Консультация" 
          description="Помогаю разобраться с кодом и архитектурой проекта"
        />
      </div>
    </div>
  );
}

export default App;