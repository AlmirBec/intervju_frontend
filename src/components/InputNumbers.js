import React, {useState} from 'react'
import axios from 'axios'
import isPrime from '../function/isPrime';

const InputNumbers = () => {
    const [numbers, setNumbers] = useState({
    'key0': 0,
    'key1': 0,
    'key2': 0,
    'key3': 0,
    'key4': 0,
    'key5': 0,
    'key6': 0,
    'key7': 0,
    'key8': 0,
    'key9': 0,  
    });

    const handleNumbersSubmit = async (e) =>{
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/sort-numbers', numbers)
            let sortedArr = response.data.sortedArr;

            for (let i = 0; i < sortedArr.length; i++) {
                let key = 'key' + i;
                let value = sortedArr[i];
                console.log(sortedArr);
                setNumbers({
                    ...numbers,
                    [key]: value
                })
            }

        } catch (error) {
            console.error(error);
        }
    }

    const handleInputChange = (e) => {
        let key = e.target.name;
        let value = e.target.value;

        setNumbers({
            ...numbers,
            [key]: value
        })
    }

    const fillRandomData = (e) => {
        e.preventDefault();
        
        for (const key in numbers) {
            let number = Math.floor((Math.random() * 100000));
            console.log(number);
            setNumbers({
                ...numbers,
                [key] : number,
            })
        }
    }

    return (
        <>
        <form className='d-flex p-3'> 
            <input type='number'
            name='key0'
             value = {numbers.key0} 
             className = {isPrime(numbers.key0) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
             onChange={e =>{handleInputChange(e)}}>
            </input>
            <input type='number'
            name='key1'
             value = {numbers.key1}
             className = {isPrime(numbers.key1) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
             onChange={e =>{handleInputChange(e)}}>
            </input>
            <input type='number' 
            name='key2'
            value = {numbers.key2}
            className = {isPrime(numbers.key2) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e)}}>
            </input>
            <input type='number'
            name='key3'
            value = {numbers.key3}
            className = {isPrime(numbers.key3) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e)}}>
            </input>
            <input type='number'
            name='key4'
            value = {numbers.key4}
            className = {isPrime(numbers.key4) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e)}}>
            </input>
            <input type='number'
            name='key5'
            value = {numbers.key5}
            className = {isPrime(numbers.key5) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e)}}>
            </input>
            <input type='number'
            name='key6'
            value = {numbers.key6}
            className = {isPrime(numbers.key6) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e)}}>
            </input>
            <input type='number'
            name='key7'
            value = {numbers.key7}
            className = {isPrime(numbers.key7) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e)}}>
            </input>
            <input type='number'
            name='key8'
            value = {numbers.key8}
            className = {isPrime(numbers.key8) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e)}}>
            </input>
            <input type='number'
            name='key9'
            value = {numbers.key9}
            className = {isPrime(numbers.key9) ? 'form-control mt-3 bg-success': 'form-control mt-3'} 
            onChange={e =>{handleInputChange(e)}}>
            </input>
        
            <button type='submit' className='btn btn-primary mt-3' onClick={e => handleNumbersSubmit(e)}>SEND</button>
            <button className='btn btn-info mt-3' onClick={e => fillRandomData(e)}>Fill random data</button>
            </form>
        </>
        )
    }

    
export default InputNumbers;