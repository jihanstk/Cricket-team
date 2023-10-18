import AllRounder from '../AllRounder/AllRounder';
import Bannar from '../Bannar/Bannar';
import CricketLegends from '../CricketLegends/CricketLegends';
import TopBatMan from '../TopBatMan/TopBatMan';

const Home = () => {
	return (
		<div>
			<Bannar />
			<TopBatMan />
			<AllRounder />
			<CricketLegends />
		</div>
	);
};

export default Home;
