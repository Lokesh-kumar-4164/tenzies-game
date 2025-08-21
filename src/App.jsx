import Die from './Die'
import { useState } from 'react';
import {nanoid} from "nanoid"
// import Math from "Math"
export default function App(){
    
    const [dieValues,setDieValues] = useState(() => handleRollClick() )
    let gameWon = dieValues.every(die => die.isheld) && 
        dieValues.every(die => dieValues[0].value===die.value)
    
    function handleRollClick(){
        
        let tempValues2 = []
        for(let i=0;i<10;i++){
            let randomNumber = Math.floor(Math.random()*6 +1)
            tempValues2.push({value:randomNumber, isheld:false, id:nanoid()})
        }
        return tempValues2
    }
    
    function rollDice(){ 
        if(gameWon)  setDieValues(() => handleRollClick())
        else
        setDieValues(oldDie => oldDie.map((e) => {
            return e.isheld? e:{...e,value:Math.floor(Math.random()*6 +1)}
        }))
    }
    
    
    const dieMap = dieValues.map((e) => {
        return <Die key={e.id} id={e.id} value={e.value} isheld={e.isheld} hold={hold}/>
    }) 
    function hold(id){
        console.log(id)
        const newMap = dieValues.map(e => {
            if(e.id===id) e.isheld = !e.isheld
            return e
        })
        setDieValues(newMap)

    }
    return (
        <div id='dice-cover'>
        <div className="die-container">

            {dieMap}
         </div>
        <button id='roll-button' onClick={rollDice}>{gameWon?"New Game":"Roll"}</button>
        </div>  
    )
}