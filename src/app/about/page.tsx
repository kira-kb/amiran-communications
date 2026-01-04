import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Users, 
  Shield, 
  Globe, 
  Award, 
  Target, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us - Amiran Communications',
  description: 'Learn about Amiran Communications - Leading provider of CCTV, Access Control, and Communication Solutions in East Africa for over 15 years.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'We prioritize the safety and security of our clients above all else, delivering robust protection solutions.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously adopting cutting-edge technology to provide tomorrow\'s solutions today.'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building long-term partnerships through exceptional service and support.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality solutions that exceed expectations.'
    }
  ]

  const team = [
    {
      name: 'Leadership Team',
      role: 'Strategic Vision',
      description: 'Experienced professionals with decades of industry expertise guiding our company forward.',
      features: ['15+ Years Experience', 'Industry Certified', 'Strategic Planning']
    },
    {
      name: 'Technical Experts',
      role: 'Implementation Specialists',
      description: 'Skilled engineers and technicians ensuring flawless project execution.',
      features: ['Certified Engineers', '24/7 Support', 'Continuous Training']
    },
    {
      name: 'Customer Support',
      role: 'Service Excellence',
      description: 'Dedicated support team providing round-the-clock assistance and maintenance.',
      features: ['24/7 Availability', 'Quick Response', 'Proactive Maintenance']
    }
  ]

  const achievements = [
    { label: 'Years in Business', value: '15+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Team Members', value: '50+' },
    { label: 'Countries Served', value: '5+' },
    { label: 'Support Response', value: '< 2hrs' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold">
              About Amiran Communications
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Leading Innovation in
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Security Technology</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              For over 15 years, we've been at the forefront of providing comprehensive security, communication, 
              and network solutions that businesses across East Africa can rely on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/projects">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                  View Our Work
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
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-blue-100 text-sm">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey of Excellence
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Amiran Communications began with a simple mission: to provide East African 
                  businesses with world-class security and communication solutions that were previously inaccessible 
                  or unaffordable.
                </p>
                <p>
                  Today, we stand as a regional leader, having successfully delivered over 500 projects across 
                  Kenya, Uganda, Tanzania, Rwanda, and Burundi. Our growth has been fueled by our unwavering 
                  commitment to quality, innovation, and customer satisfaction.
                </p>
                <p>
                  We specialize in six core areas: CCTV surveillance, access control systems, two-way radio 
                  communications, WI-FI solutions, network infrastructure, and cybersecurity. Each solution is 
                  tailored to meet the unique challenges faced by businesses in our region.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Our Mission & Vision</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Mission</h4>
                  <p className="text-blue-100">
                    To empower businesses across East Africa with cutting-edge security and communication 
                    technology that drives growth, ensures safety, and enables success.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Vision</h4>
                  <p className="text-blue-100">
                    To be the most trusted technology partner in East Africa, renowned for innovation, 
                    reliability, and exceptional customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals dedicated to your success
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center text-blue-600 font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-center">{member.description}</p>
                  <ul className="space-y-2">
                    {member.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of businesses that trust Amiran Communications for their security and technology needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                Start Your Project
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