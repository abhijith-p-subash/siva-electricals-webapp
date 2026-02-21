import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { ErrorBoundary } from "@/components/system/ErrorBoundary";
import { LoadingScreen } from "@/components/system/LoadingScreen";

import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("@/pages/Home").then((module) => ({ default: module.Home })));
const Services = lazy(() =>
  import("@/pages/Services").then((module) => ({ default: module.Services })),
);
const ServiceDetail = lazy(() =>
  import("@/pages/ServiceDetail").then((module) => ({ default: module.ServiceDetail })),
);
const About = lazy(() => import("@/pages/About").then((module) => ({ default: module.About })));
const Contact = lazy(() =>
  import("@/pages/Contact").then((module) => ({ default: module.Contact })),
);
const Quote = lazy(() => import("@/pages/Quote").then((module) => ({ default: module.Quote })));
const NotFound = lazy(() =>
  import("@/pages/NotFound").then((module) => ({ default: module.NotFound })),
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <Layout>
            <Suspense
              fallback={<LoadingScreen />}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/services/:slug/*" element={<ServiceDetail />} />
                <Route path="/service/:slug" element={<ServiceDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/quote" element={<Quote />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
