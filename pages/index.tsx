import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import classnames from 'classnames';
import useWindowScrollTop from '../hooks/useWindowScrollTop';
import EnrollModalBtn from '../components/EnrollModalBtn';
import Script from 'next/script';
import { useState } from 'react';
import Link from 'next/link';

const Home: NextPage = () => {
  const windowScrollTop = useWindowScrollTop();
  const [email, setEmail] = useState('');

  return (
    <div
      style={{
        background: '-webkit-linear-gradient(135deg, #edf5ff 80%, #ffffff)',
      }}
    >
      <Head>
        <title>
          W and K Technology - Working from anywhere with software development
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
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-EFRF12ZQZ9'
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-EFRF12ZQZ9');
        `}
      </Script>

      <header
        className={classnames({
          'site-header': true,
          'scroll-active': windowScrollTop !== 0,
        })}
      >
        <div className='container'>
          <div className='site-header-inner'>
            <div className='brand header-brand'>
              <h1 className='m-0'>
                <a href='#'>
                  <Image src='/logo.svg' width={260} height={40} alt='logo' />
                </a>
              </h1>
            </div>
            <EnrollModalBtn small email={email} />
          </div>
        </div>
      </header>
      <main>
        <div className='container relative'>
          <h1 className='font-semibold font-mono text-5xl leading-relaxed text-center herotext'>
            WORK FROM ANYWHERE
            <br />
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
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your email address&hellip;'
              />
            </div>
            <div className='control'>
              <EnrollModalBtn email={email} />
            </div>
          </div>
        </div>
        <section className='features section text-center'>
          <div className='container'>
            <div className='features-inner section-inner'>
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
                    <h3 className='feature-title herotext'>
                      High Quality Remote Opportunities
                    </h3>
                    <p className='text-xs'>
                      We screen our clients strictly to make sure the
                      opportunities are REAL, on-time and matching your
                      expectation.
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
                    <h3 className='feature-title herotext'>
                      Easy And Advanced Matching
                    </h3>
                    <p className='text-xs'>
                      Join our network, and our AI based job matching algorithm
                      will match you with 500+ enterprise opportunities in our
                      job database.
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
                    <h3 className='feature-title herotext'>On Time Payment</h3>
                    <p className='text-xs'>
                      Use our progress tracking tools to get you paid promptly
                      for what you have done. No late payment.
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
                    <h3 className='feature-title herotext'>Community</h3>
                    <p className='text-xs'>
                      By joining our network, you will be receiving exclusive
                      opportunities that nowhere else will provide. Build your
                      freelancing network and grow together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='pb-16'></div>
        </section>
      </main>

      <footer className='site-footer text-light'>
        <div className='container'>
          <div className='site-footer-inner'>
            <div className='brand footer-brand'>
              <a href='#'>
                <Image
                  src='/logo.svg'
                  width={200}
                  height={50}
                  alt='logo'
                  className='whitelogo'
                />
              </a>
            </div>
            <ul className='footer-links list-reset'>
              <li>
                <a href='mailto:support@wandktech.com'>
                  Contact: support@wandktech.com
                </a>
              </li>
            </ul>
            <ul className='footer-social-links list-reset'>
              {/* <li>
                <a href='#'>
                  <span className='screen-reader-text'>Facebook</span>
                  <svg
                    width='16'
                    height='16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z'
                      fill='#FFFFFF'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='screen-reader-text'>Twitter</span>
                  <svg
                    width='16'
                    height='16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z'
                      fill='#FFFFFF'
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href='#'>
                  <span className='screen-reader-text'>Google</span>
                  <svg
                    width='16'
                    height='16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z'
                      fill='#FFFFFF'
                    />
                  </svg>
                </a>
              </li> */}
            </ul>
            <div className='footer-copyright'>
              <div className='flex flex-col'>
                <div>
                  &copy; 2022 W and K Technology LLC, all rights reserved
                </div>
                <div>
                  <a
                    href='/terms_and_conditions.html'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Terms and Conditions
                  </a>
                  {' | '}
                  <Link href='/privacy_policy' passHref>
                    <a target='_blank' rel='noopener noreferrer'>
                      Privacy Policy
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
