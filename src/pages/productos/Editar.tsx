import { IonIcon } from "@ionic/react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import FormLogin from "../Login/components/FormLogin";
import { barcode } from "ionicons/icons";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import Genericos from './components/Generico';
import TittleAndSave from './components/TittleAndSave';

import './styles/main.css';
import Medidas from "./components/Medidas";
import Precio from "./components/Precio";


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
                <Precio />

               
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