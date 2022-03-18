import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="max-w-7xl mx-auto py-10">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
