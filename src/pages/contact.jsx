export default function Contact() {
    return (
      <div className="contactTab">
        <h1>Contact Page</h1>
        <p>
          If you are interested in working with me, please get in touch using the
          form below. I am always looking for new projects to work on, and I would
          love to hear from you!
        </p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }