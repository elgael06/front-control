import { Camera, CameraResultType } from "@capacitor/core";
import { IonBadge, IonCard, IonCardSubtitle, IonImg } from "@ionic/react"
import { useDispatch, useSelector } from "react-redux";
import { selectImage } from '../../../redux/actions/formGasto';
import imageFotoBase from '../assets/img/foto.png';


const Comprobante: React.FC = () => { 
    const { imgComp='' } = useSelector((state: any) => state.formGasto);
    const dispatch = useDispatch();

    const  takePicture  = async ():Promise<any> =>  {
        const _image = await Camera.getPhoto({
            quality: 10,
            allowEditing: false,
            resultType: CameraResultType.DataUrl,
            height: 160,
            width: 400,
            
        });
        const imageUrl = _image.dataUrl || '';        
        dispatch(selectImage(imageUrl));
    }

    return <div style={{display:'flex',justifyContent:'center'}} className='lista'>
        <IonCard onClick={takePicture} style={{width:260}}>
            <IonImg src={imgComp || imageFotoBase} /> 
            
            <IonCardSubtitle style={{textAlign:'center'}}>
                SELECCIONAR IMAGEN 
            </IonCardSubtitle>
            <br />
            <IonBadge style={{width:'100%'}} color="dark">nota o ticket de compra</IonBadge>
        
        </IonCard>
    </div> 
}

export default Comprobante;