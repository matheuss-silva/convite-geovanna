<template>
  <section class="mother-tribute gf-section" aria-label="Homenagem à mãe">
    <figure
      ref="target"
      class="reveal-scale mother-tribute__figure gf-photo-frame"
      :class="{ 'is-visible': isVisible }"
    >
      <img
        :src="photos.mother"
        :style="{ objectPosition: photoPositions.mother || 'center' }"
        alt="Geovanna celebrando a formatura ao lado de sua mãe"
        loading="lazy"
        class="mother-tribute__image"
      />
    </figure>

    <div class="gf-container">
      <div
        ref="contentTarget"
        class="reveal-stagger mother-tribute__content"
        :class="{ 'is-visible': isContentVisible }"
      >
        <hr class="gf-divider" />
        <h2 class="mother-tribute__title">{{ texts.motherTitle }}</h2>
        <blockquote class="mother-tribute__quote">“{{ texts.motherQuote }}”</blockquote>
        <p class="mother-tribute__text">
          <span
            v-for="(fragment, index) in fragments"
            :key="index"
            :class="{ 'mother-tribute__highlight': fragment.highlight }"
            >{{ fragment.text }}</span
          >
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { invitationData } from '../config/invitation.js'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import { buildHighlightFragments } from '../utils/highlightText.js'

const { texts, photos, photoPositions } = invitationData
const { target, isVisible } = useScrollAnimation()
const { target: contentTarget, isVisible: isContentVisible } = useScrollAnimation()

const fragments = computed(() =>
  buildHighlightFragments(texts.motherMessage, texts.motherHighlights)
)
</script>

<style scoped>
.mother-tribute {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.mother-tribute__figure {
  margin: 0 0 var(--space-lg);
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.mother-tribute__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mother-tribute__content {
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
}

.mother-tribute__title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.8rem, 6vw, 2.6rem);
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.mother-tribute__quote {
  margin: 0 0 var(--space-md);
  font-family: var(--font-serif);
  font-size: clamp(1.35rem, 5vw, 1.8rem);
  font-style: italic;
  line-height: 1.55;
  color: var(--color-gold-light);
}

.mother-tribute__text {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: clamp(1rem, 4vw, 1.1rem);
  line-height: 1.85;
  color: var(--color-white-secondary);
}

.mother-tribute__highlight {
  color: var(--color-gold-light);
  font-weight: 500;
}

@media (min-width: 640px) {
  .mother-tribute__figure {
    aspect-ratio: 4 / 5;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
  }
}
</style>
