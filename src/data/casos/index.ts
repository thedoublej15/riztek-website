import { CasoExito } from "./types";
import { chihuahuaBarbaro } from "./chihuahua-barbaro";

export * from "./types";

export const casosDeExito: CasoExito[] = [
  chihuahuaBarbaro,
];

export function getCasoDestacado(): CasoExito | undefined {
  return casosDeExito.find((caso) => caso.featured) ?? casosDeExito[0];
}

export function getCasoBySlug(slug: string): CasoExito | undefined {
  return casosDeExito.find((caso) => caso.slug === slug);
}