import React from 'react';
import { AiFillChrome } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { skill } from '../../Data';

const Skills = () => {
  // Group skills by proficiency level
  const skillsByLevel = {
    Expert: skill.filter(s => s.percentage >= 90),
    Advanced: skill.filter(s => s.percentage >= 80 && s.percentage < 90),
    Proficient: skill.filter(s => s.percentage >= 70 && s.percentage < 80),
    Familiar: skill.filter(s => s.percentage < 70),
  };

  return (
    <section
      className='pb-[120px] xs:pb-[220px] bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorAltDark sm:px-[5%] 2xl:px-[17%]'
      id='skills'
    >
      <h2 className='uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center'>
        Telegram
      </h2>
      <p className='leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center'>
        Tele
        <span className='font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]'>
          Zone
        </span>
      </p>

      <div className='grid gap-8 mx-4 mb-12 ms:mx-0'>
        {
