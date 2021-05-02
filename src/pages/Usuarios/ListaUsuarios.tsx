import { IonButton, IonButtons, IonIcon } from "@ionic/react";
import { create, key, trashSharp } from "ionicons/icons";
import { useEffect } from "react";
import { Button, Card,Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { optenerUsuarios } from "../../redux/actions/usuarios.actions";
import { userInitial } from "../../redux/types/usuarios.type";
import CamposFiltro from "./components/CamposFiltro";


const ListaUsuarios = () => {
    const usuarios:userInitial[] = useSelector((state: any) => state.usuarios);
    const dispatch = useDispatch();
    const history = useHistory();

    const _init = ()=>{
        dispatch(optenerUsuarios());
    }
    // eslint-disable-next-line
    useEffect(_init, []);
    
    const handleNew = () => history.push('nuevo');
    
    return (<>
    <CamposFiltro />
    <Table bordered striped hover size="sm" responsive>
        <thead>
            <tr>
                {['Nombre', 'Apeidos', 'Correo', 'Creado',
                    <Button variant='link' block size="sm" onClick={handleNew}> NUEVO </Button>
                ].map((e, i) =><th key={i}>{e}</th>)}
            </tr>
        </thead>
        <tbody>
            {usuarios.length>0 ?
            usuarios.map((value) => <tr key={value.id} title={`Id Usuario: ${value.id}`}>
                {/* <td>{value.id}</td> */}
                <td>{value.name}</td>
                <td>{value.lastName}</td>
                <td>{value.email}</td>
                <td>{value.create.slice(0,10)} {value.create.slice(11,16)}</td>
                <td>
                    <IonButtons >
                    {[
                        {route:`Edit/${value.id}`,icon:create,col:'success'},
                        {route:`Accesos/${value.id}`,icon:key,col:'tertiary'},
                        {route:`Eliminar/${value.id}`,icon:trashSharp,col:'danger'}
                    ].map((e, i)=><IonButton title={e.route.split('/')[0]} onClick={()=>history.push(e.route)} key={i} color={e.col}>   
                            <IonIcon icon={e.icon}/>
                    </IonButton>)}
                    </IonButtons>
                </td>
            </tr>)
                : <tr>
                    <td colSpan={6} ><Card.Body style={{textAlign:'center'}}> Sin datos a mostrar...</Card.Body></td>
                </tr>}
        </tbody>
    </Table>
    </>);
}

export default ListaUsuarios;