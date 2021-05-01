import { Toast } from "react-bootstrap";
import { useSelector } from "react-redux";
import { efectaInitial } from "../../redux/types/effects.type";


const DialogComp = () => {
    const { message }: efectaInitial = useSelector((state: any) => state.effects);
    
    return message.status ?
    //  <Alert style={{ position: 'fixed', top: 2, right: 2 }} variant={message.type}>
    //     {message.text}
    // </Alert>:
     <Toast style={{ position: 'absolute', top: 2, right: 2 }} >
  <Toast.Header >
    {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
    <strong className="mr-auto">{message.type}</strong>
    {/* <small>11 mins ago</small> */}
  </Toast.Header>
  <Toast.Body>{message.text}</Toast.Body>
</Toast> : null;
}

export default DialogComp;