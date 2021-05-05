import { Col,Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../redux/actions/producto.actions";
import { MEDIDA_PRODUCTO, productoType, UNIDADES_PRODUCTO } from "../../../redux/types/producto.type";
import FormLogin from "../../Login/components/FormLogin";



const Medidas = () => {
    const producto:productoType = useSelector((state:any)=> state.producto);
    const dispatch = useDispatch();

    const handleChange = (type:string) => (e:any) =>{
        dispatch(setValue(type,e.target.value))
    }

    return (<>
    <Col xs={6} sm={3}>
    <Form.Group>
        <Form.Label>Medida</Form.Label>
        <Form.Control 
            as='select' 
            onChange={handleChange(MEDIDA_PRODUCTO)}
            value={producto.medida}
        >
            <option value=''>--</option>
            <option value='KILO'>KILO</option>
            <option value='LITRO'>LITRO</option>
            <option value='PIEZA'>PIEZA</option>
        </Form.Control>
    </Form.Group>
</Col>
<Col xs={6} sm={3}>
    <FormLogin
        title='Unidades'
        required={true}
        maxLength={5}
        type='number'
        onChange={handleChange(UNIDADES_PRODUCTO)}
        value={producto.unidades}
        name='unidad'
        placeholder='0.000'
        className='numeric'
    />
</Col>
    </>);
}

export default Medidas;