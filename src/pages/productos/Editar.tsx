import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Col, Container, Row } from "react-bootstrap";
import Genericos from './components/Generico';
import TittleAndSave from './components/TittleAndSave';
import Medidas from "./components/Medidas";
import Precio from "./components/Precio";
import ModalBarcode from "./components/ModalBarcode";

import { restoreProduct } from "../../redux/actions/producto.actions";

import './styles/main.css';


const Editar = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('Producto');
        return ()=>{dispatch(restoreProduct())};
    },[]);

    const handdleSave = (e:any) => {
        e.preventDefault();
    }

    
    return (<>
        <Container>
            <form onSubmit={handdleSave}>
            <Row>
                <TittleAndSave />
                <Col sm={12}><hr/></Col>
                <Genericos />
                <Medidas />
                <Precio />
                <ModalBarcode />
               
                {/* <Col sm={3} xs={7} className='content-barcode'>
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
                </Col> */}
            </Row>
            </form>
        </Container>
    
    </>);
        }

export default Editar;