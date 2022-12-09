import React, { useState } from 'react'
import './Navbar.css'
import  getMergeSortAnimations from './sortingAlgorithms';

const   ANIMATION_SPEED_MS = 3;


function Navbar(props){

    // initilizing the array that we have passed from the app.js file
    const temp = props.array;
    const [arr, setArr] = useState(temp);


    const [algo, setalgo] = useState('Alogrithms')


    function randomIntFromInterval(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function resetArray(){
        const temparr = []; 
        for(let i = 0; i<100; i++){
            temparr.push(randomIntFromInterval(5,700));
        }
        setArr(temparr);
        setalgo('Alogrithms');
    }





    const handleBubbleClick = () =>{
        setalgo('Bubble Sort');
       bubblesorting();
}

    function bubblesorting(){
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


    function handleMergeClick(){
        setalgo('Merge Sort');
        
        const animations = getMergeSortAnimations(arr);
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            // true when i = 1,3,4,6,7,9....
            const isColorChange = i % 3 !== 2; 
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle  = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'red' : 'turquoise';
                
                setTimeout(() =>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS );
            } else{
                setTimeout(() => {
                    const [barOneIdx, newHeight ] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i*ANIMATION_SPEED_MS);
            }
        }

        setTimeout(()=>{
            setalgo("Algorithms")
        },animations.length * ANIMATION_SPEED_MS)
        

    }



    
// function swap(arr, x, y) {
//     //set color and swap
//     arr[x].swap = true;
//     arr[y].swap = true;

//     const temp = arr[x];
//     arr[x] = arr[y];
//     arr[y] = temp;
// }
// function compare(arr, x, y) {
//     //set color and compare
//     arr[x].compare = true;
//     arr[y].compare = true;
//     return arr[x].val > arr[y].val;
// }




    
    return(

        <div>

            <div className='navbar'>

                <p className='heading'>Sorting Visulizer</p>
                

                <div className="dropdown">
                    <button className="dropbtn">{algo} &or;</button>
                    <div className="dropdown-content">
                        <a  onClick={handleBubbleClick}>Bubble Sort</a>
                        {/* <a  onClick={handleSelectionClick}>Selection Sort</a> */}
                        {/* <a  onClick={handleInsertionClick}>Insertion Sort</a> */}
                        <a  onClick={handleMergeClick}>Merge Sort</a>
                        {/* <a  onClick={handleQuickClick}>Quick Sort</a> */}
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
                        <div className="array-bar"
                            style ={{height : `${value}px`}}>{}
                        </div>
                    ))
                }
        
        </div>

    </div>

    )
}

export default Navbar;