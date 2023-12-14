import { useEffect } from "react";
import NextButton from "../../components/buttons/NextButton";
import TextInput from "../../components/TextInput";
import Headline from "../../components/Headline";
import ErrorMessage from "../../components/ErrorMessage";
import { useOnboardingStore } from "../../store";

export default function Email() {
  const { email, setEmail, emailValid, setEmailValid } = useOnboardingStore();

  const validateEmail = (input: string) => {
    const emailRegex = /^[a-zA-Z0-9/]+@[a-zA-Z0-9/]+\.[a-zA-Z0-9/]+$/;
    return emailRegex.test(input);
  };

  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
  };

  useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email]);

  return (
    <div className="flex flex-col pt-52 md:max-w-xl">
      <Headline style="3xl">What is your email?</Headline>

      <div className="mb-4">
        <TextInput
          defaultValue={email}
          type="email"
          placeholder="you@example.com"
          onChange={handleEmailChange}
        />

        {!emailValid && email && <ErrorMessage type="email address" />}
      </div>

      <NextButton className="hidden md:flex" disabled={!emailValid} />
    </div>
  );
}
