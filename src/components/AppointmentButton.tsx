/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { PopupWidget } from "react-calendly";

declare global {
    interface Window {
        Calendly: any;
    }
}

const AppointmentButton = ({ children }: { children: React.ReactNode }) => {
    const isCalendlyOpen = false;
    const [calendlyLoaded, setCalendlyLoaded] = useState(false);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        script.onload = () => setCalendlyLoaded(true);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleOpenCalendly = () => {
        if (calendlyLoaded && (window as any).Calendly) {
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/mdshakilmirja701' }); // Replace with your Calendly link
        } else {
            console.error('Calendly script is not loaded yet.');
        }
    };

    return (

        <>

            <button
                onClick={handleOpenCalendly}
                className="bg-primary hover:bg-opacity-90  text-white text-md lg:text-lg py-3 px-6 rounded-full hover:bg-lime-500 hover:border-b-1 border-white"
            >
                {children}
            </button>
            {isCalendlyOpen && (
                <PopupWidget
                    url="https://calendly.com/mdshakilmirja701"
                    rootElement={document.getElementById("root") as HTMLElement}
                    text="Click here to schedule!"
                    textColor="#ffffff"
                    color="#00a2ff"
                />
            )
            }
        </>

    );
};

export default AppointmentButton;
