export interface InputProps {
    name: string;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    id?: string;
    label?: string;
    value?: string | number | readonly string[] | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
