import type { Actions } from './$types';
import { submitForm } from '$lib/server/submit-form';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const formName = formData.get('form-name');
    
    // Ensure this is the contact form
    if (formName !== 'contact-form') {
      return { error: true, message: 'Invalid form submission' };
    }
    
    const result = await submitForm(formData);
    return result === 'success' ? { success: true } : { error: true };
  }
};
