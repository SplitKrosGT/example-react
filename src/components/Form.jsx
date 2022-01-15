import React, { useState } from 'react';
import './Form.css';

export const Form = () => {

    const [countMessage, setCountMessege] = useState(0)
    const [historyMessages, setHistoryMessages] = useState([])

    const pushHistoryMessages = (historyMessages) => {
        const message = {
            name: "",
            text: "",
            dataTime: new Date
        }

        historyMessages.push(message);
        setCountMessege(historyMessages.length);
        setHistoryMessages([...historyMessages]);
    }

    return (
        <div className="Form__box">
            <div className="Box__title">
                Сообщения {countMessage}
            </div>
            <div className="Box__message">
                Тут сообщения
            </div>
            <div>
            </div>
            <div className="Box__send">
                <label>
                    Имя
                    <input type={'text'}/>
                </label>
                <label>
                    Сообщения
                    <input type={'text'}/>
                </label>
                <button onClick={() => pushHistoryMessages(historyMessages)}>Добавить</button>
            </div>
        </div>
    )
}

export default Form;