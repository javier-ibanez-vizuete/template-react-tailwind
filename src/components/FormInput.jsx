import { Input } from "./UI/Input";

export const FormInput = ({ containerClass, label, input }) => {
    return (
        <div className={containerClass}>
            <label htmlFor={input.id} className={`font-medium ${label.className}`}>
                {label.text}
            </label>
            <Input
                id={input.id}
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={input.onChange}
                required={input.required}
                className={input.className}
            />
        </div>
    );
};
