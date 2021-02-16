import { IonItem, IonLabel, IonList, IonToggle } from "@ionic/react";
import { useDispatch, useSelector } from "react-redux";
import { selectGasto } from "../../../redux/actions/formGasto";
import { gastoLista } from "../../../redux/reducers/gasto";


const Tipo = () => { 
    const { lista = [], tipo = '' }: { lista: gastoLista[], tipo: string } = useSelector((state: any) => state.formGasto);
    const dispatch = useDispatch();
    const selectItem = (item: string) => dispatch(selectGasto(item));
    const comprobar = (val: string) => val == tipo;
 
    return (<IonList>
        {
            lista.map(item => {
                const status = comprobar(item.id);
                
                return <IonItem
                    key={item.id}
                    type='button'
                    onClick={() => selectItem(item.id)}
                    color={status ? 'light' : ''}
                >
                    <IonLabel>{item.text}</IonLabel>
                    <IonToggle color='primary' checked={status} />
                </IonItem>
            }
            )
        }
    </IonList>);
}

export default Tipo;