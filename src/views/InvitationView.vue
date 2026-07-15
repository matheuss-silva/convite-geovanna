<template>
  <main class="invitation">
    <HeroSection />
    <OpeningQuote />
    <JourneySection />
    <ParentsTribute />
    <MotherTribute />
    <SonTribute />
    <GrandmotherTribute />
    <MainStorySection />
    <TransitionPhoto />
    <EventDetails />
    <CountdownTimer />
    <EventTimeline />
    <ActionButtons />
    <PhotoGallery />
    <FinalMessage />
    <SiteFooter />
  </main>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import OpeningQuote from '../components/OpeningQuote.vue'
import JourneySection from '../components/JourneySection.vue'
import ParentsTribute from '../components/ParentsTribute.vue'
import MotherTribute from '../components/MotherTribute.vue'
import SonTribute from '../components/SonTribute.vue'
import GrandmotherTribute from '../components/GrandmotherTribute.vue'
import MainStorySection from '../components/MainStorySection.vue'
import TransitionPhoto from '../components/TransitionPhoto.vue'
import EventDetails from '../components/EventDetails.vue'
import CountdownTimer from '../components/CountdownTimer.vue'
import EventTimeline from '../components/EventTimeline.vue'
import ActionButtons from '../components/ActionButtons.vue'
import PhotoGallery from '../components/PhotoGallery.vue'
import FinalMessage from '../components/FinalMessage.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>

<style scoped>
.invitation {
  max-width: var(--content-max-width);
  margin: 0 auto;
  background: var(--color-bg);
  box-shadow: 0 0 80px rgba(0, 0, 0, 0.8);
  overflow: hidden;
}
</style>
