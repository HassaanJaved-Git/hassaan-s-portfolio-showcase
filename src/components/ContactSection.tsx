import ScrollReveal from "./ScrollReveal";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-32">
      <div className="section-container text-center max-w-2xl mx-auto">
        <ScrollReveal>
          <p className="font-mono text-sm text-primary mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open.
            Whether you have a question, a project idea, or just want to say hi —
            I'll do my best to get back to you!
          </p>
          <a
            href="mailto:hassaanjaved@example.com"
            className="inline-block font-mono text-sm border border-primary text-primary px-10 py-4 rounded hover:bg-primary/10 transition-colors duration-200"
          >
            Say Hello
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
