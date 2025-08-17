import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitContactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    submitContactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-4">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-blue mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities in materials engineering and project leadership
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-semibold text-slate-200 mb-6">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="text-blue-400" size={32} />
                </div>
                <h4 className="text-xl font-semibold text-slate-200 mb-2">Thank you!</h4>
                <p className="text-slate-400">Your message has been sent successfully. I'll get back to you soon.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your Name"
                              className="bg-slate-900 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-300">Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              className="bg-slate-900 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Project Collaboration"
                            className="bg-slate-900 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project or opportunity..."
                            rows={5}
                            className="bg-slate-900 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-blue-500 focus:ring-blue-500"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    disabled={submitContactMutation.isPending}
                    className="w-full bg-gradient-blue text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
                  >
                    {submitContactMutation.isPending ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-200 mb-6">Get in Touch</h3>
              <p className="text-slate-400 text-lg mb-8">
                I'm always interested in discussing new opportunities, collaborations, and innovative projects in materials engineering and beyond.
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">Email</h4>
                  <p className="text-slate-400">afagnas@up.edu.ph</p>
                  <p className="text-slate-400">agnasaljhone@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-cyan-400" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">Phone</h4>
                  <p className="text-slate-400">+63 949-192-3652</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h4 className="text-slate-200 font-medium">Location</h4>
                  <p className="text-slate-400">Quezon City, Philippines</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-medium text-slate-200 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/aljhoneagnas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                >
                  <Linkedin className="text-slate-300 hover:text-white" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                >
                  <Github className="text-slate-300 hover:text-white" size={24} />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-slate-800 hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                >
                  <Twitter className="text-slate-300 hover:text-white" size={24} />
                </a>
                <a
                  href="mailto:afagnas@up.edu.ph"
                  className="w-12 h-12 bg-slate-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
                >
                  <Mail className="text-slate-300 hover:text-white" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
