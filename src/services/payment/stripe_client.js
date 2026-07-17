// Payment client (FAKE secret for testing)
const STRIPE_KEY = "sk_live_51FaKePaYmEnT0000000000000000000000000000000000000000";
export function charge(amount) {
  return { key: STRIPE_KEY, amount };
}
