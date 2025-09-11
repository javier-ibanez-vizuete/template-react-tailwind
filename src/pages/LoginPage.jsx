import { useState } from "react";
import { Container } from "../components/Container";
import { FormInput } from "../components/FormInput";
import { Button } from "../components/UI/Button";
import { useAuth } from "../core/auth/useAuth";
import { LoginVerificationFields } from "../helpers/FieldsVerificator";

const INITIAL_FORM_DATA = {
    email: "",
    password: "",
};

const LOGIN_FIELDS = [
    {
        containerClass: "flex flex-col gap-2",
        input: {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "user@user.com",
            required: true,
        },
        label: {
            text: "Email",
            className: "",
        },
    },
    {
        containerClass: "flex flex-col gap-2",
        input: {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "1234",
            required: true,
        },
        label: {
            text: "Contraseña",
            className: "",
        },
    },
];

export const LoginPage = () => {
    const [form, setForm] = useState(INITIAL_FORM_DATA);
    const { login } = useAuth();
    const [error, setError] = useState("");

    const onInputChange = (event) => {
        const { name, value } = event.target;

        setError("");
        setForm((prevValue) => ({ ...prevValue, [name]: value }));
    };

    const onLoginSubmit = async (event) => {
        event.preventDefault();

        const isError = LoginVerificationFields(form);
        if (isError) return setError(isError);

        await login(form);
        setForm(INITIAL_FORM_DATA);
    };

    return (
        <Container className="flex flex-col flex-1 items-center">
            <div className="flex flex-col gap-md bg-white">
                <h2 className="">INICIAR SESION</h2>

                <form className="flex flex-col gap-md" onSubmit={onLoginSubmit}>
                    {LOGIN_FIELDS.map(({ label, input, containerClass }) => (
                        <FormInput
                            key={input.id}
                            containerClass={containerClass}
                            input={{
                                id: input.id,
                                name: input.name,
                                type: input.type,
                                placeholder: input.placeholder,
                                value: form[input.name],
                                onChange: onInputChange,
                                required: input.required,
                            }}
                            label={{
                                text: label.text,
                                className: label.className,
                            }}
                        />
                    ))}

                    {error && <h3>{error}</h3>}
                    <Button type="submit" className="w-full mt-2 justify-center rounded-full">
                        Entrar
                    </Button>
                </form>
            </div>
        </Container>
    );
};
