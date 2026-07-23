// Payment client (FAKE secret for testing)
const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;
export function charge(amount) {
  return { key: STRIPE_KEY, amount };
}
