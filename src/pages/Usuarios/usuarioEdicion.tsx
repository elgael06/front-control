import { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Title from "../../components/Title";
import { defaultUserValues } from "../../redux/actions/userSelect.actions";
import { changeUserName, changeLastName, changeEmail, changePuesto, usuarioId, actualizarUsuario, guardarUsuario } from "../../redux/actions/usuarios.actions";
import { userInitial } from "../../redux/types/usuarios.type";
import FormLogin from "../Login/components/FormLogin";


const ancho_col = '6';
const NuevoUsuario: React.FC = () => {
    const { idUser } = useParams<{ idUser: string }>();
    const history = useHistory();
    // const { token='NA' } = useSelector((state: any) => state.sesion);
    const dispatch = useDispatch();
    const {
        name= '',
        lastName= '',
        email= '',
        puesto=''
    }: userInitial = useSelector((state: any) => state.usurioSeleccionado);

    const _initial = () => {
        dispatch(defaultUserValues());
        idUser && dispatch(usuarioId(idUser));
        
    }
    useEffect(_initial, [idUser]);

    const handleSave = (e: any) => {
        e.preventDefault();
        console.log(
        name,
        lastName,
        email,
        puesto
        );
        const resp = {
            name,
            lastname:lastName,
            email,
            puesto
        }
        dispatch(idUser ?
            actualizarUsuario(idUser, resp, history.goBack) :
            guardarUsuario(resp, history.goBack)
        );
    }

    return <Container>
        <Title name={`${idUser ?'Editar': 'Crear'}:`} />

        <Form onSubmit={handleSave}>

            <Row sm='12'>
                <Col sm={ancho_col}>
                    <FormLogin
                        title='Nombre(s)'
                        required={true}
                        minLength={4}
                        type='text'
                        name='nombre'
                        placeholder='Nombre(s)...'
                        // size="sm"
                        value={name}
                        onChange={(e:any) => dispatch(changeUserName(e.target.value))}
                    />
                </Col>
                <Col sm={ancho_col}>
                    <FormLogin
                        title='Apeidos'
                        required={true}
                        minLength={4}
                        type='text'
                        name='apP'
                        placeholder='Apeidos...'
                        value={lastName}
                        // size="sm"
                        onChange={(e:any) => dispatch(changeLastName(e.target.value))}
                    />
                </Col>

                <Col sm={ancho_col}>
                    <FormLogin
                        title='Correo'
                        required={true}
                        minLength={8}
                        type='email'
                        name='user'
                        placeholder='usuario@dominio.abc'
                        value={email}
                        // size="sm"
                        onChange={(e:any) => dispatch(changeEmail(e.target.value))}
                    />
                </Col>
                <Col sm={ancho_col}>
                    <Form.Group>
                        <Form.Label>Puesto</Form.Label>
                        <Form.Control
                            as='select'
                            value={puesto}
                            required
                            onChange={(e:any) => dispatch(changePuesto( e.target.value))}
                        >
                            <option value=''> -- </option>
                            <option>Administrador</option>
                            <option>Direccion</option>
                            <option>Finanzas</option>
                            <option>Recursos humanos</option>
                            <option>Produccion</option>
                            <option>Ventas</option>
                            <option>Operaciones</option>
                            <option>Logistica</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col xs={ancho_col}>
                    <Button  variant='light' block onClick={history.goBack} type='reset'> cancelar</Button>
                </Col>
                <Col xs={ancho_col}>
                    <Button block type='submit'> {idUser?'ACTUALIZAR':'GUARDAR'}</Button>
                </Col>
            </Row>
            
        </Form>
    </Container>
} 

export default NuevoUsuario;