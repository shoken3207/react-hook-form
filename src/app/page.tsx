import ClientSideComponent from "@/components/ClientSideComponent";
import ContactForm from "@/components/ContactForm";
import CreateUserForm from "@/components/CreateUserForm";
import ServerSideComponent from "@/components/ServerSideComponent";
import UploadImage from "@/components/UploadImage";

export default function Home() {
  return (
    <div>
      <ServerSideComponent />
      <ClientSideComponent />
      <UploadImage />
      <CreateUserForm />
      {/* <ContactForm /> */}
    </div>
  );
}
