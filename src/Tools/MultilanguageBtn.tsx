/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import cookies from "js-cookie";
import React from "react";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";

const languages: (
  | {
      code: string;
      name: string;
      country_code: string;
      dir?: undefined;
    }
  | {
      code: string;
      name: string;
      dir: string;
      country_code: string;
    }
)[] = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: "sa",
  },
];
export default function MultilanguageBtn() {
  const [t, il18n] = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage: any = languages.find(
    (l) => l.code === currentLanguageCode
  );
  React.useEffect(() => {
    console.log("Setting page stuff");
    document.body.dir = currentLanguage.dir || "ltr";
  }, [currentLanguage, t]);
  return (
    <div className="w-56 text-right">
      <Menu as="div" className="relative inline-block text-left z-50">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Options
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute px-1 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {languages.map((item, index) => (
                <Menu.Item key={index}>
                  <div
                    onClick={() => {
                      il18n.changeLanguage(item.code);
                    }}
                    className={
                      "group cursor-pointer flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-color_10 hover:text-white font-semibold"
                    }
                  >
                    <ReactCountryFlag
                      countryCode={item.country_code}
                      svg
                      style={{
                        width: "2em",
                        height: "2em",
                      }}
                      className="mx-2"
                      title={item.country_code}
                    />
                    {item.name}
                  </div>
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
