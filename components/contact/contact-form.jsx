import { useState, useEffect } from 'react';
import classes from './contact-form.module.css';
import Notification from '../ui/notification';

const sendContactData = async details => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(details),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
};

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [reqStatus, setReqStatus] = useState();
  const [reqError, setReqError] = useState();

  useEffect(() => {
    if (reqStatus === 'pending' || reqStatus === 'error') {
      setTimeout(() => {
        setReqStatus(null);
        setReqError(null);
      }, 3000);
    }
  }, [reqStatus]);

  const sendMessage = async e => {
    e.preventDefault();
    setReqStatus('pending');
    try {
      await sendContactData({ email, name, message });
      setReqStatus('success');
      setEmail('');
      setMessage('');
      setName('');
    } catch (error) {
      setReqError(error.message);
      setReqStatus('error');
    }
  };

  let notif;
  if (reqStatus === 'pending') {
    notif = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way!',
    };
  }
  if (reqStatus === 'success') {
    notif = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent successfully!',
    };
  }
  if (reqStatus === 'error') {
    notif = {
      status: 'error',
      title: 'Error!',
      message: reqError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessage}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>{' '}
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            value={message}
            onChange={e => setMessage(e.target.value)}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notif && <Notification {...notif} />}
    </section>
  );
};

export default ContactForm;
