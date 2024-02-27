import React from "react";

const Pricing = () => {
  return (
    <div class="relative items-center w-full py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
    <div class="flex flex-wrap items-start justify-center w-full gap-4 px-5 mx-auto lg:px-0">
      <div class="w-full xl:w-1/3 lg:w-2/6 md:text-center lg:text-left">
        <div class="flex flex-col p-8 lg:p-0">
          <span class="mb-8 text-2xl font-bold text-neutral tracking-relaxed lg:text-5xl"> Pricing </span>
          <p class="mx-auto mb-4 text-xl font-light text-opacity-70 lg:pr-10">Explore our free and premium tiers.</p>
        </div>
      </div>
      <div class="w-full xl:w-1/4 md:w-2/6">
        <div class="relative flex flex-col h-full p-8 bg-pink rounded-xl hover:border-white">
          <span class="mb-4 text-base font-medium tracking-widest text-neutral uppercase"> Starter </span>
          <span class="flex items-center mb-8 text-base font-medium tracking-tight text-neutral"> Free tier. </span>
          <div class="flex items-end text-3xl font-black leading-none text-neutral lg:text-4xl">
            <span> Kes 0 </span>
          </div>
          <ul>
            <li class="flex items-center mt-8 mb-2 text-base font-medium tracking-tight text-neutral-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Unlimited blogs access.</strong>
            </li>
            <li class="flex items-center mb-2 text-base font-medium tracking-tight text-neutral-600">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Limited Press Release</strong>
            </li>
            <li class="flex items-center mb-2 text-base font-medium tracking-tight text-neutral text-opacity-70">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600 text-opacity-70">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
              Customer Support
            </li>
            <li class="flex items-center mb-2 text-base font-medium tracking-tight text-neutral text-opacity-70">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600 text-opacity-70">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
              Review Blogs
            </li>
            <li class="flex items-center mb-2 text-base font-medium tracking-tight text-neutral text-opacity-70">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-neutral-600 text-opacity-70">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg> </span>
                Limited Mailing Access
            </li>
          </ul>

          <div class="mt-8">
            <button class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white">Join Now</button>
          </div>
        </div>
      </div>
      <div class="w-full xl:w-1/4 md:w-2/6">
        <div class="relative flex flex-col h-full p-8 bg-blue rounded-xl hover:border-white">
          <span class="mb-4 text-base font-medium tracking-widest text-white uppercase"> Premium </span>
          <span class="flex items-center mb-8 text-base font-medium tracking-tight text-white">Enjoy a world of priviledge. </span>
          <div class="flex items-end text-3xl font-black leading-none text-white lg:text-4xl">
            <span>
              <span>Kes 1000</span>
              <del class="text-2xl font-normal text-white">Kes 1500 pm</del>
            </span>
          </div>
          <ul>
            <li class="flex items-center mt-8 mb-2 text-base font-medium tracking-tight text-white">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Unlimited Access.</strong>
            </li>
            <li class="flex items-center mb-2 text-base font-medium tracking-tight text-white">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Unlimited Press Release</strong>
            </li>
            <li class="flex items-center mb-2 text-base font-medium tracking-tight text-white">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Dedicated Customer Service.</strong>
            </li>
            <li class="flex items-center mb-2 text-base font-medium tracking-tight text-white">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>API Access</strong>
            </li>
            <li class="flex items-center mb-2 text-base font-medium tracking-tight text-white">
              <span class="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mr-2 text-white">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" class="w-3 h-3" viewBox="0 0 24 24">
                  <path d="M20 6L9 17l-5-5"></path>
                </svg>
              </span>
              <strong>Press Analytics</strong>
            </li>
          </ul>

          <div class="mt-8">
            <button class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray bg-white">Join Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Pricing;
