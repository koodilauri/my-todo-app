import { AppProps } from 'next/app';
import { Provider as TodoProvider } from '../context/TodoContext';
import '@/styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TodoProvider>
      <Component {...pageProps} />;
    </TodoProvider>
  );
}
