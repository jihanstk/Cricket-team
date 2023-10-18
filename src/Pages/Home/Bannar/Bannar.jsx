import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Bannar = () => {
	return (
		<Carousel autoPlay={true} infiniteLoop={true}>
			<div>
				<img src="https://i.ibb.co/hRnXnLM/6th-img.webp" />
			</div>
			<div>
				<img src="https://i.ibb.co/y0rrmsH/5th-img.webp" />
			</div>
			<div>
				<img src="https://i.ibb.co/3fzTBXm/4th-img.webp" />
			</div>
			<div>
				<img src="https://i.ibb.co/2sLq8KS/2n-img.webp" />
			</div>
			<div>
				<img src="https://i.ibb.co/989MhVW/1st-img.webp" />
			</div>
		</Carousel>
	);
};

export default Bannar;
