const Contact = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h2 className="text-white text-4xl font-bold mt-20 mb-10">Contact</h2>
          <hr className="font-bold w-3/6 h-1" />
          <p className="mt-20 mb-4 text-white font-normal">
            Aenean a consectetur mi, sit amet consequat velit. Mauris vitae nunc
            viverra, mattis arcu quis, vestibulum eros.
          </p>
        </div>
      </div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 pb-24 mx-auto">
          <div className=" mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-slate-50"></label>
                  <input
                    type="text"
                    placeholder="Your name ..."
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-slate-50 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-slate-50"></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email..."
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="contact-form p-2 w-full">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600"></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Suject..."
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full ">
                <div className="relative ">
                  <label className="leading-7 text-sm text-gray-600"></label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="font-semibold uppercase flex mx-auto text-cyan-600	 bg-white border-0 py-2 px-8 focus:outline-none hover:bg-sky-600 hover:text-white text-lg hover:delay-150">
                  send message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
