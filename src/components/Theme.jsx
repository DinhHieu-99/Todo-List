import React, { useEffect, useState } from 'react'

const Theme = () => {
  const [isTheme, setIsTheme] = useState(false)
    const handleTheme = () =>{
      setIsTheme(prev =>!prev)
      if (isTheme) {
        document.body.style.backgroundColor = '#06091c'
        document.body.style.transition = 'all 1s'
      }else{
        document.body.style.backgroundColor = '#992323'
        document.body.style.transition = 'all 1s'
      }
    }
    useEffect(()=>{
      document.body.style.backgroundColor = '#06091c'
    },[])
  return (
    <div> 
      <div className='btn-theme'> 
        {isTheme ? <button id='darkblue' onClick={handleTheme}></button> : <button id='darkred' onClick={handleTheme}></button>}
      </div>
    </div>
  )
}

export default Theme