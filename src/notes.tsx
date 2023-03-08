import React from 'react'

const notes = () => {
    const name: string = 'joy'
    const age: number = 12
    const isMarried: boolean = true

    const getName = (name: string): number => {
        if(name === 'joy'){
          return 12
        }else{
          return 0
        }
      
      }
  return (
    <div>
     {name}
     {age}
     {isMarried}
    </div>
  )
}

export default notes