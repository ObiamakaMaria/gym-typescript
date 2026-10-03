import Logo from "@/assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Evogym is a welcoming place to train with purpose, build strength,
            and find a fitness routine you can enjoy for the long run.
          </p>
                <p>
                  © Evogym. All rights reserved. Developed by Obiamaka Aghadiuno.
                </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
                <AnchorLink
                  className="my-5 block hover:text-primary-500"
                  href="#contactus"
                >
                  Memberships
                </AnchorLink>
                <AnchorLink
                  className="my-5 block hover:text-primary-500"
                  href="#ourclasses"
                >
                  Class schedule
                </AnchorLink>
                <AnchorLink className="block hover:text-primary-500" href="#contactus">
                  Training support
                </AnchorLink>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Questions about membership or classes?</p>
          <p>(333) 425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
