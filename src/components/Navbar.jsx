import React, { useState } from 'react'
import  getMergeSortAnimations from './sortingAlgorithms';

const ANIMATION_SPEED_MS = 10;

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
        for(let i = 0; i<30; i++){
            temparr.push(randomIntFromInterval(5,700));
        }
        setArr(temparr);
        setalgo('Alogrithms');
    }


    function handleMergeClick(){
        setalgo('Merge Sort');
        
        let duplicate = arr;
        const animations = getMergeSortAnimations(duplicate);
        console.log(duplicate)
        console.log(arr)
        
        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            // true when i = 1,3,4,6,7,9...
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

    function handleBubbleClick(){
        setalgo('Buble Sort');
        let animations = [];

        for (let i = 0; i < arr.length - 1; i++)
 
        for ( let j = 0; j < arr.length- i - 1; j++){
            animations.push([j, j+1])
            if (arr[j] > arr[j + 1]){

                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                
            }    
            animations.push([j, arr[j], j+1, arr[j+1]])    
        }

        for(let i = 0; i<animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            
            const isColorChange = i&1; 
            if(!isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle  = arrayBars[barTwoIdx].style;
                const color1 = 'red';
                const color2 = 'blue'

                
                setTimeout(() =>{
                    barOneStyle.backgroundColor = color1;
                    barTwoStyle.backgroundColor = color2;
                }, i * ANIMATION_SPEED_MS );
            } else{
                setTimeout(() => {
                    const [barOneIdx, newOneHeight, barTwoIdx, newTwoHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newOneHeight}px`;
                    barTwoStyle.height = `${newTwoHeight}px`;
                }, i*ANIMATION_SPEED_MS);
            }
        }    
        
        setTimeout(()=>{
            setalgo("Algorithms")
        },animations.length * ANIMATION_SPEED_MS)
    }


    function handleSelectionClick(){
        setalgo('Selection Sort')
        let animations = []

        let i, j, min_idx;

        for (i = 0; i < arr.length-1; i++)
        {
           
            min_idx = i;
            for (j = i+1; j < arr.length; j++){
                if (arr[j] < arr[min_idx]){
                    min_idx = j;
                }
                animations.push(i, j)
            }
                
            animations.push()

            if(min_idx!=i){
                
                let temp = arr[min_idx];
                arr[min_idx] = arr[i];
                arr[i] = temp;
            }

              
        }
    }

    
    return(

        <div>

            <div className='navbar'>

                <p className='heading'>Sorting Visulizer</p>

                <div className="dropdown">
                    <button className="dropbtn">{algo} &or;</button>
                    <div className="dropdown-content">
                        <a  onClick={handleBubbleClick}>Bubble Sort</a>
                        <a  onClick={handleSelectionClick}>Selection Sort</a>
                        {/* <a  onClick={handleInsertionClick}>Insertion Sort</a> */}
                        <a onClick={handleMergeClick}>Merge Sort</a>
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