
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import { IonApp } from '@ionic/react';

import { useSelector } from 'react-redux';
import LoadingComp from './components/effects/LoadingComp';
import DialogComp from './components/effects/DialogComp';
import LoginRoutes from './routes/login.routes';
import PrivateRoutes from './routes/privates.routes';

const App: React.FC = () => {

  const { status=false } = useSelector((state: any) => state.sesion);
  return <IonApp>
    {status ? <PrivateRoutes /> : <LoginRoutes />}
    <LoadingComp />
    <DialogComp /> 
  </IonApp>;
};

export default App;
