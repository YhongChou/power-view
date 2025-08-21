import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import SuspendLoading from './pages/layout/SuspendLoading.tsx';

import './index.css';
import './assets/css/reset.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<SuspendLoading />}>
      <App />
    </Suspense>
  </StrictMode>
);
