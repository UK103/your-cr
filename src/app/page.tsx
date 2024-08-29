import React from 'react'

const page = () => {
  return (
      <div><figure className="md:flex bg-blue-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
      <img className="w-60 h-90 rounded-full mx-auto" src="/Screenshot (8).png" alt="" width="384" height="512"/>
      <div className="pt-10 md:p-12 text-center md:text-left space-y-10">
        <blockquote>
          <p className="text-lg font-medium">
            "Meet me I am Choudary Umar Khalid. Artificial Intelligence refers to the intelligence of machines. This is in contrast to the natural intelligence of humans and animals. With Artificial Intelligence, machines perform functions such as learning, planning, reasoning and problem-solving.Artificial Intelligence or AI is a revolutionary technology that allows machines to undertake tasks that usually need human intelligence. It includes natural language processing (NLP), problem-solving capabilities, and machine learning (ML). In contemporary times, AI technology has entered all aspects of human life."        
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">
            CHOUDARY UMAR KHALID
          </div>
          <div className="text-slate-700 dark:text-slate-500">
           Artificial Intelligence Engineer, Rahim Yar Khan
          </div>
        </figcaption>
      </div>
    </figure></div>
  )
}

export default page