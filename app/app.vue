<template>
  <NuxtImg
    class="fixed size-full inset-0 object-cover"
    src="/assets/images/bg.png"
    alt="background"
    format="webp"
    quality="1"
    preload
    sizes="sm:640px md:1024px lg:1440px"
  />

  <NeuralBg class="fixed top-0 left-0 opacity-95"/>
  <ComingSoon class="relative z-10"/>

  <!--<CustomCursor class="md:"/>-->
</template>