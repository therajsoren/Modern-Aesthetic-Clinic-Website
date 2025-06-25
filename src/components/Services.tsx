import {
  ChevronRight,
  HomeIcon,
  Ribbon,
  Smile,
  Syringe,
  type LucideIcon,
} from "lucide-react";
import { Button } from "./ui/button";

interface Content {
  icon: LucideIcon;
  title: string;
  elem: string;
  link: string;
}

const content: Content[] = [
  {
    icon: HomeIcon,
    title: "Facelift procedures",
    elem: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum et nulla dicta culpa maxime tempore corrupti aliquid asperiores veritatis perspiciatis nesciunt vitae magni sit nisi odit hic tempora, repellat cumque!",
    link: "learn more",
  },
  {
    icon: Ribbon,
    title: "botox & fillers",
    elem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloremque magnam perspiciatis architecto minus. Nostrum ut, molestiae laudantium voluptatum modi est error saepe quo maiores. Expedita, qui.",
    link: "learn more",
  },
  {
    icon: Smile,
    title: "laser treatments",
    elem: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum eum commodi numquam itaque a quaerat repellendus explicabo tempora. Asperiores, eius laborum eum autem ut exercitationem neque",
    link: "learn more",
  },
  {
    icon: Syringe,
    title: "body contouring",
    elem: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, totam alias vitae nisi eligendi reprehenderit blanditiis ipsam accusantium ullam repellendus molestias necessitatibus, aliquid eaque",
    link: "learn more",
  },
];

const Services = () => {
  return (
    <div className="container mx-auto bg-pink-100">
      <div className="flex items-center justify-center flex-col leading-relaxed p-4">
        <h1 className="capitalize font-bold md:text-4xl text-2xl tracking-widest">
          our <span className="text-pink-500">premium Services</span>
        </h1>
        <p className="text-sm md:text-lg font-light p-4 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae illum
          delectus nihil! Minima nobis labore assumenda in accusantium mollitia
          eos odio tempora dolorum. Veritatis delectus tempora, repudiandae at
          quasi amet.
        </p>
      </div>
      <div className="p-8 pb-2">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 text-center">
          {content.map((item, index) => (
            <div key={index} className="bg-gray-100 w-full h-full pb-4 rounded-md">
              <div className="p-4 pt-4">
                <item.icon color="pink" />
              </div>
              <div className="flex items-center justify-center flex-col">
                <h1 className="font-bold md:text-xl text-sm capitalize">{item.title}</h1>
                <p className="tracking-widest leading-relaxed p-6">
                  {item.elem}
                </p>
                <a
                  href="#"
                  className="capitalize flex items-center text-pink-500 font-bold"
                >
                  {item.link}{" "}
                  <span className="pt-1">
                    <ChevronRight />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pb-4 pt-10">
        <div className="flex items-center justify-center flex-col">
          <div className="p-3">
            <h1 className="font-bold first-letter:capitalize text-2xl">
              ready to transform your look?
            </h1>
          </div>
          <div>
            <Button className="capitalize rounded-full bg-pink-500 text-white font-extralight px-8 py-4">
              book your consulation now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
