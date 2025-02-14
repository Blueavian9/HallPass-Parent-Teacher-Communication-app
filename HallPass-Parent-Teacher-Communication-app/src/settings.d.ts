declare module "*.json" {
    const value: { [key: string]: any };
    export default value;
  }
  // routes.d.ts
declare module './src/pages/routes.jsx' {
    export const AppRoutes: React.FC;
  }
  