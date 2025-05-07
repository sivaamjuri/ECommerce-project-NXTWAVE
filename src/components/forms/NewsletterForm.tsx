
import React from 'react';

export const NewsletterForm = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex flex-col sm:flex-row gap-4"
    >
      <input
        type="email"
        placeholder="Enter your e-mail..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="px-4 py-3 bg-transparent border border-white/30 text-white w-full focus:outline-none focus:ring-1 focus:ring-white focus:border-white"
        required
      />
      <button
        type="submit"
        className="px-6 py-3 bg-transparent border border-white/30 text-white uppercase font-medium hover:bg-white/10 transition-colors"
      >
        Subscribe
      </button>
    </form>
  );
};
