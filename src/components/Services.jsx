// import React, { Suspense } from 'react'
// import WaterEffects from './WaterEffects'
// import Scene3D from './Scene3D'
// import Tractor3D from './Tractor3D'
// import PhotoVideoGallery from './PhotoVideoGallery'
// import { Canvas } from '@react-three/fiber'
// import { Loader } from '@react-three/drei'
// import service1 from "/service1.jpeg";
// import service2 from "/service2.png";
// import service3 from "/service3.webp";
// import service4 from "/service4.jpg";
// import service5 from "/service5.jpg";
// import service6 from "/service6.jpeg";

// const Services = () => {
//   const services = [
//   { title: "New Borewell Drilling", image: service1 },
//   { title: "Commercial & Industrial Borewell Service", image: service2 },
//   { title: "Borewell Recharging", image: service3 },
//   { title: "Submersible Pump Installation", image: service4 },
//   { title: "Borewell Repairing", image: service5 },
//   { title: "Air Compressor in all Borewell", image: service6 }  ]

//   return (
//     <section id="services" className="py-20 bg-white relative overflow-hidden water-surface">
//       <WaterEffects variant="waves" />
//       <div className="water-bubbles">
//         <div className="water-bubble"></div>
//         <div className="water-bubble"></div>
//         <div className="water-bubble"></div>
//       </div>
      
//       {/* 3D Water Droplets */}
//       <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
//         <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96">
//           <Scene3D showPump={false} showDroplets={true} />
//         </div>
//       </div>
    
//         {/* 3D Tractor Section - Prominent Display */}
//         <div className="mt-20 mb-16">
                  
//           <div className="max-w-6xl mx-auto">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//     <div className="services-page">
//       {/* Header */}
//       <div className="services-header">
//         <h1>Our Services</h1>
//         <p>Reliable borewell solutions across Gujarat</p>
//       </div>
//                     {/* 3D Tractor
//               <div className="relative h-[500px] bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl overflow-hidden tractor-3d-container">
//                 <div className="absolute inset-0">
//                   <Canvas
//                     shadows
//                     gl={{ antialias: true, alpha: true }}
//                     camera={{ position: [0, 2, 5], fov: 50 }}
//                     style={{ background: 'transparent' }}
//                   >
//                     <Suspense fallback={null}>
//                       <Tractor3D />
//                     </Suspense>
//                   </Canvas>
//                   <Loader />
//                 </div>
//                 <div className="absolute bottom-4 left-4 right-4 text-center">
//                   <p className="text-gray-700 font-semibold bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg">
//                     Interactive 3D Model - Drag to rotate, scroll to zoom
//                   </p>
//                 </div>
//               </div> */}
//       {/* Service Cards */}
//       <div className="services-container">
//         {services.map((service, index) => (
//           <div className="service-card" key={index}>
//             <div className="service-image">
//               <img src={service.image} alt={service.title} />
//             </div>
//             <h3>{service.title}</h3>
//           </div>
//         ))}
//       </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Services



import React from 'react'
import WaterEffects from './WaterEffects'
import Scene3D from './Scene3D'
import service1 from "/service1.jpeg";
import service2 from "/service2.png";
import service3 from "/service3.webp";
import service4 from "/service4.jpg";
import service5 from "/service5.jpg";
import service6 from "/service6.jpeg";

const Services = () => {
  const services = [
    { title: "New Borewell Drilling", image: service1 },
    { title: "Commercial & Industrial Borewell Service", image: service2 },
    { title: "Borewell Recharging", image: service3 },
    { title: "Submersible Pump Installation", image: service4 },
    { title: "Borewell Repairing", image: service5 },
    { title: "Air Compressor in all Borewell", image: service6 }
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden water-surface">

      {/* Water Effects */}
      <WaterEffects variant="waves" />

      {/* Background water bubbles */}
      <div className="water-bubbles">
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
        <div className="water-bubble"></div>
      </div>

      {/* Floating 3D Droplets */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 md:w-96 md:h-96">
          <Scene3D showPump={false} showDroplets={true} />
        </div>
      </div>

      <div className="services-page">
      {/* Header */}
      <div className="services-header">
        <h2 className='text-5xl font-bold mb-4'>Our Services</h2>
        <p>Reliable borewell solutions across Gujarat</p>
      </div>

      {/* Service Cards */}
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-cards" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Services;
