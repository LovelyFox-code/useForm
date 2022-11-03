
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });
  console.log(errors);

  return (
    <div className="form-wrapper">
      <h1>simple form</h1>
      <p>with react useForm</p>
      <form onSubmit={handleSubmit((data) => {
        console.log(data);
      })}>
        <input {...register("name", { required: 'This is required' })} placeholder="name" />
        <p>{errors.name?.message}</p>
        <input {...register("email", {
          required: 'This is required', minLength: {
            value: 4,
            message: "Min length is 4"
          }
        })} placeholder="email" />
        <p>{errors.email?.message}</p>
        <input {...register("message")} placeholder="message" />
        <p>{errors.message?.message}</p>
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
