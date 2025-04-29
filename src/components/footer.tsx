import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { ContactSection } from "./sections/contact";

export const Footer = () => {
  return (
    <footer className="bg-muted/30 py-16 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactSection />

          <div>
            <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
            <div className="flex gap-4 mb-8">
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <Separator className="my-8" />

            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                <Link
                  href="#"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </p>
              <p>
                <Link
                  href="#"
                  className="underline underline-offset-4 hover:text-foreground"
                >
                  Terms of Service
                </Link>
              </p>
              <p>
                © {new Date().getFullYear()} FinalSpaces. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
