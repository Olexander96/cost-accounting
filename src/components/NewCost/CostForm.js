import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');

    //спосіб 2 і 3
    // const [userInput, setUserInput] = useState({
    //     name: '',
    //     amount: '',
    //     date: ''
    // })

    const nameChangeHandler = (event) => {
        setInputName(event.target.value)
        // спосіб 2
        // setUserInput({
        //     ...userInput, //важливо відображати попередній стан інших інпутів userInput - не завжи попереднє состояніє
        //     name: event.target.value
        // })
        //спосіб 3
        // setUserInput((previousState) => { //краще ніж 2 бо буде гарантоване попереднє состояніє previousState
        //     return {
        //         ...previousState,
        //         name: event.target.value  
        //     }
        // })
    };
    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value)
    };
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const costDate = {
            name: inputName,
            amount: inputAmount,
            date: new Date(inputDate)
        }

        props.onAddNewCost(costDate);
        setInputName('');
        setInputAmount('');
        setInputDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls"> 
                <div className="new-cost__control">
                    <label>Призначення</label>
                    <input type='text' 
                        onChange={nameChangeHandler} 
                        value={inputName}
                    /> 
                </div>
                <div className="new-cost__control">
                    <label>Сума</label>
                    <input type='number' 
                        min='0.01' 
                        step='0.01' 
                        onChange={amountChangeHandler} 
                        value={inputAmount}
                    /> 
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type='date' 
                        min='2019-02-24' 
                        step='2023-12-30'
                        onChange={dateChangeHandler}
                        value={inputDate}
                    /> 
                </div>
                <div className="new-cost__actions">
                    <button type="submit">Додати витрату</button>
                </div>
            </div>
        </form>
    )
}

export default CostForm;