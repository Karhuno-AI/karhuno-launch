"use client";
import React, { useEffect, useState, useRef } from 'react';
import { Radar, Search, Filter, Mail, Users, Briefcase, UserCheck, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { toast } from "sonner"
import NavBar from '@/components/home/NavBar';
import Link from 'next/link';

export default function LinkedInRadar()  {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [signupCount, setSignupCount] = useState(73); // Starting at 73 to create urgency
  const [spotsLeft, setSpotsLeft] = useState(100 - 73);
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sectionRefs = {
    hero: useRef(null),
    howItWorks: useRef(null),
    whoItsFor: useRef(null),
    useCases: useRef(null),
    pricing: useRef(null),
  };

  // Handle scroll and section visibility
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section in sectionRefs) {
        const element = sectionRefs[section].current;
        if (element && 
            scrollPosition >= element.offsetTop && 
            scrollPosition < (element.offsetTop + element.offsetHeight)) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRefs]);

  const scrollToSection = (sectionId: any) => {
    const section = sectionRefs[sectionId].current;
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Flip card functionality
  const [flippedCard, setFlippedCard] = useState(null);

  const flipCard = (index: any) => {
    if (flippedCard === index) {
      setFlippedCard(null);
    } else {
      setFlippedCard(index);
    }
  };

  // Email capture for waitlist
  const [email, setEmail] = useState('');

  const handleJoinWaitlist = (e: any) => {
    e.preventDefault();
    
    // Update counter for spots left
    const newSignupCount = signupCount + 1;
    const newSpotsLeft = 100 - newSignupCount;
    
    setSignupCount(newSignupCount);
    setSpotsLeft(newSpotsLeft > 0 ? newSpotsLeft : 0);
    
    // Show success toast
    toast({
      title: "You're on the list!",
      description: `You've secured one of the ${spotsLeft} remaining free access spots! We'll notify you when we launch.`,
      duration: 5000,
    });
    
    // Reset form
    setEmail('');
  };

  return (
    <div className={`min-h-screen bg-white ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* Navigation Bar */}
      <NavBar />
      
      {/* Sticky section nav */}
      <div className="sticky top-0 z-20 bg-white shadow-sm transform transition-all duration-300 translate-y-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4 md:justify-center md:space-x-10">
            <div className="hidden md:flex space-x-8 items-center">
              {Object.keys(sectionRefs).map((section) => (
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium font-montserrat px-3 py-2 rounded-md transition-colors duration-200 ${
                    activeSection === section 
                      ? 'text-violet bg-violet bg-opacity-10' 
                      : 'text-gray-600 hover:text-violet'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1).replace(/([A-Z])/g, ' $1')}
                </button>
              ))}
            </div>
            
            <div className="md:hidden">
              <Button 
                variant="outline"
                size="sm" 
                className="text-violet border-violet font-montserrat"
                onClick={() => scrollToSection('pricing')}
              >
                Claim Free Access
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        ref={sectionRefs.hero} 
        className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-3/5 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-roboto leading-tight">
              Be the First to Access <span className="text-violet">LinkedIn Radar</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-4 max-w-2xl font-montserrat">
              We find people who actually post about your topic on LinkedIn. Then we filter by job and company to give you the right leads.
            </p>
            <div className="bg-violet bg-opacity-10 rounded-lg p-4 mb-8 inline-block">
              <p className="text-lg font-bold text-violet font-montserrat">
                <span className="block">🔥 Only {spotsLeft} Free Access Spots Left!</span>
                <span className="text-sm font-normal">Be one of the first 100 users to get free access</span>
              </p>
            </div>
            <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-2 max-w-lg">
              <Input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button 
                type="submit"
                className="bg-violet text-white font-montserrat font-bold tracking-wide"
              >
                CLAIM YOUR FREE ACCESS
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-2 font-montserrat">
              100% free for our first 100 users. No payment info required.
            </p>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 bg-violet bg-opacity-10 rounded-full flex items-center justify-center">
                <div className="relative">
                  <div className="relative">
                    <div className="w-48 h-48 rounded-full bg-violet bg-opacity-20 flex flex-col items-center justify-center p-4">
                      <Radar size={38} className="text-violet mb-3" />
                      <div className="text-4xl">🐻</div>
                      <div className="mt-2 text-center">
                        <span className="block text-sm text-violet font-bold">LinkedIn Radar</span>
                      </div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow flex items-center justify-center">
                      <div className="text-sm">👤</div>
                    </div>
                    <div className="absolute -bottom-4 -right-8 w-24 h-16 bg-white rounded-lg shadow p-1">
                      <div className="text-xs text-gray-700 font-montserrat">Just switched CRM...</div>
                    </div>
                    <div className="absolute -bottom-8 -left-8 w-24 h-16 bg-white rounded-lg shadow p-1">
                      <div className="text-xs text-gray-700 font-montserrat">Hiring SDRs...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section 
        ref={sectionRefs.howItWorks}
        className="py-20 px-6 md:px-12 bg-graybg"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-roboto">How It Works</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-montserrat">
              Simple steps to find the perfect leads from real LinkedIn conversations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Step 1 – Enter Keywords",
                description: "e.g. \"hiring SDR\" or \"CRM migration\" → we scan live posts",
                icon: Search,
                bg: "bg-mint"
              },
              {
                title: "Step 2 – Filter for Fit",
                description: "Filter by title, seniority, company type",
                icon: Filter,
                bg: "bg-violet"
              },
              {
                title: "Step 3 – Get Leads",
                description: "See who posted, what they wrote, and get their contact info",
                icon: Mail,
                bg: "bg-gray-100"
              }
            ].map((step, index) => {
              const StepIcon = step.icon;
              return (
                <div 
                  key={index} 
                  className="perspective-1000 h-80"
                  onClick={() => flipCard(index)}
                >
                  <div className={`rounded-xl shadow-card h-full transition-transform duration-300 transform-style-preserve-3d cursor-pointer ${flippedCard === index ? 'rotate-y-180' : ''}`}>
                    {/* Front of card */}
                    <div className={`${step.bg} ${step.bg === 'bg-violet' ? 'text-white' : 'text-gray-800'} rounded-xl p-8 h-full flex flex-col items-center justify-center absolute backface-hidden w-full`}>
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${step.bg === 'bg-violet' ? 'bg-white bg-opacity-20' : 'bg-white'}`}>
                        <StepIcon size={32} className={step.bg === 'bg-violet' ? 'text-white' : 'text-violet'} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold mb-3 text-center font-roboto">{step.title}</h3>
                      <p className="text-center font-montserrat">{step.description}</p>
                      <div className="mt-6 text-sm">
                        (Tap to see details)
                      </div>
                    </div>
                    
                    {/* Back of card */}
                    <div className="bg-white rounded-xl p-8 h-full flex flex-col justify-center absolute backface-hidden w-full rotate-y-180">
                      <h4 className="text-lg font-bold mb-4 font-roboto">{step.title}</h4>
                      {index === 0 && (
                        <>
                          <p className="mb-4 font-montserrat">Enter any keyword relevant to your business:</p>
                          <ul className="space-y-2 font-montserrat">
                            <li className="flex items-center"><span className="w-2 h-2 bg-violet rounded-full mr-2"></span> &quot;Looking for new CRM&quot;</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-violet rounded-full mr-2"></span> &quot;Need marketing agency&quot;</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-violet rounded-full mr-2"></span> &quot;Hiring sales team&quot;</li>
                          </ul>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <p className="mb-4 font-montserrat">Narrow down your results with precision:</p>
                          <ul className="space-y-2 font-montserrat">
                            <li className="flex items-center"><span className="w-2 h-2 bg-violet rounded-full mr-2"></span> Title: CEO, CTO, Marketing Director</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-violet rounded-full mr-2"></span> Company size: 10-100, 100-500</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-violet rounded-full mr-2"></span> Industry: SaaS, Healthcare, Finance</li>
                          </ul>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <p className="mb-4 font-montserrat">Get actionable lead information:</p>
                          <ul className="space-y-2 font-montserrat">
                            <li className="flex items-center"><span className="w-2 h-2 bg-violet rounded-full mr-2"></span> Complete post content</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-violet rounded-full mr-2"></span> Profile details</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-violet rounded-full mr-2"></span> Email & contact info</li>
                          </ul>
                        </>
                      )}
                      <div className="mt-auto text-center">
                        <button className="text-violet font-medium hover:underline font-montserrat">Flip back</button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section 
        ref={sectionRefs.whoItsFor}
        className="py-20 px-6 md:px-12 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-roboto">Who It&apos;s For</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-montserrat">
              See if LinkedIn Radar is right for your use case
            </p>
          </div>

          {/* Timeline visualization */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-violet bg-opacity-20"></div>

            <div className="space-y-24 relative">
              {[
                {
                  title: "SDRs & Sales Teams",
                  description: "Find prospects actively discussing pain points your product solves",
                  icon: Briefcase,
                  isLeft: true
                },
                {
                  title: "B2B Marketers",
                  description: "Discover content opportunities by monitoring trending discussions",
                  icon: Users,
                  isLeft: false
                },
                {
                  title: "Agencies",
                  description: "Identify potential clients asking for services you offer",
                  icon: Briefcase,
                  isLeft: true
                },
                {
                  title: "Solo Founders & Consultants",
                  description: "Connect with decision-makers at your target companies",
                  icon: UserCheck,
                  isLeft: false
                },
                {
                  title: "Recruiters",
                  description: "Find candidates and companies with hiring needs",
                  icon: Users,
                  isLeft: true
                },
              ].map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <div key={index} className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-violet flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    
                    <div className={`flex ${item.isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-center`}>
                      <div className={`md:w-1/2 ${item.isLeft ? 'md:pr-16' : 'md:pl-16'} md:text-${item.isLeft ? 'right' : 'left'} md:mt-0 mt-6`}>
                        <Card className={`p-6 shadow-md ${item.isLeft ? 'ml-auto' : 'mr-auto'} max-w-md transform transition-all hover:translate-y-1 hover:shadow-lg`}>
                          <div className="flex items-center mb-4">
                            <div className="w-10 h-10 rounded-full bg-violet bg-opacity-20 flex items-center justify-center mr-4">
                              <ItemIcon size={20} className="text-violet" />
                            </div>
                            <h4 className="text-xl font-bold font-roboto">{item.title}</h4>
                          </div>
                          <p className="text-gray-700 font-montserrat">{item.description}</p>
                        </Card>
                      </div>
                      <div className="md:w-1/2 hidden md:block"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg mb-8 font-montserrat max-w-2xl mx-auto">
              If you see yourself in one of these — claim your free access now. 
              Only {spotsLeft} spots left out of our first 100 users!
            </p>
            <Button 
              onClick={() => scrollToSection('pricing')} 
              className="bg-violet text-white font-montserrat font-bold tracking-wide px-8 py-3"
            >
              CLAIM YOUR FREE ACCESS SPOT NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section 
        ref={sectionRefs.useCases}
        className="py-20 px-6 md:px-12 bg-graybg"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-roboto">Use Cases</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-montserrat">
              Discover how LinkedIn Radar can work for your specific needs
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="saas-founders">
                <AccordionTrigger className="text-left font-roboto font-bold text-xl py-4">
                  SaaS Founders
                </AccordionTrigger>
                <AccordionContent className="font-montserrat">
                  <p className="mb-4">Track posts like &quot;switching CRM&quot; and reach decision-makers early</p>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Sarah Chen, CTO</p>
                        <p className="text-sm text-gray-500">Yesterday at 2:15 PM</p>
                        <p className="mt-2">Our team is looking to switch from [CRM X] to something more scalable as we&apos;ve outgrown it. Any recommendations? We need something that integrates well with [Tool Y].</p>
                      </div>
                    </div>
                    <div className="ml-11 text-violet text-sm font-medium">
                      • 23 comments • 14 decision-makers engaged
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="recruiters">
                <AccordionTrigger className="text-left font-roboto font-bold text-xl py-4">
                  Recruiters
                </AccordionTrigger>
                <AccordionContent className="font-montserrat">
                  <p className="mb-4">Find &quot;we&apos;re hiring&quot; posts before they hit job boards</p>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Michael Johnson, CEO</p>
                        <p className="text-sm text-gray-500">3 days ago</p>
                        <p className="mt-2">Excited to announce that we&apos;re expanding our development team! Looking for senior developers with experience in React and Node.js. DM me if interested or tag someone who might be a good fit!</p>
                      </div>
                    </div>
                    <div className="ml-11 text-violet text-sm font-medium">
                      • 42 comments • Position not yet on job boards
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="sales-consultants">
                <AccordionTrigger className="text-left font-roboto font-bold text-xl py-4">
                  Sales Consultants
                </AccordionTrigger>
                <AccordionContent className="font-montserrat">
                  <p className="mb-4">Identify prospects talking about outbound pain points</p>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Alex Rivera, Sales Director</p>
                        <p className="text-sm text-gray-500">Last week</p>
                        <p className="mt-2">Our outbound process is broken. We&apos;re getting poor response rates and our SDR team is spending too much time on manual tasks. Has anyone implemented a good sales automation tool recently?</p>
                      </div>
                    </div>
                    <div className="ml-11 text-violet text-sm font-medium">
                      • 37 comments • 8 vendors recommended
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="marketing-agencies">
                <AccordionTrigger className="text-left font-roboto font-bold text-xl py-4">
                  Marketing Agencies
                </AccordionTrigger>
                <AccordionContent className="font-montserrat">
                  <p className="mb-4">Spot &quot;need help with ads&quot; posts and extract the poster&apos;s profile</p>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start mb-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <p className="font-medium">Emma Wilson, Marketing Manager</p>
                        <p className="text-sm text-gray-500">4 days ago</p>
                        <p className="mt-2">We&apos;ve been struggling with our Facebook ad performance lately. Costs are up, conversions are down. Has anyone worked with a good Facebook ads agency recently that specializes in ecommerce?</p>
                      </div>
                    </div>
                    <div className="ml-11 text-violet text-sm font-medium">
                      • 29 comments • 11 agency recommendations
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Pricing + Final CTA Section */}
      <section 
        ref={sectionRefs.pricing}
        className="py-20 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-roboto">Pricing</h2>
            <div className="bg-violet text-white p-4 rounded-lg inline-block mb-6">
              <p className="font-bold">🔥 SPECIAL LAUNCH OFFER</p>
              <p>First 100 users get FREE access to the Medium plan!</p>
              <p className="text-sm mt-1">Only {spotsLeft} spots remaining</p>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-montserrat">
              Simple, transparent pricing with no hidden fees
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Light",
                price: "$19",
                features: ["5 alerts", "20 posts/day", "Email support"],
                popular: false,
                color: "bg-gray-50"
              },
              {
                name: "Medium",
                price: "FREE",
                originalPrice: "$39",
                features: ["15 alerts", "50 posts/day", "Email + chat support", "Advanced filters"],
                popular: true,
                color: "bg-mint"
              },
              {
                name: "Pro",
                price: "$59",
                features: ["30 alerts", "Unlimited posts", "Priority support", "Advanced filters", "API access"],
                popular: false,
                color: "bg-violet text-white"
              }
            ].map((plan, index) => (
              <div key={index} className={`${plan.color} rounded-xl p-8 shadow-card flex flex-col ${plan.popular ? 'transform md:-translate-y-4' : ''}`}>
                {plan.popular && (
                  <div className="bg-violet text-white py-1 px-4 rounded-full text-sm font-bold self-start mb-4">
                    FREE FOR FIRST 100 USERS
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 font-roboto">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-sm ml-2 line-through">{plan.originalPrice}</span>
                  )}
                  {plan.price !== "FREE" && <span className="text-sm">/month</span>}
                </div>
                <ul className="mb-8 space-y-3 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className={`mr-2 ${plan.color === "bg-violet text-white" ? "text-mint" : "text-violet"}`}>✓</span>
                      <span className="font-montserrat">{feature}</span>
                    </li>
                  ))}
                </ul>
                <form onSubmit={handleJoinWaitlist} className="mt-auto">
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    className="mb-3"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Button 
                    type="submit"
                    className={`w-full ${plan.color === "bg-violet text-white" 
                      ? "bg-white text-violet hover:bg-gray-100" 
                      : "bg-violet text-white"}`}
                  >
                    {plan.popular ? "CLAIM FREE ACCESS" : "JOIN WAITLIST"}
                  </Button>
                </form>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 font-roboto">
              Don&apos;t Miss This Limited Offer!
            </h3>
            <p className="text-lg mb-8 font-montserrat">
              Only the first 100 users get free access to LinkedIn Radar.
              Currently, only {spotsLeft} spots remain!
            </p>
            <div className="h-4 bg-gray-200 rounded-full mb-4">
              <div 
                className="h-4 bg-violet rounded-full" 
                style={{ width: `${(signupCount / 100) * 100}%` }}
              >
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              {signupCount}/100 spots claimed
            </p>
            <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button 
                type="submit"
                className="bg-violet text-white font-montserrat font-bold tracking-wide"
              >
                CLAIM YOUR FREE ACCESS NOW
              </Button>
            </form>
            <p className="text-sm text-gray-500 mt-2 font-montserrat">
              No credit card required. Claim your spot now before they&apos;re gone!
            </p>
          </div>
        </div>
      </section>

      {/* Trust Message Section */}
      <section className="py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mt-8 mb-4">
            <div className="inline-flex items-center justify-center mb-2">
              <Shield size={18} className="text-gray-700 mr-2" />
              <p className="text-gray-700 font-bold font-montserrat text-sm">
                No LinkedIn login required.
              </p>
            </div>
            <p className="text-gray-700 font-montserrat text-[15px] max-w-md mx-auto">
              We don&apos;t use your credentials or cookies.
              Karhuno handles everything automatically and securely.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-30">
        <Button 
          onClick={() => scrollToSection('pricing')}
          className="w-full bg-violet text-white font-montserrat font-bold"
        >
          CLAIM FREE ACCESS NOW • ONLY {spotsLeft} LEFT
        </Button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h2 className="text-2xl font-bold font-roboto">Karhuno AI</h2>
              <p className="text-gray-400 mt-2 font-montserrat">Finding signals that matter.</p>
            </div>
            
            <div className="flex space-x-8">
              <div>
                <h3 className="text-lg font-bold mb-4 font-roboto">Product</h3>
                <ul className="space-y-2 font-montserrat">
                  <li><Link href="/" className="text-gray-400 hover:text-mint">Web Signals</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-mint">LinkedIn Radar</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-mint">Pricing</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-4 font-roboto">Company</h3>
                <ul className="space-y-2 font-montserrat">
                  <li><Link href="#" className="text-gray-400 hover:text-mint">About Us</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-mint">Blog</Link></li>
                  <li><Link href="#" className="text-gray-400 hover:text-mint">Contact</Link></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm mb-4 md:mb-0 font-montserrat">
                © 2025 Karhuno AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
