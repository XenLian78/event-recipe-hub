'use client';
import { useState } from 'react';

export default function WelcomeScreen({ brand, onSubmit }) {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [errorType, setErrorType] = useState(null);

  const logoSrc = brand === 'laoudis' ? '/Laoudis-logo.svg' : '/GB-logo.svg';
  const welcomeTitle = brand === 'laoudis' ? 'Καλώς ήρθατε στη Laoudis Foods!' : 'Καλώς ήρθατε στην G&B Experts!';

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
    onSubmit(cleanEmail, company.trim());
  };

  return (
    <div className="w-[562px] mx-auto flex flex-col items-center text-center space-y-12 my-auto animate-fadeIn">
      <div className="w-[361px] h-[133px] flex justify-center items-center">
        <img src={logoSrc} alt="Brand Logo" className="object-contain max-w-full max-h-full" />
      </div>

      <div className="space-y-4">
        <h1 className="text-[28px] font-bold text-[#1E293B]">{welcomeTitle}</h1>
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
          style={{ '--tw-ring-color': 'var(--primary)', 'borderColor': 'var(--primary)' }}
        />
        
        <input 
          type="email" 
          placeholder="E-mail *" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-[60px] px-5 rounded-xl border border-[#E2E8F0] bg-white text-[16px] text-[#1E293B] focus:outline-none focus:ring-2 focus:ring-opacity-20 transition-all"
          style={{ '--tw-ring-color': 'var(--primary)', 'borderColor': 'var(--primary)' }}
        />

        <button 
          onClick={handleContinue} 
          className="w-full h-[60px] text-white text-[18px] font-semibold rounded-xl shadow-md transition-all active:scale-[0.99] mt-4"
          style={{ backgroundColor: 'var(--primary)' }}
        >
          Συνέχεια
        </button>
      </div>

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