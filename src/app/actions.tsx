// No 'use server' here!
export async function sendEmail(formData: FormData) {
  // We use a public API service since we don't have a private server anymore
  // Get a free key at https://web3forms.com/
  const accessKey = "4103c428-889f-46c7-ae66-0d3bac9b5e93"; 

  const object = Object.fromEntries(formData);
  const json = JSON.stringify({
    ...object,
    access_key: accessKey,
    subject: `New Inquiry from ${object.name}`,
  });

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();

    if (result.success) {
      return { success: true };
    } else {
      return { success: false, error: "Submission failed" };
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { success: false, error: errorMessage };
  }
}