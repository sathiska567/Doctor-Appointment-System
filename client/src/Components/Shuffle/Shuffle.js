import React, { useEffect, useState } from 'react'

export default function Shuffle() {

  const myArray = ["kamal","nimal","sunil","piyal","rahal"]
  const shuffledArray = []
  const usedIndexes = []
  const [shuffledNewArray, setShuffledNewArray] = useState([]);

//   const initialFixtures = [
//         { homeTeam: 'Team A', awayTeam: 'Team B' },
//         { homeTeam: 'Team C', awayTeam: 'Team D' },
//         { homeTeam: 'Team E', awayTeam: 'Team F' },
//         // Add more fixtures as needed
//       ];
    
//       const [fixtures, setFixtures] = useState(initialFixtures);


const ShuffleData = () => {
        let i = 0;

        while (i < myArray.length) {

        const randomIndex = Math.floor(Math.random() * myArray.length);

         if(!usedIndexes.includes(randomIndex)){
                shuffledArray.push(myArray[randomIndex])
                usedIndexes.push(randomIndex)
                i++
         }   
        
        }
        setShuffledNewArray(shuffledArray)
    }

    useEffect(()=>{
      ShuffleData();
    },[])
    

    return (
        <>
          <div>
            <button onClick={ShuffleData} style={{ margin: "200px" }}>
              Shuffle
            </button>
            {/* <p>{shuffledNewArray}</p> */}
      
            <ul>
              {shuffledNewArray.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </>
      );
      
  
}
