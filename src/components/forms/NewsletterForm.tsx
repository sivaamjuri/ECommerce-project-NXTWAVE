
import React from 'react';

export const NewsletterForm = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="self-stretch flex w-full items-stretch gap-4 text-lg flex-wrap mt-8 max-md:mt-6"
    >
      <input
        type="email"
        placeholder="Enter your e-mail..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-[#BFC8CD] bg-white min-h-[47px] font-normal grow shrink basis-auto px-6 py-[13px] border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
        required
      />
      <button
        type="submit"
        className="self-stretch min-h-[47px] text-white font-medium whitespace-nowrap uppercase bg-black border border-white hover:bg-gray-800 transition-colors px-8 rounded-[5px] flex items-center justify-center"
      >
        Subscribe
      </button>
    </form>
  );
};
