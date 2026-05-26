// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
//hvis denne ikke er sat til server, så kan men ikke overfører værdier url. Værdi = id
// eks www.minside.dk/index?id=1
export default defineConfig({
  output: "server",
});
