import '../styles/Form1.css';

const Form1 = ({removealltask,addtask,addtaskreftitle,addtaskrefdescription,counttask}) => {
  


    return (
        
<div className="PrincipalDiv">
  <div class="mb-1">
        <div className='TaskWithCount'>
        <label  for="exampleFormControlInput1" class="form-label">To-do list</label>
        <div className={counttask > 0 ? 'count' : 'display-none'}>{counttask}</div>
        </div>

    <input ref={addtaskreftitle} type="text" class="form-control" 
    className='title1'
    id="exampleFormControlInput1" placeholder="Write a task name"
    maxlength="30"/>
  </div>

  <div className='containerdescription1' class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
    <input  ref={addtaskrefdescription} class="form-control" className='description1' id="exampleFormControlTextarea1" rows="6" placeholder="Write a description" maxlength="500"/>

  </div>

  <div className='divButtons'>
      <button onClick={addtask} type="button" class="btn btn-primary btn-lg">Add Task</button>
      <button onClick={removealltask} type="button" class="btn btn-danger btn-lg">Remove all</button>
  </div>

</div>


      


    )
  }
  
  export default Form1
