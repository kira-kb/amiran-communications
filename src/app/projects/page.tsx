import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Shield,
  Camera,
  Users,
  Building,
  MapPin,
  Calendar,
  CheckCircle,
  ArrowRight,
  Award,
  TrendingUp,
  Eye
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects - Amiran Communications',
  description: 'Explore our portfolio of 500+ successful security and communication projects across East Africa. See our work in CCTV, access control, and network solutions.',
}

export default function ProjectsPage() {
  const featuredProjects = [
    {
      id: 1,
      title: 'Nairobi Headquarters Security System',
      client: 'Fortune 500 Company',
      category: 'Integrated Security',
      location: 'Nairobi, Kenya',
      date: '2024',
      image: '🏢',
      description: 'Complete security overhaul including 200+ CCTV cameras, biometric access control for 500+ employees, and integrated monitoring center.',
      technologies: ['CCTV', 'Access Control', 'Monitoring Center', 'Biometrics'],
      challenges: [
        'Multi-building complex',
        '24/7 operation requirement',
        'Integration with existing systems',
        'Strict compliance requirements'
      ],
      results: [
        '99.9% system uptime',
        '40% reduction in security incidents',
        'Improved employee safety',
        'ROI achieved in 18 months'
      ]
    },
    {
      id: 2,
      title: 'National Bank Network Infrastructure',
      client: 'Leading Banking Group',
      category: 'Network Solutions',
      location: 'Multiple Locations, East Africa',
      date: '2023',
      image: '🏦',
      description: 'Secure network infrastructure connecting 50+ bank branches across Kenya, Uganda, and Tanzania with redundant connectivity.',
      technologies: ['Network Infrastructure', 'Cybersecurity', 'Point-to-Point Links', 'Monitoring'],
      challenges: [
        'Cross-border deployment',
        'Banking security compliance',
        'Minimal downtime requirement',
        'Scalability for future growth'
      ],
      results: [
        '99.99% network uptime',
        '60% improvement in data speeds',
        'Enhanced security posture',
        'Reduced operational costs'
      ]
    },
    {
      id: 3,
      title: 'Industrial Complex Communication System',
      client: 'Manufacturing Giant',
      category: 'Communication Solutions',
      location: 'Mombasa, Kenya',
      date: '2023',
      image: '🏭',
      description: 'Comprehensive communication system including two-way radios, emergency notification, and plant-wide PA system.',
      technologies: ['Two-Way Radio', 'Emergency Systems', 'PA System', 'WI-FI Coverage'],
      challenges: [
        'Harsh industrial environment',
        'Large coverage area',
        'Noise interference issues',
        'Safety compliance requirements'
      ],
      results: [
        '100% coverage achieved',
        'Improved emergency response',
        'Enhanced worker safety',
        'Streamlined operations'
      ]
    },
    {
      id: 4,
      title: 'Shopping Mall Security Upgrade',
      client: 'Retail Property Group',
      category: 'CCTV & Access Control',
      location: 'Kampala, Uganda',
      date: '2024',
      image: '🛍️',
      description: 'Modern security system for premium shopping mall with 150+ cameras, parking management, and tenant access control.',
      technologies: ['CCTV Surveillance', 'Parking Management', 'Tenant Access', 'Mobile Monitoring'],
      challenges: [
        'High foot traffic areas',
        'Multiple tenant requirements',
        'Parking management integration',
        'Customer experience focus'
      ],
      results: [
        'Improved security monitoring',
        'Enhanced parking efficiency',
        'Tenant satisfaction increase',
        'Reduced security incidents'
      ]
    },
    {
      id: 5,
      title: 'Government Office Cybersecurity',
      client: 'Government Agency',
      category: 'Cybersecurity',
      location: 'Dar es Salaam, Tanzania',
      date: '2023',
      image: '🏛️',
      description: 'Comprehensive cybersecurity solution including firewall deployment, threat detection, and security awareness training.',
      technologies: ['Firewall', 'Threat Detection', 'Security Training', 'Incident Response'],
      challenges: [
        'Sensitive data protection',
        'Regulatory compliance',
        'Staff training requirements',
        '24/7 monitoring needs'
      ],
      results: [
        'Zero security breaches',
        'Compliance achievement',
        'Improved security awareness',
        'Enhanced threat detection'
      ]
    },
    {
      id: 6,
      title: 'University Campus Network',
      client: 'Leading University',
      category: 'Network & WI-FI',
      location: 'Kigali, Rwanda',
      date: '2024',
      image: '🎓',
      description: 'Campus-wide network infrastructure with high-speed WI-FI covering 10,000+ students and faculty members.',
      technologies: ['WI-FI Coverage', 'Network Infrastructure', 'Bandwidth Management', 'User Authentication'],
      challenges: [
        'Large user base',
        'Dense device environment',
        'Budget constraints',
        'Academic schedule requirements'
      ],
      results: [
        'Complete campus coverage',
        'Support for 15,000+ devices',
        'Improved learning experience',
        'Scalable infrastructure'
      ]
    }
  ]

  const categories = [
    { name: 'All Projects', count: '500+', icon: Building },
    { name: 'CCTV Solutions', count: '180', icon: Camera },
    { name: 'Access Control', count: '120', icon: Shield },
    { name: 'Network Solutions', count: '95', icon: TrendingUp },
    { name: 'Communication', count: '75', icon: Users },
    { name: 'Cybersecurity', count: '30', icon: Eye }
  ]

  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Countries', value: '5+' },
    { label: 'Years Experience', value: '15+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Success Rate', value: '99%' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">
              Our Portfolio
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              500+ Successful
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Projects Delivered</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful security and communication projects across East Africa. 
              From small businesses to large enterprises, we deliver excellence every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#featured">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  View Featured Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projects by Category
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our work across different technology domains
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <category.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                <p className="text-2xl font-bold text-blue-600">{category.count}</p>
                <p className="text-sm text-gray-500">Projects</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlighted success stories that showcase our expertise
            </p>
          </div>
          
          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{project.image}</div>
                      <div>
                        <Badge variant="outline" className="mb-2">{project.category}</Badge>
                        <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                        <p className="text-gray-600">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.date}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Challenges</h4>
                        <ul className="space-y-2">
                          {project.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-3">Results</h4>
                        <ul className="space-y-2">
                          {project.results.map((result, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <Award className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`bg-gradient-to-br ${index % 2 === 1 ? 'lg:order-1' : ''} from-blue-500 to-purple-600 p-8 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">{project.image}</div>
                      <h4 className="text-xl font-bold mb-2">Success Story</h4>
                      <p className="text-blue-100">
                        This project demonstrates our ability to deliver complex solutions 
                        that exceed client expectations and drive real business value.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our list of satisfied clients. Let\'s discuss how we can help you achieve your security and communication goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                Get Project Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 transform hover:scale-105 transition-all duration-200">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}