import { IonButton, IonIcon, IonItem, IonLabel, IonList } from "@ionic/react";
import { barcode, trashOutline } from "ionicons/icons";
import { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeBarcodeList, setListaBarcode } from "../../../redux/actions/producto.actions";
import { productoType } from "../../../redux/types/producto.type";
import FormLogin from "../../Login/components/FormLogin";


const ModalBarcode = () => {
    const producto:productoType = useSelector((state:any)=> state.producto);
    const dispatch = useDispatch();
    const [modalState,setModalState] = useState(false);
    const [code,setCode] = useState<string>('');

    const handdleClose = ()=> {
        setModalState(false);
        setCode('');
    }
    const agregarBarcode = () => {
        dispatch(setListaBarcode(code));
        setCode('');
    }

    return (<>
    <Col sm={3}  className='content-barcode'>
        <Button block onClick={()=>setModalState(true)}> 
            <IonIcon icon={barcode} slot='start' /> 
            Codigos Alternos
        </Button>                   
    </Col>
    <Modal 
        show={modalState}
        title='Barcodes'
        onHide={handdleClose}
        centered
        size='sm'
        scrolllable
    >
        <Modal.Header closeButton>Codigos Alternos</Modal.Header>
        <Modal.Body>
            <IonList>
                {producto.barcodes.map((e:string, i)=>{
                    return (<IonItem button lines="full" key={i}> 
                        <IonIcon slot="start" icon={barcode} />
                        <IonLabel>{e}</IonLabel>
                        <IonButton 
                            color='danger' 
                            slot='end' 
                            onClick={()=>dispatch(removeBarcodeList(i))}
                        >
                            <IonIcon icon={trashOutline} />
                        </IonButton>
                    </IonItem>);
                })}
                
            </IonList>
        </Modal.Body>
        <form>
        <Modal.Footer style={{ alignItems: 'flex-end',justifyContent:'center'}}>
            <FormLogin
                size="sm"
                placeholder='000000'
                value={code}
                onChange={(e:any)=>setCode(e.target.value)}
                style={{textAlign:'right'}}    
            />
            <Button size="sm" onClick={agregarBarcode} type='submit' >
                <IonIcon icon={barcode} slot='start' /> 
            </Button>
        </Modal.Footer>
        </form>
    </Modal>
    </>);
}

export default ModalBarcode;