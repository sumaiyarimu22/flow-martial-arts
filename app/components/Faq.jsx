"use client";

// pages/faq.js
import Head from "next/head";
import { useState } from "react";

const initialQuestions = [
  {
    question: "Q: Which martial art should I study?",
    answer:
      "A: Find one you love! All the arts at JMAC are easy to start, and great for fitness, confidence and a winning attitude! Choose one that best fits your personality. If you like Samurai movies and want to swing a sword, iaido is your best choice. If you like competition and a great workout, you'll probably prefer judo. Men and women who like to learn effective self-defense in a safe and systematic way usually choose jujutsu. You are welcome to watch a class to help you decide! See our schedule of classes.",
    isOpen: false,
  },
  {
    question: "Q: How do I get started?",
    answer:
      "A: Choose a martial art! Sign up and take 2 FREE intro lessons. Then sign up for a membership. You sign up for one year, but you can opt out within the first 60 days. For more information on how to get started, contact us today at info@japanesemartialartscenter.com. Your life will never be the same!",
    isOpen: false,
  },
  {
    question: "Q: What is a fair monthly dues rate?",
    answer:
      "A: It depends on what the school offers. Martial arts schools  charge  between $90 - $500 per month, and each school should offer benefits that justify the price. ",
    isOpen: false,
  },
  {
    question: "Q: Where can I learn more about the different martial arts?",
    answer:
      "A: We recommend the best-selling martial arts book written by our chief instructor, Nicklaus Suino. The book is called BUDO MIND AND BODY, and it is available at our dojo, or you can order it from Amazon. It's a great place to read about how martial arts training can improve your physical and mental health at the same time you learn self-defense.",
    isOpen: false,
  },
  {
    question: "Q: Will I learn to defend myself?",
    answer:
      "A: YES, if you take our jujutsu or judo classes. However, don't be fooled by people who say that you can be prepared in just a few lessons. Real self-defense takes time to learn - you need awareness and tactics, and you have to get in reasonable shape. The good news is that martial arts training at JMAC will get you there safely, and with many benefits in personality and character development. Our students get in great shape and learn to live positive, balanced lives.",
    isOpen: false,
  },
  {
    question: "Q: How much does it cost?",
    answer:
      "A: Your intro lessons are FREE! For memberships, our dues are very reasonable when you consider the extraordinary credentials of our teaching staff and the quality of our facility. Stop in to watch a class and discuss specific rates for your training. Our long-time members tell us that the confidence, calmness, and success skills they've learned while training are priceless!",
    isOpen: false,
  },
  {
    question: "Q: How long does it take to get a black belt?",
    answer: `A: The answer is...it depends! There are 10 levels of black belt in Japanese martial arts - the first one is called "shodan." The minimum required time to get to shodan is 3 years, but most people take 3.5 - 5 years. It takes consistency, practice, and a commitment to understanding the principles of your martial art. Beware of schools that promise you a black belt in a set period of time...they are selling you a belt but not necessarily training you to be good at martial arts. It does take time. But on the way, you'll become more fit and more confident, you'll make good friends, and you'll learn a host of skills that will help you succeed in life!`,
    isOpen: false,
  },
];

const FAQ = () => {
  const [questions, setQuestions] = useState(initialQuestions);

  const toggleQuestion = (index) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q, i) =>
        i === index ? { ...q, isOpen: !q.isOpen } : { ...q, isOpen: false }
      )
    );
  };

  return (
    <div className="container mx-auto p-8 text-white">
      <Head>
        <title>FAQ - FlowMartialArts</title>
      </Head>
      <h1
        className="text-3xl style-text mb-8 flex justify-center"
        data-aos="fade-down"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        Frequently Asked Questions
      </h1>
      <div className="grid gap-6">
        {questions.map((q, index) => (
          <div key={index}>
            <h2
              className="text-xl  mb-4 cursor-pointer gap-10 flex items-center justify-between"
              onClick={() => toggleQuestion(index)}
              data-aos="flip-left"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              {q.question}
              {q.isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </h2>
            {q.isOpen && <p className="text-text px-10">{q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
