// import { ticketOptions } from "../constants";

// const TicketCard = () => {
//     return (
//         <section className="h-full common-padding bg-zinc relative overflow-hidden">
//             <div className="screen-max-wdith">
//         <div className="mb-12 w-full">
//           <h1 id="features_title" className="section-heading">Explore the full story.</h1>
//         </div>
        
//         <div className="flex flex-col justify-center items-center overflow-hidden">
//           <div className="mt-32 mb-24 pl-24">
//             <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
//             <h2 className="text-5xl lg:text-7xl font-semibold">Forged in titanium.</h2>
//           </div>
//           </div>
//             <div className="bg-black text-white py-10 px-5 flex justify-center">
//       <div className="max-w-2xl w-full space-y-5">
//         {ticketOptions.map((ticket, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 border border-gray-600 rounded-lg p-5 shadow-lg flex flex-col"
//           >
//             <div className="flex justify-between items-start">
//               <h3 className="text-lg sm:text-xl font-bold uppercase text-white">
//                 {ticket.title}
//               </h3>
//               <span className="text-red-500 font-bold text-lg sm:text-xl">
//                 {ticket.price}
//               </span>
//             </div>
//             <ul className="text-sm text-gray-100 mt-3 space-y-1">
//               {ticket.details.map((detail, i) => (
//                 <li key={i}>• {detail}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//         </section>
    
//     )
// }

// export default TicketCard;
import { useGSAP } from '@gsap/react'
import { animateWithGsap } from '../utils/animations';
import gsap from 'gsap';
import { ticketOptions } from "../constants";

const TicketCard = () => {

  useGSAP(()=>{
    // animateWithGsap('#features_title', { y:0, opacity:1})
    // animateWithGsap(
    //   '.g_grow',
    //   { scale: 1, opacity: 1, ease: 'power1' },
    //   { scrub: 5.5 }
    // );
    // animateWithGsap(
    //   '.g_text',
    //   {y:0, opacity: 1,ease: 'power2.inOut',duration: 1}
    // )
    gsap.fromTo('#ticketing_title',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#features_title',
          start: 'top bottom',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Animate the ticket cards
    gsap.fromTo('.ticket-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.ticket-container',
          start: 'top bottom',
          end: 'bottom center',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section className="h-full common-padding bg-black relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="ticketing_title" className="section-heading">Ticketing Details.</h1>
        </div>

        {/* <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-8 mb-12 px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold">iPhone.</h2>
            <h2 className="text-4xl md:text-6xl font-bold">
              Forged in titanium.
            </h2>
          </div>
        </div> */}

        <div className="bg-black text-white py-10 px-5 flex justify-center">
          <div className="max-w-2xl w-full space-y-5">
            {ticketOptions.map((ticket, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-600 rounded-lg p-5 shadow-lg flex flex-col"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-lg sm:text-xl font-bold uppercase text-white">
                    {ticket.title}
                  </h3>
                  <span className="text-red-500 font-bold text-lg sm:text-xl">
                    {ticket.price}
                  </span>
                </div>
                <ul className="text-sm text-gray-100 mt-3 space-y-1">
                  {ticket.details.map((detail, i) => (
                    <li key={i}>• {detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketCard;
