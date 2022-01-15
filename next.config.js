module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination: '/resume/jacky-ly-resume.pdf',
        permanent: true,
      },
      {
        source: '/YT',
        destination: 'https://www.youtube.com/user/LyJacky',
        permanent: true,
      },
    ]
  },
}
