import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const TopBatMan = () => {
	return (
		<>
			<SectionTitle subheading="Did You Know" heading="World Top Bats Man" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 max-w-screen-2xl mx-auto">
				<div className="w-3/3">
					<img src="https://i.ibb.co/s90wq7M/virat-kohli.webp" alt="virat" />
				</div>
				<div className="w-3/3">
					<h1 className="text-3xl uppercase font-bold my-3">
						Name: Virat Kohli
					</h1>
					<p className="text-xl space-y-3">
						Virat Kohli is an Indian cricketer widely regarded as one of the
						best batsmen in the world. Known for his aggressive and consistent
						performance across all formats of the game, Kohli has achieved
						numerous milestones and records throughout his career. As of my last
						update in 2021, Virat Kohli has been one of the most prominent
						figures in international cricket. Kohli has served as the captain of
						the Indian national cricket team and has been instrumental in
						leading the team to significant victories in various series and
						tournaments.
					</p>
				</div>
			</div>
		</>
	);
};

export default TopBatMan;
