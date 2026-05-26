// API Config
const SUPABASE_URL = "https://fxpijactmaogkzunxsea.supabase.co/rest/v1";
const SUPABASE_KEY = "sb_publishable_pGpw0KvnLwhCF1yc4PBsjw_260GHBje";
const FORDELE_ENDPOINT = `${SUPABASE_URL}/fordele?order=id.asc`;

const getApiOptions = () => ({
  headers: {
    apikey: SUPABASE_KEY,
  },
});

// Fordele Service
/**
 * Henter alle fordele fra Supabase databasen
 *
 * Denne funktion kalder Supabase REST API endpoint for "fordele" tabellen
 * og returnerer alle rækker som et array af objekter.
 *
 * @returns {Promise<Array>} Array af fordele objekter fra Supabase
 *
 * @example
 * // Brug i Astro komponenter:
 * import { getFordeleData } from "../services/fordeleService";
 *
 * const fordele = await getFordeleData();
 * // fordele = [
 * //   { id: 1, name: "Sikkerhed", img: "...", information: "..." },
 * //   { id: 2, name: "Ingen gebyrer", img: "...", information: "..." }
 * // ]
 */
export async function getFordeleData() {
  const options = getApiOptions();

  const data = await fetch(FORDELE_ENDPOINT, options).then((response) =>
    response.json(),
  );

  return data;
}
