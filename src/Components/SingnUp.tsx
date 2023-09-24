import React, { FC } from 'react'
import "./../scss/SignUp.scss"

const SignUp: FC = () => {
    return (
        <div className="container">
            <div className="login-container">
                <input id="item-1" type="radio" name="item" className="sign-in" checked />
                <label htmlFor="item-1" className="item">Sign In</label>

                <input id="item-2" type="radio" name="item" className="sign-up" />
                <label htmlFor="item-2" className="item">Sign Up</label>

                <div className="login-form">
                    <div className="sign-in-htm">
                        <div className="group">
                            <input placeholder="Username" id="user-signin" type="text" className="input" />
                        </div>

                        <div className="group">
                            <input placeholder="Password" id="pass-signin" type="password" className="input" data-type="password" />
                        </div>

                        <div className="group">
                            <input type="submit" className="button" value="Sign In" />
                        </div>

                        <div className="hr"></div>

                        <div className="footer">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                    </div>

                    <div className="sign-up-htm">
                        <div className="group">
                            <input placeholder="Username" id="user-signup" type="text" className="input" />
                        </div>

                        <div className="group">
                            <input placeholder="Email address" id="email-signup" type="text" className="input" />
                        </div>

                        <div className="group">
                            <input placeholder="Password" id="pass-signup" type="password" className="input" data-type="password" />
                        </div>

                        <div className="group">
                            <input placeholder="Repeat password" id="repeat-pass-signup" type="password" className="input" data-type="password" />
                        </div>

                        <div className="group">
                            <input type="submit" className="button" value="Sign Up" />
                        </div>

                        <div className="hr"></div>

                        <div className="footer">
                            <label htmlFor="item-1">Already have an account?</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
