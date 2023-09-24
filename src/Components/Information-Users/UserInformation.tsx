// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../Store';
// import "./../../scss/UserInformation.scss"
// import mm from './../../Images/Form/META.png'
// import log from './../../Images/Form/2.jpg'
// import stadium from './../../Images/Form/3.jpg'
// import club from './../../Images/Form/1.jpg'
// import StepIndicator from './StepIndicateur';


// const UserInformation = () => {
//   const [step, setStep] = useState(1);
//   const [managerName, setManagerName] = useState('');
//   const [clubName, setClubName] = useState('');
//   const [country, setCountry] = useState('');
//   const [city, setCity] = useState('');
//   const [stadiumName, setStadiumName] = useState('');
//   const [tactic, setTactic] = useState('');
//   const [logo, setLogo] = useState<File | null>(null);
//   const [isEntering, setIsEntering] = useState(false);

//   const user = useSelector((state: RootState) => state.user);
//   const dispatch = useDispatch();

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('managerName', managerName);
//     formData.append('clubName', clubName);
//     formData.append('country', country);
//     formData.append('city', city);
//     formData.append('stadiumName', stadiumName);
//     formData.append('tactic', tactic);
//     if (logo) {
//       formData.append('logo', logo);
//     }

//     // TODO: Faire une requête POST à l'API pour sauvegarder ces informations
//   };

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setLogo(e.target.files[0]);
//     }
//   }
//   const nextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
//     if (step < 5) {
//       event.preventDefault();
//       setIsEntering(true); // Commence l'animation d'entrée
//       setTimeout(() => {
//         setStep(step + 1);
//         setIsEntering(false); // Fin de l'animation d'entrée
//       }, 500); // 500 est la durée de l'animation définie dans le CSS
//     }
//   }
//   // const nextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
//   //   if (step < 5) {
//   //     event.preventDefault();
//   //     setStep(step + 1);
//   //   }
//   // }

//   const renderStepContent = () => {
//     switch (step) {
//       case 1:
//         return (
//           // <div className='container-step'>
//           <div className={`container-step fade ${isEntering ? 'fade-entering' : 'fade-entered'}`}>
//             <div className='box-img'>
//               <img src={mm} alt=''></img>
//             </div>
//             <div className='container-info'>
//             <StepIndicator steps={5} currentStep={step} />
//               <div className='box-info'>
//                 <h4>First thing first, what country is your club from ?</h4>
//                 <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
//               </div>
//               <div className='box-info'>
//                 <h4>What city your club represents ?</h4>
//                 <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
//               </div>
//               <div className='box-btn'>
//                 <button type="submit" onClick={nextPage}>{step < 5 ? "Next" : "Submit"}</button>
//               </div>
//             </div>
//           </div>
//         );
//       case 2:

//         return (
//           // <div className='container-step'>
//           <div className={`container-step fade ${isEntering ? 'fade-entering' : 'fade-entered'}`}>
//             <div className='box-img'>
//               <img src={log} alt=''></img>
//             </div>
//             <div className='container-info'>
//             <StepIndicator steps={5} currentStep={step} />
//               <div className='box-info'>
//                 <h4>Name of club</h4>
//                 <input type="text" value={clubName} onChange={(e) => setClubName(e.target.value)} placeholder="Club Name" required />
//               </div>

//               <div className='box-logo'>
//                 <label htmlFor="clubLogo">Entrer le logo de votre club:</label>
//                 <input id="clubLogo" type="file" onChange={handleFileChange} />
//               </div>
//               <div className='box-btn'>
//                 <button type="submit" onClick={nextPage}>{step < 5 ? "Next" : "Submit"}</button>
//               </div>
//             </div>
//           </div>
//         );
//       case 3:
//         return (
//           // <div className='container-step'>
//           <div className={`container-step fade ${isEntering ? 'fade-entering' : 'fade-entered'}`}>
//             <div className='box-img'>
//               <img src={club} alt=''></img>
//             </div>
//             <div className='container-info'>
//             <StepIndicator steps={5} currentStep={step} />
//               <div className='box-info'>
//                 <h4>First Name of Manager</h4>
//                 <input type="text" value={managerName} onChange={(e) => setManagerName(e.target.value)} placeholder="Manager Name" required />
//               </div>

//               <div className='box-info'>
//                 <h4>Surname of Manager</h4>
//                 <input type="text" value={managerName} onChange={(e) => setManagerName(e.target.value)} placeholder="Manager Name" required />
//               </div>
//               <div className='box-btn'>
//                 <button type="submit" onClick={nextPage}>{step < 5 ? "Next" : "Submit"}</button>
//               </div>

//             </div>
//           </div>
//         );
//       case 4:
//         return (
//           // <div className='container-step'>
//           <div className={`container-step fade ${isEntering ? 'fade-entering' : 'fade-entered'}`}>
//             <div className='box-img'>
//               <img src={stadium} alt=''></img>
//             </div>
//             <div className='container-info'>
//             <StepIndicator steps={5} currentStep={step} />
//               <div className='box-info'>
//                 <h4>Name of Stadium</h4>
//                 <input type="text" value={stadiumName} onChange={(e) => setStadiumName(e.target.value)} placeholder="Stadium Name" required />
//               </div>
//               <div className='box-btn'>
//                 <button type="submit" onClick={nextPage}>{step < 5 ? "Next" : "Submit"}</button>
//               </div>
//             </div>
//           </div>
//         );
//       case 5:
//         return (
//           // <div className='container-step'>
//           <div className={`container-step fade ${isEntering ? 'fade-entering' : 'fade-entered'}`}>
//             <div className='box-img'>
//               <img src={mm} alt=''></img>
//             </div>
//             <div className='container-info'>
//             <StepIndicator steps={5} currentStep={step} />
//               <div className='box-info'>
//                 <h4>Tactic </h4>
//                 <input type="text" value={tactic} onChange={(e) => setTactic(e.target.value)} placeholder="Tactic" required />
//               </div>
//               <div className='box-btn'>
//                 <button type="submit" onClick={nextPage}>{step < 5 ? "Next" : "Submit"}</button>
//               </div>

//             </div>
//           </div>
//         );
//       default:
//         return null;
//     }
//   }

//   // const renderForm = () => {
//   // if (!user) {
//   //   return (
//   //     <div>
//   //       <p>Veuillez vous connecter pour accéder à cette page.</p>
//   //       <button onClick={() => {/* TODO: Rediriger vers la page de connexion */}}>Sign In</button>
//   //       <button onClick={() => {/* TODO: Rediriger vers la page d'inscription */}}>Sign Up</button>
//   //     </div>
//   //   );
//   // }

//   return (
//     <div className='container-user-info'>
//       {/* <StepIndicator steps={5} currentStep={step} /> */}
//       <form onSubmit={handleSubmit} className="form-user-info">
//         {renderStepContent()}
//       </form>
//     </div>
//   );
// };

// // return renderForm();
// // };

// export default UserInformation;


import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../../Store';
import "./../../scss/UserInformation.scss"
import mm from './../../Images/Form/META.png'
import log from './../../Images/Form/2.jpg'
import stadium from './../../Images/Form/3.jpg'
import club from './../../Images/Form/1.jpg'
import StepIndicator from './StepIndicator';


const UserInformation = () => {
  const [step, setStep] = useState(1);
  const [managerName, setManagerName] = useState('');
  const [clubName, setClubName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [stadiumName, setStadiumName] = useState('');
  const [tactic, setTactic] = useState('');
  const [logo, setLogo] = useState<File | null>(null);
  const [isEntering, setIsEntering] = useState(false);

  // const user = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('managerName', managerName);
    formData.append('clubName', clubName);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('stadiumName', stadiumName);
    formData.append('tactic', tactic);
    if (logo) {
      formData.append('logo', logo);
    }

    // TODO: Faire une requête POST à l'API pour sauvegarder ces informations
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setLogo(e.target.files[0]);
    }
  }
  const nextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (step < 5) {
      event.preventDefault();
      setIsEntering(true); // Commence l'animation d'entrée
      setTimeout(() => {
        setStep(step + 1);
        setIsEntering(false); // Fin de l'animation d'entrée
      }, 500); // 500 est la durée de l'animation définie dans le CSS
    }
  }

  const handleStepClick = (clickedStep: number) => {
    if (clickedStep < step) {
      setStep(clickedStep);
    }
  };
  // const nextPage = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   if (step < 5) {
  //     event.preventDefault();
  //     setStep(step + 1);
  //   }
  // }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          // <div className='container-step'>
          <div className={`container-step fade ${isEntering ? 'fade-entering' : 'fade-entered'}`}>
            <div className='box-img'>
              <img src={mm} alt=''></img>
            </div>
            <div className='container-info'>
              {/* <StepIndicator steps={5} currentStep={step} /> */}
              <StepIndicator steps={5} currentStep={step} onStepClick={handleStepClick} />

              <div className='box-info'>
                <h4>First thing first, what country is your club from ?</h4>
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" required />
              </div>
              <div className='box-info'>
                <h4>What city your club represents ?</h4>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
              </div>
              <div className='box-btn'>
                <button type="submit" onClick={nextPage}>{step < 5 ? "Next" : "Submit"}</button>
              </div>
            </div>
          </div>
        );
      case 2:

        return (
          // <div className='container-step'>
          <div className={`container-step fade ${isEntering ? 'fade-entering' : 'fade-entered'}`}>
            <div className='box-img'>
              <img src={log} alt=''></img>
            </div>
            <div className='container-info'>
              {/* <StepIndicator steps={5} currentStep={step} /> */}
              <StepIndicator steps={5} currentStep={step} onStepClick={handleStepClick} />

              <div className='box-info'>
                <h4>Name of club</h4>
                <input type="text" value={clubName} onChange={(e) => setClubName(e.target.value)} placeholder="Club Name" required />
              </div>

              <div className='box-logo'>
                <label htmlFor="clubLogo">Entrer le logo de votre club:</label>
                <input id="clubLogo" type="file" onChange={handleFileChange} />
              </div>
              <div className='box-btn'>
                <button type="submit" onClick={nextPage}>{step < 5 ? "Next" : "Submit"}</button>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          // <div className='container-step'>
          <div className={`container-step fade ${isEntering ? 'fade-entering' : 'fade-entered'}`}>
            <div className='box-img'>
              <img src={club} alt=''></img>
            </div>
            <div className='container-info'>
              {/* <StepIndicator steps={5} currentStep={step} /> */}
              <StepIndicator steps={5} currentStep={step} onStepClick={handleStepClick} />

              <div className='box-info'>
                <h4>First Name of Manager</h4>
                <input type="text" value={managerName} onChange={(e) => setManagerName(e.target.value)} placeholder="Manager Name" required />
              </div>

              <div className='box-info'>
                <h4>Surname of Manager</h4>
                <input type="text" value={managerName} onChange={(e) => setManagerName(e.target.value)} placeholder="Manager Name" required />
              </div>
              <div className='box-btn'>
                <button type="submit" onClick={nextPage}>{step < 5 ? "Next" : "Submit"}</button>
              </div>

            </div>
          </div>
        );
      case 4:
        return (
          // <div className='container-step'>
          <div className={`container-step fade ${isEntering ? 'fade-entering' : 'fade-entered'}`}>
            <div className='box-img'>
              <img src={stadium} alt=''></img>
            </div>
            <div className='container-info'>
              {/* <StepIndicator steps={5} currentStep={step} /> */}
              <StepIndicator steps={5} currentStep={step} onStepClick={handleStepClick} />

              <div className='box-info'>
                <h4>Name of Stadium</h4>
                <input type="text" value={stadiumName} onChange={(e) => setStadiumName(e.target.value)} placeholder="Stadium Name" required />
              </div>
              <div className='box-btn'>
                <button type="submit" onClick={nextPage}>{step < 5 ? "Next" : "Submit"}</button>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          // <div className='container-step'>
          <div className={`container-step fade ${isEntering ? 'fade-entering' : 'fade-entered'}`}>
            <div className='box-img'>
              <img src={mm} alt=''></img>
            </div>
            <div className='container-info'>
              {/* <StepIndicator steps={5} currentStep={step} /> */}
              <StepIndicator steps={5} currentStep={step} onStepClick={handleStepClick} />

              <div className='box-info'>
                <h4>Tactic </h4>
                <input type="text" value={tactic} onChange={(e) => setTactic(e.target.value)} placeholder="Tactic" required />
              </div>
              <div className='box-btn'>
                <button type="submit" onClick={nextPage}>{step < 5 ? "Next" : "Submit"}</button>
              </div>

            </div>
          </div>
        );
      default:
        return null;
    }
  }

  // const renderForm = () => {
  // if (!user) {
  //   return (
  //     <div>
  //       <p>Veuillez vous connecter pour accéder à cette page.</p>
  //       <button onClick={() => {/* TODO: Rediriger vers la page de connexion */}}>Sign In</button>
  //       <button onClick={() => {/* TODO: Rediriger vers la page d'inscription */}}>Sign Up</button>
  //     </div>
  //   );
  // }

  return (
    <div className='container-user-info'>
      <form onSubmit={handleSubmit} className="form-user-info">
        {renderStepContent()}
      </form>
    </div>
  );
};

// return renderForm();
// };

export default UserInformation;