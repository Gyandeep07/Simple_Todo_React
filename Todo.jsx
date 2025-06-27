import { useState } from 'react';
import './todo.css'
function Todo(){
    const [activity,setactivity]=useState();
    const [listData,setlistData]=useState([]);

    function addactivity(){
// setlistData([...listData,activity])
// console.log(listData)
setlistData((listData)=>{
    const updatedlist=[...listData,activity]
   
    setactivity('');
    return updatedlist;
})
    }
    function removeAct(i){
const updatedlistdata=listData.filter((Element,id)=>{
return i!=id;
})
setlistData(updatedlistdata);
    }
    function removeall(){
        setlistData([])
    }
return(
   <>

   <div className="container">
<div className="header">TODO LIST</div>
<input type="text" placeholder='Add Activity' value={activity} onChange={(e)=>setactivity(e.target.value)}/>
<button onClick={addactivity}>Add</button>
<p className='list-heading'>Here is your List :{")"}</p>
{
    listData!=[] && listData.map((data,i)=>{
        return(
            <>
            <p key={i}>
<div className="listData">{data}</div>
<div className="btn-position">
    <button onClick={()=>removeAct(i)}>remove(-)</button>
</div>
            </p>
            </>
        )
    })
}
{listData.length>=1 &&

<button onClick={removeall}>Remove All</button>
}
   </div>
   </>
)
}
export default Todo;