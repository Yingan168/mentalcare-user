import { getJSON, postJSON } from "./apiClient";

/** Normalize backend data → UI shape your components use */
function normalizeQuestions(raw) {
  if (!raw) return [];

  // Shape A: { questions: [{ id, text, options: [{ id, label, weight }] }] }
  if (raw.questions && Array.isArray(raw.questions)) {
    return raw.questions.map((q, qi) => ({
      id: q.id ?? qi + 1,
      question: q.text ?? q.question ?? "",
      options: (q.options ?? []).map((o, oi) => ({
        value: o.id ?? oi + 1,
        text: o.label ?? o.text ?? "",
        weight: typeof o.weight === "number" ? o.weight : 0,
      })),
    }));
  }

  // Shape B: same as your current local file
  if (Array.isArray(raw)) {
    return raw.map((q, qi) => ({
      id: q.id ?? qi + 1,
      question: q.question ?? q.text ?? "",
      options: (q.options ?? []).map((o, oi) => ({
        value: o.value ?? o.id ?? oi + 1,
        text: o.text ?? o.label ?? "",
        weight: typeof o.weight === "number" ? o.weight : 0,
      })),
    }));
  }

  return [];
}

function qs(params) {
  const p = new URLSearchParams();
  Object.entries(params || {}).forEach(([k, v]) => {
    if (v !== undefined && v !== null && `${v}`.length) p.append(k, v);
  });
  const q = p.toString();
  return q ? `?${q}` : "";
}

/** Fetch from backend (role/link optional). Adjust path to your API. */
export async function fetchQuestions({ role, link }, { signal } = {}) {
  // Example endpoint: /questions?role=dev&link=...
  const data = await getJSON(`/questions${qs({ role, link })}`, { signal });
  return normalizeQuestions(data);
}

/** Optionally send results to backend (non-blocking). */
export async function submitAssessment({ answers, score, role, link }, { signal } = {}) {
  try {
    await postJSON("/assessments", { answers, score, role, link }, { signal });
  } catch {
    // ignore send errors; UX should not block
  }
}