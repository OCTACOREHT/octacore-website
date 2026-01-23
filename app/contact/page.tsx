"use client"

import React from "react"
import { useState } from "react"
import { Mail, Phone, Instagram, Linkedin, Facebook, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const contactInfo = [
  {
    label: "Email",
    value: "octacore.haiti@gmail.com",
    href: "mailto:octacore.haiti@gmail.com",
    icon: Mail,
  },
  {
    label: "Téléphone",
    value: "+509 4473-2152",
    href: "tel:+50944732152",
    icon: Phone,
  },
  {
    label: "Téléphone",
    value: "+509 3794-7597",
    href: "tel:+50937947597",
    icon: Phone,
  },
]

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/octacore.ht/", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/octacoreplus/?viewAsMember=true", icon: Linkedin },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=61587140361937&locale=fr_FR", icon: Facebook },
  { name: "Email", href: "mailto:octacore.haiti@gmail.com", icon: Mail },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitError, setSubmitError] = useState("")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formState.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Email invalide"
    }
    
    if (!formState.message.trim()) {
      newErrors.message = "Le message est requis"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitError("")
    
    try {
      const response = await fetch("https://formspree.io/f/octacore.haiti@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          message: formState.message,
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormState({ name: "", email: "", phone: "", message: "" })
      } else {
        throw new Error("Erreur lors de l'envoi")
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Une erreur est survenue")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }))
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        {/* Blue Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2e] to-[#03011E]" />
        <div className="absolute inset-0 circuit-bg opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] font-bold text-clamp-h1 uppercase tracking-tight text-white mb-6 animate-fade-up">
            CONTACTEZ-NOUS
          </h1>
          <p className="text-lg sm:text-xl text-white/80 animate-fade-up-delay-1">
            Discutons de votre projet
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 sm:py-20 lg:py-28 bg-[#03011E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Contact Form - Centered */}
          <div className="max-w-xl mx-auto bg-[#0a0a2e] border border-[#2382FF]/20 rounded-2xl p-6 sm:p-8 md:p-10 mb-12">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
                <div className="w-16 h-16 mb-6 rounded-full bg-[#0030FF]/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-[#2382FF]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xl text-white mb-3 uppercase">
                  Message envoyé!
                </h3>
                <p className="text-white/70 mb-6">
                  Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-[#0030FF]/50 text-[#2382FF] hover:bg-[#0030FF]/10 bg-transparent"
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-xl text-white mb-6 text-center uppercase">
                  Envoyez-nous un message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-white/70">
                      Nom complet
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      className="bg-[#03011E] border-[#2382FF]/20 text-white placeholder:text-white/40 focus:border-[#0030FF] focus:ring-[#0030FF]/20"
                      placeholder="Votre nom"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-white/70">
                      Email <span className="text-[#0030FF]">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`bg-[#03011E] border-[#2382FF]/20 text-white placeholder:text-white/40 focus:border-[#0030FF] focus:ring-[#0030FF]/20 ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="votre@email.com"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-white/70">
                      Téléphone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className="bg-[#03011E] border-[#2382FF]/20 text-white placeholder:text-white/40 focus:border-[#0030FF] focus:ring-[#0030FF]/20"
                      placeholder="+509 XXXX-XXXX"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-white/70">
                      Message <span className="text-[#0030FF]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className={`w-full rounded-md bg-[#03011E] border border-[#2382FF]/20 text-white placeholder:text-white/40 focus:border-[#0030FF] focus:ring-[#0030FF]/20 focus:outline-none focus:ring-2 px-3 py-2 text-base ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Décrivez votre projet..."
                      required
                    />
                    {errors.message && (
                      <p className="text-red-400 text-sm">{errors.message}</p>
                    )}
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                      <p className="text-red-400 text-sm">{submitError}</p>
                    </div>
                  )}

                  {/* Submit Button - Core Electric Blue */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mx-auto bg-[#0030FF] text-white hover:bg-[#2382FF] font-semibold btn-glow disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        Envoyer message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>

          {/* Contact Info - Centered below form */}
          <div className="max-w-xl mx-auto">
            {/* Contact Details */}
            <div className="bg-[#0a0a2e] border border-[#2382FF]/20 rounded-2xl p-6 sm:p-8 mb-6">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg text-white mb-6 text-center uppercase">
                Nos coordonnées
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-[#0030FF]/5 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#0030FF]/10 flex items-center justify-center group-hover:bg-[#0030FF]/20 transition-colors flex-shrink-0">
                      <info.icon className="w-5 h-5 text-[#0030FF]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/60 text-sm">{info.label}</p>
                      <p className="text-white truncate">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links - 4 icons centered */}
            <div className="bg-[#0a0a2e] border border-[#2382FF]/20 rounded-2xl p-6 sm:p-8">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-lg text-white mb-6 text-center uppercase">
                Suivez-nous
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-[#0030FF]/10 flex items-center justify-center hover:bg-[#0030FF]/20 transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-[#0030FF]" />
                  </a>
                ))}
              </div>
              <p className="text-white/50 text-sm text-center mt-6">
                Port-au-Prince, Haïti
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
