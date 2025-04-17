import { Switch, Route, useLocation, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";

// Create a base for GitHub Pages
const base = '/react_myportfolio';

// Custom hook to use with Wouter for GitHub Pages deployments
const useHashLocation = () => {
  const [location, setLocation] = useLocation();
  const basename = base;
  
  return [
    // For the location, remove the basename from the start if it's there
    location.startsWith(basename) ? location.slice(basename.length) : location,
    // For the setter, add the basename before setting
    (to: string) => setLocation(basename + to)
  ] as const;
};

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  
  return (
    <WouterRouter hook={useHashLocation}>
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen flex flex-col">
          <Navbar currentPath={location} />
          <div className="flex-grow">
            <Router />
          </div>
          <Footer />
        </div>
        <Toaster />
      </QueryClientProvider>
    </WouterRouter>
  );
}

export default App;