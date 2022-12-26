import { useForm } from "../hooks/useForm";

interface FormData {
  age: number;
  lastname: string;
}

const Form2 = () => {
  const { age, lastname, form, handleChange } = useForm<FormData>({
    age: 33,
    lastname: "",
  });
  //   const { age, lastname } = form;
  return (
    <>
      <h3>Hooks</h3>
      <form autoComplete="off">
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
        <div className="mb-3">
          <label className="form-label">Lastname:</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            value={lastname}
            onChange={handleChange}
          />
        </div>
        <pre>{JSON.stringify(form)}</pre>
      </form>
    </>
  );
};

export default Form2;
