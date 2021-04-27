import { useEffect } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { optenerUsuarios } from "../../redux/actions/usuarios.actions";
import { userInitial } from "../../redux/types/usuarios.type";


const ListaUsuarios = () => {
    const usuarios:userInitial[] = useSelector((state: any) => state.usuarios);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(optenerUsuarios());
    }, []);
    
    const handleNew = () => history.push('/page/Usuarios/nuevo');
    
    return (<Table bordered striped hover size="sm" responsive>
        <thead>
            <tr>
                {['# Clave', 'Nombre', 'Apeidos', 'Correo', 'Creado',
                    <Button block size="sm" onClick={handleNew}> NUEVO </Button>
                ].map((e, i) =><th key={i}>{e}</th>)}
            </tr>
        </thead>
        <tbody>
            {usuarios.length>0 ?
            usuarios.map((value) => <tr key={value.id}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.lastName}</td>
                <td>{value.email}</td>
                <td>{value.create.slice(0,10)} {value.create.slice(11,16)}</td>
                <td>
                    <Link to={`Edit/${value.id}`}>
                    <Button
                        variant="link"
                        size="sm"
                        >EDITAR</Button>
                    </Link>
                </td>
            </tr>)
                : <tr>
                        <td colSpan={6} >
                            <Card.Body style={{textAlign:'center'}}> Sin datos a mostrar...</Card.Body>
                        </td>
                    </tr>}
        </tbody>
    </Table>);
}

export default ListaUsuarios;