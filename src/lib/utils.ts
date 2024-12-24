import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export const incrementCount = () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = Number(counter.getAttribute('data-target'));
      const hasPercentage = counter.getAttribute('data-percentage') === 'true';
      
      const count = !hasPercentage
        ? Number(counter.innerHTML)
        : Number(counter.innerHTML.slice(0, -1));
      const increment = target / 200;
      
      if (count < target) {
        counter.innerHTML = !hasPercentage
          ? `${Math.ceil(count + increment)}`
          : `${Math.ceil(count + increment)}%`;
        
        setTimeout(updateCount, 20);
      } else {
        counter.innerHTML = !hasPercentage ? `${target}` : `${target}%`;
      }
    };
    
    updateCount();
  });
};