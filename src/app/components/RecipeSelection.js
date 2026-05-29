'use client';
import { useState } from 'react';

export default function RecipeSelection({ brand, recipes, onSubmit }) {
  const [checkedFiles, setCheckedFiles] = useState({});

  // Ορίζουμε το χρώμα ανάλογα με το prop 'brand'
  const primaryColor = brand === 'laoudis' ? '#912242' : '#1b79be';

  const handleToggle = (filename) => {
    setCheckedFiles(prev => ({ ...prev, [filename]: !prev[filename] }));
  };

  const handleConfirm = () => {
    const selected = Object.keys(checkedFiles).filter(file => checkedFiles[file]);
    onSubmit(selected);
  };

  return (
    <div className="w-[580px] mx-auto flex flex-col items-center justify-between h-full py-8 animate-fadeIn">
      <div className="text-center space-y-8 w-full">
        <h2 className="text-[20px] font-bold text-[#1E293B] max-w-[500px] mx-auto leading-snug">
          Παρακαλώ επιλέξτε τις συνταγές που σας ενδιαφέρουν από την παρακάτω λίστα!
        </h2>
        
        <div className="w-full max-h-[620px] overflow-y-auto pr-2 space-y-1 text-left custom-scrollbar">
          {recipes.map((recipe, index) => {
            const displayTitle = recipe.filename.replace('.pdf', '');
            const isChecked = !!checkedFiles[recipe.filename];

            return (
              <div key={index} className="flex items-center justify-between w-full py-3.5 border-b border-slate-100 last:border-0 select-none cursor-pointer" onClick={() => handleToggle(recipe.filename)}>
                <div className="flex-shrink-0 pointer-events-none">
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" checked={isChecked} readOnly className="sr-only" />
                    <div className="w-11 h-6 rounded-full transition-all relative" style={{ backgroundColor: isChecked ? primaryColor : '#E2E8F0' }}>
                      <div className={`absolute top-[2px] left-[2px] bg-white rounded-full h-5 w-5 transition-all transform ${isChecked ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </div>
                  </label>
                </div>
                
                <div className="flex items-center flex-grow pl-6 overflow-hidden">
                  <span className="text-[16px] font-medium text-[#334155] whitespace-nowrap bg-[#FAFAFC] pr-2 z-10" style={{ color: isChecked ? primaryColor : '#334155' }}>
                    {displayTitle}
                  </span>
                  <div className="flex-grow border-b-2 border-dotted border-slate-300 mx-1 translate-y-[4px]"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button 
        onClick={handleConfirm}
        // Το κουμπί είναι disabled/γκρι αν δεν έχει επιλεχθεί καμία συνταγή
        disabled={Object.keys(checkedFiles).filter(file => checkedFiles[file]).length === 0}
        className={`w-[562px] h-[60px] text-white text-[18px] font-semibold rounded-xl shadow-md transition-all mt-6 ${Object.keys(checkedFiles).filter(file => checkedFiles[file]).length === 0 ? 'bg-slate-300 cursor-not-allowed' : 'active:scale-[0.99]'}`}
        style={{ backgroundColor: Object.keys(checkedFiles).filter(file => checkedFiles[file]).length === 0 ? '#CBD5E1' : primaryColor }}
      >
        Συνέχεια
      </button>
    </div>
  );
}