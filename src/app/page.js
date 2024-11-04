import Header from "./components/Header";
import SignUpForm from "./components/SignUpForm";
import MemberList from "./components/MemberList";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-lg px-4 py-6">
        <Header />
        <SignUpForm />
        <MemberList />
      </div>
    </div>
  );
}
