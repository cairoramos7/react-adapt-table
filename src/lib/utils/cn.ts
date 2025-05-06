/**
 * Utility for merging CSS classes without external dependencies
 * Replaces the functionality of clsx and tailwind-merge with a native implementation
 */

type ClassValue = string | number | boolean | undefined | null | ClassValue[] | Record<string, any>;

/**
 * Processes a class value and converts it to a string
 */
function processClassValue(value: ClassValue): string {
  // If it's an array, process each item and join with space
  if (Array.isArray(value)) {
    return value.map(processClassValue).filter(Boolean).join(' ');
  }
  
  // If it's an object, process the keys that have truthy values
  if (value !== null && typeof value === 'object') {
    return Object.keys(value)
      .filter(key => value[key])
      .join(' ');
  }
  
  // Return the value as a string if it's not falsy
  return value ? String(value).trim() : '';
}

/**
 * Resolves conflicts between Tailwind classes
 * Simplified implementation that prioritizes the last class when there are conflicts
 */
function resolveConflicts(classString: string): string {
  // Split the string into individual classes
  const classes = classString.split(/\s+/).filter(Boolean);
  const uniqueClasses = new Map<string, string>();
  
  // For each class, identify the prefix (e.g., 'text-', 'bg-') and store the last occurrence
  for (const cls of classes) {
    // Identify the class prefix (up to the first hyphen)
    const match = cls.match(/^([a-z]+(?:-[a-z]+)*(?:-))/i);
    if (match) {
      const prefix = match[1];
      uniqueClasses.set(prefix, cls);
    } else {
      // If it doesn't have a recognizable prefix, keep the class
      uniqueClasses.set(cls, cls);
    }
  }
  
  // Return the unique classes
  return Array.from(uniqueClasses.values()).join(' ');
}

/**
 * Utility function to combine CSS classes
 * Replaces the functionality of clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]): string {
  // Process all inputs and join them into a single string
  const combinedClasses = inputs.map(processClassValue).filter(Boolean).join(' ');
  
  // Resolve conflicts between classes (similar to tailwind-merge)
  return resolveConflicts(combinedClasses);
}