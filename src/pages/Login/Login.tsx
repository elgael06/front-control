import { IonButton } from "@ionic/react"
import {  Form } from 'react-bootstrap';
import './styles.css';

import { useState } from "react";
import { useDispatch } from "react-redux";
import { chekSesion } from "../../redux/actions/sesion.actions";
import LayoutLogin from "../../components/Layout/LayoutLogin";
import FormLogin from "./components/FormLogin";
import ModalConfirm from "./components/ModalConfirm";
import { business, eye, eyeOff, mail } from "ionicons/icons";

type formType = {
    email: string,
    password: string,
    statusPass: boolean,
}
const initialStateForm: formType = {
    email: '',
    password: '',
    statusPass:false
}

const Login = () => {
    const [state, setState] = useState<formType>(initialStateForm);
    const dispatch = useDispatch();

    const submitLogin = (e:any) => {
        e.preventDefault();
        dispatch(chekSesion(state));
    }

    return <LayoutLogin>
        <Form onSubmit={submitLogin} name='login' style={{overflow:'auto'}}>
            <FormLogin
                title='Correo'
                required={true}
                minLength={8}
                type='email'
                name='user'
                placeholder='usuario@dominio.abc'
                value={state.email}
                icon={mail}
                onChange={(e:any) => setState({ ...state, email: e.target.value })}
            />

            <FormLogin
                title='Contraseña'
                required
                name='password'
                type={state.statusPass ?'':'password'}
                placeholder='contraseña'
                minLength={6}
                value={state.password}
                icon={state.statusPass ? eye : eyeOff}
                onChange={(e:any) => setState({ ...state, password: e.target.value })}
            />

            <FormLogin
                title='Empresa'
                disabled
                name='empresa'
                minLength={6}
                value='MYA-APP.TECH'
                icon={ business }
            />

            <Form.Check >
                <Form.Check.Input
                    checked={state.statusPass}
                    onChange={() => setState({ ...state, statusPass: !state.statusPass })}
                />
                <Form.Check.Label>mostrar contraseña</Form.Check.Label>
            </Form.Check>

            <br/>
            <IonButton
                fill='solid'
                type='submit'
                color='dark'
                expand='block' >
                Entrar
            </IonButton>

        </Form>
        <ModalConfirm
            email={state.email}
            password={state.password}
        />
    </LayoutLogin>
}

export default Login;