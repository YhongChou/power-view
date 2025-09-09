import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer';

export function setupProdMockServer() {
  const modules = import.meta.glob('./api/mock/*.ts', { eager: true });
  const mocks: any[] = [];
  Object.values(modules).forEach((m: any) => {
    const list = m?.default ?? m;
    if (Array.isArray(list)) mocks.push(...list);
  });
  createProdMockServer(mocks);
}
