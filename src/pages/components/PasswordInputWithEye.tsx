import { useState } from "react";
import { Icon, Input } from "../../design-system";
import styled from "styled-components";

type PasswordInputEyeProps = {
    isFormSubmitting?: boolean;
    focusRef?: React.MutableRefObject<
        HTMLInputElement | HTMLTextAreaElement | null
    >;
    password: string;
    passwordConfirm?: string;
    placeholder?: string;
    handleOnChangePassword: (value: string) => void;
    inputClassName?: string;
    iconClassName?: string;
};

const StyledIcon = styled(Icon)`
    position: absolute;
    right: var(--space-16);
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
`;

const PasswordInputWithEye: React.FC<PasswordInputEyeProps> = ({
    focusRef,
    password,
    handleOnChangePassword,
    placeholder,
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
            placeholder={placeholder}
            value={password}
            onChange={handleOnChangePassword}
            shape="rounded"
            size="lg"
            required={true}
            className={inputClassName}
            inputRef={focusRef}
            disabled={isFormSubmitting}
        >
            {password ? (
                <StyledIcon
                    iconName={
                        isPasswordRevealed ? "password-eye-off" : "password-eye"
                    }
                    className={iconClassName}
                    onClick={handleRevealPasswordOnclick}
                />
            ) : null}
        </Input>
    );
};

export { PasswordInputWithEye };
