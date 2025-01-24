export default function LiveChatButton() {
    const handleClick = () => {
        const phoneNumber = "8801607304149"; // Replace with your WhatsApp phone number
        const message = "Hello! I would like to know more about your services."; // Customize your message
        const chatUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(chatUrl, "_blank");
    };

    return (
        <div
            onClick={handleClick}
            className="fixed bottom-6 left-6 rounded-full p-2 shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 animate-bounce z-30"
            title="Live Chat with us"
        >
<svg id="Layer_1" height={60} viewBox="0 0 512 512" width={60} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"><g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><path d="m42.877 342.958-42.577 158.887a7.991 7.991 0 0 0 9.755 9.878l158.983-42.6a244.736 244.736 0 1 0 -126.161-126.165zm108.329-16.389a8 8 0 1 1 0-16h233.077a8 8 0 0 1 0 16zm0-83.974a8 8 0 0 1 0-16h233.077a8 8 0 0 1 0 16zm0-83.976a8 8 0 1 1 0-16h233.077a8 8 0 1 1 0 16z" fillRule="evenodd" fill="#c72e6f" fillOpacity={1} data-original-color="#000000ff" stroke="none" strokeOpacity={1} /></g></svg>

        </div>
    );
}
