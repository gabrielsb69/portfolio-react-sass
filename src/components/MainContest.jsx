import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer'
import ProjectsContainer from './ProjectsContainer'
import TechnologiesContainer from './TechnologiesContainer'

const MainContest = () => {
  return (
    <main id="main-content">
      <AboutContainer />
      <TechnologiesContainer />
      <ProjectsContainer />
    </main>
  )
}

export default MainContest