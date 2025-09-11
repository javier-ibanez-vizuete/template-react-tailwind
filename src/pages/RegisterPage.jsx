import { useState } from "react";
import { Container } from "../components/Container";
import { FormInput } from "../components/FormInput";
import { Button } from "../components/UI/Button";
import { useAuth } from "../core/auth/useAuth";
import { RegisterVerificationFields } from "../helpers/FieldsVerificator";

const INITIAL_FORM_DATA = {
    name: "",
    email: "",
    address: "",
    password: "",
    repassword: "",
};

const REGISTER_FORM_FIELDS = [
    {
        containerClass: "flex flex-col gap-2",
        input: {
            id: "name",
            name: "name",
            type: "text",
            placeholder: "Nombre Apellido1 Apellido2",
            label: "Campo nombre completo",
            required: true,
        },
        label: {
            text: "Nombre Completo",
            className: "",
        },
    },
    {
        containerClass: "flex flex-col gap-2",
        input: {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "usuario@usuario.com",
            label: "Campo Correo Electrónico",
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
            id: "address",
            name: "address",
            type: "text",
            placeholder: "Calle Inventada, 12 Ciudad",
            label: "Campo Direccion Personal",
            required: true,
        },
        label: {
            text: "Dirección",
            className: "",
        },
    },
    {
        containerClass: "flex flex-col gap-2",
        input: {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "123456789",
            label: "Campo contraseña",
            required: true,
        },
        label: {
            text: "Contraseña",
            className: "",
        },
    },
    {
        containerClass: "flex flex-col gap-2",
        input: {
            id: "repassword",
            name: "repassword",
            type: "password",
            placeholder: "123456789",
            label: "Campo Confirmar Contraseña",
            required: true,
        },
        label: {
            text: "Confirmar Contraseña",
            className: "",
        },
    },
];

export const RegisterPage = () => {
    const [form, setForm] = useState(INITIAL_FORM_DATA);
    const [error, setError] = useState("");
    const { register } = useAuth();

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setError("");

        setForm((prevValue) => ({ ...prevValue, [name]: value }));
    };

    const onRegisterSubmit = async (event) => {
        event.preventDefault();

        const isError = RegisterVerificationFields(form);
        if (isError) return setError(isError);
        const { repassword, ...restForm } = form;

        console.log("Esto es el formulario acabado ", restForm);

        // await register(restForm);
        // setForm(INITIAL_FORM_DATA);
    };

    return (
        <Container className="flex justify-center items-center">
            <div className="flex flex-col gap-md bg-white p-8">
                <h2 className="">Registro</h2>

                <form className="flex flex-col gap-md" onSubmit={onRegisterSubmit}>
                    {REGISTER_FORM_FIELDS.map(({ containerClass, input, label }) => (
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

                    <Button type="submit" className="w-full mt-2 justify-center rounded-full text-black">
                        Registrarse
                    </Button>
                </form>
            </div>
        </Container>
    );
};
