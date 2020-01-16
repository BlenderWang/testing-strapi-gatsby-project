import React from "react";
import Title from "./Title";
import Button from "./Button";

function encode(data) {
    return Object.keys(data)
        .map(
            key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
}

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            message: ""
        };
    }

    clear = () => {
        this.setState({
            name: "",
            email: "",
            message: ""
        });
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": "contact",
                ...this.state
            })
        })
            .then(() => {
                alert("Success!");
                this.clear();
            })
            .catch(error => alert(error));
    };

    render() {
        const { name, email, message } = this.state;

        return (
            <div className="contact-form">
                <Title subtitle={`Contact Form`} />
                <form
                    name="contact"
                    method="post"
                    // action="/success"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                        <label>
                            Don’t fill this out:{" "}
                            <input
                                name="bot-field"
                                onChange={this.handleChange}
                            />
                        </label>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={"name"}></label>
                        <div className="control">
                            <input
                                className="input"
                                type={"text"}
                                name={"name"}
                                value={name}
                                onChange={this.handleChange}
                                id={"name"}
                                placeholder="Your name"
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={"email"}></label>
                        <div className="control">
                            <input
                                className="input"
                                type={"email"}
                                name={"email"}
                                value={email}
                                onChange={this.handleChange}
                                id={"email"}
                                placeholder="Email"
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor={"message"}></label>
                        <div className="control">
                            <textarea
                                className="textarea"
                                name={"message"}
                                value={message}
                                rows="10"
                                onChange={this.handleChange}
                                id={"message"}
                                placeholder="Message"
                                required={true}
                            />
                        </div>
                    </div>
                    <div className="field btns">
                        <Button type="submit" btnTxt={"Send"} />
                        <input
                            type="reset"
                            value="Clear"
                            className="btn btn--danger"
                        ></input>
                    </div>
                </form>
            </div>
        );
    }
}
