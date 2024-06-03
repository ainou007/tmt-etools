import ReactDOM from 'react-dom/client';
import './styles/app.css';
import AppRouter from './routes/AppRouter';
import { Toaster } from '@/components/ui/sonner';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <AppRouter />
    <Toaster closeButton richColors />
  </>
);
