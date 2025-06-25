import {
  BriefcaseMedical,
  Heart,
  HomeIcon,
  Ribbon,
  UserLock,
  type LucideIcon,
} from "lucide-react";
import { Button } from "./ui/button";

interface Image {
  url: string;
}

const image: Image = {
  url: "/specialists-image.jpg",
};

interface Header {
  icon: LucideIcon;
  number: string;
  label: string;
}

const header: Header[] = [
  {
    icon: Ribbon,
    number: "10+",
    label: "Years experience",
  },
  {
    icon: Heart,
    number: "2.5+",
    label: "happy clients",
  },
  {
    icon: UserLock,
    number: "15+",
    label: "expert doctors",
  },
  {
    icon: HomeIcon,
    number: "10+",
    label: "treatments",
  },
];

interface content {
  elem: string;
  icon: LucideIcon;
}
interface ApproachContent {
  title: string;
  contents: content[];
}

interface About {
  title: string;
  subTitle: string;
  about: string;
}

const about: About = {
  title: "about",
  subTitle: "Glamour clinic",
  about:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iustototam illum beatae repellat rem rerum eaque earum aliquidsapiente eligendi. Assumenda officiis commodi natus teneturcumque vel quis illum quidem?",
};

const apporachContent: ApproachContent[] = [
  {
    title: "Our Approach",
    contents: [
      {
        elem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta reiciendis quasi?",
        icon: Heart,
      },
      {
        elem: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis nostrum quae.",
        icon: UserLock,
      },
      {
        elem: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores nesciunt ducimus deserunt?",
        icon: BriefcaseMedical,
      },
    ],
  },
];

const Specialists = () => {
  return (
    <div className="container mx-auto bg-pink-100 pt-8">
      <div className="grid md:grid-cols-2 grid-cols-1">
        {/* image section */}
        <div className="p-4 md:p-6 min-h-screen">
          <img
            src={image.url}
            alt="specialists-image"
            className="md:h-[80%] h-full object-cover"
          />
          {/* <div className="bg-gray-100 w-fit rounded-md px-4 py-4 capitalize relative transform md:translate-x-140 md:-translate-y-25 -translate-y-20 translate-x-80">
              <h1 className="text-pink-500 font-bold md:text-2xl text-xl">
                10+
              </h1>
              <p>years experience</p>
          </div> */}
        </div>
        {/* content section */}
        <div className="flex items-start flex-col">
          <div className="p-4">
            <h1 className="capitalize font-bold md:text-2xl text-base pb-2 tracking-widest">
              {about.title}
              <span className="text-pink-500 px-2">{about.subTitle}</span>
            </h1>
            <p className="tracking-wide leading-normal md:text-base text-sm">
              {about.about}
            </p>
          </div>
          <div>
            {apporachContent.map((item, index) => (
              <div key={index} className="p-6">
                <div className="flex items-center">
                  <h1 className="font-bold md:text-xl text-sm pb-2 tracking-widest">
                    {item.title}
                  </h1>
                </div>
                {item.contents.map((content, index) => (
                  <div key={index} className="p-2 flex items-center gap-2">
                    <div>
                      <content.icon color="pink" />
                    </div>
                    <div>{content.elem}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="p-6 w-full">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {header.map((item, index) => (
                <div
                  key={index}
                  className=" shadow-lg bg-gray-100 md:text-base text-xs "
                >
                  <div className="flex items-center">
                    <div className="p-2">
                      <item.icon className="fill-pink-400" />
                    </div>
                    <div className="flex flex-col p-6">
                      <div className="font-bold md:text-lg text-base">
                        {item.number}
                      </div>
                      <div className="label-relaxing capitalize font-light">
                        {item.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-4 mt-4">
              <Button className="bg-pink-500 capitalize font-light rounded-full px-4 py-4">
                meet our specialists
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
