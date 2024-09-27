import { FaTiktok, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-[3rem] px-[2rem] md:py-[6.5rem] md:px-[10rem] text-center md:text-left">
      <div className="flex flex-col md:flex-row justify-center text-white">
        {/* First div with 40% width */}
        <div className="md:flex-[0_0_40%] flex flex-col justify-between pr-[2rem] mb-4">
          <div>
            <img
              src="/images/logowhite.png"
              alt="Company Logo"
              className="self-center"
            />
            <p className="mt-4 text-sm text-[#CFCFCF] font-normal">
              We are a residential interior design firm located in Portland. Our boutique-studio offers more than...
            </p>
          </div>
          <div className="hidden md:flex space-x-4 mt-[8rem]">
            <FaTwitter />
            <FaFacebook />
            <FaTiktok />
            <FaInstagram />
          </div>
        </div>

        {/* Second div with 30% width */}
        <div className="md:flex-[0_0_30%] pr-[2rem] mb-4">
          <ul className="flex flex-col space-y-2 text-[#CFCFCF] md:text-sm text-base font-semibold md:font-normal gap-[1rem] md:gap-[0.5rem]">
            <li className="text-white">Services</li>
            <li>Bonus program</li>
            <li>Gift cards</li>
            <li>Credit and payment</li>
            <li>Service contracts</li>
            <li>Non-cash account</li>
            <li>Payment</li>
          </ul>
        </div>

        {/* Third div with 30% width */}
        <div className="md:flex-[0_0_30%] mb-4">
          <ul className="flex flex-col space-y-2 text-[#CFCFCF] md:text-sm text-base font-semibold md:font-normal gap-[1rem] md:gap-[0.5rem]">
            <li className="text-white">Assistance to the buyer</li>
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and return of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
        </div>
      </div>
      <div className="flex md:hidden justify-center space-x-4 mt-[3rem]">
        <FaTwitter />
        <FaFacebook />
        <FaTiktok />
        <FaInstagram />
      </div>
    </footer>
  );
};

export default Footer;
