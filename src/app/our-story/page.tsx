import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Calendar,
  MapPin,
  Users,
  Award,
  TrendingUp,
  Shield,
  Radio,
  Wifi,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Story - Amiran Communications',
  description: 'Discover the journey of Amiran Communications from 2009 to becoming East Africa\'s leading security and communication solutions provider.',
}

export default function OurStoryPage() {
  const timeline = [
    {
      year: '2009',
      title: 'The Beginning',
      description: 'Founded with a vision to bring world-class security solutions to East Africa.',
      achievements: [
        'Started with 3 employees',
        'First office in Nairobi',
        'Focus on CCTV systems'
      ],
      icon: Calendar
    },
    {
      year: '2012',
      title: 'Expansion Phase',
      description: 'Expanded services and geographic reach across Kenya.',
      achievements: [
        'Added Access Control solutions',
        'Team grew to 15 members',
        'First international project in Uganda'
      ],
      icon: TrendingUp
    },
    {
      year: '2015',
      title: 'Technology Leadership',
      description: 'Became regional leader in integrated security solutions.',
      achievements: [
        'Launched Two-Way Radio division',
        'Opened Tanzania office',
        '100+ projects completed'
      ],
      icon: Shield
    },
    {
      year: '2018',
      title: 'Digital Transformation',
      description: 'Embraced digital technologies and expanded service portfolio.',
      achievements: [
        'Added Network Solutions',
        'Cybersecurity division launched',
        'Rwanda and Burundi operations'
      ],
      icon: Globe
    },
    {
      year: '2021',
      title: 'Innovation Hub',
      description: 'Established as innovation leader in security technology.',
      achievements: [
        'AI-powered surveillance systems',
        'Cloud-based solutions',
        '250+ successful projects'
      ],
      icon: Award
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Continuing to lead with cutting-edge solutions and expanded services.',
      achievements: [
        '5+ countries presence',
        '50+ team members',
        '500+ projects delivered'
      ],
      icon: Users
    }
  ]

  const milestones = [
    {
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered across East Africa'
    },
    {
      number: '5+',
      label: 'Countries',
      description: 'Kenya, Uganda, Tanzania, Rwanda, Burundi'
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Since our founding in 2009'
    },
    {
      number: '50+',
      label: 'Team Members',
      description: 'Dedicated professionals across the region'
    }
  ]

  const services = [
    {
      icon: Shield,
      name: 'CCTV Solutions',
      launched: '2009',
      description: 'Started as our core service and continues to be our flagship offering.'
    },
    {
      icon: Users,
      name: 'Access Control',
      launched: '2012',
      description: 'Added to provide comprehensive security management.'
    },
    {
      icon: Radio,
      name: 'Two-Way Radio',
      launched: '2015',
      description: 'Launched to meet growing communication needs.'
    },
    {
      icon: Wifi,
      name: 'Network Solutions',
      launched: '2018',
      description: 'Added to support digital transformation initiatives.'
    },
    {
      icon: Globe,
      name: 'Cyber Security',
      launched: '2018',
      description: 'Established to protect digital assets and infrastructure.'
    },
    {
      icon: TrendingUp,
      name: 'Power Solutions',
      launched: '2020',
      description: 'Added to ensure uninterrupted operations for clients.'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">
              Our Journey Since 2009
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              15 Years of
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Innovation & Growth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From a small startup in Nairobi to a regional leader, discover how Amiran Communications 
              has been transforming security and communication landscapes across East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{milestone.number}</div>
                <div className="text-blue-100 font-semibold mb-1">{milestone.label}</div>
                <div className="text-blue-200 text-sm">{milestone.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments that shaped our company and defined our success
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-1'}`}>
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                          <item.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className={`ml-4 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                          <Badge className="bg-blue-100 text-blue-800 mb-2">{item.year}</Badge>
                          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Evolution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Evolution of Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How our service portfolio has grown to meet market demands
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">
                      Since {service.launched}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Geographic Expansion */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Expanding Across East Africa
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Kenya (2009)</h3>
                    <p className="text-gray-600">Headquarters in Nairobi with nationwide coverage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Uganda (2012)</h3>
                    <p className="text-gray-600">First international expansion with Kampala office</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Tanzania (2015)</h3>
                    <p className="text-gray-600">Dar es Salaam operations serving Eastern Tanzania</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Rwanda & Burundi (2018)</h3>
                    <p className="text-gray-600">Expanded to serve the entire East African community</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Regional Impact</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Projects Completed</span>
                  <span className="font-bold">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>People Employed</span>
                  <span className="font-bold">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Office Locations</span>
                  <span className="font-bold">8+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Partners</span>
                  <span className="font-bold">25+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Industries Served</span>
                  <span className="font-bold">15+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Be Part of Our Next Chapter
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            As we continue to grow and innovate, we invite you to join us on this exciting journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/careers">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                Join Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}