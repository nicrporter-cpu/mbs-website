// Join-form file uploads (CV, enrollment certificate) -> R2. Files are never
// public; the board retrieves them via GET /files/:key?token=... (see
// index.js), gated by the ADMIN_FILE_TOKEN secret. See the plan's open
// question 5 if you want stronger per-person access control later.

function safeName(name) {
  return String(name || 'file')
    .replace(/[^a-zA-Z0-9._-]/g, '_')
    .slice(-80); // keep it short; avoids absurd R2 key lengths
}

function randomId() {
  return crypto.randomUUID().slice(0, 8);
}

// env: the Worker's env (needs env.UPLOADS, the R2 binding).
// formData: parsed multipart body.
// submissionId: a per-request id, used to group a submission's files.
// Returns { cv: {key, url} | null, enrollment: {key, url} | null } where
// `url` is the /files/:key?token=... link to embed in the notification email.
export async function storeJoinFiles(env, formData, submissionId, adminFileToken, baseUrl) {
  const result = { cv: null, enrollment: null };

  for (const field of ['cv', 'enrollment']) {
    const file = formData.get(field);
    if (!file || typeof file !== 'object' || !file.size) continue;

    const key = `join/${submissionId}/${field}-${randomId()}-${safeName(file.name)}`;
    await env.UPLOADS.put(key, file.stream(), {
      httpMetadata: { contentType: file.type || 'application/octet-stream' },
      customMetadata: { originalName: file.name || '' }
    });

    result[field] = {
      key,
      url: `${baseUrl}/files/${encodeURIComponent(key)}?token=${encodeURIComponent(adminFileToken)}`
    };
  }

  return result;
}

// Serves a stored file back, used by the GET /files/:key route in index.js.
export async function getStoredFile(env, key) {
  const object = await env.UPLOADS.get(key);
  if (!object) return null;
  return object;
}
