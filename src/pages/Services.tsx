import Header from "@/components/Header";
import ServiceHighlights from "@/components/ServiceHighlights";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServiceHighlights />
      </main>
      <Footer />
    </div>
  );
};

export default Services;