import React from 'react';

import '../assets/styles/components/ContactMe.css';

const ContactMe = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      submitButton.value = 'Sending...';
      submitButton.disabled = true;
    }, 1);
  };
  return (
    <div className='contactme'>
      <p>Contact me</p>
      <div>
        <img
          src='https://img.icons8.com/android/24/ffffff/linkedin.png'
          alt='LinkedIn icon'
        />
        <img
          src='https://img.icons8.com/android/50/ffffff/twitter.png'
          alt='Twitter icon'
        />
        <img
          src='https://img.icons8.com/metro/50/000000/instagram-new.png'
          alt='Instagram icon'
        />
      </div>
      <form
        action='https://postmail.invotes.com/send'
        method='post'
        id='email_form'
        // eslint-disable-next-line react/jsx-closing-bracket-location
        onSubmit={handleSubmit}>
        <input type='text' name='subject' placeholder='Subject' required />
        <textarea name='text' placeholder='Message' required />
        <input
          type='hidden'
          name='access_token'
          value='q3pkirtsk37jo8phhwl6xacr'
        />
        <input
          type='hidden'
          name='success_url'
          value='.?message=Email+Successfully+Sent%21&isError=0'
        />
        <input
          type='hidden'
          name='error_url'
          value='.?message=Email+could+not+be+sent.&isError=1'
        />

        <input type='text' name='reply_to' placeholder='Your Email' required />

        <input id='submit_form' type='submit' value='Send' />
      </form>
    </div>
  );
};

export default ContactMe;
