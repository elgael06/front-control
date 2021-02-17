import { IonIcon, IonItem, IonLabel } from "@ionic/react"
import { menu, send } from "ionicons/icons"

type submenu = {
    route: string,
    title:string
}

const SubMenu: React.FC<{ acceso: submenu }> = ({ acceso }) => <IonItem
    routerLink={acceso.route}>
    <IonIcon slot="start" icon={menu} />
    <IonLabel>{acceso.title}</IonLabel>
    <IonIcon slot="end" icon={send} />
</IonItem>

export default SubMenu;