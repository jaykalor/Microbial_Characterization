// import { useEffect } from "react";

// const BotpressChat = () => {
//   useEffect(() => {
//     // Inject Botpress Webchat script
//     const script1 = document.createElement("script");
//     script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
//     script1.async = true;
//     document.body.appendChild(script1);

//     // Inject custom Botpress script
//     const script2 = document.createElement("script");
//     script2.src = "https://files.bpcontent.cloud/2025/03/05/06/20250305061715-4KA5MG13.js";
//     script2.async = true;
//     document.body.appendChild(script2);

//     return () => {
//       document.body.removeChild(script1);
//       document.body.removeChild(script2);
//     };
//   }, []);

//   return null; // No visible UI, just injecting scripts
// };

// export default BotpressChat;

import { useEffect } from "react";

const BotpressChat = () => {
  useEffect(() => {
    // Inject Botpress Webchat script
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Inject custom Botpress script
    const script2 = document.createElement("script");
    script2.src = "https://files.bpcontent.cloud/2025/03/05/06/20250305061715-4KA5MG13.js";
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Ask me anything...",
        botId: "YOUR_BOT_ID", // Replace with your actual Botpress bot ID
        host: "https://cdn.botpress.cloud/webchat/v2",
        showCloseButton: true,
        enableTranscriptDownload: true,
        showPoweredBy: false,
        stylesheet: "https://cdn.botpress.cloud/webchat/v2.2/themes/default.css",
        useSessionStorage: true,
        theme: "prism",
        layoutWidth: "350px",
        layoutHeight: "500px",
        enableReset: true,
        hideWidget: false, // Ensures the widget is always available
        showWidget: true, // Display the chat icon
        avatarUrl: "/images/195.jpg", // Set your custom chat icon
      });
    };

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null; // No visible UI, just injecting scripts
};

export default BotpressChat;
