import React from 'react';
import Button from '../Components/Button.jsx';
import PropTypes from 'prop-types';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            message: '',
            success: false
        };
    };

    sendEmail = () => {
        let form = document.querySelector('form')

        let name = this.nameRef.value
        let email = this.emailRef.value
        let message = this.messageRef.value
        let subjectRef = "Job contact from online resume!"
        if (name && email && message && subjectRef) {
            this.setState({ loading: true });
            return fetch('https://formspree.io/michel.kansou@viacesi.fr', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message,
                    subject: subjectRef
                })
            }).then((res)=> {
                if (res.status == 400) {
                    this.setState({
                        success: false,
                        loading: false,
                        message: 'an error occurred please try again or email directly to michel.kansou@viacesi.fr'
                    });
                    form.reset();
                } else {
                    this.setState({
                        success: true,
                        loading: false,
                        message: 'Thank you! Your message has been sent successfully.'
                    });
                    form.reset();
                    console.log(res);
                }
            });
        } else {
            this.setState({
                success: false,
                message: 'Please ensure all fields are complete.'
            });
        }
    }

    render() {
        const translation = this.props.translation;
        const { success, loading, message } = this.state;

        return (
            <div className='segment contact light'>
                <div className='container'>
                    <h3 className='segment-title'>{translation.footer.contact.title}</h3>
                    <h4 className='subtitle'>{translation.footer.contact.message}</h4>
                    <hr />
                    <form id='contact' className='contact-form'>
                        <div className='row'>
                            <div className='column'>
                                <div className='field'>
                                    <div className='header'>Your Name</div>
                                    <input name='name' type='text' placeholder='Write Your Name' ref={(ref) => this.nameRef = ref} required />
                                </div>
                                <div className='field'>
                                    <div className='header'>Your Email Address</div>
                                    <input name='email' type='text' placeholder='Write Your Email Address' ref={(ref) => this.emailRef = ref} required />
                                </div>
                            </div>
                            <div className='column'>
                                <div className='field'>
                                    <div className='header'>Your Message</div>
                                    <textarea name='message' placeholder='Write Your Message' ref={(ref) => this.messageRef = ref} required />
                                </div>
                            </div>
                        </div>
                    </form>
                    <Button loading={loading} call={() => this.sendEmail()} text='Send Message' />
                    {message ? <p className={this.state.success ? 'message positive' : 'message negative'}>{message}</p>: null}
                </div>
            </div>
        );
    }
}

Contact.propTypes = {
    translation: PropTypes.object
};
