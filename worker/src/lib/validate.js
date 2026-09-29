// Required-field lists, hand-mirrored from the frontend. There is no
// automated way to keep these two lists in sync — if you change what's
// required in screens/JoinScreen.jsx (validateJoin/J.required in
// screens/data.js), screens/ContactScreen.jsx's onSubmit, or the Newsletter
// component in screens/_patches.jsx, update the matching entry here too.
// This file is the last line of defense (the browser's own validation can
// always be bypassed by calling the API directly), not the primary UX.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const REQUIRED_FIELDS = {
  join: ['firstname', 'lastname', 'email', 'university', 'level', 'studyprogram', 'language', 'motivation'],
  contact: ['firstname', 'lastname', 'email', 'message'],
  newsletter: ['news_email']
};

const EMAIL_FIELD = {
  join: 'email',
  contact: 'email',
  newsletter: 'news_email'
};

const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10 MB, see plan's open question 6
const ALLOWED_CV_TYPES = ['application/pdf', 'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
const ALLOWED_ENROLLMENT_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];

export function validate(formType, formData) {
  const errors = {};
  const required = REQUIRED_FIELDS[formType];
  if (!required) {
    return { valid: false, errors: { formType: 'Unknown form type.' } };
  }

  for (const field of required) {
    if (!String(formData.get(field) || '').trim()) errors[field] = 'required';
  }

  const emailField = EMAIL_FIELD[formType];
  const email = String(formData.get(emailField) || '').trim();
  if (email && !EMAIL_RE.test(email)) errors[emailField] = 'invalid_email';

  if (formType === 'join') {
    if (!formData.get('consent')) errors.consent = 'required';
    const cv = formData.get('cv');
    if (cv && typeof cv === 'object' && cv.size > 0) {
      if (cv.size > MAX_FILE_BYTES) errors.cv = 'too_large';
      else if (cv.type && !ALLOWED_CV_TYPES.includes(cv.type)) errors.cv = 'bad_type';
    }
    const enrollment = formData.get('enrollment');
    if (enrollment && typeof enrollment === 'object' && enrollment.size > 0) {
      if (enrollment.size > MAX_FILE_BYTES) errors.enrollment = 'too_large';
      else if (enrollment.type && !ALLOWED_ENROLLMENT_TYPES.includes(enrollment.type)) errors.enrollment = 'bad_type';
    }
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
