export type EnvironmentName = 'local' | 'dev' | 'prod';

export const isLocalEnvironment = ['127.0.0.1', 'localhost'].includes(
  window.location.hostname
);

export const isDevEnvironment = [
  'recipes-dev.peetjvv.co.za',
  'recipes-dev.peetjvv.com',
].includes(window.location.hostname);

export const isProdEnvironment = [
  'recipes.peetjvv.co.za',
  'recipes.peetjvv.com',
].includes(window.location.hostname);

export const getCurrentEnvironment = (): EnvironmentName => {
  if (isLocalEnvironment) return 'local';
  if (isDevEnvironment) return 'dev';
  if (isProdEnvironment) return 'prod';
  throw new Error(
    `Couldn't determine current environment, hostname: ${window.location.hostname}`
  );
};
