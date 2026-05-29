'use client';

export default function ThankYouModal({ brand, onClose }) {
  const isLaoudis = brand === 'laoudis';
  const logoSrc = isLaoudis ? '/Laoudis-logo.svg' : '/GB-LOGO.svg';
  const primaryColor = isLaoudis ? '#912242' : '#1b79be';

  return (
    <>
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-40"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] bg-[#FAFAFC] rounded-3xl p-12 shadow-2xl z-50 text-center border border-[#F1F5F9] flex flex-col items-center space-y-8 animate-scaleUp">
        
        <div className="w-[280px] h-[100px] flex justify-center items-center">
          <img src={logoSrc} alt="Brand Logo" className="object-contain max-w-full max-h-full" />
        </div>
        
        <div className="space-y-3">
          <h3 className="text-[24px] font-bold text-[#1E293B]">Ευχαριστούμε!</h3>
          <p className="text-[16px] text-[#64748B] leading-relaxed">
            Οι συνταγές έχουν αποσταλεί στο<br />e-mail σας. Καλή συνέχεια!
          </p>
        </div>

        <button 
          onClick={onClose}
          className="w-full h-[55px] border font-semibold rounded-xl text-[16px] transition-all bg-white hover:bg-slate-50 active:scale-[0.99]"
          style={{ color: primaryColor, borderColor: primaryColor }}
        >
          Νέα Καταχώρηση
        </button>
      </div>
    </>
  );
}