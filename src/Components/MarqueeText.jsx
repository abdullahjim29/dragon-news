import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const MarqueeText = () => {
  return (
    <div className="flex items-center gap-3 bg-base-200 p-3 my-4">
      <button className="btn btn-secondary">Latest</button>
      <Marquee pauseOnHover={true}>
        <div className="space-x-10">
        <Link>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque,
          minima!
        </Link>
        <Link>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, nam!
        </Link>
        <Link>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, repellendus.
        </Link>
        <Link>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, iusto?
        </Link>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeText;
