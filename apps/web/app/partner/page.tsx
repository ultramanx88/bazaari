import { redirect } from 'next/navigation';

// Redirect /partner to /partner/terms
export default function PartnerPage() {
  redirect('/partner/terms');
}