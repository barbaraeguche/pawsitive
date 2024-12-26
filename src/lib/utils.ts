import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export const incrementCount = () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach((counter) => {
    const updateCount = () => {
      // get the target value and check if it's a percentage
      const target = Number(counter.getAttribute('data-target'));
      const hasPercentage = counter.getAttribute('data-percentage') === 'true';
      
      // get the current count, removing '%' if needed
      const count = !hasPercentage
        ? Number(counter.innerHTML)
        : Number(counter.innerHTML.slice(0, -1));
      const increment = target / 200;
      
      // update the counter value if it's less than the target
      if (count < target) {
        counter.innerHTML = !hasPercentage
          ? `${Math.ceil(count + increment)}`
          : `${Math.ceil(count + increment)}%`;
        
        // repeat the update every 20ms
        setTimeout(updateCount, 20);
      } else {
        // set counter to the target value once reached
        counter.innerHTML = !hasPercentage ? `${target}` : `${target}%`;
      }
    };
    
    updateCount();
  });
};

export const capitalizeFirstLetter = (text: string): string => {
  return text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
}

export const normalizeAndLowercase = (text: string): string => {
  return text.trim().split(/\s+/).join(' ').toLowerCase();
}