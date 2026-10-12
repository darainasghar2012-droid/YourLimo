export const VEHICLE_PRICING = {
  "Cadillac Escalade": { ratePerKm: 3.25, hourlyRate: 120 },
  "GMC Yukon Denali": { ratePerKm: 3.0, hourlyRate: 120 },
  "Chevrolet Suburban": { ratePerKm: 3.0, hourlyRate: 120 },
  "Lincoln Navigator": { ratePerKm: 3.0, hourlyRate: 120 },
  "Mercedes-Benz E-Class": { ratePerKm: 2.75, hourlyRate: 120 },
  "BMW 5 Series": { ratePerKm: 2.75, hourlyRate: 120 },
  "Mercedes-Benz S-Class": { ratePerKm: 4.0, hourlyRate: 160 },
};

const TIP_RATE = 0.10;
const HST_RATE = 0.13;
const MIN_HOURS = 3;

export function calculateDepositAmount(vehicleName, distanceKm) {
  const pricing = VEHICLE_PRICING[vehicleName];
  if (!pricing) {
    throw new Error("Unknown vehicle");
  }

  const subtotal =
    distanceKm > 0
      ? distanceKm * pricing.ratePerKm
      : MIN_HOURS * pricing.hourlyRate;
  const tip = subtotal * TIP_RATE;
  const total = subtotal + tip + (subtotal + tip) * HST_RATE;

  return Math.round(total * 0.2 * 100);
}
