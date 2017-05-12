import React from 'react';
import Button from '../Components/Button.jsx';

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
        let subjectRef = this.subjectRef.value
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
        const trans = this.props.trans;
        const { success, loading, message } = this.state;

        return (
            <div className="segment contact light">
                <div className="container">
                    <i className="fa fa-paper-plane fa-3x"></i>
                    <h3 className="segment-title">{trans.footer.contact.title}<span className="point">.</span></h3>
                    <hr/>
                    {trans.footer.contact.message}
                    <form id="contact" className="contact-form">
                        <div className="field">
                            <input name="name" type="text" placeholder="Your Name" ref={(ref) => this.nameRef = ref} required/>
                        </div>
                        <div className="field">
                            <input name="email" type="text" placeholder="Your Email" ref={(ref) => this.emailRef = ref} required/>
                        </div>
                        <div className="field">
                            <input name="subject" type="text" placeholder="Subject" ref={(ref) => this.subjectRef = ref} required/>
                        </div>
                        <div className="field">
                            <textarea name="message" placeholder="Message" ref={(ref) => this.messageRef = ref} required></textarea>
                        </div>
                    </form>
                    <Button loading={loading} call={this.sendEmail.bind(this)} text="Send Message"/>
                    {message ? <p className={this.state.success ? 'message positive' : 'message negative'}>{message}</p>: null}
                </div>
            </div>
        );
    }
}
