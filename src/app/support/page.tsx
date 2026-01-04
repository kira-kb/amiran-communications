import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Users,
  Shield,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Book,
  Video,
  Download,
  AlertTriangle,
  Wrench
} from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support - Amiran Communications',
  description: '24/7 technical support for Amiran Communications clients. Get help with CCTV, access control, network solutions, and more across East Africa.',
}

export default function SupportPage() {
  const supportOptions = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Immediate assistance from our technical support team',
      availability: '24/7 Emergency',
      contact: '+254-XXX-XXX-XXX',
      responseTime: '< 2 hours',
      features: [
        'Direct technician access',
        'Emergency priority support',
        'Multi-language support',
        'Call back options'
      ]
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed technical assistance via email',
      availability: 'Business Hours',
      contact: 'support@amirancommunications.com',
      responseTime: '< 4 hours',
      features: [
        'Detailed troubleshooting',
        'Attachment support',
        'Ticket tracking',
        'Documentation included'
      ]
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Real-time chat with our support team',
      availability: 'Business Hours',
      contact: 'Available on website',
      responseTime: '< 5 minutes',
      features: [
        'Instant responses',
        'Screen sharing',
        'Chat history',
        'Mobile friendly'
      ]
    },
    {
      icon: Users,
      title: 'On-Site Support',
      description: 'Professional technicians at your location',
      availability: 'Scheduled & Emergency',
      contact: 'Request via phone/email',
      responseTime: '< 24 hours',
      features: [
        'Hardware installation',
        'System maintenance',
        'Training sessions',
        'Emergency repairs'
      ]
    }
  ]

  const faqs = [
    {
      question: 'What is included in your 24/7 emergency support?',
      answer: 'Our 24/7 emergency support includes immediate phone assistance, priority ticket handling, emergency on-site visits when needed, and remote troubleshooting for critical system failures affecting your security or communication systems.'
    },
    {
      question: 'How quickly can I expect a response to my support request?',
      answer: 'Response times vary by support level: Emergency calls (< 2 hours), Priority issues (< 4 hours), Standard requests (< 24 hours), and Routine maintenance (scheduled). We guarantee response times in our SLA agreements.'
    },
    {
      question: 'Do you provide training for new systems?',
      answer: 'Yes, we provide comprehensive training for all installed systems. This includes on-site training sessions, user manuals, video tutorials, and ongoing refresher courses to ensure your team can effectively use all system features.'
    },
    {
      question: 'What is covered under your maintenance contracts?',
      answer: 'Our maintenance contracts cover regular system health checks, software updates, hardware repairs, preventive maintenance, priority support, and replacement parts. Coverage levels can be customized based on your specific needs.'
    },
    {
      question: 'How do I request on-site support?',
      answer: 'You can request on-site support by calling our emergency line for urgent issues or emailing our support team for scheduled maintenance. We\'ll dispatch the nearest available technician based on your location and issue priority.'
    },
    {
      question: 'Do you support systems installed by other providers?',
      answer: 'Yes, we can support and maintain systems installed by other providers. Our technicians are trained on multiple platforms and can assess your existing systems to provide the best support solutions.'
    }
  ]

  const resources = [
    {
      icon: Book,
      title: 'User Manuals',
      description: 'Comprehensive guides for all our products and services',
      count: '50+ Documents'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for common tasks and troubleshooting',
      count: '100+ Videos'
    },
    {
      icon: Download,
      title: 'Software & Firmware',
      description: 'Latest software updates and firmware for your systems',
      count: 'Regular Updates'
    },
    {
      icon: HelpCircle,
      title: 'Knowledge Base',
      description: 'Detailed articles and troubleshooting guides',
      count: '200+ Articles'
    }
  ]

  const serviceLevels = [
    {
      name: 'Basic',
      price: 'Contact for pricing',
      features: [
        'Business hours support',
        'Email support',
        'Remote troubleshooting',
        'Monthly system health checks',
        'Software updates'
      ],
      recommended: false
    },
    {
      name: 'Professional',
      price: 'Contact for pricing',
      features: [
        'Extended hours support',
        'Phone and email support',
        'Priority response',
        'Bi-weekly system checks',
        'On-site support (2 visits/year)',
        'Training sessions'
      ],
      recommended: true
    },
    {
      name: 'Enterprise',
      price: 'Contact for pricing',
      features: [
        '24/7 emergency support',
        'Dedicated account manager',
        'Immediate response',
        'Weekly system checks',
        'Unlimited on-site support',
        'Advanced training',
        'Spare parts inventory'
      ],
      recommended: false
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
              24/7 Technical Support
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              We're Here to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Help You</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Round-the-clock technical support for all your security and communication systems. 
              Our expert team is always ready to assist you across East Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact-options">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Support Now
                  <Phone className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#emergency">
                <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                  Emergency Support
                  <AlertTriangle className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section id="emergency" className="py-8 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <AlertTriangle className="h-8 w-8 text-white animate-pulse" />
              <div>
                <h3 className="text-xl font-bold text-white">Emergency Support Available 24/7</h3>
                <p className="text-red-100">For critical system failures and security emergencies</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="tel:+254-XXX-XXX-XXX" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call Now: +254-XXX-XXX-XXX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section id="contact-options" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Reach Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to get the support you need, when you need it
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <option.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2">{option.availability}</Badge>
                      <p className="text-sm font-semibold">{option.contact}</p>
                      <p className="text-sm text-green-600">Response: {option.responseTime}</p>
                    </div>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Levels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Service Levels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the support level that best fits your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serviceLevels.map((level, index) => (
              <Card key={index} className={`p-8 hover:shadow-lg transition-all duration-300 ${level.recommended ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {level.recommended && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                    Recommended
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{level.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-blue-600">
                    {level.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {level.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={level.recommended ? "default" : "outline"}>
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Self-Service Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive library of support materials
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <resource.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl mb-2">{resource.title}</CardTitle>
                <CardDescription className="text-gray-600 mb-4">
                  {resource.description}
                </CardDescription>
                <p className="text-sm font-semibold text-blue-600">{resource.count}</p>
                <Button variant="outline" className="w-full mt-4">
                  Access Now
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common support questions
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
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
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our support team is standing by to help you with any technical issues or questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+254-XXX-XXX-XXX">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                Call Support Team
                <Phone className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 transform hover:scale-105 transition-all duration-200">
                <Mail className="mr-2 h-5 w-5" />
                Email Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}