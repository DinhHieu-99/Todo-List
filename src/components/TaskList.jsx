import React, { useState, useMemo, useRef } from 'react'
import {AiFillFileAdd} from 'react-icons/ai'
import {HiDocumentRemove} from 'react-icons/hi'
import './main.css'

const TaskList = () => {
    const [text, setText] = useState('')
    const [items, setItems] = useState([])
    const isCompleted = useRef()
    const handleAddItem = () =>{
        if (!text) {
            return
        }
        const item ={
            id: Date.now(),
            value : text
        }
        setItems(newItem =>[...newItem,item])
        setText('')
    }
    const handleDelete = (id) =>{
        const newArr = items.filter(item => item.id !== id)
        setItems(newArr)
    }
    
    const handleCompleted = (id) =>{
        const newArr = items.filter(item => item.id !== id)
        if (newArr) {
            isCompleted.current.style.color = '#45f3ff34'
            isCompleted.current.style.textDecoration = 'line-through'
        }
        console.log(newArr)
    }

    const handldeClearCompleted = () =>{
        var li = document.querySelectorAll("li");
        for (var i = 0; i < li.length; i++) {
            li[i].removeAttribute("style");
        }
    }

    const total = useMemo(()=>{
        return items.length;
      },[items])
  return (
    <section className='todolist-main'>
        <div className='todolist-content'>
            <div className='form-value'>
                <input type="text" placeholder='Nhập kế hoạch của bạn' value={text} onChange={e=>setText(e.target.value)} required="required"/>
                <span></span>
                <button className='add' onClick={handleAddItem}><AiFillFileAdd/></button>
            </div>
            <div className='task-list'>
                <ul>
                    {
                        items.map(item=>(
                            <div className='content-list' key={item.id}>
                                <li ref={isCompleted} onClick={handleCompleted}><p>{item.value}</p> <button className='remove' onClick={()=>handleDelete(item.id)}><HiDocumentRemove/></button></li>
                            </div>
                        ))
                    }
                </ul>
            </div>
            <div className='footer'>
                <span>{total} Task</span>
                <button onClick={handldeClearCompleted}>clear completed</button>
            </div>
        </div>
    </section>
  )
}

export default TaskList