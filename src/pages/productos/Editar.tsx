import { Fragment } from 'react';
import { IonBadge, IonIcon, IonImg } from "@ionic/react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import FormLogin from "../Login/components/FormLogin";
import foto from '../Gastos/assets/img/foto.png';
import { barcode } from "ionicons/icons";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';


const Editar = () => {
    const openScanner = async () => {
        const data = await BarcodeScanner.scan();
        console.log(`Barcode data: ${data.text}`);
    };
    
    return (<>
        <h5>Editar Producto:</h5>
        <Button onClick={openScanner}>Scanner</Button>
        <Container>
            <Row>
                <Col sm={6}>
                    <FormLogin
                        title='Descripcion'
                        required={true}
                        minLength={4}
                        type='text'
                        name='nombre'
                        placeholder='Descripcion...'
                    />
                </Col>
                <Col sm={3}>
                    <Form.Group>
                        <Form.Label>Tipo Medida</Form.Label>
                        <Form.Control as='select'>
                            <option>KILOGRAMO</option>
                            <option>LITRO</option>
                            <option>PIEZA</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col sm={3}>
                    <label>Imagen</label>
                    {/* <IonAvatar> */}
                        <IonImg style={{height:40}} src={foto} />
                    {/* </IonAvatar> */}
                    <hr/>
                </Col>
                <Col sm={6}>
                    <Button > <IonIcon icon={barcode} slot='start' /> Codigo alterno</Button>
                    <p/>
                    <section style={{maxHeight:90,overflow:'auto'}}>{[
                        '001234',
                        '001233',
                        '001235',
                        '001233',
                        '001235',
                        '001233',
                        '001235'
                    ].map((e,i) =><Fragment key={i} >
                        <IonBadge  color="secondary">{e}</IonBadge>
                        {' '}
                        </Fragment>
                    )}
                        </section>
                </Col>
            </Row>
        </Container>
    
    </>);
        }

export default Editar;