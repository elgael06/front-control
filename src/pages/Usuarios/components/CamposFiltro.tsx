import { IonButton, IonIcon } from "@ionic/react";
import { buildOutline, filterSharp, mailOpenOutline,personOutline, searchOutline } from "ionicons/icons";
import { Card, Col, Row } from "react-bootstrap"
import FormLogin from "../../Login/components/FormLogin"


const CamposFiltro = ()=>{

    const handleSearch = () => {
        alert('funcion pendiente...');
    }
    return <Card>
        <Card.Header>
            <Card.Title><IonIcon icon={filterSharp} /> Filtros por campos</Card.Title>
            <Row>
                <Col sm={3}>
                    <FormLogin
                        size='sm'
                        icon={personOutline} 
                        placeholder='Nombre...'
                    />
                </Col>
                <Col sm={3}>
                    <FormLogin
                        size='sm'
                        icon={buildOutline} 
                        placeholder='Puesto...'
                    />                
                </Col>
                <Col sm={3}>
                    <FormLogin
                        size='sm'
                        icon={mailOpenOutline}
                        placeholder='Email...'
                    />                
                </Col>
                <Col sm={3} style={{ alignSelf:'center'}}>
                    <IonButton 
                        onClick={handleSearch}
                        color='light' 
                        size='small' 
                        expand='full' >
                            Buscar
                            <IonIcon slot='start' icon={searchOutline} />
                        </IonButton>
                </Col>
            </Row>

        </Card.Header>
    </Card>
}

export default CamposFiltro;