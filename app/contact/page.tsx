import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const metadata = { title: `Contact — ${site.company}` };

export default function ContactPage() {
  return (
    <section className="max-w-lg mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-2 text-gray-600">
        For pricing, sizes, and delivery timelines, message us on WhatsApp or
        email.
      </p>

      <div className="mt-6 grid gap-3">
        <Button asChild className="rounded-full w-full sm:w-auto">
          <a href={`https://wa.me/${site.whatsapp}`} target="_blank">
            WhatsApp: {site.phone}
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          className="rounded-full w-full sm:w-auto"
        >
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </Button>
        <p className="text-sm text-gray-500">{site.address}</p>
      </div>

      {/* lightweight form -> mailto (no backend yet) */}
      <form
        className="mt-10 grid gap-4 max-w-lg"
        action={`mailto:${site.email}`}
        method="post"
        encType="text/plain"
      >
        <Input name="name" placeholder="Your name" required />
        <Input name="company" placeholder="Company (optional)" />
        <Input name="phone" placeholder="Phone" required />
        <Textarea name="message" placeholder="Message" rows={4} />
        <Button type="submit" className="rounded-full">
          Send Email
        </Button>
      </form>
    </section>
  );
}
