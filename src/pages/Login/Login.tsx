import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"

import { FormControl, Form } from 'react-bootstrap';
import './styles.css';

import imagen from './assets/mar_1.jpg';
import { useState } from "react";
import { login } from "../../api/login";
import { useDispatch } from "react-redux";

type formType = {
    email: string,
    password: string,
    statusPass: boolean
}
const initialStateForm: formType = {
    email: '',
    password: '',
    statusPass:false
}

const Login = () => {
    const [state, setState] = useState<formType>(initialStateForm);
    const dispatch = useDispatch();

    const submitLogin = async (e:any) => {
        e.preventDefault();
        console.log(state);
        const data = await login(state.email, state.password);
        dispatch({ type: 'ADD_SESION', value: {...data.sesion,status:data.status}})
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
        </IonContent>
    </IonPage>
}

export default Login;