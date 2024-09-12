import React from 'react'

const EditTopicForm = () => {
  return (
    <>
      <form className="">

  <div className="">
     <div><label htmlFor="desc" className="text-2xl font-medium py- py-4">Enter the Blog Topic</label> </div> 
    <input type="text" id="topic" className="input-title" placeholder="Title" required />
  </div>

  <div className="">
     <div><label htmlFor="desc" className="text-2xl font-medium py- py-4">Enter the Blog Description</label> </div> 
        <textarea rows={6} id="topic" className="input-title" placeholder="Description" required ></textarea>
  </div>

  <div className="">
     <div><label htmlFor="profil" className="text-2xl font-medium py- py-4">Enter the Blog's Author name</label> </div> 
    <input type="text" id="profil" className="input-title" placeholder="Enter name" required />
  </div>

  <div className="">
     <div><label htmlFor="date" className="text-2xl font-medium py- py-4">Enter the Blog's Date</label> </div> 
    <input type="text" id="date" className="input-title" placeholder="Enter date" required />
  </div>
  <button className='btn '>
    Update topic
  </button>
</form>
    </>
  )
}

export default EditTopicForm

