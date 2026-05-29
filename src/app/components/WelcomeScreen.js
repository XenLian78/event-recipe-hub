'use client';
import { useState } from 'react';

export default function WelcomeScreen({ onSubmit }) {
  // Ορίζουμε by default την GB
  const [brand, setBrand] = useState('gb'); 
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [errorType, setErrorType] = useState(null);

  // Δυναμικές μεταβλητές βάσει του επιλεγμένου brand
  const isLaoudis = brand === 'laoudis';
  const logoSrc = isLaoudis ? '/Laoudis-logo.svg' : '/GB-LOGO.svg';
  const welcomeTitle = isLaoudis ? 'Καλώς ήρθατε στη Laoudis Foods!' : 'Καλώς ήρθατε στη G&B Experts!';
  const primaryColor = isLaoudis ? '#D32F2F' : '#1b79be';

  const handleContinue = () => {
    const cleanEmail = email.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (cleanEmail === "") {
      setErrorType('empty');
      return;
    }
    if (!emailPattern.test(cleanEmail)) {
      setErrorType('invalid');
      return;
    }

    setErrorType(null);
    // Στέλνουμε στο page.js ΟΛΑ τα δεδομένα: email, company ΚΑΙ το επιλεγμένο brand
    onSubmit({ email: cleanEmail, company: company.trim(), brand });
  };

  return (
    <div className="w-[562px] mx-auto flex flex-col items-center text-center space-y-10 my-auto animate-fadeIn">
      
      {/* TOGGLE BUTTON ΕΝΑΛΛΑΓΗΣ ΕΤΑΙΡΕΙΩΝ */}
      <div className="flex bg-slate-100 p-1 rounded-full w-full max-w-[350px] shadow-inner mb-2">
        <button
          type="button"
          onClick={() => setBrand('gb')}
          className={`flex-1 py-2 text-sm font-bold rounded-full transition-all duration-300 ${!isLaoudis ? 'bg-white text-[#0B3B60] shadow' : 'text-slate-400 hover:text-slate-600'}`}
        >
          G&B Experts
        </button>
        <button
          type="button"
          onClick={() => setBrand('laoudis')}
          className={`flex-1 py-2 text-sm font-bold rounded-full transition-all duration-300 ${isLaoudis ? 'bg-white text-[#D32F2F] shadow' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Laoudis Foods
        </button>
      </div>

      <div className="w-[361px] h-[133px] flex justify-center items-center">
        <img src={logoSrc} alt="Brand Logo" className="object-contain max-w-full max-h-full transition-opacity duration-300" />
      </div>

      <div className="space-y-4">
        <h1 className="text-[28px] font-bold text-[#1E293B] transition-colors">{welcomeTitle}</h1>
        <p className="text-[16px] text-[#64748B] leading-relaxed">
          Επιθυμείτε να λάβετε τις συνταγές στο email σας;<br />Συμπληρώστε τα παρακάτω πεδία:
        </p>
      </div>

      <div className="w-full space-y-5 text-left">
        <input 
          type="text" 
          placeholder="Επωνυμία Εταιρείας (προαιρετικό)" 
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full h-[60px] px-5 rounded-xl border border-[#E2E8F0] bg-white text-[16px] text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all"
          style={{ '--tw-ring-color': primaryColor, borderColor: company ? primaryColor : '#E2E8F0' }}
        />
        
        <input 
          type="email" 
          placeholder="E-mail *" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[60px] px-5 rounded-xl border border-[#E2E8F0] bg-white text-[16px] text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all"
          style={{ '--tw-ring-color': primaryColor, borderColor: email ? primaryColor : '#E2E8F0' }}
        />

        <button 
          onClick={handleContinue} 
          className="w-full h-[60px] text-white text-[18px] font-semibold rounded-xl shadow-md transition-all active:scale-[0.99] mt-4"
          style={{ backgroundColor: primaryColor }}
        >
          Συνέχεια
        </button>
      </div>

      {/* ERROR MODAL */}
      {errorType && (
        <>
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-40" onClick={() => setErrorType(null)}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white rounded-2xl p-10 shadow-2xl z-50 text-center border border-[#F1F5F9] animate-scaleUp">
            <p className="text-[18px] font-medium text-[#334155] leading-relaxed mb-6">
              {errorType === 'empty' 
                ? 'Η συμπλήρωση του e-mail σας είναι υποχρεωτική.' 
                : 'Παρακαλούμε συμπληρώστε σωστά τα στοιχεία του e-mail σας.'}
            </p>
            <button onClick={() => setErrorType(null)} className="px-8 py-2.5 bg-[#334155] text-white font-semibold rounded-xl text-[15px] hover:bg-[#1E293B] transition-all">Διόρθωση</button>
          </div>
        </>
      )}
    </div>
  );
}