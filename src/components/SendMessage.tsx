import React, { useState } from 'react';
import { sendLineMessage } from '../services/lineNotify';

const SendMessage: React.FC = () => {
    const [message, setMessage] = useState('');
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendLineMessage(message);
        setMessage('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="メッセージを入力"
            />
            <button type="submit">送信</button>
        </form>
    );
};

export default SendMessage;