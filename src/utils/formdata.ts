export function flattenToFormData(obj: Record<string, any>, form?: FormData): FormData {
  const formData = form || new FormData();

  const fileFields = ['ktp', 'izinUsaha', 'logo', 'proposalBrand', 'fotoProfile'];

  function flatten(current: any, parentKey?: string) {
    for (const key in current) {
      if (!current.hasOwnProperty(key)) continue;

      const value = current[key];
      const flatKey = parentKey ? `${parentKey}.${key}` : key;

      if (value === undefined || value === null) continue;

      const isFile = value instanceof File || value instanceof Blob;

      const finalKey = isFile && fileFields.includes(key) ? key : flatKey;

      if (isFile) {
        formData.append(finalKey, value);
      } else if (typeof value === 'object' && !(value instanceof Date)) {
        flatten(value, flatKey);
      } else if (value instanceof Date) {
        formData.append(finalKey, value.toISOString());
      } else {
        formData.append(finalKey, value);
      }
    }
  }

  flatten(obj);
  return formData;
}

export function cleanObject<T extends Record<string, any>>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([_, v]) => {
        if (Array.isArray(v)) return v.length > 0;
        if (typeof v === 'object' && v !== null) return Object.keys(v).length > 0;
        if (typeof v === 'string') return v.trim() !== '';
        if (typeof v === 'number') return v !== 0;
        return v !== undefined && v !== null;
      })
      .map(([k, v]) => [k, typeof v === 'object' && !Array.isArray(v) ? cleanObject(v) : v])
  ) as Partial<T>;
}
