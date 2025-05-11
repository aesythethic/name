import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, FileText, CreditCard, Calendar, Wrench } from "lucide-react"

export default function OwnersPage() {
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
              <Link
                href="/owners"
                className="hover:text-slate-300 font-medium text-slate-300 underline underline-offset-4"
              >
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
            <h2 className="text-3xl font-bold mb-4">Owners Portal</h2>
            <p className="text-xl max-w-3xl mb-6">
              Access important information and resources for owners and residents of Horizon Gardens.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-slate-800 hover:bg-slate-100">
                <Link href="#login">Owner Login</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-slate-600">
                <Link href="#resources">Resources</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section id="login" className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-slate-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">Owner Login</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="w-full px-3 py-2 border border-slate-300 rounded-md"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-slate-600 border-slate-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                      Remember me
                    </label>
                  </div>
                  <a href="#" className="text-sm text-slate-600 hover:text-slate-800">
                    Forgot password?
                  </a>
                </div>
                <Button className="w-full bg-slate-800 hover:bg-slate-700">Sign In</Button>
              </form>
              <div className="mt-4 text-center text-sm text-slate-600">
                <p>
                  Don't have an account?{" "}
                  <a href="#" className="text-slate-800 font-medium hover:underline">
                    Register here
                  </a>
                </p>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-200 text-sm text-slate-500">
                <p>
                  Note: This portal is for lot owners and residents only. If you're a tenant, please contact your
                  managing agent for access.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-12 bg-slate-100">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-10">Owner Resources</h3>

            <Tabs defaultValue="levies" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="levies">Levies & Finances</TabsTrigger>
                <TabsTrigger value="meetings">Meetings</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
                <TabsTrigger value="bylaws">By-laws & Rules</TabsTrigger>
              </TabsList>

              <TabsContent value="levies" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Strata Levies & Financial Information</CardTitle>
                    <CardDescription>Understanding your financial obligations as a lot owner</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-semibold">About Strata Levies</h4>
                          <CreditCard className="h-6 w-6 text-slate-700" />
                        </div>
                        <p className="text-slate-600 mb-4">
                          Under the NSW Strata Schemes Management Act 2015, all lot owners must contribute to the costs
                          of maintaining and managing the strata scheme through regular levy payments. At Horizon
                          Gardens, levies are collected quarterly and are allocated to two funds:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start space-x-3">
                            <div className="bg-slate-100 p-1 rounded-full mt-1">
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
                                className="h-4 w-4 text-slate-700"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">Administrative Fund</p>
                              <p className="text-sm text-slate-600">
                                Covers day-to-day expenses such as insurance, utilities for common areas, cleaning, and
                                regular maintenance.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start space-x-3">
                            <div className="bg-slate-100 p-1 rounded-full mt-1">
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
                                className="h-4 w-4 text-slate-700"
                              >
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <div>
                              <p className="font-medium">Capital Works Fund</p>
                              <p className="text-sm text-slate-600">
                                Funds major repairs, replacements, and improvements to common property as outlined in
                                our 10-year plan.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">Levy Payment Schedule</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                                >
                                  Quarter
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                                >
                                  Due Date
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                                >
                                  Amount
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                                >
                                  Status
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">Q1 (Feb-Apr)</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">February 1</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">$850.00</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Paid
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">Q2 (May-Jul)</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">May 1</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">$850.00</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    Due Now
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">Q3 (Aug-Oct)</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">August 1</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">$850.00</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800">
                                    Upcoming
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">Q4 (Nov-Jan)</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">November 1</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">$850.00</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800">
                                    Upcoming
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">
                          Note: A 10% interest charge applies to levies that remain unpaid 30 days after the due date,
                          as per the Strata Schemes Management Act 2015.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">Payment Methods</h4>
                        <ul className="space-y-4">
                          <li className="flex items-start">
                            <div className="bg-slate-100 p-2 rounded-md mr-4 mt-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-slate-700"
                              >
                                <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                                <line x1="1" y1="10" x2="23" y2="10" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium">Direct Debit</h5>
                              <p className="text-slate-600 mt-1">
                                Set up automatic quarterly payments from your bank account. Download the direct debit
                                form from the Documents section.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-slate-100 p-2 rounded-md mr-4 mt-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-slate-700"
                              >
                                <polyline points="9 11 12 14 22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium">Electronic Funds Transfer (EFT)</h5>
                              <p className="text-slate-600 mt-1">
                                Transfer funds directly to the strata account. Include your lot number as reference.
                              </p>
                              <p className="text-sm mt-1">
                                <strong>BSB:</strong> 123-456 | <strong>Account:</strong> 12345678 |{" "}
                                <strong>Name:</strong> SP12345 Horizon Gardens
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-slate-100 p-2 rounded-md mr-4 mt-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-slate-700"
                              >
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                                <circle cx="8.5" cy="8.5" r="1.5" />
                                <polyline points="21 15 16 10 5 21" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium">BPAY</h5>
                              <p className="text-slate-600 mt-1">
                                Use the BPAY details provided on your levy notice to make payments through your online
                                banking.
                              </p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">Financial Reports</h4>
                        <p className="text-slate-600 mb-4">
                          Financial reports are prepared quarterly and presented at committee meetings. Annual financial
                          statements are presented at the AGM and are available in the Documents section.
                        </p>
                        <div className="flex space-x-4">
                          <Button asChild variant="outline">
                            <Link href="/documents#financial">View Financial Reports</Link>
                          </Button>
                          <Button asChild variant="outline">
                            <Link href="/documents#budget">View Current Budget</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="meetings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Meetings & Participation</CardTitle>
                    <CardDescription>Information about strata meetings and how to participate</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-semibold">Types of Meetings</h4>
                          <Calendar className="h-6 w-6 text-slate-700" />
                        </div>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium">Annual General Meeting (AGM)</h5>
                            <p className="text-slate-600 mt-1">
                              Held once a year, typically in May. All owners are encouraged to attend. The AGM covers:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 mt-2 ml-4 space-y-1">
                              <li>Election of the strata committee</li>
                              <li>Approval of the annual budget</li>
                              <li>Presentation of financial statements</li>
                              <li>Appointment of auditors (if required)</li>
                              <li>Review of insurance coverage</li>
                            </ul>
                          </div>

                          <div>
                            <h5 className="font-medium">Extraordinary General Meetings (EGM)</h5>
                            <p className="text-slate-600 mt-1">
                              Called to address specific issues that cannot wait until the next AGM, such as special
                              levies or major decisions requiring owner approval.
                            </p>
                          </div>

                          <div>
                            <h5 className="font-medium">Strata Committee Meetings</h5>
                            <p className="text-slate-600 mt-1">
                              Held monthly to manage the day-to-day operations of the building. Owners may attend as
                              observers but cannot vote unless they are committee members.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">Upcoming Meetings</h4>
                        <ul className="space-y-4">
                          <li className="border-b border-slate-200 pb-4">
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">Annual General Meeting</p>
                                <p className="text-slate-600">Tuesday, May 15, 2025 | 7:00 PM</p>
                                <p className="text-slate-600">Location: Community Room</p>
                              </div>
                              <Button asChild variant="outline" size="sm">
                                <Link href="/documents#agm">View Agenda</Link>
                              </Button>
                            </div>
                          </li>
                          <li className="border-b border-slate-200 pb-4">
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">Committee Meeting</p>
                                <p className="text-slate-600">Tuesday, June 4, 2025 | 7:00 PM</p>
                                <p className="text-slate-600">Location: Community Room</p>
                              </div>
                              <Button asChild variant="outline" size="sm">
                                <Link href="/documents#committee">View Agenda</Link>
                              </Button>
                            </div>
                          </li>
                          <li>
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">Special General Meeting</p>
                                <p className="text-slate-600">Tuesday, August 20, 2025 | 7:00 PM</p>
                                <p className="text-slate-600">Location: Community Room</p>
                                <p className="text-sm text-slate-500 mt-1">
                                  Topic: Capital Works Fund 10-year plan review
                                </p>
                              </div>
                              <Button asChild variant="outline" size="sm">
                                <Link href="/documents#sgm">View Agenda</Link>
                              </Button>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">How to Participate</h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium">Voting Rights</h5>
                            <p className="text-slate-600 mt-1">
                              Each lot has one vote at general meetings. If a lot has multiple owners, they must
                              nominate one person to vote on their behalf. Owners with outstanding levies may have their
                              voting rights restricted.
                            </p>
                          </div>

                          <div>
                            <h5 className="font-medium">Proxies</h5>
                            <p className="text-slate-600 mt-1">
                              If you cannot attend a meeting, you can appoint a proxy to vote on your behalf. Proxy
                              forms must be submitted to the Secretary at least 24 hours before the meeting.
                            </p>
                            <Button asChild variant="outline" size="sm" className="mt-2">
                              <Link href="/documents#forms">Download Proxy Form</Link>
                            </Button>
                          </div>

                          <div>
                            <h5 className="font-medium">Submitting Motions</h5>
                            <p className="text-slate-600 mt-1">
                              Owners can submit motions to be included on the agenda of general meetings. Motions must
                              be submitted to the Secretary at least 14 days before the meeting.
                            </p>
                            <Button asChild variant="outline" size="sm" className="mt-2">
                              <Link href="/documents#forms">Download Motion Submission Form</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="maintenance" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Maintenance & Repairs</CardTitle>
                    <CardDescription>Information about building maintenance and how to report issues</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-semibold">Maintenance Responsibilities</h4>
                          <Wrench className="h-6 w-6 text-slate-700" />
                        </div>
                        <p className="text-slate-600 mb-4">
                          Understanding who is responsible for maintenance and repairs is important. Generally:
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-slate-50 p-4 rounded-lg">
                            <h5 className="font-medium mb-2">Owners Corporation Responsibility</h5>
                            <ul className="list-disc list-inside text-slate-600 space-y-1">
                              <li>Common property (hallways, stairs, lifts)</li>
                              <li>External walls, windows, and doors</li>
                              <li>Structural elements of the building</li>
                              <li>Common area plumbing and electrical systems</li>
                              <li>Building exterior and roof</li>
                              <li>Gardens and landscaping</li>
                              <li>Shared facilities (gym, pool, etc.)</li>
                            </ul>
                          </div>
                          <div className="bg-slate-50 p-4 rounded-lg">
                            <h5 className="font-medium mb-2">Lot Owner Responsibility</h5>
                            <ul className="list-disc list-inside text-slate-600 space-y-1">
                              <li>Internal walls, floors, and ceilings</li>
                              <li>Internal doors and fixtures</li>
                              <li>Kitchen and bathroom fixtures</li>
                              <li>Internal plumbing and electrical within the lot</li>
                              <li>Internal painting and decorating</li>
                              <li>Appliances and fittings</li>
                              <li>Any improvements made to the lot</li>
                            </ul>
                          </div>
                        </div>
                        <p className="text-sm text-slate-500 mt-4">
                          Note: The exact boundaries between common property and lot property are defined in the strata
                          plan. If you're unsure about responsibility, please contact the strata committee.
                        </p>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">Reporting Maintenance Issues</h4>
                        <p className="text-slate-600 mb-4">
                          To report issues with common property or request maintenance, please use our online
                          maintenance request form or contact the building manager.
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg mb-4">
                          <h5 className="font-medium mb-2">Maintenance Request Process</h5>
                          <ol className="list-decimal list-inside text-slate-600 space-y-2">
                            <li>Submit a maintenance request using the form below or by email</li>
                            <li>The request will be reviewed by the building manager or strata committee</li>
                            <li>
                              Urgent issues will be addressed immediately; non-urgent matters will be scheduled
                              accordingly
                            </li>
                            <li>You will be notified when the issue has been resolved</li>
                          </ol>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="issue-type" className="block text-sm font-medium text-slate-700 mb-1">
                              Issue Type
                            </label>
                            <select id="issue-type" className="w-full px-3 py-2 border border-slate-300 rounded-md">
                              <option>Select issue type</option>
                              <option>Plumbing</option>
                              <option>Electrical</option>
                              <option>Structural</option>
                              <option>Common Area</option>
                              <option>Security</option>
                              <option>Other</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="location" className="block text-sm font-medium text-slate-700 mb-1">
                              Location
                            </label>
                            <input
                              id="location"
                              type="text"
                              className="w-full px-3 py-2 border border-slate-300 rounded-md"
                              placeholder="e.g., Lobby, Level 2 hallway, etc."
                            />
                          </div>
                          <div>
                            <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1">
                              Description
                            </label>
                            <textarea
                              id="description"
                              rows={4}
                              className="w-full px-3 py-2 border border-slate-300 rounded-md"
                              placeholder="Please describe the issue in detail..."
                            ></textarea>
                          </div>
                          <div>
                            <label htmlFor="priority" className="block text-sm font-medium text-slate-700 mb-1">
                              Priority
                            </label>
                            <select id="priority" className="w-full px-3 py-2 border border-slate-300 rounded-md">
                              <option>Low</option>
                              <option>Medium</option>
                              <option>High</option>
                              <option>Emergency</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">
                              Upload Photos (optional)
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
                                <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                              </div>
                            </div>
                          </div>
                          <Button className="w-full">Submit Maintenance Request</Button>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">Planned Maintenance</h4>
                        <p className="text-slate-600 mb-4">
                          The strata committee maintains a schedule of planned maintenance based on the 10-year Capital
                          Works Fund plan. Major upcoming maintenance includes:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="bg-slate-100 p-2 rounded-md mr-4 mt-1">
                              <Calendar className="h-5 w-5 text-slate-700" />
                            </div>
                            <div>
                              <h5 className="font-medium">Exterior Painting</h5>
                              <p className="text-slate-600 mt-1">Scheduled for September 2025</p>
                              <p className="text-sm text-slate-500">
                                Full exterior repaint to maintain building appearance and protect surfaces.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-slate-100 p-2 rounded-md mr-4 mt-1">
                              <Calendar className="h-5 w-5 text-slate-700" />
                            </div>
                            <div>
                              <h5 className="font-medium">Lift Modernization</h5>
                              <p className="text-slate-600 mt-1">Scheduled for November 2025</p>
                              <p className="text-sm text-slate-500">
                                Upgrading lift controls and interior to improve reliability and efficiency.
                              </p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-slate-100 p-2 rounded-md mr-4 mt-1">
                              <Calendar className="h-5 w-5 text-slate-700" />
                            </div>
                            <div>
                              <h5 className="font-medium">Roof Inspection and Maintenance</h5>
                              <p className="text-slate-600 mt-1">Scheduled for March 2026</p>
                              <p className="text-sm text-slate-500">
                                Comprehensive roof inspection and preventative maintenance.
                              </p>
                            </div>
                          </li>
                        </ul>
                        <div className="mt-4">
                          <Button asChild variant="outline">
                            <Link href="/documents#maintenance">View Full Maintenance Schedule</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="bylaws" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>By-laws & Rules</CardTitle>
                    <CardDescription>Understanding the rules that govern our strata community</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-semibold">About By-laws</h4>
                          <FileText className="h-6 w-6 text-slate-700" />
                        </div>
                        <p className="text-slate-600 mb-4">
                          By-laws are the rules that govern how owners, occupiers, and visitors must behave within the
                          strata scheme. They are legally enforceable under the NSW Strata Schemes Management Act 2015
                          and help ensure a harmonious living environment for all residents.
                        </p>
                        <p className="text-slate-600 mb-4">
                          Our by-laws cover important aspects of community living such as noise, parking, pets, smoking,
                          renovations, and the use of common property. All owners and residents must comply with these
                          by-laws.
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg">
                          <h5 className="font-medium mb-2">By-law Changes</h5>
                          <p className="text-slate-600">
                            By-laws can be changed by a special resolution at a general meeting (requiring at least 75%
                            of votes in favor). Any changes must be registered with NSW Land Registry Services within 6
                            months to be enforceable.
                          </p>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">Key By-laws</h4>
                        <div className="space-y-4">
                          <div className="border-b border-slate-200 pb-4">
                            <h5 className="font-medium">Noise and Behaviour</h5>
                            <p className="text-slate-600 mt-1">
                              Residents must not create noise or behave in a way that is likely to interfere with the
                              peaceful enjoyment of another resident or anyone else using common property.
                            </p>
                            <p className="text-sm text-slate-500 mt-1">
                              Quiet hours: 10:00 PM to 7:00 AM on weekdays, 11:00 PM to 8:00 AM on weekends.
                            </p>
                          </div>

                          <div className="border-b border-slate-200 pb-4">
                            <h5 className="font-medium">Pets</h5>
                            <p className="text-slate-600 mt-1">
                              Pets are allowed with written approval from the strata committee. Approval is subject to
                              conditions regarding size, type, and behavior of the pet. Pet owners must ensure their
                              pets do not cause nuisance to other residents.
                            </p>
                            <Button asChild variant="outline" size="sm" className="mt-2">
                              <Link href="/documents#forms">Download Pet Application Form</Link>
                            </Button>
                          </div>

                          <div className="border-b border-slate-200 pb-4">
                            <h5 className="font-medium">Parking</h5>
                            <p className="text-slate-600 mt-1">
                              Residents must only park in their designated parking spaces. Visitor parking is for
                              temporary use by guests only (maximum 24 hours). No repairs or maintenance of vehicles is
                              permitted in the parking areas.
                            </p>
                          </div>

                          <div className="border-b border-slate-200 pb-4">
                            <h5 className="font-medium">Renovations</h5>
                            <p className="text-slate-600 mt-1">
                              Minor renovations require approval from the strata committee. Major renovations (affecting
                              the structure or external appearance) require a special resolution at a general meeting.
                              Work can only be carried out between 8:00 AM and 5:00 PM Monday to Friday, and 9:00 AM to
                              3:00 PM on Saturdays.
                            </p>
                            <Button asChild variant="outline" size="sm" className="mt-2">
                              <Link href="/documents#forms">Download Renovation Application Form</Link>
                            </Button>
                          </div>

                          <div className="border-b border-slate-200 pb-4">
                            <h5 className="font-medium">Smoking</h5>
                            <p className="text-slate-600 mt-1">
                              Smoking is prohibited in all common areas. Residents must ensure smoke from their lot does
                              not drift into other lots or common property.
                            </p>
                          </div>

                          <div>
                            <h5 className="font-medium">Short-term Letting</h5>
                            <p className="text-slate-600 mt-1">
                              Short-term letting (less than 3 months) is not permitted without prior approval from the
                              strata committee. All tenants must be registered with the strata committee.
                            </p>
                          </div>
                        </div>
                        <div className="mt-6">
                          <Button asChild>
                            <Link href="/documents#bylaws">View Complete By-laws</Link>
                          </Button>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">By-law Enforcement</h4>
                        <p className="text-slate-600 mb-4">
                          The strata committee is responsible for enforcing by-laws. The process for addressing by-law
                          breaches is as follows:
                        </p>
                        <ol className="list-decimal list-inside text-slate-600 space-y-2 mb-4">
                          <li>
                            Informal communication - The committee will first attempt to resolve the issue informally
                          </li>
                          <li>Notice to Comply - If the breach continues, a formal Notice to Comply will be issued</li>
                          <li>
                            Mediation - If the issue remains unresolved, mediation through NSW Fair Trading may be
                            arranged
                          </li>
                          <li>
                            NSW Civil and Administrative Tribunal (NCAT) - As a last resort, the matter may be taken to
                            NCAT for resolution
                          </li>
                        </ol>
                        <p className="text-slate-600">
                          Penalties for by-law breaches can be up to $1,100 for the first offense and $2,200 for
                          subsequent offenses within 12 months, as determined by NCAT.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h3>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">How do I pay my strata levies?</h4>
                <p className="text-slate-600">
                  Strata levies can be paid by direct debit, electronic funds transfer (EFT), or BPAY. Details for each
                  payment method are provided on your levy notice and in the Owners Portal.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">What should I do if I can't pay my levies on time?</h4>
                <p className="text-slate-600">
                  If you're experiencing financial difficulty, please contact the Treasurer as soon as possible to
                  discuss payment arrangements. Early communication can help avoid interest charges and potential legal
                  action.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">How do I report a maintenance issue in common areas?</h4>
                <p className="text-slate-600">
                  You can report maintenance issues through the maintenance request form in the Owners Portal, by email
                  to maintenance@horizongardens.com.au, or by contacting the building manager directly for urgent
                  issues.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">How can I get involved in the strata committee?</h4>
                <p className="text-slate-600">
                  The strata committee is elected annually at the AGM. To nominate, submit a nomination form before the
                  AGM or nominate yourself at the meeting. All lot owners are eligible to be elected to the committee.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">What insurance does the strata scheme have?</h4>
                <p className="text-slate-600">
                  The strata scheme maintains building insurance, public liability insurance, and workers compensation
                  insurance as required by law. However, this does not cover contents insurance for individual lots,
                  which owners should arrange separately.
                </p>
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
