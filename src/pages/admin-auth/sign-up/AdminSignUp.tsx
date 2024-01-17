import { useState } from "react";
import { Button, Input } from "../../../design-system";
import { AuthWrapper, AuthActionLink } from "../../components";
import styled from "styled-components";
import { useFocus } from "../../../hooks/useFocus";
import toast from "react-hot-toast";
import { admin } from "../../../api";
import flatIronBuilding from "../../../assets/images/flat-iron-building.jpg";

const Form = styled.form`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-20);

    .sign-up__preferred-name,
    .sign-up__email,
    .sign-up__submit-button {
        grid-column: 1 / 3;
    }
`;

const AdminSignUp = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [preferredFirstName, setPreferredFirstName] = useState<string>("");
    const [companyName, setCompanyName] = useState<string>("");
    const [companyPosition, setCompanyPosition] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");

    const [isFormSubmitting, setIsFormSubmitting] = useState<boolean>(false);

    const focusRef = useFocus();

    const handleOnChangeFirstName = (value: string) => {
        setFirstName(value);
    };

    const handleOnChangeLastName = (value: string) => {
        setLastName(value);
    };

    const handleOnChangePreferredFirstName = (value: string) => {
        setPreferredFirstName(value);
    };

    const handleOnChangeCompanyName = (value: string) => {
        setCompanyName(value);
    };

    const handleOnChangeCompanyPosition = (value: string) => {
        setCompanyPosition(value);
    };

    const handleOnChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleOnChangePassword = (value: string) => {
        setPassword(value);
    };

    const handleOnChangePasswordConfirm = (value: string) => {
        setPasswordConfirm(value);
    };

    const isFormSubmittable =
        firstName && lastName && email && password && passwordConfirm;

    const createAccount = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            setIsFormSubmitting(true);

            const response = await admin.signUp({
                firstName,
                lastName,
                email,
                password,
                passwordConfirm,
                preferredFirstName,
                company: {
                    name: companyName,
                    position: companyPosition
                }
            });

            setIsFormSubmitting(false);
            setFirstName("");
            setLastName("");
            setPreferredFirstName("");
            setCompanyName("");
            setCompanyPosition("");
            setEmail("");
            setPassword("");
            setPasswordConfirm("");

            toast.success(response.message);
        } catch (error) {
            if (error instanceof Error) {
                setIsFormSubmitting(false);

                toast.error(error.message);
            }
        }
    };

    return (
        <AuthWrapper imageUrl={flatIronBuilding} pageTitle="Sign Up">
            <Form onSubmit={createAccount}>
                <Input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleOnChangeFirstName}
                    shape="rounded"
                    size="lg"
                    required={true}
                    inputRef={focusRef}
                    disabled={isFormSubmitting}
                />
                <Input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleOnChangeLastName}
                    shape="rounded"
                    size="lg"
                    required={true}
                    disabled={isFormSubmitting}
                />
                <Input
                    type="text"
                    placeholder="Preferred First Name"
                    value={preferredFirstName}
                    onChange={handleOnChangePreferredFirstName}
                    shape="rounded"
                    size="lg"
                    className="sign-up__preferred-name"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={handleOnChangeCompanyName}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="text"
                    placeholder="Company Position"
                    value={companyPosition}
                    onChange={handleOnChangeCompanyPosition}
                    shape="rounded"
                    size="lg"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleOnChangeEmail}
                    shape="rounded"
                    size="lg"
                    required={true}
                    className="sign-up__email"
                    disabled={isFormSubmitting}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChangePassword}
                    shape="rounded"
                    size="lg"
                    required={true}
                    disabled={isFormSubmitting}
                />
                <Input
                    type="password"
                    placeholder="Password Confirmation"
                    value={passwordConfirm}
                    onChange={handleOnChangePasswordConfirm}
                    shape="rounded"
                    size="lg"
                    required={true}
                    disabled={isFormSubmitting}
                />
                <Button
                    color="primary"
                    size="lg"
                    shape="rounded"
                    className="sign-up__submit-button"
                    disabled={isFormSubmitting || !isFormSubmittable}
                >
                    Sign Up
                </Button>
            </Form>
            <div style={{ marginTop: "auto" }}>
                <AuthActionLink
                    linkText="Login"
                    hintText="Already have an account?"
                    linkTo="/admin/login"
                />
            </div>
        </AuthWrapper>
    );
};

export { AdminSignUp };
