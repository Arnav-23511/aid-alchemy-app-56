import Header from "@/components/Header";
import ServiceHighlights from "@/components/ServiceHighlights";
import Footer from "@/components/Footer";

const Index = () => {
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

export default Index;
