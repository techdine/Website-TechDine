// FILE: src/utils/web3forms.ts
// Web3Forms submission utility

interface Web3FormsData {
  [key: string]: string | number | boolean | undefined;
}

interface Web3FormsResponse {
  success: boolean;
  message: string;
}

export async function submitToWeb3Forms(
  accessKey: string,
  formData: Web3FormsData
): Promise<Web3FormsResponse> {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...formData,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        message: 'Form submitted successfully!',
      };
    } else {
      return {
        success: false,
        message: result.message || 'Failed to submit form',
      };
    }
  } catch (error) {
    console.error('Web3Forms submission error:', error);
    return {
      success: false,
      message: 'Network error. Please try again.',
    };
  }
}