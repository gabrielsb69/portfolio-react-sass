import SocialNetworks from './SocialNetworks';
import InformationContainer from './InformationContainer';


import Avatar from '../img/seilairmao.png'

import "../styles/components/sidebar.sass";



const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Kauan Gabriel" />
      <p className="title">Desenvolvedor e Designer Gráfico</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="#" className="btn">Donwload Currículo</a>
    </aside>
  )
}

export default Sidebar