import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, FileText, Calendar, Bell, Wrench, CreditCard } from "lucide-react"

export default function ResidentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Horizon Strata</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-slate-300 font-medium">
                Home
              </Link>
              <Link
                href="/residents"
                className="hover:text-slate-300 font-medium text-slate-300 underline underline-offset-4"
              >
                Residents
              </Link>
              <Link href="/management" className="hover:text-slate-300 font-medium">
                Management
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
            <h2 className="text-3xl font-bold mb-4">Resident Portal</h2>
            <p className="text-xl max-w-3xl mb-6">
              Access all the resources and information you need as a resident of Horizon Strata.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-white text-slate-800 hover:bg-slate-100">
                <Link href="#login">Resident Login</Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-slate-600">
                <Link href="#resources">Resources</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Login Section */}
        <section id="login" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-slate-50 p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-center">Resident Login</h3>
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
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="py-16 bg-slate-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Resident Resources</h2>

            <Tabs defaultValue="information" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="information">Information</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
              </TabsList>

              <TabsContent value="information" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Resident Information</CardTitle>
                    <CardDescription>Important information for all residents</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start space-x-4">
                        <Bell className="h-6 w-6 text-slate-700 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Announcements</h4>
                          <p className="text-sm text-slate-600">
                            View the latest announcements and updates from management.
                          </p>
                          <a href="#" className="text-sm text-slate-800 font-medium hover:underline mt-2 inline-block">
                            View Announcements
                          </a>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start space-x-4">
                        <Calendar className="h-6 w-6 text-slate-700 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Community Calendar</h4>
                          <p className="text-sm text-slate-600">
                            Stay updated with upcoming events and important dates.
                          </p>
                          <a href="#" className="text-sm text-slate-800 font-medium hover:underline mt-2 inline-block">
                            View Calendar
                          </a>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start space-x-4">
                        <FileText className="h-6 w-6 text-slate-700 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Rules & Regulations</h4>
                          <p className="text-sm text-slate-600">Review the community rules, bylaws, and regulations.</p>
                          <a href="#" className="text-sm text-slate-800 font-medium hover:underline mt-2 inline-block">
                            View Rules
                          </a>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-start space-x-4">
                        <Users className="h-6 w-6 text-slate-700 mt-1" />
                        <div>
                          <h4 className="font-semibold mb-1">Community Directory</h4>
                          <p className="text-sm text-slate-600">Connect with your neighbors and community members.</p>
                          <a href="#" className="text-sm text-slate-800 font-medium hover:underline mt-2 inline-block">
                            View Directory
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="amenities" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Building Amenities</CardTitle>
                    <CardDescription>Information about amenities available to residents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-3">Swimming Pool</h4>
                        <p className="text-slate-600 mb-4">
                          The swimming pool is located on the ground floor and is open from 6:00 AM to 10:00 PM daily.
                        </p>
                        <div className="bg-slate-50 p-3 rounded-md text-sm">
                          <p className="font-medium">Rules:</p>
                          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-1">
                            <li>No lifeguard on duty - swim at your own risk</li>
                            <li>Children under 12 must be accompanied by an adult</li>
                            <li>No glass containers in the pool area</li>
                            <li>Please shower before entering the pool</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-3">Fitness Center</h4>
                        <p className="text-slate-600 mb-4">
                          The fitness center is located on the second floor and is accessible 24/7 with your resident
                          key fob.
                        </p>
                        <div className="bg-slate-50 p-3 rounded-md text-sm">
                          <p className="font-medium">Equipment:</p>
                          <ul className="list-disc list-inside text-slate-600 space-y-1 mt-1">
                            <li>Treadmills, ellipticals, and stationary bikes</li>
                            <li>Free weights and weight machines</li>
                            <li>Yoga mats and exercise balls</li>
                            <li>Water fountain and towel service</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-3">Community Room</h4>
                        <p className="text-slate-600 mb-4">
                          The community room can be reserved for private events and gatherings.
                        </p>
                        <Button className="bg-slate-800 hover:bg-slate-700">Reserve Community Room</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Strata Fee Payments</CardTitle>
                    <CardDescription>Manage your strata fee payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-semibold">Payment Methods</h4>
                          <CreditCard className="h-6 w-6 text-slate-700" />
                        </div>
                        <p className="text-slate-600 mb-4">
                          We offer several convenient ways to pay your monthly strata fees:
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
                              <p className="font-medium">Online Payment</p>
                              <p className="text-sm text-slate-600">Pay securely through our resident portal</p>
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
                              <p className="font-medium">Pre-Authorized Debit</p>
                              <p className="text-sm text-slate-600">Set up automatic monthly payments</p>
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
                              <p className="font-medium">Cheque</p>
                              <p className="text-sm text-slate-600">Drop off at the management office</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">Payment Schedule</h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full divide-y divide-slate-200">
                            <thead className="bg-slate-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider"
                                >
                                  Description
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
                                  Due Date
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
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                                  Monthly Strata Fee
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">$350.00</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">May 1, 2025</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                    Paid
                                  </span>
                                </td>
                              </tr>
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                                  Monthly Strata Fee
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">$350.00</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">June 1, 2025</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                    Upcoming
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-slate-800 hover:bg-slate-700 w-full">Make a Payment</Button>
                  </CardFooter>
                </Card>
              </TabsContent>

              <TabsContent value="maintenance" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Maintenance Requests</CardTitle>
                    <CardDescription>Submit and track maintenance requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="text-xl font-semibold">Submit a Request</h4>
                          <Wrench className="h-6 w-6 text-slate-700" />
                        </div>
                        <form className="space-y-4">
                          <div>
                            <label htmlFor="request-type" className="block text-sm font-medium text-slate-700 mb-1">
                              Request Type
                            </label>
                            <select id="request-type" className="w-full px-3 py-2 border border-slate-300 rounded-md">
                              <option>Select a request type</option>
                              <option>Plumbing</option>
                              <option>Electrical</option>
                              <option>HVAC</option>
                              <option>Appliance</option>
                              <option>Other</option>
                            </select>
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
                          <Button className="bg-slate-800 hover:bg-slate-700 w-full">Submit Request</Button>
                        </form>
                      </div>

                      <div className="bg-white p-6 rounded-lg border border-slate-200">
                        <h4 className="text-xl font-semibold mb-4">Recent Requests</h4>
                        <div className="space-y-4">
                          <div className="p-4 border border-slate-200 rounded-md">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-medium">Leaking Faucet</h5>
                                <p className="text-sm text-slate-600 mt-1">
                                  Bathroom sink faucet is dripping constantly
                                </p>
                              </div>
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                                In Progress
                              </span>
                            </div>
                            <div className="mt-3 text-xs text-slate-500">
                              Submitted: May 2, 2025 • Scheduled: May 5, 2025
                            </div>
                          </div>

                          <div className="p-4 border border-slate-200 rounded-md">
                            <div className="flex justify-between items-start">
                              <div>
                                <h5 className="font-medium">Light Fixture Replacement</h5>
                                <p className="text-sm text-slate-600 mt-1">Kitchen light fixture not working</p>
                              </div>
                              <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                Completed
                              </span>
                            </div>
                            <div className="mt-3 text-xs text-slate-500">
                              Submitted: April 25, 2025 • Completed: April 28, 2025
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How do I pay my strata fees?</h3>
                <p className="text-slate-600">
                  Strata fees can be paid online through the resident portal, by pre-authorized debit, or by cheque
                  delivered to the management office.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How do I book the community room?</h3>
                <p className="text-slate-600">
                  The community room can be booked through the resident portal or by contacting the management office. A
                  security deposit may be required.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">What should I do if I'm locked out of my unit?</h3>
                <p className="text-slate-600">
                  Contact the management office during business hours or the emergency after-hours number. A lockout fee
                  may apply.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">How do I report a noise complaint?</h3>
                <p className="text-slate-600">
                  For immediate concerns, contact the security desk. For ongoing issues, submit a complaint through the
                  resident portal or contact management.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Users className="h-6 w-6" />
                <h3 className="text-xl font-bold">Horizon Strata</h3>
              </div>
              <p className="text-slate-400">Professional strata management services for modern communities.</p>
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
                  <Link href="/residents" className="hover:text-white">
                    Residents
                  </Link>
                </li>
                <li>
                  <Link href="/management" className="hover:text-white">
                    Management
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
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
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
                  <span>(123) 456-7890</span>
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
                  <span>info@horizonstrata.com</span>
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
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>123 Strata Avenue, City, State</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Monday - Friday: 9AM - 5PM</li>
                <li>Saturday: 10AM - 2PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Horizon Strata. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
