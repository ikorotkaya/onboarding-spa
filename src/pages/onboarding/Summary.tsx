import { useOnboardingStore } from "../../store";
import SubmitButton from "../../components/SubmitButton";

export default function Summary() {
  const { name, email, phoneNumber, income } = useOnboardingStore();

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <h2 className="block mb-8 text-3xl font-bold text-stone-900 sm:text-4xl">
        Check your info:
      </h2>

      <div
        data-testid="summary"
        className="mb-12 grid grid-cols-[1fr,2fr] gap-1 border-dashed border-[1px] border-stone-300 rounded-md"
      >
        <div className="px-4 py-2">Name:</div>
        <div className="px-4 py-2">{name}</div>
        <div className="px-4 py-2">Email:</div>
        <div className="px-4 py-2">{email}</div>
        <div className="px-4 py-2">Phone Number:</div>
        <div className="px-4 py-2">{phoneNumber}</div>
        <div className="px-4 py-2">Income:</div>
        <div className="px-4 py-2">{income}</div>
      </div>

      <div className="py-4 px-8 md:p-0 w-full fixed md:relative bottom-0 left-0">
        <SubmitButton />
      </div>
    </div>
  );
}
