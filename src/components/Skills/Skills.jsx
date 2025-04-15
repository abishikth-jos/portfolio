import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { skill } from '../../Data';

const Skills = () => {
  // Group skills by proficiency level
  const skillsByLevel = {
    Groups: skill.filter(s => s.percentage >= 90),
    Channels: skill.filter(s => s.percentage >= 80 && s.percentage < 90),
    Bots: skill.filter(s => s.percentage >= 70 && s.percentage < 80),
    Others: skill.filter(s => s.percentage < 70)
  };

  return (
    <section
      className='pb-[120px] xs:pb-[220px6] bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorAltDark sm:px-[5%] 2xl:px-[17%]'
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
        {Object.entries(skillsByLevel).map(([level, skills]) => (
          <div key={level} className='skills-category'>
            <h3 className='mb-6 text-xl font-bold text-primaryColor'>{level}</h3>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              {skills.map(({ id, name, description, url, sourceUrl }) => (
                <div
                  key={id}
                  className='p-5 transition-shadow duration-300 border-2 skills_item border-titleColor rounded-2xl bg-bgColorAlt hover:shadow-lg hover:border-primaryColor dark:border-2 dark:border-titleColorDark dark:bg-bgColorAltDark dark:hover:border-primaryColor flex flex-col'
                >
                  {/* Content section with dynamic growth */}
                  <div className='flex flex-grow flex-col'>
                    <h4 className='text-larger text-titleColor font-[700] dark:text-titleColorDark mb-3'>
                      {name}
                    </h4>
                    <p className='text-titleColor dark:text-titleColorDark text-small'>
                      {description}
                    </p>
                  </div>

                  {/* Button container pinned to the bottom */}
                  <div className='flex flex-col gap-4 mt-auto'>
                    <a
                      href={url}
                      target='_blank'
                      rel='noopener'
                      className='btn__start flex items-center justify-around w-full text-titleColor dark:text-titleColorDark text-normal gap-2 border-[2px] border-solid border-borderColor dark:border-borderColorDark py-[12px] px-[16px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
                    >
                      <span className='z-[1] text-titleColor dark:text-titleColorDark font-[Jost] font-[700]'>
                        Visit&nbsp;
                        <span className='text-primaryColor'>Here</span>
                      </span>
                      <CgWebsite className='z-[2] w-6 h-6 text-titleColor dark:text-titleColorDark' />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='flex flex-wrap justify-center gap-3 mx-4 ms:mx-0'>
        {skill.map(({ id, name }) => (
          <span
            key={id}
            className='px-4 py-2 font-medium transition-colors duration-300 border-2 rounded-full bg-bgColorAlt dark:bg-bgColorAltDark border-titleColor dark:border-titleColorDark text-titleColor dark:text-titleColorDark hover:bg-primaryColor hover:text-white hover:border-primaryColor'
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
