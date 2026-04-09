import { useEffect } from 'react';

export default function ContactFormTally() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
  });

  return (
    <iframe
      data-tally-src='https://tally.so/embed/RGJDVl?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
      loading='lazy'
      width='100%'
      height='500'
      frameBorder={0}
      title='Contact form'
    />
  );
}
