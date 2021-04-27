import { Form, FormControl } from "react-bootstrap";



const FormLogin:React.FC<any> = (props:any) => {
    
    return <Form.Group>
        <Form.Label>{ props.title}</Form.Label>
        <FormControl {...props} />
    </Form.Group>
}

export default FormLogin;