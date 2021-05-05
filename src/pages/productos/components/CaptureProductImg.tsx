import { Camera, CameraResultType } from "@capacitor/core";
import { IonImg } from "@ionic/react";
import { Col } from "react-bootstrap";

import foto from '../../Gastos/assets/img/foto.png';

const CaptureProductImg = () => {

    const takePicture = async () => {
        const _image = await Camera.getPhoto({
            quality: 10,
            allowEditing: false,
            resultType: CameraResultType.DataUrl,
            height: 160,
            width: 400,
            
        });
        console.log('image ',_image);
        const imageUrl = _image.dataUrl || '';
        console.log('imageUrl ',imageUrl);
    }

    return (<Col sm={3}>
        {/* <IonAvatar> */}
         <IonImg style={{height:65}} src={foto} onClick={takePicture} />
        {/* </IonAvatar> */}
        <hr/>
     </Col>);
}

export default CaptureProductImg;