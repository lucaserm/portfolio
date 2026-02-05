import LiveWebsites from '@/components/live-website';

export default function Websites() {
  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-12">
        <h2 className="mb-12 text-4xl font-bold">Live Websites</h2>
        <LiveWebsites />
      </div>
    </section>
  );
}
