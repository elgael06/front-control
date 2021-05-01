import { IonContent, IonHeader, IonPage } from "@ionic/react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const LayoutLogin:React.FC = ({ children }) => {
    const date = new Date();
    return (<IonPage>
        <IonHeader>
            <link rel="image_src" href="static/landing/img/img.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="creamos tu sistemas a la medida para pequeñas medianas y grandes empresas." />
            <meta name="author" content="cristian gael valenzuela castro" />
            <meta property="og:image" content="static/landing/img/img.png" />
            <title>inicio de sesion de usiarios</title>
        </IonHeader>

        <IonContent >
            <div id='container_div'>
                <Container id='card_login'>
                    <Col style={{textAlign:'center',fontSize:160,color:'#bdbdbd',marginTop:30,height:75,zIndex:999}}>                        
                        <h1>Login</h1>
                    </Col>
                <Row>
                    <Col >
                        { children}
                    </Col>
                </Row>
                <Row className='corporing'>
                    <Col>
                        <small>Copyright &copy; mya-app.tech {date.getFullYear()}</small>
                    </Col>
                </Row>
            </Container>
            </div>            
        </IonContent>
    </IonPage>);
}
export default LayoutLogin;