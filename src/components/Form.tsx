import { useForm } from "../hooks/useForm";

interface FormData {
  email: string;
  name: string;
  age: number;
}

const Form = () => {
  const { name, email, age, form, handleChange } = useForm<FormData>({
    email: "pepe@pepe.com",
    name: "Pepito",
    age: 33,
  });

  //   const { name, email, age } = form;

  return (
    <>
      <h3>Hooks</h3>
      <form autoComplete="off">
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            name="age"
            value={age}
            onChange={handleChange}
          />
        </div>
        <pre>{JSON.stringify(form)}</pre>
      </form>
    </>
  );
};

export default Form;
