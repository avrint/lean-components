import type { Meta, StoryObj } from '@storybook/web-components-vite';

const meta: Meta = {
  title: 'Design System/Colors',
  tags: ["kitchensink"]
};

export default meta;

export const Base: StoryObj = {
  render: () => {
    const container = document.createElement('div');
    container.style.padding = '32px';
    container.style.maxWidth = '1100px';
    container.style.backgroundColor = 'transparent';
    container.innerHTML = 
    `
    <div class="relative my-10">
  
  <div class="not-prose grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4">
    <div class="sticky top-28 z-9  lg:top-14 pb-4">&nbsp;</div>
    <div
      class="sticky top-28 z-9 col-start-2 grid grid-cols-11 justify-items-center gap-1.5 bg-white/20 font-medium text-gray-950 *:rotate-180 *:[writing-mode:vertical-lr] max-sm:py-1 sm:gap-4 sm:*:rotate-0 sm:*:[writing-mode:horizontal-tb] lg:top-14">
      <div>50</div>
      <div>100</div>
      <div>200</div>
      <div>300</div>
      <div>400</div>
      <div>500</div>
      <div>600</div>
      <div>700</div>
      <div>800</div>
      <div>900</div>
      <div>950</div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">red</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(97.1% 0.013 17.38)"><button type="button"
          style="background-color:var(--color-red-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(93.6% 0.032 17.717)"><button type="button"
          style="background-color:var(--color-red-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(88.5% 0.062 18.334)"><button type="button"
          style="background-color:var(--color-red-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(80.8% 0.114 19.571)"><button type="button"
          style="background-color:var(--color-red-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(70.4% 0.191 22.216)"><button type="button"
          style="background-color:var(--color-red-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(63.7% 0.237 25.331)"><button type="button"
          style="background-color:var(--color-red-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(57.7% 0.245 27.325)"><button type="button"
          style="background-color:var(--color-red-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(50.5% 0.213 27.518)"><button type="button"
          style="background-color:var(--color-red-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(44.4% 0.177 26.899)"><button type="button"
          style="background-color:var(--color-red-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(39.6% 0.141 25.723)"><button type="button"
          style="background-color:var(--color-red-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(25.8% 0.092 26.042)"><button type="button"
          style="background-color:var(--color-red-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">orange</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98% 0.016 73.684)"><button type="button"
          style="background-color:var(--color-orange-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(95.4% 0.038 75.164)"><button type="button"
          style="background-color:var(--color-orange-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(90.1% 0.076 70.697)"><button type="button"
          style="background-color:var(--color-orange-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(83.7% 0.128 66.29)"><button type="button"
          style="background-color:var(--color-orange-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(75% 0.183 55.934)"><button type="button"
          style="background-color:var(--color-orange-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(70.5% 0.213 47.604)"><button type="button"
          style="background-color:var(--color-orange-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(64.6% 0.222 41.116)"><button type="button"
          style="background-color:var(--color-orange-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(55.3% 0.195 38.402)"><button type="button"
          style="background-color:var(--color-orange-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(47% 0.157 37.304)"><button type="button"
          style="background-color:var(--color-orange-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(40.8% 0.123 38.172)"><button type="button"
          style="background-color:var(--color-orange-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(26.6% 0.079 36.259)"><button type="button"
          style="background-color:var(--color-orange-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">amber</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.7% 0.022 95.277)"><button type="button"
          style="background-color:var(--color-amber-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.2% 0.059 95.617)"><button type="button"
          style="background-color:var(--color-amber-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(92.4% 0.12 95.746)"><button type="button"
          style="background-color:var(--color-amber-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(87.9% 0.169 91.605)"><button type="button"
          style="background-color:var(--color-amber-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(82.8% 0.189 84.429)"><button type="button"
          style="background-color:var(--color-amber-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(76.9% 0.188 70.08)"><button type="button"
          style="background-color:var(--color-amber-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(66.6% 0.179 58.318)"><button type="button"
          style="background-color:var(--color-amber-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(55.5% 0.163 48.998)"><button type="button"
          style="background-color:var(--color-amber-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(47.3% 0.137 46.201)"><button type="button"
          style="background-color:var(--color-amber-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(41.4% 0.112 45.904)"><button type="button"
          style="background-color:var(--color-amber-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(27.9% 0.077 45.635)"><button type="button"
          style="background-color:var(--color-amber-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">yellow</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.7% 0.026 102.212)"><button type="button"
          style="background-color:var(--color-yellow-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(97.3% 0.071 103.193)"><button type="button"
          style="background-color:var(--color-yellow-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(94.5% 0.129 101.54)"><button type="button"
          style="background-color:var(--color-yellow-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(90.5% 0.182 98.111)"><button type="button"
          style="background-color:var(--color-yellow-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(85.2% 0.199 91.936)"><button type="button"
          style="background-color:var(--color-yellow-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(79.5% 0.184 86.047)"><button type="button"
          style="background-color:var(--color-yellow-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(68.1% 0.162 75.834)"><button type="button"
          style="background-color:var(--color-yellow-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(55.4% 0.135 66.442)"><button type="button"
          style="background-color:var(--color-yellow-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(47.6% 0.114 61.907)"><button type="button"
          style="background-color:var(--color-yellow-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(42.1% 0.095 57.708)"><button type="button"
          style="background-color:var(--color-yellow-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(28.6% 0.066 53.813)"><button type="button"
          style="background-color:var(--color-yellow-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">lime</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.6% 0.031 120.757)"><button type="button"
          style="background-color:var(--color-lime-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.7% 0.067 122.328)"><button type="button"
          style="background-color:var(--color-lime-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(93.8% 0.127 124.321)"><button type="button"
          style="background-color:var(--color-lime-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(89.7% 0.196 126.665)"><button type="button"
          style="background-color:var(--color-lime-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(84.1% 0.238 128.85)"><button type="button"
          style="background-color:var(--color-lime-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(76.8% 0.233 130.85)"><button type="button"
          style="background-color:var(--color-lime-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(64.8% 0.2 131.684)"><button type="button"
          style="background-color:var(--color-lime-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(53.2% 0.157 131.589)"><button type="button"
          style="background-color:var(--color-lime-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(45.3% 0.124 130.933)"><button type="button"
          style="background-color:var(--color-lime-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(40.5% 0.101 131.063)"><button type="button"
          style="background-color:var(--color-lime-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(27.4% 0.072 132.109)"><button type="button"
          style="background-color:var(--color-lime-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">green</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.2% 0.018 155.826)"><button type="button"
          style="background-color:var(--color-green-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.2% 0.044 156.743)"><button type="button"
          style="background-color:var(--color-green-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(92.5% 0.084 155.995)"><button type="button"
          style="background-color:var(--color-green-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(87.1% 0.15 154.449)"><button type="button"
          style="background-color:var(--color-green-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(79.2% 0.209 151.711)"><button type="button"
          style="background-color:var(--color-green-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(72.3% 0.219 149.579)"><button type="button"
          style="background-color:var(--color-green-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(62.7% 0.194 149.214)"><button type="button"
          style="background-color:var(--color-green-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(52.7% 0.154 150.069)"><button type="button"
          style="background-color:var(--color-green-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(44.8% 0.119 151.328)"><button type="button"
          style="background-color:var(--color-green-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(39.3% 0.095 152.535)"><button type="button"
          style="background-color:var(--color-green-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(26.6% 0.065 152.934)"><button type="button"
          style="background-color:var(--color-green-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">emerald</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(97.9% 0.021 166.113)"><button type="button"
          style="background-color:var(--color-emerald-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(95% 0.052 163.051)"><button type="button"
          style="background-color:var(--color-emerald-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(90.5% 0.093 164.15)"><button type="button"
          style="background-color:var(--color-emerald-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(84.5% 0.143 164.978)"><button type="button"
          style="background-color:var(--color-emerald-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(76.5% 0.177 163.223)"><button type="button"
          style="background-color:var(--color-emerald-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(69.6% 0.17 162.48)"><button type="button"
          style="background-color:var(--color-emerald-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(59.6% 0.145 163.225)"><button type="button"
          style="background-color:var(--color-emerald-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(50.8% 0.118 165.612)"><button type="button"
          style="background-color:var(--color-emerald-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(43.2% 0.095 166.913)"><button type="button"
          style="background-color:var(--color-emerald-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(37.8% 0.077 168.94)"><button type="button"
          style="background-color:var(--color-emerald-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(26.2% 0.051 172.552)"><button type="button"
          style="background-color:var(--color-emerald-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">teal</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.4% 0.014 180.72)"><button type="button"
          style="background-color:var(--color-teal-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(95.3% 0.051 180.801)"><button type="button"
          style="background-color:var(--color-teal-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(91% 0.096 180.426)"><button type="button"
          style="background-color:var(--color-teal-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(85.5% 0.138 181.071)"><button type="button"
          style="background-color:var(--color-teal-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(77.7% 0.152 181.912)"><button type="button"
          style="background-color:var(--color-teal-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(70.4% 0.14 182.503)"><button type="button"
          style="background-color:var(--color-teal-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(60% 0.118 184.704)"><button type="button"
          style="background-color:var(--color-teal-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(51.1% 0.096 186.391)"><button type="button"
          style="background-color:var(--color-teal-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(43.7% 0.078 188.216)"><button type="button"
          style="background-color:var(--color-teal-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(38.6% 0.063 188.416)"><button type="button"
          style="background-color:var(--color-teal-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(27.7% 0.046 192.524)"><button type="button"
          style="background-color:var(--color-teal-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">cyan</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.4% 0.019 200.873)"><button type="button"
          style="background-color:var(--color-cyan-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(95.6% 0.045 203.388)"><button type="button"
          style="background-color:var(--color-cyan-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(91.7% 0.08 205.041)"><button type="button"
          style="background-color:var(--color-cyan-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(86.5% 0.127 207.078)"><button type="button"
          style="background-color:var(--color-cyan-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(78.9% 0.154 211.53)"><button type="button"
          style="background-color:var(--color-cyan-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(71.5% 0.143 215.221)"><button type="button"
          style="background-color:var(--color-cyan-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(60.9% 0.126 221.723)"><button type="button"
          style="background-color:var(--color-cyan-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(52% 0.105 223.128)"><button type="button"
          style="background-color:var(--color-cyan-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(45% 0.085 224.283)"><button type="button"
          style="background-color:var(--color-cyan-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(39.8% 0.07 227.392)"><button type="button"
          style="background-color:var(--color-cyan-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(30.2% 0.056 229.695)"><button type="button"
          style="background-color:var(--color-cyan-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">sky</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(97.7% 0.013 236.62)"><button type="button"
          style="background-color:var(--color-sky-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(95.1% 0.026 236.824)"><button type="button"
          style="background-color:var(--color-sky-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(90.1% 0.058 230.902)"><button type="button"
          style="background-color:var(--color-sky-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(82.8% 0.111 230.318)"><button type="button"
          style="background-color:var(--color-sky-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(74.6% 0.16 232.661)"><button type="button"
          style="background-color:var(--color-sky-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(68.5% 0.169 237.323)"><button type="button"
          style="background-color:var(--color-sky-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(58.8% 0.158 241.966)"><button type="button"
          style="background-color:var(--color-sky-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(50% 0.134 242.749)"><button type="button"
          style="background-color:var(--color-sky-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(44.3% 0.11 240.79)"><button type="button"
          style="background-color:var(--color-sky-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(39.1% 0.09 240.876)"><button type="button"
          style="background-color:var(--color-sky-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(29.3% 0.066 243.157)"><button type="button"
          style="background-color:var(--color-sky-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">blue</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(97% 0.014 254.604)"><button type="button"
          style="background-color:var(--color-blue-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(93.2% 0.032 255.585)"><button type="button"
          style="background-color:var(--color-blue-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(88.2% 0.059 254.128)"><button type="button"
          style="background-color:var(--color-blue-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(80.9% 0.105 251.813)"><button type="button"
          style="background-color:var(--color-blue-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(70.7% 0.165 254.624)"><button type="button"
          style="background-color:var(--color-blue-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(62.3% 0.214 259.815)"><button type="button"
          style="background-color:var(--color-blue-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(54.6% 0.245 262.881)"><button type="button"
          style="background-color:var(--color-blue-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(48.8% 0.243 264.376)"><button type="button"
          style="background-color:var(--color-blue-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(42.4% 0.199 265.638)"><button type="button"
          style="background-color:var(--color-blue-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(37.9% 0.146 265.522)"><button type="button"
          style="background-color:var(--color-blue-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(28.2% 0.091 267.935)"><button type="button"
          style="background-color:var(--color-blue-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">indigo</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.2% 0.018 272.314)"><button type="button"
          style="background-color:var(--color-indigo-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(93% 0.034 272.788)"><button type="button"
          style="background-color:var(--color-indigo-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(87% 0.065 274.039)"><button type="button"
          style="background-color:var(--color-indigo-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(78.5% 0.115 274.713)"><button type="button"
          style="background-color:var(--color-indigo-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(67.3% 0.182 276.935)"><button type="button"
          style="background-color:var(--color-indigo-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(58.5% 0.233 277.117)"><button type="button"
          style="background-color:var(--color-indigo-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(51.1% 0.262 276.966)"><button type="button"
          style="background-color:var(--color-indigo-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(45.7% 0.24 277.023)"><button type="button"
          style="background-color:var(--color-indigo-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(39.8% 0.195 277.366)"><button type="button"
          style="background-color:var(--color-indigo-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(35.9% 0.144 278.697)"><button type="button"
          style="background-color:var(--color-indigo-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(25.7% 0.09 281.288)"><button type="button"
          style="background-color:var(--color-indigo-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">violet</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.9% 0.016 293.756)"><button type="button"
          style="background-color:var(--color-violet-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(94.3% 0.029 294.588)"><button type="button"
          style="background-color:var(--color-violet-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(89.4% 0.057 293.283)"><button type="button"
          style="background-color:var(--color-violet-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(81.1% 0.111 293.571)"><button type="button"
          style="background-color:var(--color-violet-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(70.2% 0.183 293.541)"><button type="button"
          style="background-color:var(--color-violet-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(60.6% 0.25 292.717)"><button type="button"
          style="background-color:var(--color-violet-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(54.1% 0.281 293.009)"><button type="button"
          style="background-color:var(--color-violet-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(49.1% 0.27 292.581)"><button type="button"
          style="background-color:var(--color-violet-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(43.2% 0.232 292.759)"><button type="button"
          style="background-color:var(--color-violet-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(38% 0.189 293.745)"><button type="button"
          style="background-color:var(--color-violet-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(28.3% 0.141 291.089)"><button type="button"
          style="background-color:var(--color-violet-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">purple</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(97.7% 0.014 308.299)"><button type="button"
          style="background-color:var(--color-purple-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(94.6% 0.033 307.174)"><button type="button"
          style="background-color:var(--color-purple-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(90.2% 0.063 306.703)"><button type="button"
          style="background-color:var(--color-purple-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(82.7% 0.119 306.383)"><button type="button"
          style="background-color:var(--color-purple-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(71.4% 0.203 305.504)"><button type="button"
          style="background-color:var(--color-purple-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(62.7% 0.265 303.9)"><button type="button"
          style="background-color:var(--color-purple-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(55.8% 0.288 302.321)"><button type="button"
          style="background-color:var(--color-purple-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(49.6% 0.265 301.924)"><button type="button"
          style="background-color:var(--color-purple-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(43.8% 0.218 303.724)"><button type="button"
          style="background-color:var(--color-purple-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(38.1% 0.176 304.987)"><button type="button"
          style="background-color:var(--color-purple-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(29.1% 0.149 302.717)"><button type="button"
          style="background-color:var(--color-purple-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">fuchsia</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(97.7% 0.017 320.058)"><button type="button"
          style="background-color:var(--color-fuchsia-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(95.2% 0.037 318.852)"><button type="button"
          style="background-color:var(--color-fuchsia-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(90.3% 0.076 319.62)"><button type="button"
          style="background-color:var(--color-fuchsia-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(83.3% 0.145 321.434)"><button type="button"
          style="background-color:var(--color-fuchsia-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(74% 0.238 322.16)"><button type="button"
          style="background-color:var(--color-fuchsia-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(66.7% 0.295 322.15)"><button type="button"
          style="background-color:var(--color-fuchsia-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(59.1% 0.293 322.896)"><button type="button"
          style="background-color:var(--color-fuchsia-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(51.8% 0.253 323.949)"><button type="button"
          style="background-color:var(--color-fuchsia-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(45.2% 0.211 324.591)"><button type="button"
          style="background-color:var(--color-fuchsia-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(40.1% 0.17 325.612)"><button type="button"
          style="background-color:var(--color-fuchsia-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(29.3% 0.136 325.661)"><button type="button"
          style="background-color:var(--color-fuchsia-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">pink</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(97.1% 0.014 343.198)"><button type="button"
          style="background-color:var(--color-pink-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(94.8% 0.028 342.258)"><button type="button"
          style="background-color:var(--color-pink-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(89.9% 0.061 343.231)"><button type="button"
          style="background-color:var(--color-pink-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(82.3% 0.12 346.018)"><button type="button"
          style="background-color:var(--color-pink-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(71.8% 0.202 349.761)"><button type="button"
          style="background-color:var(--color-pink-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(65.6% 0.241 354.308)"><button type="button"
          style="background-color:var(--color-pink-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(59.2% 0.249 0.584)"><button type="button"
          style="background-color:var(--color-pink-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(52.5% 0.223 3.958)"><button type="button"
          style="background-color:var(--color-pink-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(45.9% 0.187 3.815)"><button type="button"
          style="background-color:var(--color-pink-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(40.8% 0.153 2.432)"><button type="button"
          style="background-color:var(--color-pink-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(28.4% 0.109 3.907)"><button type="button"
          style="background-color:var(--color-pink-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">rose</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.9% 0.015 12.422)"><button type="button"
          style="background-color:var(--color-rose-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(94.1% 0.03 12.58)"><button type="button"
          style="background-color:var(--color-rose-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(89.2% 0.058 10.001)"><button type="button"
          style="background-color:var(--color-rose-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(81% 0.117 11.638)"><button type="button"
          style="background-color:var(--color-rose-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(71.2% 0.194 13.428)"><button type="button"
          style="background-color:var(--color-rose-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(64.5% 0.246 16.439)"><button type="button"
          style="background-color:var(--color-rose-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(58.6% 0.253 17.585)"><button type="button"
          style="background-color:var(--color-rose-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(51.4% 0.222 16.935)"><button type="button"
          style="background-color:var(--color-rose-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(45.5% 0.188 13.697)"><button type="button"
          style="background-color:var(--color-rose-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(41% 0.159 10.272)"><button type="button"
          style="background-color:var(--color-rose-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(27.1% 0.105 12.094)"><button type="button"
          style="background-color:var(--color-rose-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">slate</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.4% 0.003 247.858)"><button type="button"
          style="background-color:var(--color-slate-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.8% 0.007 247.896)"><button type="button"
          style="background-color:var(--color-slate-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(92.9% 0.013 255.508)"><button type="button"
          style="background-color:var(--color-slate-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(86.9% 0.022 252.894)"><button type="button"
          style="background-color:var(--color-slate-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(70.4% 0.04 256.788)"><button type="button"
          style="background-color:var(--color-slate-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(55.4% 0.046 257.417)"><button type="button"
          style="background-color:var(--color-slate-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(44.6% 0.043 257.281)"><button type="button"
          style="background-color:var(--color-slate-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(37.2% 0.044 257.287)"><button type="button"
          style="background-color:var(--color-slate-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(27.9% 0.041 260.031)"><button type="button"
          style="background-color:var(--color-slate-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(20.8% 0.042 265.755)"><button type="button"
          style="background-color:var(--color-slate-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(12.9% 0.042 264.695)"><button type="button"
          style="background-color:var(--color-slate-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">gray</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.5% 0.002 247.839)"><button type="button"
          style="background-color:var(--color-gray-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.7% 0.003 264.542)"><button type="button"
          style="background-color:var(--color-gray-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(92.8% 0.006 264.531)"><button type="button"
          style="background-color:var(--color-gray-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(87.2% 0.01 258.338)"><button type="button"
          style="background-color:var(--color-gray-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(70.7% 0.022 261.325)"><button type="button"
          style="background-color:var(--color-gray-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(55.1% 0.027 264.364)"><button type="button"
          style="background-color:var(--color-gray-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(44.6% 0.03 256.802)"><button type="button"
          style="background-color:var(--color-gray-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(37.3% 0.034 259.733)"><button type="button"
          style="background-color:var(--color-gray-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(27.8% 0.033 256.848)"><button type="button"
          style="background-color:var(--color-gray-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(21% 0.034 264.665)"><button type="button"
          style="background-color:var(--color-gray-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(13% 0.028 261.692)"><button type="button"
          style="background-color:var(--color-gray-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">zinc</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.5% 0 none)"><button type="button"
          style="background-color:var(--color-zinc-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.7% 0.001 286.375)"><button type="button"
          style="background-color:var(--color-zinc-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(92% 0.004 286.32)"><button type="button"
          style="background-color:var(--color-zinc-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(87.1% 0.006 286.286)"><button type="button"
          style="background-color:var(--color-zinc-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(70.5% 0.015 286.067)"><button type="button"
          style="background-color:var(--color-zinc-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(55.2% 0.016 285.938)"><button type="button"
          style="background-color:var(--color-zinc-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(44.2% 0.017 285.786)"><button type="button"
          style="background-color:var(--color-zinc-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(37% 0.013 285.805)"><button type="button"
          style="background-color:var(--color-zinc-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(27.4% 0.006 286.033)"><button type="button"
          style="background-color:var(--color-zinc-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(21% 0.006 285.885)"><button type="button"
          style="background-color:var(--color-zinc-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(14.1% 0.005 285.823)"><button type="button"
          style="background-color:var(--color-zinc-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">neutral</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.5% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(97% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(92.2% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(87% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(70.8% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(55.6% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(43.9% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(37.1% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(26.9% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(20.5% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(14.5% 0 none)"><button type="button"
          style="background-color:var(--color-neutral-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">stone</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.5% 0.001 106.423)"><button type="button"
          style="background-color:var(--color-stone-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(97% 0.001 106.424)"><button type="button"
          style="background-color:var(--color-stone-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(92.3% 0.003 48.717)"><button type="button"
          style="background-color:var(--color-stone-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(86.9% 0.005 56.366)"><button type="button"
          style="background-color:var(--color-stone-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(70.9% 0.01 56.259)"><button type="button"
          style="background-color:var(--color-stone-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(55.3% 0.013 58.071)"><button type="button"
          style="background-color:var(--color-stone-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(44.4% 0.011 73.639)"><button type="button"
          style="background-color:var(--color-stone-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(37.4% 0.01 67.558)"><button type="button"
          style="background-color:var(--color-stone-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(26.8% 0.007 34.298)"><button type="button"
          style="background-color:var(--color-stone-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(21.6% 0.006 56.043)"><button type="button"
          style="background-color:var(--color-stone-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(14.7% 0.004 49.25)"><button type="button"
          style="background-color:var(--color-stone-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">taupe</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.6% 0.002 67.8)"><button type="button"
          style="background-color:var(--color-taupe-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96% 0.002 17.2)"><button type="button"
          style="background-color:var(--color-taupe-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(92.2% 0.005 34.3)"><button type="button"
          style="background-color:var(--color-taupe-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(86.8% 0.007 39.5)"><button type="button"
          style="background-color:var(--color-taupe-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(71.4% 0.014 41.2)"><button type="button"
          style="background-color:var(--color-taupe-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(54.7% 0.021 43.1)"><button type="button"
          style="background-color:var(--color-taupe-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(43.8% 0.017 39.3)"><button type="button"
          style="background-color:var(--color-taupe-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(36.7% 0.016 35.7)"><button type="button"
          style="background-color:var(--color-taupe-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(26.8% 0.011 36.5)"><button type="button"
          style="background-color:var(--color-taupe-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(21.4% 0.009 43.1)"><button type="button"
          style="background-color:var(--color-taupe-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(14.7% 0.004 49.3)"><button type="button"
          style="background-color:var(--color-taupe-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">mauve</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.5% 0 none)"><button type="button"
          style="background-color:var(--color-mauve-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96% 0.003 325.6)"><button type="button"
          style="background-color:var(--color-mauve-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(92.2% 0.005 325.62)"><button type="button"
          style="background-color:var(--color-mauve-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(86.5% 0.012 325.68)"><button type="button"
          style="background-color:var(--color-mauve-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(71.1% 0.019 323.02)"><button type="button"
          style="background-color:var(--color-mauve-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(54.2% 0.034 322.5)"><button type="button"
          style="background-color:var(--color-mauve-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(43.5% 0.029 321.78)"><button type="button"
          style="background-color:var(--color-mauve-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(36.4% 0.029 323.89)"><button type="button"
          style="background-color:var(--color-mauve-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(26.3% 0.024 320.12)"><button type="button"
          style="background-color:var(--color-mauve-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(21.2% 0.019 322.12)"><button type="button"
          style="background-color:var(--color-mauve-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(14.5% 0.008 326)"><button type="button"
          style="background-color:var(--color-mauve-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">mist</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.7% 0.002 197.1)"><button type="button"
          style="background-color:var(--color-mist-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.3% 0.002 197.1)"><button type="button"
          style="background-color:var(--color-mist-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(92.5% 0.005 214.3)"><button type="button"
          style="background-color:var(--color-mist-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(87.2% 0.007 219.6)"><button type="button"
          style="background-color:var(--color-mist-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(72.3% 0.014 214.4)"><button type="button"
          style="background-color:var(--color-mist-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(56% 0.021 213.5)"><button type="button"
          style="background-color:var(--color-mist-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(45% 0.017 213.2)"><button type="button"
          style="background-color:var(--color-mist-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(37.8% 0.015 216)"><button type="button"
          style="background-color:var(--color-mist-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(27.5% 0.011 216.9)"><button type="button"
          style="background-color:var(--color-mist-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(21.8% 0.008 223.9)"><button type="button"
          style="background-color:var(--color-mist-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(14.8% 0.004 228.8)"><button type="button"
          style="background-color:var(--color-mist-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
    <p class="font-medium text-gray-950 capitalize sm:pr-12 ">olive</p>
    <div class="grid grid-cols-11 gap-1.5 sm:gap-4">
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(98.8% 0.003 106.5)"><button type="button"
          style="background-color:var(--color-olive-50)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(96.6% 0.005 106.5)"><button type="button"
          style="background-color:var(--color-olive-100)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(93% 0.007 106.5)"><button type="button"
          style="background-color:var(--color-olive-200)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(88% 0.011 106.6)"><button type="button"
          style="background-color:var(--color-olive-300)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(73.7% 0.021 106.9)"><button type="button"
          style="background-color:var(--color-olive-400)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(58% 0.031 107.3)"><button type="button"
          style="background-color:var(--color-olive-500)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(46.6% 0.025 107.3)"><button type="button"
          style="background-color:var(--color-olive-600)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(39.4% 0.023 107.4)"><button type="button"
          style="background-color:var(--color-olive-700)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(28.6% 0.016 107.4)"><button type="button"
          style="background-color:var(--color-olive-800)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(22.8% 0.013 107.4)"><button type="button"
          style="background-color:var(--color-olive-900)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
      <div data-tooltip-trigger="true" data-tooltip-content="oklch(15.3% 0.006 107.1)"><button type="button"
          style="background-color:var(--color-olive-950)"
          class="aspect-square w-full rounded-sm outline -outline-offset-1 outline-black/10 sm:rounded-md dark:outline-white/10"
          data-headlessui-state=""></button></div>
    </div>
</div>
    `;
    return container;
  },
};
