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
      className="self-stretch flex w-full items-stretch gap-4 text-lg flex-wrap mt-[51px] max-md:max-w-full max-md:mt-10"
    >
      <input
        type="email"
        placeholder="Enter your e-mail..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-[#BFC8CD] bg-white min-h-[47px] gap-2 font-normal grow shrink basis-auto px-6 py-[13px] max-md:px-5"
        required
      />
      <button
        type="submit"
        className="self-stretch border-[color:var(--Misc-White,#FFF)] opacity-30 min-h-12 overflow-hidden text-white font-medium whitespace-nowrap uppercase bg-black rounded-[5px] border-[1.143px] border-solid px-6 hover:opacity-50 transition-opacity"
      >
        Subscribe
      </button>
    </form>
  );
};
