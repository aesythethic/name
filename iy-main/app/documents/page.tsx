import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { FileText, Search, Download, Calendar, FileIcon } from "lucide-react"

export default function DocumentsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <FileText className="h-8 w-8" />
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
              <Link
                href="/documents"
                className="hover:text-slate-300 font-medium text-slate-300 underline underline-offset-4"
              >
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
            <h2 className="text-3xl font-bold mb-4">Document Center</h2>
            <p className="text-xl max-w-3xl mb-6">
              Access all important strata documents, forms, and resources in one convenient location.
            </p>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <Input type="search" placeholder="Search documents..." className="pl-10 py-6" />
              </div>
            </div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="bylaws" className="max-w-5xl mx-auto" id="bylaws">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="bylaws">By-laws</TabsTrigger>
                <TabsTrigger value="minutes">Meeting Minutes</TabsTrigger>
                <TabsTrigger value="financial">Financial</TabsTrigger>
                <TabsTrigger value="forms">Forms</TabsTrigger>
                <TabsTrigger value="notices">Notices</TabsTrigger>
                <TabsTrigger value="legislation">Legislation</TabsTrigger>
              </TabsList>

              <TabsContent value="bylaws" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Strata By-laws & Rules</CardTitle>
                    <CardDescription>Official by-laws and rules governing the strata scheme</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-slate-100 p-2 rounded-md">
                            <FileIcon className="h-6 w-6 text-slate-700" />
                          </div>
                          <div>
                            <h4 className="font-medium">Consolidated By-laws</h4>
                            <p className="text-sm text-slate-500">Last updated: January 15, 2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-5 w-5" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-slate-100 p-2 rounded-md">
                            <FileIcon className="h-6 w-6 text-slate-700" />
                          </div>
                          <div>
                            <h4 className="font-medium">House Rules</h4>
                            <p className="text-sm text-slate-500">Last updated: March 10, 2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-5 w-5" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-slate-100 p-2 rounded-md">
                            <FileIcon className="h-6 w-6 text-slate-700" />
                          </div>
                          <div>
                            <h4 className="font-medium">Pet Policy</h4>
                            <p className="text-sm text-slate-500">Last updated: February 5, 2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-5 w-5" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-slate-100 p-2 rounded-md">
                            <FileIcon className="h-6 w-6 text-slate-700" />
                          </div>
                          <div>
                            <h4 className="font-medium">Renovation Guidelines</h4>
                            <p className="text-sm text-slate-500">Last updated: April 20, 2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-5 w-5" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-slate-100 p-2 rounded-md">
                            <FileIcon className="h-6 w-6 text-slate-700" />
                          </div>
                          <div>
                            <h4 className="font-medium">Common Property Usage Guidelines</h4>
                            <p className="text-sm text-slate-500">Last updated: March 15, 2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-5 w-5" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="bg-slate-100 p-2 rounded-md">
                            <FileIcon className="h-6 w-6 text-slate-700" />
                          </div>
                          <div>
                            <h4 className="font-medium">Moving In/Out Procedures</h4>
                            <p className="text-sm text-slate-500">Last updated: January 30, 2025</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Download className="h-5 w-5" />
                          <span className="sr-only">Download</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="minutes" className="mt-6" id="minutes">
                <Card>
                  <CardHeader>
                    <CardTitle>Meeting Minutes</CardTitle>
                    <CardDescription>Records of strata committee and general meetings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Calendar className="h-5 w-5 mr-2" />
                          2025 Meetings
                        </h3>
                        <div className="space-y-3">
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-slate-100 p-2 rounded-md">
                                <FileIcon className="h-6 w-6 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Committee Meeting</h4>
                                <p className="text-sm text-slate-500">April 2, 2025</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-5 w-5" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-slate-100 p-2 rounded-md">
                                <FileIcon className="h-6 w-6 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Committee Meeting</h4>
                                <p className="text-sm text-slate-500">March 5, 2025</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-5 w-5" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-slate-100 p-2 rounded-md">
                                <FileIcon className="h-6 w-6 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Committee Meeting</h4>
                                <p className="text-sm text-slate-500">February 6, 2025</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-5 w-5" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-slate-100 p-2 rounded-md">
                                <FileIcon className="h-6 w-6 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Committee Meeting</h4>
                                <p className="text-sm text-slate-500">January 9, 2025</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-5 w-5" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Calendar className="h-5 w-5 mr-2" />
                          2024 Meetings
                        </h3>
                        <div className="space-y-3">
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-slate-100 p-2 rounded-md">
                                <FileIcon className="h-6 w-6 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Annual General Meeting</h4>
                                <p className="text-sm text-slate-500">December 10, 2024</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-5 w-5" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-slate-100 p-2 rounded-md">
                                <FileIcon className="h-6 w-6 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Committee Meeting</h4>
                                <p className="text-sm text-slate-500">December 4, 2024</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-5 w-5" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-slate-100 p-2 rounded-md">
                                <FileIcon className="h-6 w-6 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Committee Meeting</h4>
                                <p className="text-sm text-slate-500">November 6, 2024</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-5 w-5" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>

                          <Button variant="outline" className="w-full">
                            View All 2024 Meeting Minutes
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3 flex items-center">
                          <Calendar className="h-5 w-5 mr-2" />
                          Meeting Agendas
                        </h3>
                        <div className="space-y-3">
                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-slate-100 p-2 rounded-md">
                                <FileIcon className="h-6 w-6 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Annual General Meeting Agenda</h4>
                                <p className="text-sm text-slate-500">May 15, 2025</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-5 w-5" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="bg-slate-100 p-2 rounded-md">
                                <FileIcon className="h-6 w-6 text-slate-700" />
                              </div>
                              <div>
                                <h4 className="font-medium">Committee Meeting Agenda</h4>
                                <p className="text-sm text-slate-500">May 7, 2025</p>
                              </div>
                            </div>
                            <Button variant="ghost" size="icon">
                              <Download className="h-5 w-5" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>

                          <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="\
