<script setup>
import * as yup from 'yup'

// Définition d'un schéma de validation avec yup
const emailRules = yup.string()
  .required('L\'email est requis')
  .email('Format d\'email invalide')
// Fonction de soumission du formulaire
const onSubmit = (values) => {
  console.log('Formulaire soumis avec succès:', values)
  // Appeler votre API ici
}
</script>

<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded shadow-md">
    <h1 class="text-2xl font-bold mb-6">
      Inscription
    </h1>

    <form
      @submit.prevent="onSubmit"
    >
      <!-- Champ Email -->
      <SFFormField
        id="email"
        name="email"
        required
        :rules="emailRules"
      >
        <template #label>
          Email
        </template>
        <template #default="{ id, isInError, onBlur, modelValue, 'onUpdate:modelValue': updateModel }">
          <SFInputField
            :id="id"
            name="email"
            placeholder="exemple@email.com"
            :is-in-error="isInError"
            autocomplete="email"
            :model-value="modelValue"
            @update:model-value="updateModel"
            @blur="onBlur"
          />
        </template>
        <template #hint>
          Nous ne partagerons jamais votre email.
        </template>
      </SFFormField>

      <!-- Bouton de soumission -->
      <div class="mt-6">
        <SFButton
          type="submit"
          color="primary"
          class="w-full"
        >
          S'inscrire
        </SFButton>
      </div>
    </form>
  </div>
</template>
