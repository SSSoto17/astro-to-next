import Avatar from "./Avatar";
import Button from "./Button";

const MemberCard = ({ name, role, imgUrl }) => {
  return (
    <>
      <div className="flex items-center gap-4">
        <Avatar {...{ name, imgUrl }} />
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <Button variant="secondary" text="Invite" />
    </>
  );
};

export default MemberCard;
