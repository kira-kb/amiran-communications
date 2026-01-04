import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Handshake,
  Users,
  Award,
  Target,
  Globe,
  Shield,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Building,
  Star
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Partners - Amiran Communications',
  description: 'Partner with Amiran Communications. Explore partnership opportunities in security technology, communications, and IT solutions across East Africa.',
}

export default function PartnersPage() {
  const partnershipTypes = [
    {
      icon: Building,
      title: 'Technology Partners',
      description: 'Leading technology providers who supply cutting-edge security and communication equipment.',
      benefits: [
        'Access to East African market',
        'Joint marketing opportunities',
        'Technical collaboration',
        'Revenue sharing models'
      ],
      requirements: [
        'Industry-leading technology',
        'Quality certifications',
        'Technical support capability',
        'Commitment to innovation'
      ]
    },
    {
      icon: Users,
      title: 'Channel Partners',
      description: 'Resellers and distributors who help us reach more customers across the region.',
      benefits: [
        'Competitive margins',
        'Sales training and support',
        'Marketing materials',
        'Lead generation programs'
      ],
      requirements: [
        'Sales experience in technology',
        'Local market knowledge',
        'Customer service focus',
        'Financial stability'
      ]
    },
    {
      icon: Shield,
      title: 'Service Partners',
      description: 'Installation and maintenance partners who provide on-ground support services.',
      benefits: [
        'Steady project work',
        'Technical training programs',
        'Certification opportunities',
        'Access to tools and equipment'
      ],
      requirements: [
        'Technical expertise',
        'Certified technicians',
        'Insurance coverage',
        'Quality standards compliance'
      ]
    },
    {
      icon: Globe,
      title: 'Strategic Partners',
      description: 'Organizations offering complementary services to create comprehensive solutions.',
      benefits: [
        'Joint solution development',
        'Shared customer base',
        'Integrated service offerings',
        'Mutual growth opportunities'
      ],
      requirements: [
        'Complementary services',
        'Similar quality standards',
        'Customer-centric approach',
        'Long-term vision'
      ]
    }
  ]

  const currentPartners = [
    {
      name: 'Global Security Systems',
      type: 'Technology Partner',
      logo: 'GSS',
      description: 'Leading manufacturer of advanced CCTV and surveillance systems.',
      years: '8+ years',
      category: 'Security Equipment'
    },
    {
      name: 'East Africa Telecom',
      type: 'Channel Partner',
      logo: 'EAT',
      description: 'Regional telecommunications provider with extensive network coverage.',
      years: '5+ years',
      category: 'Telecommunications'
    },
    {
      name: 'Digital Infrastructure Ltd',
      type: 'Service Partner',
      logo: 'DIL',
      description: 'Specialized in network infrastructure and data center solutions.',
      years: '6+ years',
      category: 'IT Infrastructure'
    },
    {
      name: 'CyberGuard Africa',
      type: 'Strategic Partner',
      logo: 'CGA',
      description: 'Premier cybersecurity solutions provider across Africa.',
      years: '4+ years',
      category: 'Cybersecurity'
    },
    {
      name: 'Smart City Solutions',
      type: 'Technology Partner',
      logo: 'SCS',
      description: 'Innovator in IoT and smart city security technologies.',
      years: '3+ years',
      category: 'Smart Technology'
    },
    {
      name: 'Regional Tech Distributors',
      type: 'Channel Partner',
      logo: 'RTD',
      description: 'Largest technology distributor in East Africa.',
      years: '7+ years',
      category: 'Distribution'
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Market Access',
      description: 'Access to our extensive customer base across 5+ East African countries'
    },
    {
      icon: Award,
      title: 'Brand Association',
      description: 'Partner with a trusted brand known for quality and reliability'
    },
    {
      icon: Users,
      title: 'Training & Support',
      description: 'Comprehensive training programs and ongoing technical support'
    },
    {
      icon: Globe,
      title: 'Growth Opportunities',
      description: 'Expand your business with our proven growth strategies'
    },
    {
      icon: Shield,
      title: 'Quality Standards',
      description: 'Maintain high standards through our quality assurance programs'
    },
    {
      icon: Star,
      title: 'Recognition',
      description: 'Annual partner awards and recognition programs'
    }
  ]

  const process = [
    { step: 1, title: 'Initial Contact', description: 'Reach out with your partnership proposal' },
    { step: 2, title: 'Evaluation', description: 'Our team reviews your proposal and capabilities' },
    { step: 3, title: 'Discussion', description: 'Detailed discussion about mutual benefits' },
    { step: 4, title: 'Agreement', description: 'Formal partnership agreement and onboarding' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">
              Partner With Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Strong
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Partnerships</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our network of trusted partners and grow together. We believe in creating 
              mutually beneficial relationships that drive innovation and success across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#partnership-types">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Explore Partnerships
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                  Become a Partner
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-blue-100">Active Partners</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-blue-100">Countries</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100">Years Average Partnership</div>
            </div>
            <div className="text-center transform hover:scale-110 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Partner Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section id="partnership-types" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect partnership model for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((partner, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <partner.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{partner.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {partner.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {partner.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Companies we proudly work with to deliver exceptional solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentPartners.map((partner, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {partner.logo}
                  </div>
                  <Badge variant="outline" className="text-blue-600 border-blue-600">
                    {partner.type}
                  </Badge>
                </div>
                <CardTitle className="text-xl mb-2">{partner.name}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {partner.description}
                </CardDescription>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{partner.category}</span>
                  <span>{partner.years}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Amiran?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the advantages of joining our partner ecosystem
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Partnership Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent process to become our partner
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item) => (
              <Card key={item.step} className="text-center p-6">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let\'s discuss how we can create value together and grow our businesses in partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                Start Partnership Discussion
                <Handshake className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 transform hover:scale-105 transition-all duration-200">
              <Mail className="mr-2 h-5 w-5" />
              Email Partnership Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}