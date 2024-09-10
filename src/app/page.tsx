import ClientSideComponent from "@/components/ClientSideComponent";
import ContactForm from "@/components/ContactForm";
import ServerSideComponent from "@/components/ServerSideComponent";

export default function Home() {
  return (
    <div>
      <ServerSideComponent />
      <ClientSideComponent />
      <ContactForm />
    </div>
  );
}
