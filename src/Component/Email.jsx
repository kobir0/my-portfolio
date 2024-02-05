import React from "react";

const Email = () => {
  return (
    <div className=" relative mt-20">
      <div id="email">
        <h1 className=" text-3xl text-center text-white ">Contact Me</h1>

        <div data-aos="zoom-in" className="hero ">
          <div className="hero-content mb-20 flex-col lg:flex-row">
            <div className="lg:mr-7">
              <h1>Rajshahi,Bangladesh.</h1>
              <h1>+8801797671621</h1>
              <h1>dev.kobir@outlook.com</h1>
            </div>
            <form
              action="https://formsubmit.co/9e0fcbfe37792534a1eb5afd58a3cfbf"
              method="POST"
            >
              <div className="grid gap-2 grid-cols-2">
                <div className="grid gap-2 grid-cols-1">
                  <input
                    type="text"
                    name="Name"
                    required
                    placeholder="your name"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                  <input
                    type="email"
                    name="Email"
                    required
                    placeholder="your email address"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                  <input
                    type="text"
                    name="Subject"
                    required
                    placeholder="email subject"
                    className="input input-bordered input-primary w-full max-w-xs"
                  />
                </div>
                <textarea
                  className="textarea textarea-primary"
                  placeholder="your message"
                  required
                  name="Message"
                ></textarea>
              </div>
              <button name="submit" className="btn  my-2 w-full btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Email;
