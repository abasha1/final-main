import React from 'react';
import { FormWithConstraints, FieldFeedbacks, FieldFeedback } from 'react-form-with-constraints';
import check from '../Components/Img/check1.png'

 class Form extends React.Component {
   handleChange = e => {
     this.form.validateFields(e.target);
   }
 
   contactSubmit = e => {
     e.preventDefault();
 
     this.form.validateFields();
 
     if (!this.form.isValid()) {
       alert("input all data")
     } else {
       alert("sumbitted")
     }
   }
 
   render() {
     return (
       <FormWithConstraints style={{display:"inline-block", margin:"80px"}}
         ref={form => this.form = form}
         onSubmit={this.contactSubmit}
         noValidate>
  
         <div>
           <input name="name" size="30" placeholder="Username"
                  required onChange={this.handleChange}/>
           <FieldFeedbacks for="name">
             <FieldFeedback when="*" />
           </FieldFeedbacks>
 
           <input type="email" name="email" size="30" placeholder="Email"
                  required onChange={this.handleChange}/>
           <FieldFeedbacks for="email">
             <FieldFeedback when="*" />
           </FieldFeedbacks>
 
           <input type="number" name="phone" size="30" placeholder="Phone"
                  required onChange={this.handleChange}/>
           <FieldFeedbacks for="phone">
             <FieldFeedback when="*" />
           </FieldFeedbacks>
            
           <input name="address" size="30" placeholder="Address"
                  required onChange={this.handleChange} />
           <FieldFeedbacks for="address">
             <FieldFeedback when="*" />
           </FieldFeedbacks>

           <label>
           <input type="checkbox" name="address" size="30" placeholder="Address"
                  required onChange={this.handleChange}
                  className="form-control" />
                  <img class="img1" src={check} alt="check_icon"></img>
                  <label><label class="agreed"> I agree to the Google <a href="https://policies.google.com/terms?hl=en-US">
                    Terms of Service</a> and <a href="https://policies.google.com/terms?hl=en-US">Privacy Policy</a> </label> </label>
           <FieldFeedbacks for="address">
             <FieldFeedback when="*" />
           </FieldFeedbacks>
           </label>
         </div>
   
         <div>
           <button className="formbutton">Sign up</button>
         </div>
       </FormWithConstraints>
     );
   }
 }
 
export default Form;