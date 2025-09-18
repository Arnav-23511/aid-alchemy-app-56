import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Star, Clock, MapPin, CheckCircle, Heart, Award, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description: "All caretakers undergo thorough background checks, Aadhaar verification, and skill assessments."
    },
    {
      icon: Users,
      title: "Trusted Community",
      description: "Join thousands of property owners and caretakers who trust our platform for reliable connections."
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description: "Rating and review system ensures high-quality service and accountability."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer support with complaint handling and dispute resolution."
    },
    {
      icon: MapPin,
      title: "Location-Based Matching",
      description: "Find caretakers in your exact area with precise location matching technology."
    },
    {
      icon: CheckCircle,
      title: "Secure Transactions",
      description: "Safe and transparent payment system with clear pricing and satisfaction guarantees."
    }
  ];

  const stats = [
    { number: "1,200+", label: "Properties Protected" },
    { number: "500+", label: "Verified Caretakers" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Support Available" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Trust & Reliability",
      description: "We believe trust is the foundation of every successful caretaker-owner relationship."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "We strive for excellence in every interaction and continuously improve our platform."
    },
    {
      icon: Zap,
      title: "Innovation & Technology",
      description: "We leverage cutting-edge technology to make property care simple and efficient."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-hero text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About CareTaker Pro</h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              India's premier platform connecting property owners with trusted, verified caretakers. 
              We're revolutionizing property management through technology, trust, and transparency.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                To create a secure, reliable, and efficient ecosystem where property owners can find 
                trustworthy caretakers, and skilled professionals can find meaningful employment 
                opportunities. We bridge the gap between property security needs and professional 
                caretaking services through innovative technology and rigorous verification processes.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose CareTaker Pro?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We've built a comprehensive platform that addresses every aspect of property caretaking, 
                from finding the right professional to ensuring ongoing quality service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white shadow-card hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="text-primary mb-4">
                      <feature.icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  CareTaker Pro was born from a simple observation: property owners across India 
                  struggle to find reliable, trustworthy caretakers for their valuable assets, 
                  while skilled professionals in the caretaking industry lack access to quality 
                  employment opportunities.
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Founded in 2024, we set out to solve this problem by creating a technology-driven 
                  platform that brings transparency, security, and efficiency to the property 
                  caretaking industry. Our team combines deep expertise in technology, property 
                  management, and human resources to deliver a solution that works for everyone.
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  Today, we're proud to serve thousands of property owners and caretakers across 
                  major Indian cities, with plans to expand nationwide. Our commitment to quality, 
                  security, and customer satisfaction drives everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These core values guide our decisions and shape our platform's development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How CareTaker Pro Works</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process makes it easy to find and hire the perfect caretaker for your property.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Post Your Requirement</h3>
                  <p className="text-muted-foreground">
                    Share details about your property and caretaking needs through our simple form.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Browse Verified Profiles</h3>
                  <p className="text-muted-foreground">
                    Review profiles of verified caretakers in your area, complete with ratings and reviews.
                  </p>
                </div>

                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Hire with Confidence</h3>
                  <p className="text-muted-foreground">
                    Connect directly with your chosen caretaker and start your professional relationship.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-16 bg-gradient-service">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Built with Modern Technology</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our platform leverages cutting-edge technology to ensure security, reliability, and ease of use. 
                From AI-powered matching algorithms to secure payment processing, every aspect of CareTaker Pro 
                is designed with the latest technological innovations.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="px-4 py-2">React & TypeScript</Badge>
                <Badge variant="secondary" className="px-4 py-2">Secure Authentication</Badge>
                <Badge variant="secondary" className="px-4 py-2">Real-time Messaging</Badge>
                <Badge variant="secondary" className="px-4 py-2">GPS Location Services</Badge>
                <Badge variant="secondary" className="px-4 py-2">Payment Gateway Integration</Badge>
                <Badge variant="secondary" className="px-4 py-2">AI-Powered Matching</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Have questions about our platform? Want to learn more about how CareTaker Pro can help you? 
                We'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                <p className="flex items-center justify-center space-x-2">
                  <span className="font-semibold">Email:</span>
                  <span>support@caretakerpro.com</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <span className="font-semibold">Phone:</span>
                  <span>+91 98765 43210</span>
                </p>
                <p className="flex items-center justify-center space-x-2">
                  <span className="font-semibold">Address:</span>
                  <span>123 Business District, Mumbai, Maharashtra 400001</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;