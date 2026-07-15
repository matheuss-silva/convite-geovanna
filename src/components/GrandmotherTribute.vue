<template>
  <section class="grandmother-tribute gf-section" aria-label="Homenagem à avó">
    <figure
      ref="target"
      class="reveal-scale grandmother-tribute__figure gf-photo-frame"
      :class="{ 'is-visible': isVisible }"
    >
      <img
        :src="photos.grandmother"
        :style="{ objectPosition: photoPositions.grandmother || 'center' }"
        alt="Geovanna ainda criança ao lado de sua avó"
        loading="lazy"
        class="grandmother-tribute__image"
      />
    </figure>

    <div class="gf-container">
      <div
        ref="contentTarget"
        class="reveal-stagger grandmother-tribute__content"
        :class="{ 'is-visible': isContentVisible }"
      >
        <hr class="gf-divider" />
        <h2 class="grandmother-tribute__title">{{ texts.grandmotherTitle }}</h2>

        <p class="grandmother-tribute__text">
          <span
            v-for="(fragment, index) in fragments"
            :key="index"
            :class="{ 'grandmother-tribute__highlight': fragment.highlight }"
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
  buildHighlightFragments(texts.grandmotherMessage, texts.grandmotherHighlights)
)
</script>

<style scoped>
.grandmother-tribute {
  padding-top: var(--space-xl);
  padding-bottom: var(--space-xl);
}

.grandmother-tribute__figure {
  position: relative;
  margin: 0 0 var(--space-lg);
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
}

.grandmother-tribute__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grandmother-tribute__content {
  text-align: center;
  max-width: 560px;
  margin: 0 auto;
}

.grandmother-tribute__title {
  font-family: var(--font-serif);
  font-weight: 500;
  font-size: clamp(1.8rem, 6vw, 2.6rem);
  color: var(--color-white);
  margin-bottom: var(--space-md);
}

.grandmother-tribute__text {
  font-family: var(--font-sans);
  font-weight: 300;
  font-size: clamp(1rem, 4vw, 1.1rem);
  line-height: 1.85;
  color: var(--color-white-secondary);
}

.grandmother-tribute__highlight {
  color: var(--color-gold-light);
  font-weight: 500;
}

@media (min-width: 640px) {
  .grandmother-tribute__figure {
    aspect-ratio: 4 / 5;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
  }
}
</style>
