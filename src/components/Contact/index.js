import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import imagen from "./pngwing.com.png";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsAppMessage = () => {
    const encodedMessage = encodeURIComponent(`Nombre:\n${name}\n\nMensaje:\n${message}`);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=573008721785&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div
      id="contact"
      className="flex text-center flex-col gap-12 mt-10 min-h-screen overflow-hidden"
    >
      <div className="text-5xl font-bold" data-aos={"fade"}>
        Contact
      </div>
      <div className="flex flex-row">
      <div className="flex-auto w-80 h-100 flex flex-col justify-center text-center items-center gap-1">
          <div data-aos={"slide-up"}  className="text-center bg-[#0b212d]  rounded-2xl max-w-[362px]  h-full bg-gradient-to-r from-green-700 to-pink-800 p-[1px]">
            <div className={`bg-[#0b212d] rounded-2xl p-4 flex flex-col justify-between`}>
                <img
                 style={{alignSelf:'center'}}
            src={imagen}
            alt=""
            width="50"
          />
            
              <label
                htmlFor=""
                className="text-white name py-4 font-medium "
              >
                name
              </label>
              <input
                style={{color :'black', padding:'5px' , borderRadius:'10px'}}
                className="text-white name py-4 font-medium "
                type="text"
                placeholder="Name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor=""
                className="text-white name py-4 font-medium "
              >
                Message
              </label>
              <textarea
                name=""
                cols="30"
                rows="10"
                placeholder="write in my"
                style={{color :'black', padding:'5px' , borderRadius:'10px'}}
                className={`height-140 text-black name py-4 font-medium `}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="button"
                onClick={sendWhatsAppMessage}
                style={{backgroundColor : '#0b212d'}}
                className="text-white name py-4 font-medium "
              >
                Send Message
              </button>
            </div>
          </div>
         
        </div>

        <div className="flex-auto w-80  flex flex-col justify-center text-center items-center gap-1">
          <div data-aos={"slide-up"} className="text-center">
            <div className="text-white flex flex-col gap-7 w-fit mx-auto pt-4">
              <div className="cursor-pointer hover:scale-105"
                onClick={() =>
                  window.open("https://github.com/jMontoyaGiraldo", "_blank")
                }
              >
                <GitHubIcon className="cursor-pointer hover:scale-105" />
                <p>https://github.com/jMontoyaGiraldo</p>
              </div>
              <div  className="cursor-pointer hover:scale-105"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/juan-manuel-montoya-giraldo-95b954261/",
                    "_blank"
                  )
                }
              >
          
                <LinkedInIcon className="cursor-pointer hover:scale-105" />
                <p>https://www.linkedin.com/in/juan-manuel-montoya-giraldo-95b954261/</p>
              </div>
              <div  className="cursor-pointer hover:scale-105 flex flex-col justify-center text-center items-center"
                // onClick={() =>
                //   window.open(
                //     "https://www.linkedin.com/in/juan-manuel-montoya-giraldo-95b954261/",
                //     "_blank"
                //   )
                // }
              >
          
                <img src={require('./gmailLogo.png')} style={{width : '40px'}} className="justify-center text-center items-center cursor-pointer hover:scale-105" alt="gmailLogo" />
                <p>Juanmaggm@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}