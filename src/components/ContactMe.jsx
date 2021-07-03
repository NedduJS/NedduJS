/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable max-len */
import React from 'react';

import '../assets/styles/components/ContactMe.css';
import linkedinImage from '../assets/static/icon_linkedin.svg';

const ContactMe = () => {
  return (
    <div className='contactme'>
      <p className='contactme__title'>Contact me</p>
      <div className='contactme__icons'>
        <a
          href='https://www.linkedin.com/in/nestor-eduardo-mamani-pantoja/'
          target='_blank'
          rel='noreferrer'>
          <img src={linkedinImage} alt='LinkedIn icon' />
        </a>
        <a href='https://twitter.com/NedduJS' target='_blank' rel='noreferrer'>
          <img
            src='https://img.icons8.com/android/50/ffffff/twitter.png'
            alt='Twitter icon'
          />
        </a>
        <a
          href='https://www.instagram.com/nestoredduardo/'
          target='_blank'
          rel='noreferrer'>
          <img
            alt='svgImg'
            src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjYiIGhlaWdodD0iMjYiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTQ5LjkyNTQ4LDBjLTI3LjQ5NTE5LDAgLTQ5LjkyNTQ4LDIyLjQzMDI5IC00OS45MjU0OCw0OS45MjU0OHY3Mi4xNDkwNGMwLDI3LjQ5NTE5IDIyLjQzMDI5LDQ5LjkyNTQ4IDQ5LjkyNTQ4LDQ5LjkyNTQ4aDcyLjE0OTA0YzI3LjQ5NTE5LDAgNDkuOTI1NDgsLTIyLjQzMDI5IDQ5LjkyNTQ4LC00OS45MjU0OHYtNzIuMTQ5MDRjMCwtMjcuNDk1MTkgLTIyLjQzMDI5LC00OS45MjU0OCAtNDkuOTI1NDgsLTQ5LjkyNTQ4ek00OS45MjU0OCwxMy4yMzA3N2g3Mi4xNDkwNGMyMC4zMzcxNCwwIDM2LjY5NDcxLDE2LjMzMTczIDM2LjY5NDcxLDM2LjY5NDcxdjcyLjE0OTA0YzAsMjAuMzM3MTQgLTE2LjMzMTczLDM2LjY5NDcxIC0zNi42OTQ3MSwzNi42OTQ3MWgtNzIuMTQ5MDRjLTIwLjMzNzE0LDAgLTM2LjY5NDcxLC0xNi4zMzE3MyAtMzYuNjk0NzEsLTM2LjY5NDcxdi03Mi4xNDkwNGMwLC0yMC4zMzcxNCAxNi4zMzE3MywtMzYuNjk0NzEgMzYuNjk0NzEsLTM2LjY5NDcxek0xMzUuNjE1MzgsMjYuNDYxNTRjLTUuNDc4MzcsMCAtOS45MjMwOCw0LjQ0NDcxIC05LjkyMzA4LDkuOTIzMDhjMCw1LjQ3ODM3IDQuNDQ0NzEsOS45MjMwOCA5LjkyMzA4LDkuOTIzMDhjNS40NzgzNywwIDkuOTIzMDgsLTQuNDQ0NzEgOS45MjMwOCwtOS45MjMwOGMwLC01LjQ3ODM3IC00LjQ0NDcxLC05LjkyMzA4IC05LjkyMzA4LC05LjkyMzA4ek04NiwzOS42OTIzMWMtMjUuNTA1NDEsMCAtNDYuMzA3NjksMjAuODAyMjggLTQ2LjMwNzY5LDQ2LjMwNzY5YzAsMjUuNTA1NDEgMjAuODAyMjgsNDYuMzA3NjkgNDYuMzA3NjksNDYuMzA3NjljMjUuNTA1NDEsMCA0Ni4zMDc2OSwtMjAuODAyMjggNDYuMzA3NjksLTQ2LjMwNzY5YzAsLTI1LjUwNTQxIC0yMC44MDIyOCwtNDYuMzA3NjkgLTQ2LjMwNzY5LC00Ni4zMDc2OXpNODYsNTIuOTIzMDhjMTguMzQ3MzYsMCAzMy4wNzY5MiwxNC43Mjk1NyAzMy4wNzY5MiwzMy4wNzY5MmMwLDE4LjM0NzM2IC0xNC43Mjk1NiwzMy4wNzY5MiAtMzMuMDc2OTIsMzMuMDc2OTJjLTE4LjM0NzM1LDAgLTMzLjA3NjkyLC0xNC43Mjk1NiAtMzMuMDc2OTIsLTMzLjA3NjkyYzAsLTE4LjM0NzM1IDE0LjcyOTU3LC0zMy4wNzY5MiAzMy4wNzY5MiwtMzMuMDc2OTJ6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4='
          />
        </a>
      </div>
      <form
        data-netlify='true'
        method='post'
        onSubmit='submit'
        name='contact'
        className='email_form'>
        <input type='hidden' name='form-name' value='contact' />
        <div>
          <label htmlFor='subject' className='label'>
            <input
              className='contactme_subject'
              type='text'
              name='subject'
              placeholder='Subject'
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor='email' className='label'>
            <input
              className='contactme_email'
              type='email'
              name='reply_to'
              placeholder='Your Email'
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor='message' className='label'>
            <textarea
              className='contactme_message'
              name='text'
              placeholder='Message'
              required
            />
          </label>
        </div>
        <button className='contactme_button' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
