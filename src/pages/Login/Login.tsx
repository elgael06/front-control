import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonImg, IonPage } from "@ionic/react"
import { FormControl, Form, Alert } from 'react-bootstrap';
import './styles.css';

import imagen from './assets/mar_1.jpg';
import { useState } from "react";
import { login } from "../../api/login";
import { useDispatch } from "react-redux";

type formType = {
    email: string,
    password: string,
    statusPass: boolean,
    statusRes:boolean,
    statusAlert: boolean,
    messageAlert:string
}
const initialStateForm: formType = {
    email: '',
    password: '',
    statusPass: false,
    statusRes:false,
    statusAlert: false,
    messageAlert:'este es un mensaje'
}

const Login = () => {
    const [state, setState] = useState<formType>(initialStateForm);
    const dispatch = useDispatch();

    const submitLogin = async (e:any) => {
        e.preventDefault();
        console.log(state);
        const data = await login(state.email, state.password);
        // alert(data.message)
        setState({
            ...state,
            statusRes:data.status,
            statusAlert: true,
            messageAlert:data.message
        })
        setTimeout(() => {
            setState({
                ...state,
                statusAlert: false,
                messageAlert: ''
            });
            data.status && dispatch({ type: 'ADD_SESION', value: {...data.sesion,status:data.status}})
        }, 2000)
        
    }

    return <IonPage>
        <IonContent >
            <div id='container_div'>
                <IonCard id='card_login' >
                    <IonImg   src={imagen}  />
                    <IonCardHeader > <IonCardTitle>Ingresar</IonCardTitle></IonCardHeader>

                    <IonCardContent >
                        <Form onSubmit={submitLogin}>
                            <Form.Group>
                                <Form.Label>Correo</Form.Label>
                                <FormControl
                                    required
                                    minLength={8}
                                    type='email'
                                    placeholder='usuario@dominio'
                                    value={state.email}
                                    onChange={e => setState({ ...state, email: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <FormControl
                                    required
                                    type={state.statusPass ?'':'password'}
                                    placeholder='contraseña'
                                    minLength={6}
                                    value={state.password}
                                    onChange={e => setState({ ...state, password: e.target.value })}
                                />
                            </Form.Group>

                            <Form.Check >
                                <Form.Check.Input
                                    checked={state.statusPass}
                                    onChange={() => setState({ ...state, statusPass: !state.statusPass })}
                                />
                                <Form.Check.Label>mostrar contraseña</Form.Check.Label>
                            </Form.Check>

                            <br/>
                            <IonButton fill='solid' type='submit' expand='block' >Entrar</IonButton>

                        </Form>
                    </IonCardContent>
                </IonCard>
            </div>
                {state.statusAlert && <Alert style={{position:'fixed',top:10,left:20}} variant={state.statusRes ? 'info' :'danger'}>
                    { state.messageAlert}
                </Alert>}
        </IonContent>
    </IonPage>
}

export default Login;