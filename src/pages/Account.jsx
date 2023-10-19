import Heading from "../components/ui/Heading";
import UpdatePasswordForm from "../features/authentication/components/UpdatePasswordForm";
import UpdateUserDataForm from "../features/authentication/components/UpdateUserDataForm";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>
      <UpdateUserDataForm />
      <Heading as="h3">Update password</Heading>
      <UpdatePasswordForm />
    </>
  );
}
export default Account;
