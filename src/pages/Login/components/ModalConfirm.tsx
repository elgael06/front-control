import { IonButton } from "@ionic/react";
import React, { useState } from "react";
import { Card, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { modalOff } from "../../../redux/actions/effects.actions";
import { addUserInfoFecha, addUserInfoTel, sendConfirmInfo } from "../../../redux/actions/userInfo.actions";
import FormLogin from "./FormLogin";


const ModalConfirm: React.FC<{email:string,password:string}> = ({ email='',password='' }) => {

    const {feha_nac='',number_phone='',puesto=''} = useSelector((state: any) => state.userInfo);
    const { statusModal = false } = useSelector((state: any) => state.effects);
    const dispatch = useDispatch();
    const [password_conf, setPassword] = useState<{old:string,new:string}>({
        old: password,
        new:''
    });
    

    const submitInfo = (e: any) => {
        e.preventDefault();
        console.log('listo');
        console.table({
            email,
            feha_nac,
            number_phone,
            puesto,
            password_conf
        });
        dispatch(sendConfirmInfo({
            email,
            date: feha_nac,
            phone: number_phone,
            password: password_conf.old,
            nPassword:password_conf.new,
        }));
    }

    return <Modal
        show={statusModal}
        backdrop="static"
        onHide={() => dispatch(modalOff())}
        animation={true}
    >
        <Modal.Header closeButton>
            <Card.Title > Confirmar datos</Card.Title>
        </Modal.Header>
        <Card.Body>
            <Form onSubmit={submitInfo}>
                <Row>         
                    <Col sm={6}>
                        <FormLogin                      
                            title='Correo'
                            required
                            type='text'
                            disabled
                            value={email}
                        />
                    </Col>       
                    <Col sm={6}>
                        <FormLogin                      
                            title='Puesto'
                            required
                            type='text'
                            disabled
                            value={puesto}
                        />
                    </Col>
                    <Col sm={6}>
                        <FormLogin                      
                            title='Contraseña actual'
                            required
                            type='password'          
                            onChange={(e:any)=>setPassword({...password_conf, old:e.target.value})}              
                            value={password_conf.old}
                        />
                    </Col>
                    <Col sm={6}>
                        <FormLogin                      
                            title='Nueva contraseña'
                            required
                            minLength='8'
                            type='password'
                            onChange={(e:any)=>setPassword({...password_conf, new:e.target.value})}
                            value={password_conf.new}
                        />
                    </Col>
                    <Col sm={6}>
                        <FormLogin                    
                            title='Fecha nacimiento'
                            required
                            type='date'
                            value={feha_nac}
                            onChange={(e:any)=>dispatch(addUserInfoFecha(e.target.value))}
                        />
                    </Col>
                    <Col sm={6}>
                        <FormLogin                      
                            title='Telefono'
                            required
                            type='tel'
                            value={number_phone}
                            minLength='10'
                            maxLength='13'
                            onChange={(e:any)=>dispatch(addUserInfoTel(e.target.value))}
                        />
                    </Col>
                    <Col xs={6}>
                        <IonButton
                            onClick={() => dispatch(modalOff())}
                            expand='block'
                            color='light'
                            fill='solid' type='reset' >CANCELAR</IonButton>
                    </Col>
                    <Col xs={6}>
                        <IonButton 
                            expand='block' 
                            color='dark'
                            fill='solid' 
                            type='submit' >GUARDAR</IonButton>
                    </Col>
                </Row>
            </Form>
        </Card.Body>
    </Modal>;
}

export default ModalConfirm;