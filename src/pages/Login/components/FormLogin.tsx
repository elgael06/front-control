import { IonIcon } from "@ionic/react";
import { Form, FormControl, InputGroup } from "react-bootstrap";



const FormLogin:React.FC<any> = (props:any) => {
    
    return <Form.Group>
        <Form.Label>{ props.title}</Form.Label>
        <InputGroup>
            {props.icon && <InputGroup.Prepend>
                <InputGroup.Text><IonIcon icon={props.icon} /></InputGroup.Text>
            </InputGroup.Prepend>}
            <FormControl {...props} />
        </InputGroup>
    </Form.Group>
}

export default FormLogin;