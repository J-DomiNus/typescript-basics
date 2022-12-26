import { useState, ChangeEvent } from "react";

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    form,
    handleChange,
    ...form,
  };
};
