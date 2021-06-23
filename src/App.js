import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import HeaderComponent from './Components/HeaderComponent';
import InfoComponent from './Components/InfoComponent';
import ReadMoreComponent from './Components/ReadMoreComponent';
import SliderComponent from './Components/SliderComponent';
import ImagesComponent from './Components/ImagesComponent';
import TabsComponent from './Components/TabsComponent';
import CardComponent from './Components/CardComponent';
import ContactComponent from './Components/ContactComponent';
import FooterComponent from './Components/FooterComponent';

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <InfoComponent/>
      <ReadMoreComponent/>
      <SliderComponent/>
      <ImagesComponent/>
      <TabsComponent/>
      <CardComponent/>
      <ContactComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
