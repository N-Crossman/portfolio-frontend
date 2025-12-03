
export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white text-center mb-8">
                Let&rsquo;s Keep in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-center text-md mb-6">
                I&rsquo;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
            </p>
              <div className="flex gap-3 sm:gap-4 md:gap-6 justify-center">
                <button className="bg-green-900 text-white px-5 py-3 rounded-xl md:rounded-2xl shadow-lg hover:bg-green-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Contact Me
                </button>
                <button className="bg-green-900 text-white px-5 py-3 rounded-xl md:px-6 md:rounded-2xl shadow-lg hover:bg-green-700 hover:shadow-xl hover:scale-105 transition-all duration-300">
                    Download resume(CV)
                </button>
            </div>
        </section>
    )
}