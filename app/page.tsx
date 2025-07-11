import { redirect } from 'next/navigation';

export default function RootPage() {
  // This will be handled by the middleware, but as a fallback
  redirect('/en');
}