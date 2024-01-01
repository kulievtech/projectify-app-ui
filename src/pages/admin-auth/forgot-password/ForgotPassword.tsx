import { useState } from "react";
import { Input } from "../../../design-system";
import { PasswordWrapper } from "../../components";

import forgotPasswordImg from "../../../assets/images/forgot-password.svg";

const ForgotPassword = () => {
    const [email, setEmail] = useState<string>("");

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const sendInstructions = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <PasswordWrapper
            pageTitle="Forgot Password?"
            imagePath={forgotPasswordImg}
            btnText="Get Instructions"
        >
            <form onSubmit={sendInstructions}>
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                />
            </form>
        </PasswordWrapper>
    );
};

export { ForgotPassword };
