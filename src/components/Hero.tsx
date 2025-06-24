import { Button } from "./ui/button";
interface Data {
  number: string;
  label: string;
}

interface Image {
  url: string;
}

const image: Image = {
  url: "/hero-section-image.jpg",
};

const data: Data[] = [
  {
    number: "2500+",
    label: "Happy Clients",
  },
  {
    number: "15+",
    label: "Specialists",
  },
  {
    number: "50+",
    label: "Treatments",
  },
  {
    number: "10+",
    label: "Years",
  },
];

const Hero = () => {
  return (
    <div className="bg-pink-100 p-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="">
          <div className="capitalize lg:text-4xl text-2xl font-bold tracking-widest">
            <h1>
              enhance your natural <br />
              <span className="text-pink-600">beauty</span>
            </h1>
          </div>
          <div className="mt-4 lg:leading-8">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt,
              rerum voluptatibus, architecto quos provident eligendi laudantium,
              nemo quae temporibus beatae modi? Atque nam fugiat, perspiciatis
              maiores voluptatibus et soluta, ea adipisci magni impedit sapiente
              sequi rem aliquid. Repudiandae reprehenderit molestiae aliquid
              quia impedit eaque sit quisquam fugit, saepe vitae a?
            </p>
          </div>
          <div className="mt-6 flex sm:flex-row gap-6 flex-col w-full p-4">
            <div>
              <Button className="rounded-full border-pink-700 border-2 bg-pink-500 text-white font-medium w-full">
                Book a Consulation
              </Button>
            </div>
            <div>
              <Button
                variant="ghost"
                className="rounded-full border-pink-700 border-2 text-pink-500 w-full"
              >
                Explore Services
              </Button>
            </div>
          </div>
          <div className="mt-10 p-4 px-4 ">
            <div className="flex items-center justify-around gap-5 text-pink-500 font-bold sm:text-2xl text-lg flex-wrap">
              {data.map((item, index) => (
                <div key={index}>{item.number}</div>
              ))}
            </div>
            <div className="flex items-center justify-around gap-2 font-extralight sm:text-lg text-xs flex-wrap">
              {data.map((item, index) => (
                <div key={index} className="pr-4">
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* image section */}
        <div>
          <div className="rounded-full overflow-hidden">
            <img
              src={image.url}
              alt="hero-section-image"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
