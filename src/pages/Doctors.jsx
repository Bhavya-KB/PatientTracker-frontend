import React from 'react';

export default function Doctors() {
  const doctors = [
    { name: 'Dr. Smith', specialty: 'General',image: 'https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg '},
    { name: 'Dr. Patel', specialty: 'Neurology',image: 'https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=' },
    { name: 'Dr. Rajesh Sharma', specialty: 'Orthopedics',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_-5t4nHESSGiagOklxKOxoFMNp7wh3Vvq4J8MINVEPMBm6bicdw2k8ai7yXhVMrqlURg&usqp=CAU' },
    { name: 'Dr. Meera Nair', specialty: 'Cardiologist',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE0svsZ-OVlmScNB2qI-3vC27jUGDvQiprfmCVROsy413OdSRf3N8PDJE86Axo6jaCha0&usqp=CAU'},
    { name: 'Dr. Arjun Patel', specialty: 'Pediatrics',image: 'https://t4.ftcdn.net/jpg/07/07/89/33/360_F_707893394_5DEhlBjWOmse1nyu0rC9T7ZRvsAFDkYC.jpg' }

  
  ];

  return (
    <div className="container mt-4">
      <h2>Doctors</h2>
      <div className="row">
        {doctors.map((d, i) => (
          <div key={i} className="col-md-4">
            <div className="card mb-3 shadow-sm">
                 <img src={d.image} alt={d.name} className="card-img-top"   style={{ height: '300px', objectFit: 'cover' }}/>
              <div className="card-body">
                <h5 className="card-title">{d.name}</h5>
                <p className="card-text"><strong>Specialty:</strong> {d.specialty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



