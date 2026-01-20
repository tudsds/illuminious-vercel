import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDFM from "./pages/services/DFM";
import ServiceOEM from "./pages/services/OEM";
import ServiceODM from "./pages/services/ODM";
import ServiceEMS from "./pages/services/EMS";
import ServicePrototyping from "./pages/services/Prototyping";
import ServiceLogistics from "./pages/services/Logistics";
import ServicePCB from "./pages/services/PCB";
import ServiceMolding from "./pages/services/Molding";
import ServicePackaging from "./pages/services/Packaging";
import ServiceAssembly from "./pages/services/Assembly";
import ServiceTesting from "./pages/services/Testing";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Startups from "./pages/Startups";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminPostEditor from "./pages/AdminPostEditor";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      {/* Public Pages */}
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/dfm" component={ServiceDFM} />
      <Route path="/services/oem" component={ServiceOEM} />
      <Route path="/services/odm" component={ServiceODM} />
      <Route path="/services/ems" component={ServiceEMS} />
      <Route path="/services/prototyping" component={ServicePrototyping} />
      <Route path="/services/logistics" component={ServiceLogistics} />
      <Route path="/services/pcb" component={ServicePCB} />
      <Route path="/services/molding" component={ServiceMolding} />
      <Route path="/services/packaging" component={ServicePackaging} />
      <Route path="/services/assembly" component={ServiceAssembly} />
      <Route path="/services/testing" component={ServiceTesting} />
      <Route path="/news" component={News} />
      <Route path="/news/:slug" component={NewsDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:slug" component={BlogDetail} />
      <Route path="/startups" component={Startups} />
      <Route path="/contact" component={Contact} />
      <Route path="/thank-you" component={ThankYou} />
      
      {/* Admin Routes - not linked from navigation */}
      <Route path="/admin" component={AdminLogin} />
      <Route path="/admin/login" component={AdminLogin} />
      <Route path="/admin/dashboard" component={AdminDashboard} />
      <Route path="/admin/posts/new" component={AdminPostEditor} />
      <Route path="/admin/posts/:id" component={AdminPostEditor} />
      
      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
