import {
  Clock,
  Copyright,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Locate,
  Mail,
  PhoneCall,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface ContentNav {
  icon: LucideIcon;
  header: string;
  content: string;
}

const contentNav: ContentNav = {
  icon: Home,
  header: "glamour clinic",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos magni facere error vel nesciunt mollitia perspiciatis quisquam quas, quaerat esse amet alias quae natus eveniet, accusamus totam laudantium? Enim, ad.",
};

interface Icons {
  icon: LucideIcon;
}

const icons: Icons[] = [
  {
    icon: Facebook,
  },
  {
    icon: Twitter,
  },
  {
    icon: Instagram,
  },
  {
    icon: Linkedin,
  },
  {
    icon: Youtube,
  },
];
interface Content {
  label: string;
}
interface Links {
  heading: string;
  content: Content[];
}

const links: Links = {
  heading: "quick links",
  content: [
    {
      label: "home",
    },
    {
      label: "about us",
    },
    {
      label: "our services",
    },
    {
      label: "our specialists",
    },
    {
      label: "contact us",
    },
    {
      label: "book appointment",
    },
  ],
};

interface Info {
  icon: LucideIcon;
  content: string;
}
interface ContactInfo {
  heading: string;
  info: Info[];
}

const contactInfo: ContactInfo = {
  heading: "contact us",
  info: [
    {
      icon: Locate,
      content: "123 Beauty Arena, Medical district London",
    },
    {
      icon: PhoneCall,
      content: "+44 11 274 5586",
    },
    {
      icon: Mail,
      content: "info@glamourclinic.com",
    },
    {
      icon: Clock,
      content: "sun-thu 9am-8am, fri 2pm-9pm",
    },
  ],
};
const Footer = () => {
  return (
    <div className="bg-[#101727] mx-auto max-w-screen container text-gray-600">
      {/* first section */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 md:p-8 p-4">
        <div className="text-white text-2xl capitalize p-4">
          <div className="flex items-center gap-4">
            <div>
              <span>
                <contentNav.icon color="#ff5733" />
              </span>
            </div>
            <div>
              <h1>{contentNav.header}</h1>
            </div>
          </div>
          <div className="py-8">
            <p className="text-gray-600 lg:text-xl text-sm leading-relaxed">
              {contentNav.content}
            </p>
          </div>
          <div className="flex md:space-x-8 space-x-4">
            {icons.map((item, index) => (
              <ul key={index}>
                <li className="rounded-full border md:p-2 p-1 border-gray-400 ">
                  <item.icon size={20} />
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="flex md:justify-end px-4">
          <div className="md:px-4 md:w-[60%]">
            <h1 className="capitalize font-bold text-white md:text-2xl text-xl pb-8">
              {links.heading}
            </h1>
            <div className="space-y-2">
              {links.content.map((item, index) => (
                <ul key={index}>
                  <li className="capitalize text-base">{item.label}</li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="p-6">
        <h1 className="capitalize font-bold text-xl text-white p-4">
          {contactInfo.heading}
        </h1>
        <div className="px-2">
          {contactInfo.info.map((item, index) => (
            <ul key={index} className="capitalize p-2 text-base">
              <li className="flex items-center gap-4">
                <span>
                  <item.icon size={20} />
                </span>
                {item.content}
              </li>
            </ul>
          ))}
        </div>
      </div>
      {/* third section  ✅*/}
      <div className="px-8 pb-4">
        <div className="bg-gray-600 border-0 rounded-md text-center text-white p-6 leading-relaxed">
          <div>
            <h1 className="capitalize font-bold text-xl">
              subscribe to our newsletter
            </h1>
            <h2 className="text-gray-800 first-letter:capitalize font-medium">
              get updates on special offers and beauty tips
            </h2>
          </div>
          <div className="flex pt-4 items-center text-center justify-center">
            <div className="flex gap-4 md:w-[50%]">
              <Input placeholder="Your email address" />
              <Button className="bg-pink-500 rounded-full px-2">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* bottom footer */}
      <div className="hidden md:flex items-center justify-between p-6">
        <div className="px-4 flex items-center justify-between gap-2">
          {/* left side */}
          <div className="flex gap-2">
            <Copyright size={20} /> 2025
          </div>
          <div className="first-letter:capitalize">
            glamour clinic. All right reserved
          </div>
        </div>
        <div className="px-4">
          {/* right side */}
          <ul className="flex items-center gap-4">
            <li className="first-letter:capitalize">privacy policy</li>
            <li className="first-letter:capitalize">terms of service</li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
