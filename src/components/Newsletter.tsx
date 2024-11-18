import React, { useState } from 'react';
import './newsletter.css';

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if (email) {
            setMessage('Subscription successful! Thank you for subscribing.');
            setEmail(''); 
        } else {
            setMessage('Please enter a valid email address.');
        }

        setTimeout(() => {
            setMessage('');
        }, 2000);
    };

    return (
        <div>
            <form onSubmit={handleSubscribe} className='form-newsletter'>
                <input
                    type="email"
                    placeholder="Your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='input-newsletter'
                />
                <button type="submit" className='button-newsletter'>
                    Subscribe
                </button>
            </form>
            {message && <p className='message-newsletter'>{message}</p>}
        </div>
    );
};

export default Newsletter;