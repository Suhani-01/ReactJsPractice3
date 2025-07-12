// import { useForm } from 'react-hook-form';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount} from './features/counter/counterSlice';
import { useState } from 'react';


function App(){
  const [amount,setAmount]=useState(0);
  //counter naam ke slice me ek value naam ki entity hai use laao
  const count=useSelector((state)=>state.counter.value);

  //kisi b action ko dispatch krne ke liye is hook ki jrorat pdegi
  const dispatch=useDispatch();


  function handleIncrementClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleAmount(){
    dispatch(incrementByAmount(Number(amount)));
  }

  return(
    <div className="container">
      <button onClick={handleIncrementClick}>+</button>
      <p>Count : {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br/>
      <br/>
      <input type='number' placeholder='Enter Amount' onChange={(e)=>{setAmount(e.target.value)}}/>
      <br/>
      <br/>
      <button onClick={handleAmount}>Increment by Amount</button>
    </div>
  );
}

// function App(){

//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors , isSubmitting }, //isSubmitting is optional to write here and use
//   } = useForm();

//   //while submitting I want to disable the submit button to stop multipme submit of same data


//   //simulating an API call ie submitting the data
//   async function onSubmit(data){h=+

//     //form will get submit after 5 second delay
//     await new Promise((resolve)=>setTimeout(resolve,5000));
//     console.log("Submitting the form : ",data)
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>First Name : </label>
//         <input 
//         className={errors.firstName?"input-error":""}
//         {...register("firstName" , 
//           { 
//             required:true , 
//             minLength:{value:3 ,message:"min length at least 3"} ,
//             maxLength:{value:6 ,message:"max length at least 6"}
//           }
//         )}/>
//         {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}


//         <br/>
//         <br/>
//         <label>Middle Name : </label>
//         <input {...register("middleName")}/>
//         <br/>
//         <br/>
//         <label>Last Name : </label>
//         <input
//           className={errors.lastName?"input-error":""}
//          {...register(
//           "lastName" , 
//           { pattern:{
//             value:/^[A-Za-z]+$/i,
//             message:"Last Name is not as per the rules"
//           } }
//         )}/>
//         {errors.lastName && <p className='error-message'>{errors.lastName.message}</p>}

//         <br/>
//         <br/>
        
//         <input type="submit" disabled={isSubmitting} value={isSubmitting ?"Submitting" : "Submit"}/>
//       </div>
//     </form>
//   )

// }




// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About';
// import Dashboard from './component/Dashboard';
// import Navbar from './component/Navbar';
// import Courses from './component/Courses';
// import Mocktest from './component/Mocktest';
// const router=createBrowserRouter(
//   [
//     {
//       path:"/",
//       element:
//       <div>
//         <Navbar/>
//         <Home/>
//       </div>
//     },
//     {
//       path:"/about",
//       element:
//       <div>
//         <Navbar/>
//         <About/>
//       </div>
//     },
//     {
//       path:"/dashboard",
//       element:
//       <div>
//         <Navbar/>
//         <Dashboard/>
//       </div>,
//       children:[
//         {
//           path:"mocktest",
//           element:<Mocktest/>
//         },
//         {
//           path:"courses",
//           element:<Courses/>
//         }
//       ]
      
//     }
//   ]
// )
// function App() {
//   return (
//     <div>
//       <RouterProvider router={router}/>
//     </div>
//   );
// }

export default App;
