import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
const comment =(props)=>{
    return(
        <>
        <div className='ui container comments'>
            <div className='comment'>
                <a href='/' className='avatar'>
                    
                    <img alt='avatar' src={faker.image.avatar()}/>
                </a>
                <div className='content'>
                    <a href='/' className='author'>
                        {props.name}
                    </a>
                    <div className='metadata'>
                        <div className='date'>{props.time}</div>
                    </div>
                    <div className='text'> {props.text}</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default comment;