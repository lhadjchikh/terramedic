export async function submitForm(formData: FormData): Promise<'success' | 'error'> {
  try {
    const res = await fetch('https://terraform.netlify.app/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    });

    return res.ok ? 'success' : 'error';
  } catch {
    return 'error';
  }
}
