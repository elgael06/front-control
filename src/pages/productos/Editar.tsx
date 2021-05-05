import { IonIcon } from "@ionic/react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import FormLogin from "../Login/components/FormLogin";
import { barcode } from "ionicons/icons";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import Genericos from './components/Generico';
import TittleAndSave from './components/TittleAndSave';

import './styles/main.css';
import Medidas from "./components/Medidas";


const Editar = () => {
    const openScanner = async () => {
        const data = await BarcodeScanner.scan();
        console.log(`Barcode data: ${data.text}`);
    };

    const handdleSave = (e:any) => {
        e.preventDefault();
    }

    
    return (<>
        <Container>
            <form onSubmit={handdleSave}>
            <Row>
                <TittleAndSave />
                <Col sm={12}><br/></Col>
                <Genericos />
                <Medidas />
                

                <Col xs={6} sm={3}>
                    <FormLogin
                        title='Costo'
                        required={true}
                        maxLength={8}
                        step={0.01}
                        type='number'
                        name='Costo'
                        placeholder='0.00'
                        className='numeric'
                    />
                </Col>

                <Col xs={6} sm={3}>
                    <FormLogin
                        title='Precio'
                        required={true}
                        maxLength={8}
                        step={0.01}
                        type='number'
                        name='Precio'
                        placeholder='0.00'
                        className='numeric'
                    />
                </Col>

                <Col xs={6} sm={3}>
                    <FormLogin
                        title='Margen (%)'
                        required={true}
                        maxLength={5}
                        type='number'
                        step={0.01}
                        name='margen'
                        placeholder='0.000 %'
                        className='numeric'
                    />
                </Col>
                <Col sm={3} xs={7} className='content-barcode'>
                    <FormLogin
                        title='Barcode'
                        type='number'
                        name='barcode'
                        placeholder='000000'
                        className='numeric'
                        list='barcode'
                    />
                    <datalist id='barcode'>
                        <optgroup  >
                            <option>021605</option>
                            <option>021605</option>
                            <option>021605</option>
                            <option>021605</option>
                            <option>021605</option>
                            <option>021605</option>
                            <option>021605</option>
                        </optgroup>
                    </datalist>
                </Col>

                <Col sm={3} xs={5} className='content-barcode'>
                    <Button block onClick={openScanner}> <IonIcon icon={barcode} slot='start' /> Codigo</Button>                   
                </Col>
            </Row>
            </form>
        </Container>
    
    </>);
        }

export default Editar;