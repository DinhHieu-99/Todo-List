import React,{useEffect,useState} from 'react'

const Watch = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className='watch'>
        <p>{currentTime.toLocaleTimeString()}</p>
      </div>
    );
}

export default Watch