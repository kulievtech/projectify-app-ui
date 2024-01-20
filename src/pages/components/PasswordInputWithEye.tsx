import { useState } from "react";
import { Icon, Input } from "../../design-system";

type PasswordInputEyeProps = {
    isFormSubmitting: boolean;
    password: string;
    passwordConfirm?: string;
    handleOnChangePassword: (value: string) => void;
    inputClassName?: string;
    iconClassName?: string;
};

const PasswordInputWithEye: React.FC<PasswordInputEyeProps> = ({
    password,
    handleOnChangePassword,
    isFormSubmitting,
    inputClassName,
    iconClassName
}) => {
    const [isPasswordRevealed, setIsPasswordRevealed] =
        useState<boolean>(false);

    const handleRevealPasswordOnclick = () => {
        setIsPasswordRevealed(!isPasswordRevealed);
    };

    return (
        <Input
            type={isPasswordRevealed ? "text" : "password"}
            passwordEye={true}
            value={password}
            onChange={handleOnChangePassword}
            shape="rounded"
            size="lg"
            required={true}
            className={inputClassName}
            disabled={isFormSubmitting}
        >
            <Icon
                iconName={
                    isPasswordRevealed ? "password-eye-off" : "password-eye"
                }
                className={iconClassName}
                onClick={handleRevealPasswordOnclick}
            />
        </Input>
    );
};

export { PasswordInputWithEye };
