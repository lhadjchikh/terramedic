import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    try {
      const res = await fetch('https://your-site-name.netlify.app/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(formData as any).toString() // casting needed for TS sometimes
      });

      if (res.ok) {
        return { success: true };
      } else {
        return { error: true };
      }
    } catch (err) {
      return { error: true };
    }
  }
};
