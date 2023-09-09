import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log('form Submitted !');
        const obj = {
            id:Math.random(),
            title:title,
            description:description
        }
        if(title !== '' && description !== ''){
            addTodo(obj);
        }else{
            alert("please fill the fields")
        }
        setTitle('');
        setDescription('');

    }

  return (
   <>
   <div className="container" style={{width:'50%'}}>

   <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="example" className="form-label">Title</label>
    <input 
    value={title}
    onChange={(e)=>setTitle(e.target.value)}
    type="text"
     className="form-control"
      id="example" 
       />
   
  </div>
  <div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
  <textarea 
  value={description}
  onChange={(e)=>setDescription(e.target.value)}
  className="form-control"
   id="exampleFormControlTextarea1"
    rows="3"

    ></textarea>
</div>
  
  <button type="submit" className="btn btn-primary">Add Todo</button>
</form>
   </div>
   </>
  )
}

export default AddTodo