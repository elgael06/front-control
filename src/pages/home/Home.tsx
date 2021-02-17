import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, IonList, IonTitle } from "@ionic/react"
import Layout from "../../components/Layout/Layout"
import data_app from '../../assets/data_app.json';
import { menu } from "ionicons/icons";

const Home: React.FC = () => { 
    
    return <Layout name='Inicio' > 
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Datos aplicacion</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonCardSubtitle>{data_app.title}</IonCardSubtitle>
                <br/>
                <IonLabel>
                    { data_app.description}
                </IonLabel>
            </IonCardContent>
        </IonCard>

                <IonTitle>Descripcion accesos:</IonTitle>

                <IonList>
                    {data_app.data_access.map((value: any, index: number) =>
                        <IonItem key={index} slot='start'>
                            <label>
                                {value.name}:
                                <IonCardSubtitle>{value.desc}</IonCardSubtitle>
                            </label>
                            <IonIcon slot='end' icon={menu} />
                        </IonItem>
                    )}
                </IonList>
    </Layout>
} 

export default Home;
