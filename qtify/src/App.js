import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Section from './components/Section/Section';
import Songs from './components/Songs/Songs';
import { getTopAlbums, getNewAlbums } from './api/index';

function App() {
  return (
    <div>
       <Navbar />
        <HeroSection />

        <Section
        title="Top Albums"
        fetchData={getTopAlbums}
        showToggle={true}
        />

        <Section
        title="New Albums"
        fetchData={getNewAlbums}
        showToggle={true}
        />

        <Songs />
    </div>
  );
}

export default App;