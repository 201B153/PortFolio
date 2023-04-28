'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from '@formspree/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { slideIn } from '../utils/motion';
import { styles } from '@/app/styles';
import { SectionWrapper } from '@/wrapper';
import { LocationCanvas } from '@/canvas';

const Contact = () => {
  const formRef: any = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const key = 'xqkopdvb';
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [state, handleSubmit] = useForm(key);
  const notifySuccess = () => toast.success('Form submitted successfully!');
  const notifyError = () =>
    toast.error('Form submission failed. Please try again.');

  useEffect(() => {
    if (state.succeeded) {
      notifySuccess();
      setLoading(false);
      setForm({
        name: '',
        email: '',
        message: '',
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
    if (state.submitting) {
      setLoading(true);
    }
  }, [state.submitting, state.succeeded]);

  const handleChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Let us know your thoughts?</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 max-sm:mt-4 lg:mt-10 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your thoughts here?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium "
            />
          </label>
          <div className="flex flex-wrap justify-center items-center">
            <button
              type="submit"
              disabled={state.submitting}
              className={`${styles.sectionSubText} |border border-solid border-[#915EFF]| bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-semibold hover:shadow-md hover:shadow-purple-700`}
            >
              {loading ? 'Sending...✈️' : 'Send'}
            </button>
          </div>
          <ToastContainer />
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] z-[-10]"
      >
        <LocationCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
