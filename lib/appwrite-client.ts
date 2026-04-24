import { Client, Databases, ID } from "appwrite";

const endpoint =
  process.env.APPWRITE_ENDPOINT ?? "https://fra.cloud.appwrite.io/v1";
const project = process.env.APPWRITE_PROJECT_ID ?? "maimako-26";

const databaseId = process.env.APPWRITE_DATABASE_ID;
const supportCollectionId = process.env.APPWRITE_SUPPORT_COLLECTION_ID;
const supportDocumentId =
  process.env.APPWRITE_SUPPORT_DOCUMENT_ID ?? "support-counter";

function getDatabasesClient() {
  const client = new Client();
  client.setEndpoint(endpoint).setProject(project);
  return new Databases(client);
}

function hasSupportConfig() {
  return Boolean(databaseId && supportCollectionId);
}

function extractMessage(error: unknown) {
  if (typeof error === "object" && error !== null && "message" in error) {
    const maybeMessage = (error as { message?: unknown }).message;
    if (typeof maybeMessage === "string") {
      return maybeMessage;
    }
  }
  return "Unknown Appwrite error.";
}

function isNotFoundError(error: unknown) {
  if (typeof error !== "object" || error === null) {
    return false;
  }

  const errorWithCode = error as { code?: unknown; message?: unknown };
  const message =
    typeof errorWithCode.message === "string" ? errorWithCode.message : "";

  return (
    errorWithCode.code === 404 || message.toLowerCase().includes("not found")
  );
}

async function ensureSupportDocument(databases: Databases) {
  if (!databaseId || !supportCollectionId) {
    return null;
  }

  try {
    const existing = await databases.getDocument(
      databaseId,
      supportCollectionId,
      supportDocumentId,
    );
    const rawCount = (existing as { maimako?: unknown }).maimako;
    const count = typeof rawCount === "number" && rawCount >= 0 ? rawCount : 0;
    return { count };
  } catch (error) {
    if (!isNotFoundError(error)) {
      throw new Error(extractMessage(error));
    }
  }

  try {
    const created = await databases.createDocument(
      databaseId,
      supportCollectionId,
      supportDocumentId,
      { maimako: 0 },
    );
    const rawCount = (created as { maimako?: unknown }).maimako;
    const count = typeof rawCount === "number" && rawCount >= 0 ? rawCount : 0;
    return { count };
  } catch (error) {
    throw new Error(extractMessage(error));
  }
}

export async function readSupportCount() {
  const databases = getDatabasesClient();

  if (!databases || !hasSupportConfig()) {
    return null;
  }

  const document = await ensureSupportDocument(databases);
  return document?.count ?? 0;
}

export async function incrementSupportCount() {
  const databases = getDatabasesClient();

  if (
    !databases ||
    !hasSupportConfig() ||
    !databaseId ||
    !supportCollectionId
  ) {
    return null;
  }

  const current = await ensureSupportDocument(databases);
  const nextCount = (current?.count ?? 0) + 1;

  try {
    await databases.updateDocument(
      databaseId,
      supportCollectionId,
      supportDocumentId,
      {
        maimako: nextCount,
      },
    );
    return nextCount;
  } catch (error) {
    throw new Error(extractMessage(error));
  }
}

export { ID };
