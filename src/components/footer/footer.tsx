import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <div className="bg-black py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img
            src={logo}
            alt=""
            className="w-[40px] object-contain rounded-full"
          />
          <p className="my-5">
            Achieve your fitness goals. Start your journey today. Get fit, feel
            good. We'll help you reach your potential. Strong body, strong mind.
            Train with us, see results.
          </p>
          <p></p>
        </div>
        <div className=" mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold">Packages</h4>
          <p className="my-5">
            <a href="/" target="_blank" rel="noopener noreferrer">
              Yoga
            </a>
          </p>
          <p className="my-5">
            <a href="/" target="_blank" rel="noopener noreferrer">
              Cardio Machines
            </a>
          </p>
          <p className="my-5">
            <a href="/" target="_blank" rel="noopener noreferrer">
              Fitness classes
            </a>
          </p>
          <p className="my-5">
            <a href="/" target="_blank" rel="noopener noreferrer">
              Personal Training
            </a>
          </p>
        </div>
        <div className="mt-16 basis-1/2 md:mt-0">
          <h4 className="font-bold">Conact Us</h4>
          <p className="my-5">
            <a href="/" target="_blank" rel="noopener noreferrer">
              info@hotmail.com
            </a>
          </p>

          <p className="my-5">
            <a href="/" target="_blank" rel="noopener noreferrer">
              (+233) 050 159 1843
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
