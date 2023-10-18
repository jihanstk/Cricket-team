import SectionTitle from '../../../Components/SectionTitle/SectionTitle';

const AllRounder = () => {
	return (
		<>
			<SectionTitle subheading="Did You Know" heading="World Top All Rounder" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 max-w-screen-2xl mx-auto">
				<div className="w-3/3">
					<h1 className="text-3xl uppercase font-bold my-3">
						Name: Shakib Al Hasan
					</h1>
					<p className="text-xl space-y-3">
						Shakib Al Hasan is a prominent Bangladeshi cricketer known for his
						exceptional all-round skills in the sport. He is considered one of
						the greatest cricketers to have emerged from Bangladesh and has been
						a key figure in the development of cricket in the country. As of my
						last update in 2021, Shakib Al Hasan has had a significant impact an
						the international cricket stage. he known for his left-handed
						batting and slow left-arm orthodox bowling.
					</p>
				</div>
				<div className="w-3/3">
					<img
						src="https://i.ibb.co/pfv8Cw9/shakibalhasan-1589211897.jpg"
						alt="virat"
					/>
				</div>
			</div>
		</>
	);
};

export default AllRounder;
