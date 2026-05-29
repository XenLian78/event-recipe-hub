'use client';
import { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import RecipeSelection from './components/RecipeSelection';
import ThankYouModal from './components/ThankYouModal';

export default function Home() {
  // Ορίζουμε σε ποιο βήμα βρίσκεται ο χρήστης: 'welcome', 'selection', ή 'thanks'
  const [step, setStep] = useState('welcome');
  const [selectedBrand, setSelectedBrand] = useState('');

  // Ψεύτικα δεδομένα για δοκιμή (αντικατέστησέ τα με τα δικά σου)
  const mockRecipes = [
    { id: 1, name: 'Cake 1' },
    { id: 2, name: 'Cake 2' }
  ];

  const handleStart = (brand) => {
    setSelectedBrand(brand);
    setStep('selection');
  };

  const handleRecipeSubmit = (selectedRecipes) => {
    console.log('Selected:', selectedRecipes);
    setStep('thanks');
  };

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {step === 'welcome' && (
        <WelcomeScreen onStart={handleStart} />
      )}

      {step === 'selection' && (
        <RecipeSelection 
          brand={selectedBrand} 
          recipes={mockRecipes} 
          onSubmit={handleRecipeSubmit} 
        />
      )}

      {step === 'thanks' && (
        <ThankYouModal onClose={() => setStep('welcome')} />
      )}
    </main>
  );
}
