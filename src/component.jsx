
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function Component() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <div className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                prefetch={false}
              >
                <div className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link href="#" className="flex items-center gap-4 px-2.5 text-foreground" prefetch={false}>
                <div className="h-5 w-5" />
                Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <div className="h-5 w-5" />
                Products
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <div className="h-5 w-5" />
                Blog
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <div className="h-5 w-5" />
                Users
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}
              >
                <div className="h-5 w-5" />
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Breadcrumb className="hidden md:flex">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="#" prefetch={false}>
                  Dashboard
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Overview</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="relative ml-auto flex-1 md:grow-0">
          <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <Card className="sm:col-span-2" x-chunk="dashboard-05-chunk-0">
              <CardHeader className="pb-3">
                <CardTitle>Overview</CardTitle>
                <CardDescription>Key statistics and insights for your business.</CardDescription>
              </CardHeader>
              <CardFooter>
                <div className="grid grid-cols-2 gap-4">
                  <Card x-chunk="dashboard-05-chunk-1">
                    <CardHeader className="pb-2">
                      <CardDescription>Total Products</CardDescription>
                      <CardTitle className="text-4xl">125</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+10% from last month</div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={12} aria-label="12% increase" />
                    </CardFooter>
                  </Card>
                  <Card x-chunk="dashboard-05-chunk-2">
                    <CardHeader className="pb-2">
                      <CardDescription>Total Users</CardDescription>
                      <CardTitle className="text-4xl">1,329</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+25% from last month</div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={25} aria-label="25% increase" />
                    </CardFooter>
                  </Card>
                  <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="pb-2">
                      <CardDescription>Total Sales</CardDescription>
                      <CardTitle className="text-4xl">$5,329</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+10% from last month</div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={12} aria-label="12% increase" />
                    </CardFooter>
                  </Card>
                  <Card x-chunk="dashboard-05-chunk-4">
                    <CardHeader className="pb-2">
                      <CardDescription>New Signups</CardDescription>
                      <CardTitle className="text-4xl">234</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-xs text-muted-foreground">+15% from last month</div>
                    </CardContent>
                    <CardFooter>
                      <Progress value={15} aria-label="15% increase" />
                    </CardFooter>
                  </Card>
                </div>
              </CardFooter>
            </Card>
            <Tabs defaultValue="products">
              <div className="flex items-center">
                <TabsList>
                  <TabsTrigger value="products">Products</TabsTrigger>
                  <TabsTrigger value="blog">Blog</TabsTrigger>
                  <TabsTrigger value="users">Users</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm" className="h-7 gap-1 text-sm">
                        <div className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Filter</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <Button size="sm" variant="outline" className="h-7 gap-1 text-sm">
                    <div className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Export</span>
                  </Button>
                  <Button size="sm" className="h-7 gap-1 text-sm">
                    <div className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only">Add</span>
                  </Button>
                </div>
              </div>
              <TabsContent value="products">
                <Card x-chunk="dashboard-05-chunk-5">
                  <CardHeader className="px-7">
                    <CardTitle>Products</CardTitle>
                    <CardDescription>Manage your products and view their performance.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Image</TableHead>
                          <TableHead>Name</TableHead>
                          <TableHead className="hidden md:table-cell">Status</TableHead>
                          <TableHead className="hidden md:table-cell">Price</TableHead>
                          <TableHead className="hidden md:table-cell">Sales</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <img
                              src="/placeholder.svg"
                              width="64"
                              height="64"
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                            />
                          </TableCell>
                          <TableCell className="font-medium">Glimmer Lamps</TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              In Production
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">$250.00</TableCell>
                          <TableCell className="hidden md:table-cell">500</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                  <div className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <img
                              src="/placeholder.svg"
                              width="64"
                              height="64"
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                            />
                          </TableCell>
                          <TableCell className="font-medium">Aqua Filters</TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Available for Order
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">$150.00</TableCell>
                          <TableCell className="hidden md:table-cell">750</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                  <div className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <img
                              src="/placeholder.svg"
                              width="64"
                              height="64"
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                            />
                          </TableCell>
                          <TableCell className="font-medium">Eco Planters</TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge className="text-xs" variant="secondary">
                              Backordered
                            </Badge>
                          </TableCell>
                          <TableCell className="hidden md:table-cell">$300.00</TableCell>
                          <TableCell className="hidden md:table-cell">300</TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button aria-haspopup="true" size="icon" variant="ghost">
                                  <div className="h-4 w-4" />
                                  <span className="sr-only">Toggle menu</span>
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Delete</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            <img
                              src="/placeholder.svg"
                              width="64"
                              height="64"
                              alt="Product image"
                              className="aspect-square rounded-md object-cover"
                            />
                          </TableCell>
                          <TableCell className="font-medium">Zest Juicers</TableCell>
                          <TableCell className="hidden md:table-cell">
                            <Badge className="text-xs" />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  )
}