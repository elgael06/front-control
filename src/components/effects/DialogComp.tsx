import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { efectaInitial } from "../../redux/types/effects.type";


const DialogComp = () => {
    const { message }: efectaInitial = useSelector((state: any) => state.effects);
    
    return message.status ? <Alert style={{ position: 'fixed', top: 2, right: 2 }} variant={message.type}>
        {message.text}
    </Alert>: null;
}

export default DialogComp;