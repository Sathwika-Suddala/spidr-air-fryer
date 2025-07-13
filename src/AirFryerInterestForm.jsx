import React,{ useState } from "react";
import "./FormStyles.css";

function AirFryerInterestForm()  {
    const [form,setForm]=useState({

        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        costGuess:"",
        pin:"",
    });

    const formatPhone=(raw)=>{
        const nums=raw.replace(/\D/g,"").slice(0,10);
        if(nums.length>=7) return nums.replace(/(\d{3})(\d{3})(\d{1,4})/,"($1) $2-$3");
        if(nums.length>=4) return nums.replace(/(\d{3})(d{1,3})/,"($1) $2");
        return nums;
    };

    const formatPin=(raw)=>{
        return raw.replace(/\D/g,"").slice(0,16).match(/.{1,4}/g)?.join("-") || "";
    };

    const handleChange=(e)=>{
        const {name,value}=e.target;
        let v=value;
        if(name=="phone") v=formatPhone(value);
        if(name=="pin") v=formatPin(value);
        setForm((f)=>({...f,[name]:v}));
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.table(form);
        alert("Thanks! Check the console.");
    };

    return(
        <form className="form-container" onSubmit={handleSubmit}>
            
            <h1 className="form-title">Spidr Air Fryer Interest Form</h1>
            <div className="form-group">
                <label>First Name</label>
                <input name="firstName" value={form.firstName} onChange={handleChange} required />

            </div>

            <div className="form-group">
                <label>Last Name</label>
                <input name="lastName" value={form.lastName} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Phone Number</label>
                <input name="phone" value={form.phone} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Guess the Cost ($)</label>
                <input name="costGuess" type="number" value={form.costGuess} onChange={handleChange} required />
            </div>

            <div className="form-group">
                <label>Very Very Secret 16-digit PIN</label>
                <input name="pin" value={form.pin} onChange={handleChange} required />
            </div>

            <button className="submit-btn" type="submit">Submit</button>

        </form>
    );

}
export default AirFryerInterestForm;