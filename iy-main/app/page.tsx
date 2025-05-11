import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Building, FileText, Phone, Calendar } from "lucide-react"

export default function Home() {
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
              <Link href="/" className="hover:text-slate-300 font-medium text-slate-300 underline underline-offset-4">
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
              <Link href="/contact" className="hover:text-slate-300 font-medium">
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
        <section className="relative">
          <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
            <Image
              src="/images/modern-strata-building.png"
              alt="Horizon Gardens Strata Building"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container mx-auto px-4 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Welcome to Horizon Gardens</h2>
                <p className="text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
                  Strata Plan 12345 | Managed by your elected Strata Committee
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="bg-white text-slate-800 hover:bg-slate-100">
                    <Link href="/owners">Owners Portal</Link>
                  </Button>
                  <Button asChild variant="outline" className="text-white border-white hover:bg-slate-600">
                    <Link href="/contact">Report an Issue</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Announcements Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Latest Announcements</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Annual General Meeting</h3>
                  <span className="text-sm text-slate-500">May 15, 2025</span>
                </div>
                <p className="text-slate-600 mb-4">
                  The Annual General Meeting will be held in the community room at 7:00 PM. All owners are encouraged to
                  attend. The agenda includes the election of the new strata committee and approval of the annual
                  budget.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Quarterly Levy Notices</h3>
                  <span className="text-sm text-slate-500">May 1, 2025</span>
                </div>
                <p className="text-slate-600 mb-4">
                  Quarterly levy notices have been issued. Payments are due by May 31, 2025. Please ensure prompt
                  payment to avoid interest charges as per the Strata Schemes Management Act 2015.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Building Maintenance Update</h3>
                  <span className="text-sm text-slate-500">April 28, 2025</span>
                </div>
                <p className="text-slate-600 mb-4">
                  The scheduled maintenance of the common area lighting has been completed. The capital works fund has
                  been updated to reflect this expenditure. Thank you for your patience during this work.
                </p>
                <Button variant="outline" size="sm">
                  Read More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Quick Links</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-slate-200 p-3 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Meeting Schedule</h3>
                <p className="text-slate-600 mb-4">
                  View upcoming strata committee meetings and general meetings for owners.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link href="/documents#meetings">View Schedule</Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-slate-200 p-3 rounded-full mb-4">
                  <FileText className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">By-laws</h3>
                <p className="text-slate-600 mb-4">
                  Access the current by-laws that govern our strata scheme and community living.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link href="/documents#bylaws">View By-laws</Link>
                </Button>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-slate-200 p-3 rounded-full mb-4">
                  <Phone className="h-8 w-8 text-slate-700" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Emergency Contacts</h3>
                <p className="text-slate-600 mb-4">
                  Important contact information for building emergencies and after-hours issues.
                </p>
                <Button asChild variant="outline" className="mt-auto">
                  <Link href="/contact#emergency">View Contacts</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">About Our Strata Scheme</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-slate-600 mb-4">
                    Horizon Gardens is a strata-titled property located in Sydney, NSW, governed by the Strata Schemes
                    Management Act 2015. Our building consists of 48 residential units across 6 floors.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Our strata scheme is self-managed by an elected Strata Committee of 7 members, including the
                    Chairperson, Secretary, and Treasurer as required by NSW legislation.
                  </p>
                  <p className="text-slate-600">
                    All owners are automatically members of the Owners Corporation (body corporate), which is
                    responsible for the management and maintenance of common property through the collection of strata
                    levies.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Key Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-slate-200 p-1 rounded-full mr-3 mt-1">
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
                          className="text-slate-700"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>
                        <strong>Strata Plan:</strong> SP12345
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-slate-200 p-1 rounded-full mr-3 mt-1">
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
                          className="text-slate-700"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>
                        <strong>Units:</strong> 48 residential lots
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-slate-200 p-1 rounded-full mr-3 mt-1">
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
                          className="text-slate-700"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>
                        <strong>Committee Meetings:</strong> Monthly (first Tuesday)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-slate-200 p-1 rounded-full mr-3 mt-1">
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
                          className="text-slate-700"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>
                        <strong>AGM:</strong> Held annually in May
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-slate-200 p-1 rounded-full mr-3 mt-1">
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
                          className="text-slate-700"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span>
                        <strong>Levy Due Dates:</strong> Quarterly (Feb, May, Aug, Nov)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-slate-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Get Involved in Your Community</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              The success of our strata scheme depends on the active participation of all owners. Consider joining a
              subcommittee or attending the next general meeting.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-white text-slate-800 hover:bg-slate-100">
                <Link href="/committee">Learn About the Committee</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-slate-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
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
