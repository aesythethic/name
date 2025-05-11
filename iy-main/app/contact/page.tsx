import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Mail, Phone, MapPin, AlertTriangle } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Building className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Horizon Gardens Strata</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-slate-300 font-medium">
                Home
              </Link>
              <Link href="/committee" className="hover:text-slate-300 font-medium">
                Committee
              </Link>
              <Link href="/owners" className="hover:text-slate-300 font-medium">
                Owners Portal
              </Link>
              <Link href="/documents" className="hover:text-slate-300 font-medium">
                Documents
              </Link>
              <Link
                href="/contact"
                className="hover:text-slate-300 font-medium text-slate-300 underline underline-offset-4"
              >
                Contact
              </Link>
            </nav>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-slate-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl max-w-3xl mb-6">
              Get in touch with the strata committee or report an issue with your building.
            </p>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-slate-100 p-3 rounded-full mt-1">
                        <Mail className="h-6 w-6 text-slate-700" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Email</h4>
                        <p className="text-slate-600 mb-1">General Inquiries:</p>
                        <a href="mailto:strata@horizongardens.com.au" className="text-slate-800 hover:underline">
                          strata@horizongardens.com.au
                        </a>
                        <p className="text-slate-600 mt-2 mb-1">Maintenance Requests:</p>
                        <a href="mailto:maintenance@horizongardens.com.au" className="text-slate-800 hover:underline">
                          maintenance@horizongardens.com.au
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-slate-100 p-3 rounded-full mt-1">
                        <Phone className="h-6 w-6 text-slate-700" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Phone</h4>
                        <p className="text-slate-600 mb-1">Building Manager:</p>
                        <a href="tel:+61291234567" className="text-slate-800 hover:underline">
                          (02) 9123 4567
                        </a>
                        <p className="text-slate-600 mt-2 mb-1" id="emergency">
                          After-Hours Emergency:
                        </p>
                        <a href="tel:+61291234567" className="text-slate-800 hover:underline">
                          (02) 9123 4567
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-slate-100 p-3 rounded-full mt-1">
                        <MapPin className="h-6 w-6 text-slate-700" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Address</h4>
                        <p className="text-slate-600">Horizon Gardens</p>
                        <p className="text-slate-600">123 Strata Street</p>
                        <p className="text-slate-600">Sydney NSW 2000</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-slate-100 p-3 rounded-full mt-1">
                        <AlertTriangle className="h-6 w-6 text-slate-700" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1">Emergency Services</h4>
                        <p className="text-slate-600 mb-1">For life-threatening emergencies:</p>
                        <p className="text-slate-800 font-semibold">Call 000</p>
                        <p className="text-slate-600 mt-2 mb-1">For water emergencies:</p>
                        <p className="text-slate-800">Sydney Water: 13 20 90</p>
                        <p className="text-slate-600 mt-2 mb-1">For electrical emergencies:</p>
                        <p className="text-slate-800">Ausgrid: 13 13 88</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Form</CardTitle>
                      <CardDescription>
                        Fill out this form to contact the strata committee. We aim to respond within 48 hours.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                              Name
                            </label>
                            <input
                              id="name"
                              type="text"
                              className="w-full px-3 py-2 border border-slate-300 rounded-md"
                              placeholder="Your name"
                            />
                          </div>
                          <div>
                            <label htmlFor="unit" className="block text-sm font-medium text-slate-700 mb-1">
                              Unit Number
                            </label>
                            <input
                              id="unit"
                              type="text"
                              className="w-full px-3 py-2 border border-slate-300 rounded-md"
                              placeholder="e.g., 12"
                            />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full px-3 py-2 border border-slate-300 rounded-md"
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                            Phone
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            className="w-full px-3 py-2 border border-slate-300 rounded-md"
                            placeholder="(02) XXXX XXXX"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                            Subject
                          </label>
                          <select id="subject" className="w-full px-3 py-2 border border-slate-300 rounded-md">
                            <option>General Inquiry</option>
                            <option>Maintenance Request</option>
                            <option>By-law Compliance</option>
                            <option>Noise Complaint</option>
                            <option>Levy Payment</option>
                            <option>Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={5}
                            className="w-full px-3 py-2 border border-slate-300 rounded-md"
                            placeholder="Please provide details of your inquiry or issue..."
                          ></textarea>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">
                            Attachments (optional)
                          </label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-slate-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-slate-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-slate-800 hover:text-slate-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-slate-500"
                                >
                                  <span>Upload a file</span>
                                  <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-slate-500">PNG, JPG, PDF up to 10MB</p>
                            </div>
                          </div>
                        </div>
                        <Button className="w-full">Submit</Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Committee Contact Section */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-10">Committee Contacts</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle>Chairperson</CardTitle>
                  <CardDescription>Sarah Johnson</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Contact the Chairperson for matters related to strata governance, committee decisions, and official
                    representations.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:chair@horizongardens.com.au">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Chairperson
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Secretary</CardTitle>
                  <CardDescription>Michael Chen</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Contact the Secretary for matters related to meetings, minutes, correspondence, and the strata roll.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:secretary@horizongardens.com.au">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Secretary
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Treasurer</CardTitle>
                  <CardDescription>Amanda Rodriguez</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    Contact the Treasurer for matters related to levies, financial statements, budgets, and payment
                    arrangements.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="mailto:treasurer@horizongardens.com.au">
                      <Mail className="h-4 w-4 mr-2" />
                      Email Treasurer
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-10">Location</h3>
            <div className="max-w-5xl mx-auto">
              <div className="bg-slate-200 h-[400px] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-700 font-medium">Map Placeholder</p>
                  <p className="text-slate-600">123 Strata Street, Sydney NSW 2000</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button asChild variant="outline">
                  <a
                    href="https://maps.google.com/?q=Sydney+NSW+2000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    View on Google Maps
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building className="h-6 w-6" />
                <h3 className="text-xl font-bold">Horizon Gardens</h3>
              </div>
              <p className="text-slate-400">Strata Plan 12345</p>
              <p className="text-slate-400">123 Strata Street, Sydney NSW 2000</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/committee" className="hover:text-white">
                    Committee
                  </Link>
                </li>
                <li>
                  <Link href="/owners" className="hover:text-white">
                    Owners Portal
                  </Link>
                </li>
                <li>
                  <Link href="/documents" className="hover:text-white">
                    Documents
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <Link href="/documents#bylaws" className="hover:text-white">
                    By-laws
                  </Link>
                </li>
                <li>
                  <Link href="/documents#policies" className="hover:text-white">
                    Policies
                  </Link>
                </li>
                <li>
                  <Link href="/documents#act" className="hover:text-white">
                    Strata Schemes Management Act
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.fairtrading.nsw.gov.au/housing-and-property/strata-and-community-living"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    NSW Fair Trading
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Emergency Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Building Manager: (02) 9123 4567</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>strata@horizongardens.com.au</span>
                </li>
                <li className="mt-2 text-sm">
                  For urgent after-hours issues, please call the emergency line: (02) 9123 4567
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Horizon Gardens Strata Plan 12345. Managed by the Strata Committee in
              accordance with the NSW Strata Schemes Management Act 2015.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
