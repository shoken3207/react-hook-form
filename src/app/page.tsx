import ClientSideComponent from "@/components/ClientSideComponent";
import ContactForm from "@/components/ContactForm";
import CreateUserForm from "@/components/CreateUserForm";
import ServerSideComponent from "@/components/ServerSideComponent";

export default function Home() {
  return (
    <div>
      <ServerSideComponent />
      <ClientSideComponent />
      <CreateUserForm />
      {/* <ContactForm /> */}
    </div>
  );
}
