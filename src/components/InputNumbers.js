import React, {useState} from 'react'
import axios from 'axios'
import isPrime from '../function/isPrime';

const InputNumbers = () => {
    const [numbers, setNumbers] = useState([]);

    const handleNumbersSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/sort-numbers', {numbers})
            setNumbers(response.data.sortedArr);

        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (newNumber) => {
        let number = parseInt(newNumber)
        const newArray = [...numbers, number]
        setNumbers(newArray);
    }

    const fillRandomData = (e) => {
        e.preventDefault();
        let newArray = [];
        for(let i = 0; i < 10; i++){
            let number = Math.floor((Math.random() * 100000));
            newArray = [...newArray, number];
        }
        setNumbers(newArray);
    }

    return (
        <>
        <form className='d-flex p-3'> 
            <input type='number'
             value = {numbers.length === 0 ? 0 : numbers[0]} 
              className = {isPrime(numbers[0]) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
               onChange={e =>{handleInputChange(e.target.value)}}>
            </input>
            <input type='number'
             value = {numbers.length < 1 ? 0 : numbers[1]}
             className = {isPrime(numbers[1]) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
             onChange={e =>{handleInputChange(e.target.value)}}>
            </input>
            <input type='number' 
            value = {numbers.length < 2 ? 0 : numbers[2]}
            className = {isPrime(numbers[2]) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e.target.value)}}>
            </input>
            <input type='number'
            value = {numbers.length < 3 ? 0 : numbers[3]}
            className = {isPrime(numbers[3]) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e.target.value)}}>
            </input>
            <input type='number'
            value = {numbers.length < 4 ? 0 : numbers[4]}
            className = {isPrime(numbers[4]) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e.target.value)}}>
            </input>
            <input type='number'
            value = {numbers.length < 5 ? 0 : numbers[5]}
            className = {isPrime(numbers[5]) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e.target.value)}}>
            </input>
            <input type='number'
            value = {numbers.length < 6 ? 0 : numbers[6]}
            className = {isPrime(numbers[6]) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e.target.value)}}>
            </input>
            <input type='number'
            value = {numbers.length < 7 ? 0 : numbers[7]}
            className = {isPrime(numbers[7]) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e.target.value)}}>
            </input>
            <input type='number'
            value = {numbers.length < 8 ? 0 : numbers[8]}
            className = {isPrime(numbers[8]) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e.target.value)}}>
            </input>
            <input type='number'
            value = {numbers.length < 9 ? 0 : numbers[9]}
            className = {isPrime(numbers[9]) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e.target.value)}}>
            </input>
        
            <button type='submit' className='btn btn-primary mt-3' onClick={e => handleNumbersSubmit(e)}>SEND</button>
            <button className='btn btn-info mt-3' onClick={e => fillRandomData(e)}>Fill random data</button>
            </form>
        </>
        )
    }

    
export default InputNumbers;