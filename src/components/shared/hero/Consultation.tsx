import AppointmentButton from "../../AppointmentButton";

export default function Consultation() {
  return (
    <section className="bg-navbar-bg mt-[120px]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 px-5">
          {/* Left Part: Heading */}
          <div>
            <h2 className="text-4xl font-medium text-white mb-3">
              Let’s Create Your Next
            </h2>
            <h3 className="text-white text-4xl font-bold">
              Innovative Project Together.
            </h3>
          </div>

          {/* Right Part: Button */}
          <div>
            <AppointmentButton>Book a Consultation</AppointmentButton>
            {/* <a
              href="#consultForm"
              className="bg-green md:text-xl text-white py-4 px-8 rounded-full hover:bg-opacity-90 transition transform hover:scale-105 inline-block"
            >
              Book a Consultation
            </a> */}
          </div>

        </div>
      </div>
    </section>
  );
}
