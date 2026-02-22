import { APIRequestContext, request } from "@playwright/test";
import config from "@env";
import { users } from "@data_providers/user_details";
import fs from "fs";

const MAX_RETRIES = 3;

async function getToken(context: APIRequestContext): Promise<string> {
  const response = await context.get("/login");
  const html = await response.text();
  const match = html.match(/name="csrfmiddlewaretoken" value="([^"]+)"/);
  if (!match) throw new Error("CSRF token not found in login page");
  return match[1];
}

async function loginAndSaveAuth(email: string, authFile: string): Promise<void> {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    const context = await request.newContext({ baseURL: config.baseUrl });

    try {
      const csrfToken = await getToken(context);

      await context.post("/login", {
        headers: { Referer: `${config.baseUrl}login` },
        form: {
          csrfmiddlewaretoken: csrfToken,
          email,
          password: config.password,
        },
      });

      await context.storageState({ path: authFile });
      return;
    } catch (error) {
      if (attempt === MAX_RETRIES) throw error;
    } finally {
      await context.dispose();
    }
  }
}

async function globalSetup() {
  if (process.env.SKIP_GLOBAL_SETUP === "true") return;

  fs.mkdirSync(".auth", { recursive: true });

  await Promise.all(
    Object.values(users).map((user) =>
      loginAndSaveAuth(user.email, user.authFile),
    ),
  );
}

export default globalSetup;
