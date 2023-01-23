<script>
import emailjs from '@emailjs/browser';

export default {
  name: 'ContactForm',
	components: {

	},
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''

    }
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm('service_mj9twxa', 'template_3zfxfj6', e.target,
        'udTUt8SyCLDlHBMC5', {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        })

      } catch(error) {
          console.log({error})
      }
      // Reset form field
      this.name = ''
      this.email = ''
      this.subject = ''
      this.message = ''
    },
  }
}
</script>


<template>
    <div class="container">
      
        <form>
          <label>Name</label>
          <input 
            type="text" 
            v-model="name"
            name="name"
            placeholder="Your Name"
          >
          <label>Email</label>
          <input 
            type="email" 
            v-model="email"
            name="email"
            placeholder="Your Email"
            >
          <label>Subject</label>
          <input 
            type="text" 
            v-model="subject"
            name="subject"
            placeholder="your Subject"
            >
          <label>Message</label>
          <textarea 
            name="message"
            v-model="message"
            cols="30" rows="5"
            placeholder="Message">
          </textarea>

          <input type="submit" value="Send">
        </form>
    </div>
</template>


<style scoped>
* {box-sizing: border-box;}

.container {
  display: block;
  margin:auto;
  text-align: center;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 50%;
}

label {
  float: left;
}

input[type=text], [type=email], textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}
</style>