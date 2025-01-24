
export default function WhatsappButton() {
    const handleClick = () => {
        const phoneNumber = "8801607304149"; // Replace with your WhatsApp phone number
        const message = "Hello! I would like to know more about your services."; // Customize your message
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div
            onClick={handleClick}
            className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 animate-bounce z-30"
            title="Chat with us on WhatsApp"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // WhatsApp logo
                alt="WhatsApp"
                className="w-10 h-10 md:w-14 md:h-14"
            />
        </div>
    );
}
