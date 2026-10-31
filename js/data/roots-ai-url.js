// Adresse du relais « correction intelligente » (Cloudflare Worker, voir cloudflare-worker-claude.js).
// Vide = correction non connectée : les productions libres sont enregistrées, sans fausse correction.
// La clé API n'est JAMAIS ici : elle reste secrète dans Cloudflare.
export const AI_URL = "";
if (typeof window !== "undefined") window.ROOTS_AI_URL = AI_URL;
