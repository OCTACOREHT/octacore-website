"use client"

import React, { useState, useRef, useEffect } from "react"
import { Mail, Phone, Instagram, Linkedin, Facebook, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const ACCESS_KEY = "7fdaacca-8ad7-4669-be27-40f4384540df"  // TA CLÉ

const contactInfo = [
  { label: "Email", value: "info@octacore.com", href: "mailto:info@octacore.com", icon: Mail },
  { label: "Phone", value: "509 4473-2152", href: "tel:50944732152", icon: Phone },
  { label: "Phone", value: "509 3794-7597", href: "tel:50937947597", icon: Phone },
]

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/octacore.ht?igsh=eWR1aGVwdHhsdXB4&utm_source=qr", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/octacoreplus?viewAsMember=true", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61587140361937&locale=fr_FR", icon: Facebook },
  { name: "Email", href: "mailto:info@octacore.com", icon: Mail },
]

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [result, setResult] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!result) return
    const id = window.setTimeout(() => setResult(""), 3000)
    return () => clearTimeout(id)
  }, [result])

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setResult("")

    const formData = new FormData(event.target as HTMLFormElement)
    formData.append("access_key", ACCESS_KEY)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      
      if (data.success) {
        setResult("Message sent!")
        formRef.current?.reset()
      } else {
        setResult("Error: " + (data.message || "Try again"))
      }
    } catch (error) {
      setResult("Network error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-section" />
        <div className="absolute inset-0 circuit-bg opacity-30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-4xl lg:text-6xl uppercase tracking-tight text-foreground mb-6 animate-fade-up">
            CONTACT US
          </h1>
          <p className="text-xl text-foreground/80 animate-fade-up animation-delay-200">
            Let's discuss your project
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Formulaire */}
          <div className="max-w-lg mx-auto bg-foreground/5 border border-border rounded-2xl p-8 mb-12">
            <h3 className="font-bold text-2xl text-foreground mb-8 text-center uppercase">
              Send us a message
            </h3>
            
            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">Full name</label>
                <Input 
                  type="text" 
                  name="name" 
                  required 
                  className="w-full bg-03011E border border-2382FF/20 text-foreground placeholder-white/40 focus:border-0030FF focus:ring-0030FF/20 px-4 py-3 rounded-lg"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Email <span className="text-0030FF">*</span>
                </label>
                <Input 
                  type="email" 
                  name="email" 
                  required 
                  className="w-full bg-03011E border border-2382FF/20 text-foreground placeholder-white/40 focus:border-0030FF focus:ring-0030FF/20 px-4 py-3 rounded-lg"
                  placeholder="nom@exemple.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">Phone</label>
                <Input 
                  type="tel" 
                  name="phone" 
                  className="w-full bg-03011E border border-2382FF/20 text-foreground placeholder-white/40 focus:border-0030FF focus:ring-0030FF/20 px-4 py-3 rounded-lg"
                  placeholder="509 XXXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground/70 mb-2">
                  Message <span className="text-0030FF">*</span>
                </label>
                <textarea 
                  name="message" 
                  rows={5}
                  required
                  className="w-full bg-03011E border border-2382FF/20 text-foreground placeholder-white/40 focus:border-0030FF focus:ring-0030FF/20 px-4 py-3 rounded-lg resize-vertical"
                  placeholder="Describe your project..."
                />
              </div>

              {result && (
                <div className={`p-4 rounded-lg text-center font-medium ${
                  /erreur/i.test(result) ? "bg-red-500/10 border border-red-500/30 text-red-400" : "bg-green-500/10 border border-green-500/30 text-green-400"
                }`}>
                  {result}
                </div>
              )}

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-0030FF to-2382FF hover:from-2382FF hover:to-0030FF text-foreground font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5 ml-2" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="max-w-lg mx-auto">
            <div className="bg-0a0a2e border border-2382FF/20 rounded-2xl p-8 mb-8">
              <h3 className="font-bold text-xl text-foreground mb-6 text-center uppercase">Our contact details</h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <a key={i} href={info.href} className="flex items-center gap-4 p-4 rounded-xl hover:bg-0030FF/10 transition-all group">
                    <div className="w-12 h-12 bg-0030FF/20 rounded-xl flex items-center justify-center group-hover:bg-0030FF/40 transition-colors">
                      <info.icon className="w-6 h-6 text-0030FF" />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm font-medium">{info.label}</p>
                      <p className="text-foreground font-semibold truncate">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-0a0a2e border border-2382FF/20 rounded-2xl p-8 text-center">
              <h3 className="font-bold text-xl text-foreground mb-6 uppercase">Follow us</h3>
              <div className="flex justify-center gap-6 mb-6">
                {socialLinks.map(link => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener" 
                    className="w-14 h-14 bg-0030FF/20 rounded-xl flex items-center justify-center hover:bg-0030FF/40 transition-all hover:scale-110 shadow-lg">
                    <link.icon className="w-6 h-6 text-0030FF" />
                  </a>
                ))}
              </div>
              <p className="text-foreground/50 text-lg">Port-au-Prince, Haiti</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
