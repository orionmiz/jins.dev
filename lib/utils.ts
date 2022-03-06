export function getIconFileName(name: string) {
  return name?.toLowerCase()?.replaceAll(' ', '');
}