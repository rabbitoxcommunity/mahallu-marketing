// Public portal API client — plain fetch, no auth, works both server-side
// (Astro SSR frontmatter) and client-side (React islands).

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:5005/api';
const BACKEND = API_URL.replace(/\/api\/?$/, '');

async function getJson(path, params = {}) {
  const url = new URL(API_URL + path);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v);
  });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.json();
}

async function getBlob(path, params = {}) {
  const url = new URL(API_URL + path);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, v);
  });
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Request failed: ${res.status}`);
  return res.blob();
}

export const fetchTenantInfo = (slug) => getJson('/portal/tenant-info', { t: slug });

export const fetchAnnouncements = (slug, params = {}) =>
  getJson('/portal/announcements', { t: slug, ...params });

export const fetchAnnouncementCategories = (slug) =>
  getJson('/portal/announcement-categories', { t: slug });

export const fetchPublicResults = (slug) => getJson('/portal/results', { t: slug });

export const searchBloodDonors = (slug, blood_group) =>
  getJson('/portal/blood-donors', { t: slug, blood_group });

export const searchMarriageCertificates = (slug, query) =>
  getJson('/portal/marriage-certificates/search', { t: slug, q: query });

export const fetchMarriageCertificateBlob = (slug, certNo) =>
  getBlob(`/portal/marriage-certificate/${certNo}`, { t: slug });

export const searchDeathCertificates = (slug, query) =>
  getJson('/portal/death-certificates/search', { t: slug, q: query });

export const fetchDeathCertificateBlob = (slug, certId) =>
  getBlob(`/portal/death-certificate/${certId}`, { t: slug });

export const getPublicSurahs = (slug, params = {}) =>
  getJson('/islamic-library/public/surahs', { t: slug, ...params });

export const getPublicDuas = (slug, params = {}) =>
  getJson('/islamic-library/public/duas', { t: slug, ...params });

// pdf_file is usually a full R2 URL; older records may still hold a bare
// local filename, so keep resolving those against the backend's /uploads path.
export const getPdfUrl = (pdfFile) => {
  if (!pdfFile) return null;
  return /^https?:\/\//i.test(pdfFile) ? pdfFile : `${BACKEND}/uploads/islamic/${pdfFile}`;
};
