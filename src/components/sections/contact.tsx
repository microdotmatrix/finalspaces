"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form
      className="flex flex-col gap-2"
      action={async (formData) => {
        console.log(formData.get("email"), formData.get("message"));
      }}
    >
      <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Your message..."
            className="min-h-32"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1">
          <Button type="submit" className="flex-1">
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
          <Button
            variant="outline"
            type="reset"
            className="flex-1"
            onClick={() => {
              setEmail(""), setMessage("");
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};
