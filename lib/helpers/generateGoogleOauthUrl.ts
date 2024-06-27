const generateGoogleOauthUrl = () => {
  const base = 'https://accounts.google.com/o/oauth2/v2/auth';

  const options = {
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    redirect_uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google?success_callback=/&error_callback=/auth/error`,
    // redirect_uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google?success_callback=/&error_callback=/google-auth-error`,
    // redirect_uri: `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/google`,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '),
    access_type: 'offline',
  };

  const queryStrings = new URLSearchParams(options);

  // console.log(`${base}?${queryStrings.toString()}`);

  return `${base}?${queryStrings.toString()}`;
};

export default generateGoogleOauthUrl;
