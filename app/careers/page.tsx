import { Mail, Users, Clock, Award } from 'lucide-react';

const openPositions = [
  {
    title: "Line Cook",
    department: "Kitchen",
    type: "Full-time",
    description: "Join our kitchen team and learn Mediterranean cooking techniques using our wood-fired oven and grill. Experience with high-volume cooking preferred.",
    requirements: [
      "1+ years kitchen experience",
      "Ability to work in fast-paced environment", 
      "Passion for Mediterranean cuisine",
      "Weekend availability required"
    ]
  },
  {
    title: "Server",
    department: "Front of House",
    type: "Full-time / Part-time",
    description: "Provide exceptional service to our guests while sharing knowledge about our Mediterranean menu and wine selection.",
    requirements: [
      "Previous serving experience preferred",
      "Wine knowledge a plus",
      "Excellent communication skills",
      "Evening and weekend availability"
    ]
  },
  {
    title: "Host",
    department: "Front of House", 
    type: "Part-time",
    description: "Be the first impression for our guests, managing reservations and creating a welcoming atmosphere from the moment they arrive.",
    requirements: [
      "Customer service experience",
      "Professional appearance and demeanor",
      "Ability to multitask effectively",
      "Flexible schedule including weekends"
    ]
  },
  {
    title: "Dishwasher",
    department: "Kitchen",
    type: "Full-time / Part-time",
    description: "Essential kitchen support role maintaining cleanliness and organization. Great entry-level position with opportunities for advancement.",
    requirements: [
      "Reliable and punctual",
      "Ability to work in hot, fast-paced environment",
      "Team player attitude",
      "No experience necessary - will train"
    ]
  }
];

export default function Careers() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <section className="py-16 bg-terracotta text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Join Our Team
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Be part of Arlington's premier Mediterranean dining experience
          </p>
        </div>
      </section>

      {/* Why Work Here */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Why Olive & Ember?
            </h2>
            <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
              Join a team that's passionate about Mediterranean hospitality and exceptional cuisine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-olive text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                Team Culture
              </h3>
              <p className="text-sm text-charcoal/70">
                Collaborative environment where everyone's contribution matters
              </p>
            </div>

            <div className="text-center">
              <div className="bg-terracotta text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                Growth Opportunities
              </h3>
              <p className="text-sm text-charcoal/70">
                Advance your culinary career with training and mentorship
              </p>
            </div>

            <div className="text-center">
              <div className="bg-sage text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                Work-Life Balance
              </h3>
              <p className="text-sm text-charcoal/70">
                Competitive scheduling with respect for personal time
              </p>
            </div>

            <div className="text-center">
              <div className="bg-olive text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">
                Benefits Package
              </h3>
              <p className="text-sm text-charcoal/70">
                Health insurance, paid time off, and employee meal discounts
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-charcoal mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-charcoal/80">
              Explore opportunities to join our Mediterranean kitchen and service team
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-cream rounded-lg p-8 border border-sage/20">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="px-3 py-1 bg-olive text-white rounded-full">
                        {position.department}
                      </span>
                      <span className="px-3 py-1 bg-sage text-white rounded-full">
                        {position.type}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-charcoal/80 mb-6">
                  {position.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-charcoal mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-charcoal/80 text-sm flex items-start">
                        <span className="text-olive mr-2">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:careers@oliveandember.example?subject=Application for Line Cook Position"
                    className="bg-olive text-white px-6 py-3 rounded-md hover:bg-olive/90 transition-colors text-center"
                  >
                    Apply for This Position
                  </a>
                  <a 
                    href="mailto:careers@oliveandember.example?subject=Question about Line Cook Position"
                    className="border-2 border-olive text-olive px-6 py-3 rounded-md hover:bg-olive hover:text-white transition-colors text-center"
                  >
                    Ask Questions
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Application Process */}
          <div className="mt-16 bg-sage/10 rounded-lg p-8">
            <h2 className="font-serif text-2xl font-bold text-charcoal mb-6 text-center">
              Application Process
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-olive text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">1</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Submit Resume</h3>
                <p className="text-sm text-charcoal/70">
                  Email your resume and cover letter to our careers address
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-terracotta text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">2</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">Phone Interview</h3>
                <p className="text-sm text-charcoal/70">
                  Initial conversation about your experience and interests
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-sage text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold">3</span>
                </div>
                <h3 className="font-semibold text-charcoal mb-2">In-Person Meeting</h3>
                <p className="text-sm text-charcoal/70">
                  Visit the restaurant to meet the team and see our kitchen
                </p>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="mailto:careers@oliveandember.example"
                className="bg-olive text-white px-8 py-4 rounded-md hover:bg-olive/90 transition-colors inline-flex items-center text-lg font-semibold"
              >
                <Mail className="h-5 w-5 mr-2" />
                careers@oliveandember.example
              </a>
            </div>
          </div>

          {/* Equal Opportunity */}
          <div className="mt-12 text-center">
            <p className="text-sm text-charcoal/60 max-w-2xl mx-auto">
              Olive & Ember is an equal opportunity employer committed to creating an inclusive environment for all employees. We welcome applications from candidates of all backgrounds and experiences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}