import type { Actions } from './$types';
import { submitForm } from '$lib/server/submit-form';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const formName = formData.get('form-name');
    
    // Handle form submissions from homepage
    // Note: The newsletter signup from the footer is one possibility
    if (formName === 'newsletter-signup' || !formName) {
      const result = await submitForm(formData);
      return result === 'success' ? { success: true } : { error: true };
    }
    
    return { error: true, message: 'Invalid form submission' };
  }
};
