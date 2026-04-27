import { siteConfig } from '@/lib/data';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.phoneWa}?text=${encodeURIComponent('Hola ReformaT! Me interesa un presupuesto.')}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-xl shadow-green-500/25 transition-all hover:scale-110 active:scale-95 whatsapp-pulse"
      aria-label="WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </a>
  );
}