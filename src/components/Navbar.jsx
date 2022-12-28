import React, { useState } from 'react'
import  getMergeSortAnimations from './sortingAlgorithms';
import Typewriter from 'typewriter-effect';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';



function Navbar(props){

    // initilizing the array that we have passed from the app.js file

    const [ANIMATION_SPEED_MS, setSpeed] = useState(10)
    
    const [arr, setArr] = useState(props.array);
    

    const [algo, setalgo] = useState('Alogrithms')
    const [avg, setavg] = useState('Average TC : ---')
    const [best, setbest] = useState('Best TC : ---')
    const [worst, setworst] = useState('Worst TC : ---')

    function randomIntFromInterval(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    function resetArray1(){
        let temparr = []; 
        
        for(let i = 0; i<55; i++){
            temparr.push(randomIntFromInterval(5,700));
        }
        setArr(temparr);
        setalgo('Alogrithms');
    }

    function resetArray(val){
    
        let temparr = []; 
        
        for(let i = 0; i<val; i++){
            temparr.push(randomIntFromInterval(5,700));
        }
        setArr(temparr);
        setalgo('Alogrithms');
    }


    function handleMergeClick(){
        setalgo('Merge Sort');
        setavg(' Average TC : O(n*logn)')
        setworst(' Worst TC : O(n*log n)')
        setbest(' Best TC : O(n*log n)')
        
        let temp = []
        let indexx = -1;

        while(++indexx < arr.length) temp[indexx] = arr[indexx]

        let animations = getMergeSortAnimations(temp);
       
        
        for(let i = 0; i<animations.length; i++){
            let arrayBars = document.getElementsByClassName('array-bar');
            // true when i = 1,3,4,6,7,9...
            let isColorChange = i % 3 !== 2; 
            if(isColorChange){
                let [barOneIdx, barTwoIdx] = animations[i];
                let barOneStyle = arrayBars[barOneIdx].style;
                let barTwoStyle  = arrayBars[barTwoIdx].style;
                let color = i % 3 === 0 ? 'red' : 'turquoise';
                
                setTimeout(() =>{
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS );
            } else{
                setTimeout(() => {
                    let [barOneIdx, newHeight ] = animations[i];
                    let barOneStyle = arrayBars[barOneIdx].style;
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
        setavg(' Average TC : O(N²)')
        setworst(' Worst TC :O(N²)')
        setbest(' Best TC : O(N)')
        let animations = [];
        let temp = []
        let indexx = -1;

        while(++indexx < arr.length) temp[indexx] = arr[indexx]

        for (let i = 0; i < temp.length - 1; i++){
 
            for ( let j = 0; j < temp.length- i - 1; j++){
                animations.push([j, j+1])
                if (temp[j] > temp[j + 1]){

                    let temporary = temp[j];
                    temp[j] = temp[j+1];
                    temp[j+1] = temporary;
                    
                }    
                animations.push([j, temp[j], j+1, temp[j+1]])    
            }
        }

        for(let i = 0; i<animations.length; i++){
            let arrayBars = document.getElementsByClassName('array-bar');
            let isColorChange = i&1; 
            if(!isColorChange){
                let [barOneIdx, barTwoIdx] = animations[i];
                let barOneStyle = arrayBars[barOneIdx].style;
                let barTwoStyle  = arrayBars[barTwoIdx].style;
                let color1 = 'red';
                let color2 = 'blue'

                
                setTimeout(() =>{
                    barOneStyle.backgroundColor = color1;
                    barTwoStyle.backgroundColor = color2;
                }, i * ANIMATION_SPEED_MS );

            } else{
                setTimeout(() => {
                    let [barOneIdx, newOneHeight, barTwoIdx, newTwoHeight] = animations[i];
                    let barOneStyle = arrayBars[barOneIdx].style;
                    let barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newOneHeight}px`;
                    barTwoStyle.height = `${newTwoHeight}px`;
                    barTwoStyle.backgroundColor=`turquoise`
                }, i*ANIMATION_SPEED_MS);
            }
        }    


        
        setTimeout(()=>{
            setalgo("Algorithms")
        },animations.length * ANIMATION_SPEED_MS)
    }




    function handleSelectionClick(){

        setalgo('Selection Sort')
        setavg(' Average TC : O(N²)')
        setworst(' Worst TC :O(N²)')
        setbest(' Best TC : O(N²)')
        let animations = []

        let temp = []
        let indexx = -1;

        while(++indexx < arr.length) temp[indexx] = arr[indexx]

        let i, j, min_idx;

        for (i = 0; i < temp.length-1; i++)
        {
           
            min_idx = i;
            for (j = i+1; j < temp.length; j++){
                if (temp[j] < temp[min_idx]){
                    min_idx = j;
                }
                animations.push([i, j])
            }
                
                animations.push([i,temp[i], min_idx, temp[min_idx]])
                let temporary = temp[min_idx];
                temp[min_idx] = temp[i];
                temp[i] = temporary;
              
        }

        console.log(animations)

        for(let x = 0; x<animations.length; x++){
            let arrayBars = document.getElementsByClassName('array-bar');

            if(animations[x].length == 2){
                let [barOneIdx, barTwoIdx] = animations[x];
                let barOneStyle = arrayBars[barOneIdx].style;
                let barTwoStyle  = arrayBars[barTwoIdx].style;
                let color1 = 'red';
                let color2 = 'yellow'
                setTimeout(() =>{
                    barOneStyle.backgroundColor = color1;
                    barTwoStyle.backgroundColor = color2;
                }, x * ANIMATION_SPEED_MS); 
                
            }else{
                setTimeout(() => {
                    let [barOneIdx, barOneHeight, barTwoIdx, barTwoHeight] = animations[x];
                    let barOneStyle = arrayBars[barOneIdx].style;
                    let barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${barTwoHeight}px`;
                    barOneStyle.backgroundColor = `turquoise`
                    barTwoStyle.height = `${barOneHeight}px`;
                    
                }, x*ANIMATION_SPEED_MS);
            }

        }
        setTimeout(()=>{
            setalgo("Algorithms")
        },animations.length * ANIMATION_SPEED_MS)
    }


    function handleInsertionClick(){

        setalgo('Insertion Sort')
        setavg(' Average TC : O(N²)')
        setworst(' Worst TC :O(N²)')
        setbest(' Best TC : O(N)')
        let animations = []
        let temp = []
        
        let indexxx = -1
        while (++indexxx < arr.length) {
        temp[indexxx] =arr[indexxx];
        }


        let i, key, j; 
        for (i = 1; i < temp.length; i++)
        { 
            key = temp[i]; 
            j = i - 1; 
            
            while (j >= 0 && temp[j] > key)
            { 
                temp[j + 1] = temp[j]; 
                j = j - 1; 
            } 
            temp[j + 1] = key; 
        }



        setTimeout(()=>{
            setalgo("Algorithms")
        },animations.length * ANIMATION_SPEED_MS)

    }

    function handleQuickClick(){

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
                        <a  onClick={handleQuickClick}>Quick Sort</a>
                    </div>
                </div>

                <div className='datasize_container'>
                    <label htmlFor="arrsize">Data Size: </label>
                    <input type="range" id='arrsize' onChange={e=>resetArray(e.target.value)}  valuestep={4} max={100} min={10}/>
                </div>


                <div className='speed_container'>
                    <label htmlFor="speed">Speed: </label>
                    <input type="range" id='speed' onChange={e=>setSpeed(e.target.value)}  valuestep={4} max={100} min={1}/>
                </div>

                <button className='reset' onClick={resetArray1}>Reset</button>
            </div>

            <div className='body'>

                <div className='timeComplexity'>
                    <p>{best}</p>
                    <p>{avg}</p>
                    <p>{worst}</p>
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


                <div className='contactus'>
                    <a href="https://github.com/exception73/sortingVisulizer">Source Code</a>
                    <a href="https://www.linkedin.com/in/gautam-khatri-873131222/">Linked In</a>
                    <a href="https://www.instagram.com/gautamkhatri05/">Instagram</a>
                    {/* <p>{ANIMATION_SPEED_MS}</p> */}
                </div>
            
            </div>
        </div>
    )
}

export default Navbar;