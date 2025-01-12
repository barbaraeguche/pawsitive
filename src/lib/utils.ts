import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

// this function gradually increments the statistics values
export const incrementCount = (): void => {
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
      
      // update the counter-value if it's less than the target
      if (count < target) {
        counter.innerHTML = !hasPercentage
          ? `${Math.ceil(count + increment)}`
          : `${Math.ceil(count + increment)}%`;
        
        // repeat the update every 20 ms
        setTimeout(updateCount, 25);
      } else {
        // set counter to the target value once reached
        counter.innerHTML = !hasPercentage ? `${target}` : `${target}%`;
      }
    };
    
    updateCount();
  });
};

// this function converts an image to a base64string
export const imageToBase64 = async (image: File | Blob) => {
  try {
    const arrayBuffer = await image.arrayBuffer();
    const base64String = Buffer.from(arrayBuffer).toString('base64');
    return `data:${image.type};base64,${base64String}`;
  } catch (err) {
    console.error(err);
    console.error('Error converting image to base64.');
    throw new Error('Failed to convert image to base64.');
  }
};

// this function converts a base64string back to an image
export const base64ToImage = async (base64String: string) => {
  try {
    // remove data url prefix if present
    const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    // get the mime type from the data url
    const mimeType = base64String.match(/^data:([^;]+);/)?.[1] || 'image/jpeg';
    
    // convert base64 to binary
    const binaryString = atob(base64Data);
    const fileLength = binaryString.length;
    const bytes = new Uint8Array(fileLength);
    
    for (let i = 0; i < fileLength; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return URL.createObjectURL(new Blob([bytes], { type: mimeType }));
  } catch (err) {
    console.error(err);
    console.error('Error converting base64 to image.');
    throw new Error('Failed to convert base64 to image.');
  }
};

export const capitalizeFirstLetter = (text: string): string => {
  return text.slice(0, 1).toUpperCase() + text.slice(1, text.length);
};

export const normalizeText = (text: string): string => {
  return text.trim().split(/\s+/).join(' ').toLowerCase();
};