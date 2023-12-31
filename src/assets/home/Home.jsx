import DesignSection from './DesignSection';
import Functionality from './Functionality';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="bg-blue-400">
      <Navbar></Navbar>
      <div className="flex justify-around max-w-7xl mx-auto">
        <div className="w-1-2">
          <DesignSection></DesignSection>
        </div>
        <div className="w-1-2">
          <Functionality></Functionality>
        </div>
      </div>
    </div>
  );
};

export default Home;
