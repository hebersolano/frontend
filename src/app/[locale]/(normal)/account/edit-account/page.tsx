import AvatarForm from "../_lib/avatar-form";
import ChangePasswordForm from "../_lib/change-password-form";
import UserDetailsForm from "../_lib/user-details-form";

function EditAccountPage() {
  return (
    <div className="space-y-16">
      <AvatarForm />
      <UserDetailsForm />
      <ChangePasswordForm />
    </div>
  );
}

export default EditAccountPage;
