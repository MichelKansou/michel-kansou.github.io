import React, { useRef, useState } from 'react';
import Button from '../Components/Button';
import PropTypes from 'prop-types';

const validEmail = (email: any) => {
  var regExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExp.test(String(email).toLowerCase());
};
const validText = (text: any) => {
  return text !== '' && text.length >= 4;
};

type ContactProps = {
  translation: any;
};

const Contact = ({ translation }: ContactProps) => {
  const [isLoading, setLoader] = useState(false);
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const sendEmail = () => {
    let form = document.querySelector('form') as any;

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    let subjectRef = 'Job contact from online resume!';

    if (validText(name) && validEmail(email) && validText(message)) {
      setLoader(true);
      return fetch('https://formspree.io/f/xbjelwbo', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          subject: subjectRef,
        }),
      }).then(res => {
        if (res.status == 400) {
          setSuccess(false);
          setLoader(false);
          setMessage(
            'an error occurred please try again or email directly to michel.kansou@outlook.fr',
          );
          form.reset();
        } else {
          setSuccess(true);
          setLoader(false);
          setMessage('Thank you! Your message has been sent successfully.');
          form.reset();
        }
      });
    } else {
      setSuccess(false);
      setLoader(false);
      setMessage('Please ensure all fields are complete.');
    }
  };

  return (
    <div className="segment contact light">
      <div className="container">
        <h3 className="segment-title">{translation.footer.contact.title}</h3>
        <h4 className="subtitle">{translation.footer.contact.message}</h4>
        <hr />
        <form id="contact" className="contact-form">
          <div className="row">
            <div className="column">
              <div className="field">
                <div className="header">Your Name</div>
                <input
                  name="name"
                  type="text"
                  placeholder="Write Your Name"
                  ref={nameRef}
                  required
                />
              </div>
              <div className="field">
                <div className="header">Your Email Address</div>
                <input
                  name="email"
                  type="text"
                  placeholder="Write Your Email Address"
                  ref={emailRef}
                  required
                />
              </div>
            </div>
            <div className="column">
              <div className="field">
                <div className="header">Your Message</div>
                <textarea
                  name="message"
                  placeholder="Write Your Message"
                  ref={messageRef}
                  required
                />
              </div>
            </div>
          </div>
        </form>
        <Button loading={isLoading} onClick={() => sendEmail()} label="Send Message" />
        {message ? (
          <p className={success ? 'message positive' : 'message negative'}>{message}</p>
        ) : null}
      </div>
    </div>
  );
};

Contact.propTypes = {
  translation: PropTypes.object,
};

export default Contact;
