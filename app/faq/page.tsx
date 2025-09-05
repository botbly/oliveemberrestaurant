import { HelpCircle, Phone, Mail, Clock, Users, Wine, Utensils } from 'lucide-react';

const faqSections = [
  {
    title: "Reservations",
    icon: Phone,
    questions: [
      {
        question: "How do I make a reservation?",
        answer: "We accept reservations by phone at (555) 014-7264 or email at hello@oliveandember.example. We do not use online booking systems to ensure personalized service."
      },
      {
        question: "How far in advance should I book?",
        answer: "We recommend booking 1-2 weeks in advance, especially for weekend dinners. For special occasions or larger parties, 3-4 weeks notice is preferred."
      },
      {
        question: "What is your cancellation policy?",
        answer: "We require 24-hour notice for cancellations. Same-day cancellations may be subject to a fee for parties of 6 or more."
      },
      {
        question: "Do you accept walk-ins?",
        answer: "Yes, we welcome walk-ins based on availability. However, reservations are strongly recommended, especially during peak dining hours."
      }
    ]
  },
  {
    title: "Dining Experience",
    icon: Utensils,
    questions: [
      {
        question: "What type of cuisine do you serve?",
        answer: "We specialize in modern Mediterranean cuisine with a focus on wood-fired cooking techniques. Our menu features dishes inspired by Greece, Turkey, Spain, and Southern Italy."
      },
      {
        question: "Do you accommodate dietary restrictions?",
        answer: "Absolutely! We can accommodate vegetarian, vegan, and gluten-free diets. Please inform us of any allergies or restrictions when making your reservation."
      },
      {
        question: "Is there a dress code?",
        answer: "We maintain a smart casual dress code. While we don't require formal attire, we ask that guests dress appropriately for an upscale dining experience."
      },
      {
        question: "Are children welcome?",
        answer: "Yes, we welcome families with children. We have high chairs available and can accommodate younger diners with modified portions of many menu items."
      }
    ]
  },
  {
    title: "Wine & Beverages",
    icon: Wine,
    questions: [
      {
        question: "Do you have a corkage policy?",
        answer: "Yes, we allow guests to bring wine with a $20 corkage fee per bottle. We limit this to one bottle per two guests, and the wine cannot be on our current wine list."
      },
      {
        question: "Do you serve cocktails?",
        answer: "We focus primarily on wine and Mediterranean-inspired beverages. Our bar features an extensive wine selection, craft beers, and signature non-alcoholic drinks."
      },
      {
        question: "Can I purchase wine to take home?",
        answer: "Yes, many wines from our list are available for retail purchase. Ask your server about taking home a bottle from your dinner."
      }
    ]
  },
  {
    title: "Private Events",
    icon: Users,
    questions: [
      {
        question: "What private dining options do you offer?",
        answer: "We have two private dining rooms (24 and 40 guests) and offer full restaurant buyouts for up to 80 guests. Each space can be customized for your event."
      },
      {
        question: "How far in advance should I book a private event?",
        answer: "We recommend booking private events at least 2-4 weeks in advance. Holiday events and weekend celebrations should be booked 6-8 weeks ahead."
      },
      {
        question: "Do you offer catering services?",
        answer: "We focus on in-restaurant private dining experiences. For off-site events, we can recommend trusted catering partners who specialize in Mediterranean cuisine."
      }
    ]
  },
  {
    title: "Practical Information",
    icon: Clock,
    questions: [
      {
        question: "What are your hours?",
        answer: "Monday-Thursday: 11:30 AM - 10:00 PM, Friday-Saturday: 11:30 AM - 11:00 PM, Sunday: 12:00 PM - 9:00 PM. Kitchen closes 30 minutes before restaurant closing."
      },
      {
        question: "Is parking available?",
        answer: "Yes, we offer complimentary valet parking in the evenings. During the day, street parking and a municipal garage across the street are available."
      },
      {
        question: "Are you accessible for guests with disabilities?",
        answer: "Yes, our restaurant is fully accessible with wheelchair-accessible seating, restrooms, and entrance. Please let us know about any specific needs when making your reservation."
      },
      {
        question: "Do you offer gift cards?",
        answer: "Yes, gift cards are available for purchase by calling the restaurant. They make perfect gifts for food lovers and can be used for dining or private events."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-sage text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Everything you need to know about dining at Olive & Ember
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <div className="bg-olive text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <section.icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-charcoal">
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-6">
                  {section.questions.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white rounded-lg p-6 shadow-sm border border-sage/20">
                      <h3 className="font-semibold text-charcoal mb-3 flex items-start">
                        <HelpCircle className="h-5 w-5 text-terracotta mr-2 mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </h3>
                      <p className="text-charcoal/80 ml-7">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-terracotta/10 rounded-lg p-8 text-center">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-4">
              Still Have Questions?
            </h2>
            <p className="text-charcoal/80 mb-6">
              Our team is happy to help with any additional questions about dining, events, or reservations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:5550147264"
                className="bg-olive text-white px-6 py-3 rounded-md hover:bg-olive/90 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </a>
              <a 
                href="mailto:hello@oliveandember.example"
                className="border-2 border-olive text-olive px-6 py-3 rounded-md hover:bg-olive hover:text-white transition-colors inline-flex items-center justify-center"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}