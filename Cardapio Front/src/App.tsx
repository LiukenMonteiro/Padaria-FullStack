// import { useState } from 'react';
import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './rooks/useFoodData';
import { CreateModal } from './components/card/create-modal/create-modal';


function App() {
  const  { data } = useFoodData();
  const [isModalOpen, setIsModalOpen ] = useState(false); 

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio Padaria Liuken</h1>
      <h2>"Jesus declara que Ele é o “pão da vida” e que todo aquele que Nele crer terá a vida eterna"</h2>
      <div className="card-grid">
        {data?.map(foodData => 
        <Card
        price={foodData.price} 
        title={foodData.title} 
        image={foodData.image}
        />
        )}
      </div>
      <h3>"Porquê pão ainda é o melhor alimento"</h3>
      { isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App;
