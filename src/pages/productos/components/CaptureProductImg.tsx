
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../../redux/actions/producto.actions";

import { IonImg } from "@ionic/react";
import { Camera, CameraResultType } from "@capacitor/core";
import { Col } from "react-bootstrap";

import { URL_PHOTO_PRODUCTO } from "../../../redux/types/producto.type";
import foto from '../../Gastos/assets/img/foto.png';

const CaptureProductImg = () => {
    const { urlPhoto='' } = useSelector((state:any)=> state.producto);
    const dispatch = useDispatch();

    const takePicture = async () => {
        const _image = await Camera.getPhoto({
            quality: 10,
            allowEditing: false,
            resultType: CameraResultType.DataUrl,
            height: 160,
            width: 400,            
        });
        const imageUrl = _image.dataUrl || '';
        dispatch(setValue(URL_PHOTO_PRODUCTO,imageUrl));
    }

    return (<Col sm={3}>
        {/* <IonAvatar> */}
         <IonImg style={{height:65}} src={urlPhoto || foto} onClick={takePicture} />
        {/* </IonAvatar> */}
        <hr/>
     </Col>);
}

export default CaptureProductImg;