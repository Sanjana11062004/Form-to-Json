import React from "react";
import { useForm } from "react-hook-form";

function Form(){
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log the data to see the input values
                console.log(data);
            };
    return(
        <>
        <div>
            <form id="form">
        <div className="form-control">
            <label >Full Name</label>
            <input {...register("name", { required: true })} id="name" name="name" type="text"  />
        </div>
        <div className="form-control">
            <label >Email Address</label>
            <input {...register("email", { required: true })} id="email" name="email" type="email" />
        </div>
        <div className="form-control">
            <label >Enter a Message</label>
            <textarea {...register("message", { required: true })} id="message" name="message" rows="6" cols="65" ></textarea>
        </div>
        <button className="btn" type="submit">Send</button>
    </form>
    <script src="./script.js"></script>
        </div>
        </>
    )
}

export default Form;