import React, { useState } from 'react'
import './Navbar.css'

function Navbar(props){

    // initilizing the array that we have passed from the app.js file
    const temp = props.array;
    const [arr, setArr] = useState(temp);


    const [algo, setalgo] = useState('Alogrithms')
    const handleBubbleClick = () =>{
         setalgo('Bubble Sort');
         bubblesorting();
}
    const handleSelectionClick = () =>{ setalgo('Selection Sort')}
    const handleInsertionClick = () => setalgo('Insertion Sort')
    const handleMergeClick = () => setalgo('Merge Sort')
    const handleQuickClick = () => {setalgo('Quick Sort')}




    function randomIntFromInterval(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function resetArray(){
        const arr = []; 
        for(let i = 0; i<100; i++){
            arr.push(randomIntFromInterval(5,700));
        }
        setArr(arr);
        setalgo('Alogrithms');
    }



    function bubblesorting(){
        

        setArr(arr.sort());

        // for (let i = 0; i < arr.length; i++) {
        //     for (let j = 0; j < arr.length - i - 1; j++) {
        //         const [first, second] = useState(arr[j]);
        //         document.getElementById('')
        //         if (compare(arr, j, j + 1)) {
        //             swap(arr, j, j + 1);
    

        //         }
        //     }
        // }

    }

    
function swap(arr, x, y) {
    //set color and swap
    arr[x].swap = true;
    arr[y].swap = true;

    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}
function compare(arr, x, y) {
    //set color and compare
    arr[x].compare = true;
    arr[y].compare = true;
    return arr[x].val > arr[y].val;
}




    
    return(

        <div>

            <div className='navbar'>

                <p className='heading'>Sorting Visulizer</p>
                

                <div className="dropdown">
                    <button className="dropbtn">{algo} &or;</button>
                    <div className="dropdown-content">
                        <a href="#" onClick={handleBubbleClick}>Bubble Sort</a>
                        <a href="#" onClick={handleSelectionClick}>Selection Sort</a>
                        <a href="#" onClick={handleInsertionClick}>Insertion Sort</a>
                        <a href="#" onClick={handleMergeClick}>Merge Sort</a>
                        <a href="#" onClick={handleQuickClick}>Quick Sort</a>
                    </div>
                </div>

                <div className='datasize_container'>
                    <label htmlFor="arrsize">Data Size: </label>
                    <input type="range" id='arrsize'/>
                </div>


                <div className='speed_container'>
                    <label htmlFor="speed">Speed: </label>
                    <input type="range" id='speed'/>
                </div>

                <button className='reset' onClick={resetArray}>Reset</button>
            </div>

        
        <div className="bars">
        
                {
                    arr.map((value) => (
                        <div className="array-bars"
                            style ={{height : `${value}px`}}>{}
                        </div>
                    ))
                }
        
        </div>

    </div>

    )
}

export default Navbar;