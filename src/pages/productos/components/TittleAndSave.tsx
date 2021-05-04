import { IonIcon } from "@ionic/react"
import { saveSharp } from "ionicons/icons";
import { Button, Col } from "react-bootstrap"

const TittleAndSave = () => {

    return (<>
        <Col xs={6} sm={9}>
            <h5>Editar Producto:</h5>
        </Col>
        <Col xs={6} sm={3}>
            <Button block variant='success' type='submit'> <IonIcon icon={saveSharp} slot='start' />  Guardar</Button>
        </Col>
    </>)
}

export default TittleAndSave;