import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Seo } from "@/components/seo/Seo";

export function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
      <Seo title="Page Not Found" path="/404" noIndex />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative">
        <p className="font-heading text-7xl font-bold text-primary md:text-8xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-bold md:text-3xl">Page not found</h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/">
              <Home size={16} className="mr-2" />
              Go to homepage
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/services">
              <ArrowLeft size={16} className="mr-2" />
              Browse services
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
