import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, FileText, Mail, Calendar } from "lucide-react"

export default function CommitteePage() {
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
              <Link
                href="/committee"
                className="hover:text-slate-300 font-medium text-slate-300 underline underline-offset-4"
              >
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
        <section className="bg-slate-700 text-white py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-4">Your Strata Committee</h2>
            <p className="text-xl max-w-3xl mb-6">
              Meet the elected representatives responsible for managing Horizon Gardens on behalf of all owners.
            </p>
          </div>
        </section>

        {/* About Committee Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">About the Strata Committee</h3>
              <div className="bg-slate-50 p-6 rounded-lg mb-8">
                <p className="text-slate-600 mb-4">
                  Under the NSW Strata Schemes Management Act 2015, the strata committee is elected by the owners
                  corporation to manage the day-to-day operations of the strata scheme. Our committee consists of 7
                  members, elected at the Annual General Meeting for a term of one year.
                </p>
                <p className="text-slate-600 mb-4">
                  The committee is responsible for administering the by-laws, managing finances, organizing repairs and
                  maintenance, and ensuring compliance with relevant legislation. The committee meets monthly to discuss
                  and make decisions on matters affecting the strata scheme.
                </p>
                <p className="text-slate-600">
                  As required by law, our committee includes a Chairperson, Secretary, and Treasurer, each with specific
                  responsibilities outlined in the Strata Schemes Management Act.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card>
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto bg-slate-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
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
                        className="h-8 w-8 text-slate-700"
                      >
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <CardTitle>Chairperson</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-2">
                    <p className="text-slate-600 mb-4">
                      Presides over meetings, ensures proper procedures are followed, and represents the owners
                      corporation in official matters.
                    </p>
                    <p className="font-medium">Current Chairperson: Sarah Johnson</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto bg-slate-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <FileText className="h-8 w-8 text-slate-700" />
                    </div>
                    <CardTitle>Secretary</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-2">
                    <p className="text-slate-600 mb-4">
                      Prepares and distributes meeting notices, records minutes, maintains strata roll, and handles
                      correspondence.
                    </p>
                    <p className="font-medium">Current Secretary: Michael Chen</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center pb-2">
                    <div className="mx-auto bg-slate-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
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
                        className="h-8 w-8 text-slate-700"
                      >
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <line x1="2" y1="10" x2="22" y2="10" />
                      </svg>
                    </div>
                    <CardTitle>Treasurer</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center pt-2">
                    <p className="text-slate-600 mb-4">
                      Manages financial records, prepares budgets, oversees levy collection, and ensures proper
                      accounting practices.
                    </p>
                    <p className="font-medium">Current Treasurer: Amanda Rodriguez</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Committee Members Section */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-10">Meet Your Committee Members</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Committee member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">Sarah Johnson</h4>
                  <p className="text-slate-500 mb-3">Chairperson | Unit 12</p>
                  <p className="text-slate-600 mb-4">
                    Sarah has been an owner since 2018 and is serving her second term as Chairperson. She has extensive
                    experience in property management.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="mailto:chair@horizongardens.com.au">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Committee member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">Michael Chen</h4>
                  <p className="text-slate-500 mb-3">Secretary | Unit 24</p>
                  <p className="text-slate-600 mb-4">
                    Michael joined the committee in 2023 and brings organizational skills from his background in
                    administration and governance.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="mailto:secretary@horizongardens.com.au">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Committee member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">Amanda Rodriguez</h4>
                  <p className="text-slate-500 mb-3">Treasurer | Unit 36</p>
                  <p className="text-slate-600 mb-4">
                    Amanda has been Treasurer since 2022. With her background in accounting, she ensures transparent
                    financial management of our funds.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="mailto:treasurer@horizongardens.com.au">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Committee member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">David Wilson</h4>
                  <p className="text-slate-500 mb-3">Committee Member | Unit 8</p>
                  <p className="text-slate-600 mb-4">
                    David oversees building maintenance and repairs. His background in construction is invaluable for
                    maintenance planning.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="mailto:maintenance@horizongardens.com.au">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Committee member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">Lisa Patel</h4>
                  <p className="text-slate-500 mb-3">Committee Member | Unit 42</p>
                  <p className="text-slate-600 mb-4">
                    Lisa focuses on community engagement and social activities. She organizes building events and
                    welcomes new residents.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="mailto:community@horizongardens.com.au">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Committee member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">Robert Kim</h4>
                  <p className="text-slate-500 mb-3">Committee Member | Unit 17</p>
                  <p className="text-slate-600 mb-4">
                    Robert handles by-law compliance and dispute resolution. His legal background helps navigate strata
                    legislation effectively.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="mailto:bylaws@horizongardens.com.au">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src="/placeholder.svg?height=300&width=300"
                    alt="Committee member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-1">Emma Thompson</h4>
                  <p className="text-slate-500 mb-3">Committee Member | Unit 31</p>
                  <p className="text-slate-600 mb-4">
                    Emma manages communications and the website. She ensures all owners stay informed about building
                    matters and updates.
                  </p>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <a href="mailto:communications@horizongardens.com.au">
                      <Mail className="h-4 w-4 mr-2" />
                      Contact
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Committee Meetings Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6">Committee Meetings</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-slate-600 mb-4">
                    The strata committee meets on the first Tuesday of each month at 7:00 PM in the community room.
                    Meetings are open to observation by all owners, though only committee members can vote.
                  </p>
                  <p className="text-slate-600 mb-4">
                    If you wish to raise an issue for the committee to consider, please submit your request to the
                    Secretary at least 7 days before the meeting to have it included on the agenda.
                  </p>
                  <p className="text-slate-600 mb-4">
                    Minutes of committee meetings are made available to all owners within 7 days of each meeting and can
                    be accessed in the Documents section of this website.
                  </p>
                  <div className="mt-6">
                    <Button asChild>
                      <Link href="/documents#minutes">View Meeting Minutes</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4 flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Upcoming Meetings
                  </h4>
                  <ul className="space-y-4">
                    <li className="border-b border-slate-200 pb-3">
                      <p className="font-medium">Committee Meeting</p>
                      <p className="text-slate-600">Tuesday, June 4, 2025 | 7:00 PM</p>
                      <p className="text-slate-600">Location: Community Room</p>
                    </li>
                    <li className="border-b border-slate-200 pb-3">
                      <p className="font-medium">Committee Meeting</p>
                      <p className="text-slate-600">Tuesday, July 2, 2025 | 7:00 PM</p>
                      <p className="text-slate-600">Location: Community Room</p>
                    </li>
                    <li className="border-b border-slate-200 pb-3">
                      <p className="font-medium">Committee Meeting</p>
                      <p className="text-slate-600">Tuesday, August 6, 2025 | 7:00 PM</p>
                      <p className="text-slate-600">Location: Community Room</p>
                    </li>
                    <li>
                      <p className="font-medium">Special General Meeting</p>
                      <p className="text-slate-600">Tuesday, August 20, 2025 | 7:00 PM</p>
                      <p className="text-slate-600">Location: Community Room</p>
                      <p className="text-sm text-slate-500 mt-1">Topic: Capital Works Fund 10-year plan review</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section className="py-12 bg-slate-100">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-6">Get Involved</h3>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              The strata committee is elected annually at the AGM. All lot owners are eligible to nominate for a
              position on the committee. Consider getting involved to contribute to the management of your building.
            </p>
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-xl font-semibold mb-4">How to Join the Committee</h4>
              <ol className="text-left space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="bg-slate-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    1
                  </span>
                  <span className="text-slate-600">
                    Submit a nomination form before the Annual General Meeting (forms available in the Documents
                    section)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    2
                  </span>
                  <span className="text-slate-600">
                    Attend the AGM where elections will be held (you can nominate yourself on the day if positions
                    remain available)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    3
                  </span>
                  <span className="text-slate-600">
                    If elected, you will serve for a one-year term until the next AGM
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-100 rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    4
                  </span>
                  <span className="text-slate-600">
                    Committee roles (Chairperson, Secretary, Treasurer) are determined at the first committee meeting
                    following the AGM
                  </span>
                </li>
              </ol>
              <div className="flex justify-center">
                <Button asChild variant="outline">
                  <Link href="/documents#forms">Download Nomination Form</Link>
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
