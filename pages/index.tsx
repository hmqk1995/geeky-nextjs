import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div
      style={{
        background: '-webkit-linear-gradient(135deg, #edf5ff 80%, #ffffff)',
      }}
    >
      <Head>
        <title>
          W and K Tech - Working from anywhere with software development
          opportunities
        </title>
        <meta
          name='description'
          content='W and K Technology - Working from anywhere with software development
          opportunities | freelancing | side gig | information technology'
        />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='site-header'>
        <div className='container'>
          <div className='site-header-inner'>
            <div className='brand header-brand'>
              <h1 className='m-0'>
                <a href='#'>
                  <Image src='/logo.svg' width={200} height={50} alt='logo' />
                </a>
              </h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className='container relative'>
          <h1
            className='font-semibold font-mono text-5xl leading-relaxed text-center'
            style={{
              background:
                '-webkit-linear-gradient(295deg, #5a90eb, #002c67 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Working From ANYWHERE, <br />
            Simplified
          </h1>
          <div className='relative'>
            <div className='homepage-background'>
              <Image
                src='/remote-working-banner.svg'
                layout='fill'
                alt='logo'
              />
            </div>
            <p className='font-sans mt-24 text-sm'>
              Are you in the software and tech field and are looking for:
            </p>
            <ul>
              <li className='font-semibold'>
                high-quality freelancing opportunities
              </li>
              <li className='font-semibold'>side gigs in your extra time</li>
              <li className='font-semibold'>working FULLY remote</li>
            </ul>
            <p className='font-sans text-sm mb-24'>
              We have got you covered! Enroll into our platform and we are
              providing you with the most valuable opportunities from a wide
              range of our clients.
            </p>
          </div>
          <p className='font-sans text-center'>
            Using AI powered engine to match your unique tech skills with the
            right needs.
          </p>
          <div className='hero-form newsletter-form field field-grouped is-revealing'>
            <div className='control control-expanded'>
              <input
                className='input'
                type='email'
                name='email'
                placeholder='Your email address&hellip;'
              />
            </div>
            <div className='control'>
              <a
                className='button button-primary button-block button-shadow'
                href='#'
              >
                Get early access
              </a>
            </div>
          </div>
        </div>
        <section className='features section text-center'>
          <div className='container'>
            <div className='features-inner section-inner has-bottom-divider'>
              <div className='features-wrap'>
                <div className='feature is-revealing'>
                  <div className='feature-inner'>
                    <div className='feature-icon'>
                      <svg
                        width='80'
                        height='80'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g fill='none' fillRule='evenodd'>
                          <path
                            d='M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z'
                            fillOpacity='.24'
                            fill='#A0A6EE'
                          />
                          <path
                            d='M26 54l28-28'
                            stroke='#838DEA'
                            strokeWidth='2'
                            strokeLinecap='square'
                          />
                          <path
                            d='M26 46l20-20M26 38l12-12M26 30l4-4M34 54l20-20M42 54l12-12'
                            stroke='#767DE1'
                            strokeWidth='2'
                            strokeLinecap='square'
                          />
                          <path
                            d='M50 54l4-4'
                            stroke='#838DEA'
                            strokeWidth='2'
                            strokeLinecap='square'
                          />
                        </g>
                      </svg>
                    </div>
                    <h3 className='feature-title'>Discover</h3>
                    <p className='text-sm'>
                      Where text is visible, people tend to focus on the textual
                      content rather than upon overall presentation.
                    </p>
                  </div>
                </div>
                <div className='feature is-revealing'>
                  <div className='feature-inner'>
                    <div className='feature-icon'>
                      <svg
                        width='80'
                        height='80'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g fill='none' fillRule='evenodd'>
                          <path
                            d='M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z'
                            fillOpacity='.24'
                            fill='#75ABF3'
                          />
                          <path
                            d='M34 52V35M40 52V42M46 52V35M52 52V42M28 52V28'
                            stroke='#4D8EF7'
                            strokeWidth='2'
                            strokeLinecap='square'
                          />
                        </g>
                      </svg>
                    </div>
                    <h3 className='feature-title'>Discover</h3>
                    <p className='text-sm'>
                      Where text is visible, people tend to focus on the textual
                      content rather than upon overall presentation.
                    </p>
                  </div>
                </div>
              </div>
              <div className='features-wrap'>
                <div className='feature is-revealing'>
                  <div className='feature-inner'>
                    <div className='feature-icon'>
                      <svg
                        width='80'
                        height='80'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g fill='none' fillRule='evenodd'>
                          <path
                            d='M48.066 61.627c6.628 0 10.087-16.79 10.087-23.418 0-6.627-5.025-9.209-11.652-9.209C39.874 29 24 42.507 24 49.135c0 6.627 17.439 12.492 24.066 12.492z'
                            fillOpacity='.32'
                            fill='#FF97AC'
                          />
                          <path
                            stroke='#FF6D8B'
                            strokeWidth='2'
                            strokeLinecap='square'
                            d='M49 45h6V25H35v6M43 55h2v-2M25 53v2h2M27 35h-2v2'
                          />
                          <path
                            stroke='#FF6D8B'
                            strokeWidth='2'
                            strokeLinecap='square'
                            d='M43 35h2v2M39 55h-2M33 55h-2M39 35h-2M33 35h-2M45 49v-2M25 49v-2M25 43v-2M45 43v-2'
                          />
                        </g>
                      </svg>
                    </div>
                    <h3 className='feature-title'>On Time Payment</h3>
                    <p className='text-sm'>
                      Where text is visible, people tend to focus on the textual
                      content rather than upon overall presentation.
                    </p>
                  </div>
                </div>
                <div className='feature is-revealing'>
                  <div className='feature-inner'>
                    <div className='feature-icon'>
                      <svg
                        width='80'
                        height='80'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g
                          transform='translate(24 25)'
                          fill='none'
                          fillRule='evenodd'
                        >
                          <path
                            d='M24.066 36.627c6.628 0 10.087-16.79 10.087-23.418C34.153 6.582 29.128 4 22.501 4 15.874 4 0 17.507 0 24.135c0 6.627 17.439 12.492 24.066 12.492z'
                            fillOpacity='.32'
                            fill='#A0EEE5'
                          />
                          <circle
                            stroke='#39D8C8'
                            strokeWidth='2'
                            strokeLinecap='square'
                            cx='5'
                            cy='4'
                            r='4'
                          />
                          <path
                            stroke='#39D8C8'
                            strokeWidth='2'
                            strokeLinecap='square'
                            d='M23 22h8v8h-8zM11 10l9 9'
                          />
                        </g>
                      </svg>
                    </div>
                    <h3 className='feature-title'>Easy Matching</h3>
                    <p className='text-sm'>
                      Join our network, and our AI based job matching algorithm
                      will match you with 500+ enterprise opportunities in our
                      job database
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
