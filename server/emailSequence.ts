/**
 * Email Nurturing Sequences for Lead Conversion
 * Based on industry best practices: 5-minute rule, educational content, follow-up systems
 */

export const emailSequences = {
  welcome: [
    {
      subject: "Welcome to Rea Co Homes - Your Custom Home Builder in Central Oregon",
      delay: 0, // Send immediately
      template: "welcome",
      content: `
        Hi {{firstName}},

        Thank you for reaching out to Rea Co Homes! We're excited to learn more about your custom home project.

        Kevin Rea has been building award-winning luxury homes in Central Oregon since 1977. Whether you're planning a custom build in Brasada Ranch, Tetherow, or any of the 19 communities we serve, we're here to guide you through every step.

        **What Happens Next:**
        1. We'll review your project details
        2. Kevin will personally reach out within 24 hours
        3. We'll schedule a consultation at your convenience

        **In the meantime, explore these resources:**
        - [Custom Home Build Process: Step-by-Step Guide]
        - [Cost to Build a Custom Home in Bend, Oregon]
        - [Browse Our Portfolio of Award-Winning Homes]

        Questions? Call us anytime at 541-390-9848.

        Best regards,
        Kevin Rea
        Rea Co Homes
        CCB #193427
      `,
    },
    {
      subject: "Your Custom Home Budget Guide - Central Oregon Edition",
      delay: 86400000, // 24 hours
      template: "educational",
      content: `
        Hi {{firstName}},

        One of the most important conversations we have with clients is about budget. Transparency matters, especially for a project as significant as a custom home.

        **Here's what you should know about custom home costs in Central Oregon:**

        - Most custom builds begin around $500K-$1M depending on finishes
        - Lot preparation and site conditions significantly affect total cost
        - Premium finishes and custom features can range from $150-$250+ per square foot
        - Energy-efficient building and smart home integration add 5-10% to project cost

        **The real question isn't "how much will it cost?" but "what value will we receive?"**

        That's where Kevin's 45+ years of experience makes a difference. We've learned how to maximize value at every price point.

        Ready to discuss your specific project? [Schedule a Consultation]

        Best regards,
        Kevin Rea
      `,
    },
    {
      subject: "See What's Possible: Our Latest Custom Home Projects",
      delay: 172800000, // 48 hours
      template: "portfolio",
      content: `
        Hi {{firstName}},

        Every custom home tells a story. Here are some of our recent projects that showcase the quality and craftsmanship Rea Co Homes brings to every build.

        **Featured Projects:**
        - [Brasada Ranch Contemporary: Modern Mountain Living]
        - [Tetherow Showplace: Glass, Wood & Stone Harmony]
        - [Pronghorn Residence: Desert Modernism at Its Finest]

        Each project page includes:
        - High-quality photography and drone footage
        - Details about design, materials, and unique challenges solved
        - The story behind the build

        Notice something you like? Let's talk about how we can bring similar vision to your project.

        [View Full Portfolio]

        Best regards,
        Kevin Rea
      `,
    },
    {
      subject: "What Sets Rea Co Homes Apart: Our Process & Philosophy",
      delay: 259200000, // 72 hours
      template: "process",
      content: `
        Hi {{firstName}},

        Building a custom home is a partnership. It's not just about construction—it's about understanding your vision and bringing it to life with integrity and craftsmanship.

        **Here's what makes our process different:**

        1. **Personal Attention**: Kevin personally manages every project. You're not a number.
        2. **Clear Communication**: Weekly updates, transparent timelines, no surprises.
        3. **Quality Over Shortcuts**: We use premium materials and time-tested building methods.
        4. **Problem-Solving**: Every site is unique. We engineer solutions, not generic approaches.
        5. **Trusted Partnerships**: We work with the best architects, designers, and subcontractors in Central Oregon.

        **What Our Clients Say:**
        "Kevin is a master builder of relationships, ideas, teams and spaces. I have known Kevin for a decade and have enjoyed his vision, energy, talents and company every time we've connected." - Barbara Sumner, O'Neil Residence

        Ready to experience the Rea Co Homes difference? [Schedule Your Consultation]

        Best regards,
        Kevin Rea
        CCB #193427 | Award-Winning Builder | 45+ Years Experience
      `,
    },
  ],

  followUp: [
    {
      subject: "Still Thinking About Your Custom Home? Let's Talk Timeline",
      delay: 604800000, // 7 days after initial inquiry
      template: "followup",
      content: `
        Hi {{firstName}},

        We haven't heard from you yet, and we want to make sure you have all the information you need to move forward with your custom home project.

        Sometimes the decision to build takes time. That's completely normal. Whether you're still in the planning phase or ready to move forward, we're here to help.

        **Common Questions We Hear:**
        - "How long does a custom home build typically take?" (12-18 months)
        - "What's the first step?" (Initial consultation to discuss vision and budget)
        - "Can you build in my preferred community?" (We work in 19 Central Oregon communities)

        [Read Our FAQ: Custom Home Building in Central Oregon]

        If you have questions or want to discuss your project timeline, give us a call at 541-390-9848. Kevin is happy to chat.

        Best regards,
        Kevin Rea
      `,
    },
    {
      subject: "Exclusive: Limited-Time Consultation Offer for {{firstName}}",
      delay: 1209600000, // 14 days after initial inquiry
      template: "offer",
      content: `
        Hi {{firstName}},

        We're making space in our schedule for new projects, and we'd love to discuss your custom home vision.

        **For the next 7 days, we're offering:**
        - Complimentary in-depth consultation (normally $500 value)
        - Personalized project assessment and timeline
        - Budget guidance specific to your vision and location

        This offer is limited to qualified inquiries. [Claim Your Consultation Slot]

        Or call 541-390-9848 to schedule directly.

        Best regards,
        Kevin Rea
        Rea Co Homes
      `,
    },
  ],

  postConsultation: [
    {
      subject: "Thank You for Meeting With Us - Next Steps for Your Project",
      delay: 0, // Send immediately after consultation
      template: "postConsultation",
      content: `
        Hi {{firstName}},

        Thank you for taking the time to meet with us today. We enjoyed learning about your vision for your custom home.

        **Here's what we'll do next:**
        1. Kevin will prepare a personalized project summary and timeline
        2. We'll send you a detailed proposal within 3-5 business days
        3. We'll be available to answer any questions

        **In the meantime:**
        - [Review our design philosophy and approach]
        - [Explore similar projects in your preferred community]
        - [Download our Custom Home Building Guide]

        We're excited about the possibility of bringing your vision to life. If you have any questions before we send the proposal, don't hesitate to reach out.

        Best regards,
        Kevin Rea
        541-390-9848
      `,
    },
  ],
};

export async function sendEmailSequence(
  email: string,
  firstName: string,
  sequenceType: keyof typeof emailSequences,
  delayMs: number = 0
) {
  // This would integrate with your email provider (Resend)
  // Implementation depends on your backend setup

  console.log(
    `Scheduled email sequence: ${sequenceType} for ${email} in ${delayMs}ms`
  );
}
