import React from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import {Field} from "redux-form";


export type  FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> =  (props => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field component={'input'} name={'rememmberMe'} type={"checkbox"}/> Remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    );
});
const LoginReduxForm = reduxForm<FormDataType>({
    form:'login'
})(LoginForm)
const Login = () => {
    const onSubmit = (formData: FormDataType) => {

    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;