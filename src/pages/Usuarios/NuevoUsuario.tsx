import { IonInput, IonItem, IonLabel } from "@ionic/react"
import Title from "../../components/Title"

const NuevoUsuario: React.FC = () => { 

    return <>
        <Title name='Nuevo' />
        <form>
            <IonItem>
                <IonLabel position='floating'>Nombre</IonLabel>
                <IonInput />
            </IonItem>

            <IonItem>
                <IonLabel position='floating'>Ap. paterno</IonLabel>
                <IonInput />
            </IonItem>

            <IonItem>
                <IonLabel position='floating'>Ap. materno</IonLabel>
                <IonInput />
            </IonItem>
        </form>
    </>
} 

export default NuevoUsuario;