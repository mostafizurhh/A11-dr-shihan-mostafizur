import React from 'react';
import useTitle from '../../hooks/useTitle';
import logo from './shihan.jpeg'

const About = () => {
    useTitle('About')

    return (
        <div className='p-3'>
            <p className='text-4xl mb-3'>About Me</p>
            <img src={logo} alt="" />
            <p className='mt-3 text-justify'>
                I am a New York based Cardiologist, and was born in Stockholm but raised in New Jersey. I completed my Masters in Clinical Cardiology from Rutgers University, New Jersey in 1987, and have a diploma in Cognitive Cardiology and Neurosciences. Over the years, I have developed a unique combination of interpersonal psychoanalysis, mind-body stimulation and cognitive behavioral techniques, which helps me to diagnose my patients in an elaborate manner. <br /> <br />

                In my 20 years of experience, I have worked with thousands of patients from all walks of life, which has provided with a deep insight and a practical view of the problems the people are facing in their contemporary times, with regards to their professional and personal life. Whether it is depression due to lack of respect and recognition at work, death of a close family member, emotional distress due to separation, addiction, hypersensitivity, obsessive compulsive disorder, hyperactivity, sex addiction, loss of job, or just any other issues that is affecting your cardiac health negatively. <br /> <br />

                My approach towards treating my patients is a combination of medical route and counselling, which collectively helps in bringing that much needed mental and physical balance, irrespective of what kind of psychological issues you are facing. I aim to revive my patients from the current positions in their lives, and channelizing their negative energy to its way out in a well coordinated manner. It helps bring in the much needed harmony in the lives, and infuses positivity.
            </p>

        </div>
    );
};

export default About;