import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Briefcase,
  Users,
  MapPin,
  Clock,
  DollarSign,
  Award,
  Target,
  Lightbulb,
  Heart,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Careers - Amiran Communications',
  description: 'Join Amiran Communications team. Explore career opportunities in security technology, communications, and IT across East Africa.',
}

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Security Systems Engineer',
      department: 'Technical',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      experience: '5+ years',
      salary: 'Competitive',
      description: 'Lead the design and implementation of comprehensive security solutions for our enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '5+ years experience in security systems',
        'Certification in CCTV/Access Control systems',
        'Strong project management skills',
        'Excellent communication abilities'
      ],
      responsibilities: [
        'Design security solutions for clients',
        'Lead installation teams',
        'Provide technical training',
        'Ensure project quality standards',
        'Client relationship management'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'IT Security',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'Competitive',
      description: 'Protect our clients\' digital assets with cutting-edge cybersecurity solutions and threat detection.',
      requirements: [
        'Degree in Computer Science or IT',
        '3+ years in cybersecurity',
        'CISSP or similar certification preferred',
        'Experience with security tools',
        'Knowledge of compliance frameworks'
      ],
      responsibilities: [
        'Conduct security assessments',
        'Implement security protocols',
        'Monitor for security threats',
        'Provide security training',
        'Incident response management'
      ]
    },
    {
      id: 3,
      title: 'Sales Executive - Security Solutions',
      department: 'Sales',
      location: 'Nairobi, Kenya',
      type: 'Full-time',
      experience: '3+ years',
      salary: 'Base + Commission',
      description: 'Drive growth by selling our comprehensive security solutions to new and existing clients.',
      requirements: [
        'Bachelor\'s degree in Business or related',
        '3+ years in B2B sales',
        'Experience in technology sales preferred',
        'Strong negotiation skills',
        'Valid driver\'s license'
      ],
      responsibilities: [
        'Identify and pursue sales opportunities',
        'Build client relationships',
        'Prepare proposals and presentations',
        'Achieve sales targets',
        'Market analysis and strategy'
      ]
    },
    {
      id: 4,
      title: 'Network Administrator',
      department: 'IT',
      location: 'Kampala, Uganda',
      type: 'Full-time',
      experience: '2+ years',
      salary: 'Competitive',
      description: 'Manage and maintain our network infrastructure across East Africa.',
      requirements: [
        'Degree in Information Technology',
        '2+ years network administration experience',
        'CCNA certification preferred',
        'Experience with routing and switching',
        'Knowledge of network security'
      ],
      responsibilities: [
        'Network monitoring and maintenance',
        'Troubleshooting network issues',
        'Implementing network security',
        'Managing network equipment',
        'Documentation and reporting'
      ]
    }
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Market-competitive compensation packages with performance bonuses'
    },
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family'
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Continuous learning opportunities and certification support'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Clear career progression paths and internal promotion opportunities'
    },
    {
      icon: Users,
      title: 'Team Environment',
      description: 'Collaborative work culture with experienced professionals'
    },
    {
      icon: Lightbulb,
      title: 'Innovation Projects',
      description: 'Work on cutting-edge security and communication technologies'
    }
  ]

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage creative thinking and innovative solutions to complex problems.'
    },
    {
      title: 'Customer Excellence',
      description: 'Our success is measured by the success and satisfaction of our clients.'
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth through training and development programs.'
    },
    {
      title: 'Work-Life Balance',
      description: 'We believe in sustainable work practices that respect personal time.'
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
              Join Our Team
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build Your Career With
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Amiran Communications</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of a dynamic team that\'s transforming security and communication landscapes across East Africa. 
              Grow your career while making a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#openings">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                  Send Your Resume
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join Amiran Communications?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job - we offer a career with purpose
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

      {/* Our Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture & Values
              </h2>
              <div className="space-y-6">
                {culture.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Life at Amiran</h3>
              <div className="space-y-4 text-blue-100">
                <p>• Collaborative team environment</p>
                <p>• Regular team building activities</p>
                <p>• Flexible work arrangements</p>
                <p>• Modern office facilities</p>
                <p>• Diversity and inclusion focus</p>
                <p>• Community engagement programs</p>
                <p>• Innovation challenges and hackathons</p>
                <p>• Mentorship programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect role and join our growing team
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.id} className="p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {job.department}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.type}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <DollarSign className="h-3 w-3" />
                        {job.salary}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      Save Job
                    </Button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-3">Responsibilities</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Application Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient hiring journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Submit Application', description: 'Send your resume and cover letter' },
              { step: 2, title: 'Initial Screening', description: 'HR team reviews your application' },
              { step: 3, title: 'Technical Interview', description: 'Meet with the hiring team' },
              { step: 4, title: 'Final Decision', description: 'Receive offer and join our team' }
            ].map((item) => (
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
            Ready to Join Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Even if you don\'t see a perfect match, we\'d love to hear from you. Send us your resume and we\'ll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                Send Your Resume
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 transform hover:scale-105 transition-all duration-200">
              <Phone className="mr-2 h-5 w-5" />
              Call HR Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}