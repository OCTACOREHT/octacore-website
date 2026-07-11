"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Sparkles as SparklesComp } from "@/components/ui/sparkles"
import { TimelineContent } from "@/components/ui/timeline-animation"
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { cn } from "@/lib/utils"
import NumberFlow from "@number-flow/react"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

const plans = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI",
    price: 12,
    yearlyPrice: 99,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
      "Free includes:",
      "Unlimted Cards",
      "Custom background & stickers",
      "2-factor authentication",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced features",
    price: 48,
    yearlyPrice: 399,
    buttonText: "Get started",
    buttonVariant: "default" as const,
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
      "Everything in Starter, plus:",
      "Advanced checklists",
      "Custom fields",
      "Servedless functions",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams",
    price: 96,
    yearlyPrice: 899,
    buttonText: "Get started",
    buttonVariant: "outline" as const,
    includes: [
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
      "Everything in Business, plus:",
      "Multi-board management",
      "Multi-board guest",
      "Attachment permissions",
    ],
  },
]

const PricingSwitch = ({ onSwitch }: { onSwitch: (value: string) => void }) => {
  const [selected, setSelected] = useState("0")

  const handleSwitch = (value: string) => {
    setSelected(value)
    onSwitch(value)
  }

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-gray-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10  rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-gray-200",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-10 w-full  rounded-full border-4 shadow-sm shadow-blue-600 border-blue-600 bg-gradient-to-t from-blue-500 to-blue-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">Yearly</span>
        </button>
      </div>
    </div>
  )
}

export default function PricingSection4() {
  const [isYearly, setIsYearly] = useState(false)
  const pricingRef = useRef<HTMLDivElement>(null)

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0,
    },
  }

  const togglePricingPeriod = (value: string) =>
    setIsYearly(Number.parseInt(value) === 1)

  return (
    <div
      className="min-h-screen mx-auto relative bg-black overflow-x-hidden pt-20"
      ref={pricingRef}
    >
      <TimelineContent
        animationNum={4}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] "
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px] "></div>
        <SparklesComp
          density={1800}
          direction="bottom"
          speed={1}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
        />
      </TimelineContent>
      <TimelineContent
        animationNum={5}
        timelineRef={pricingRef}
        customVariants={revealVariants}
        className="absolute left-0 top-[-114px] w-full h-[113.625vh] flex flex-col items-start justify-start content-start flex-none flex-nowrap gap-2.5 overflow-hidden p-0 z-0 pointer-events-none"
      >
        <div className="framer-1i5axl2">
          <div
            className="absolute left-[calc(50%-568px)] right-[-568px] top-0 h-[2053px] w-[1136px] flex-none rounded-full"
            style={{
              border: "200px solid #3131f5",
              filter: "blur(92px)",
              WebkitFilter: "blur(92px)",
              opacity: 0.2,
            }}
            data-border="true"
            data-framer-name="Ellipse 1"
          ></div>
        </div>
      </TimelineContent>

      <article className="text-center mb-6 pt-16 lg:pt-32 max-w-3xl mx-auto space-y-4 relative z-50 px-4">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center "
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
              delay: 0,
            }}
          >
            Plans that work best for you
          </VerticalCutReveal>
        </h2>

        <AnimatedText
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-[family-name:var(--font-sans)]"
        >
          Trusted by millions. We help teams all around the world. Explore which option is right for you.
        </AnimatedText>

        <TimelineContent
          as="div"
          animationNum={1}
          timelineRef={pricingRef}
          customVariants={revealVariants}
          className="pt-4"
        >
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0 pointer-events-none"
        style={{
          backgroundImage: `
        radial-gradient(circle at center, #206ce8 0%, transparent 70%)
      `,
          opacity: 0.3,
          mixBlendMode: "multiply",
        }}
      />

      <div className="grid md:grid-cols-3 max-w-6xl gap-6 py-12 px-4 mx-auto relative z-10 pb-32">
        {plans.map((plan, index) => (
          <TimelineContent
            key={plan.name}
            as="div"
            animationNum={2 + index}
            timelineRef={pricingRef}
            customVariants={revealVariants}
          >
            <Card
              className={`relative h-full flex flex-col text-white border-neutral-800 ${
                plan.popular
                  ? "bg-gradient-to-b from-neutral-900 to-neutral-950 shadow-[0px_0px_50px_-10px_#0900ff] z-20 md:-mt-4 md:mb-4 border-blue-500/50"
                  : "bg-gradient-to-b from-neutral-900 to-neutral-950 z-10"
              }`}
            >
              <CardHeader className="text-left flex-none">
                <div className="flex justify-between">
                  <h3 className="font-[family-name:var(--font-heading)] text-2xl mb-2 font-bold uppercase">{plan.name}</h3>
                  {plan.popular && (
                    <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full h-fit font-medium">
                      POPULAR
                    </span>
                  )}
                </div>
                <div className="flex items-baseline mt-4">
                  <span className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]">
                    $
                    <NumberFlow
                      format={{
                        currency: "USD",
                      }}
                      value={isYearly ? plan.yearlyPrice : plan.price}
                      className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-heading)]"
                    />
                  </span>
                  <span className="text-gray-400 ml-2 font-medium">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-4 flex-grow flex flex-col">
                <button
                  className={`w-full mb-8 py-3 px-4 font-bold rounded-xl transition-all ${
                    plan.popular
                      ? "bg-gradient-to-t from-blue-600 to-blue-500 shadow-lg shadow-blue-900/50 text-white hover:scale-[1.02]"
                      : plan.buttonVariant === "outline"
                        ? "bg-neutral-800/50 hover:bg-neutral-800 text-white hover:scale-[1.02] border border-neutral-700"
                        : ""
                  }`}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-4 pt-4 border-t border-neutral-800 flex-grow">
                  <h4 className="font-semibold text-sm text-gray-200">
                    {plan.includes[0]}
                  </h4>
                  <ul className="space-y-3">
                    {plan.includes.slice(1).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3"
                      >
                        <span className="mt-1 h-1.5 w-1.5 bg-blue-500 rounded-full flex-shrink-0 grid place-content-center shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                        <span className="text-sm text-gray-400">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  )
}
