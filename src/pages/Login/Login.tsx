import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonInput, IonItem, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react"
import { FormControl, Form } from 'react-bootstrap';

import imagen from './assets/mar_1.jpg';

const Login = () => {

    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>pagina de inicio de sesion</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent >
            <div style={{
                display: 'flex',
                justifyContent:'center',
                height: '100%',
                alignItems:'center',
            }} >
                <IonCard style={{ width: '90%', maxWidth: 500, height: '90%' , background:'#00000010'}}>
                    <IonImg   src={imagen}  />
                    <IonCardHeader >
                        <IonCardTitle>Ingresar</IonCardTitle>
                    </IonCardHeader>

                    <IonCardContent >
                        <Form>
                            <Form.Group>
                                <Form.Label>Correo</Form.Label>
                                <FormControl
                                    required
                                    minLength={8}
                                    type='email'
                                    placeholder='usuario@dominio'
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Contraseña</Form.Label>
                                <FormControl
                                    required
                                    type='password'
                                    placeholder='contraseña'
                                    minLength={6}
                                />
                            </Form.Group>
                            <Form.Check >
                                <Form.Check.Input />
                                <Form.Check.Label>Password</Form.Check.Label>
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