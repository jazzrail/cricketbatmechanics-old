let handleLen = 0.3;
let bladeLen = 0.56;
let batMass = 1.3;
let balPoint = 0.5;

// First Calculation
const bladeMass =
	(batMass * handleLen - 2 * batMass * balPoint) / (-handleLen - bladeLen);
// console.log(bladeMass);

// Second Calculation
const handleMass = batMass - bladeMass;
// console.log(handleMass);

// Third calculation
const momentOfInertia =
	(handleMass * handleLen ** 2) / 3 +
	((bladeMass * bladeLen ** 2) / 12 +
		bladeMass * (handleLen + bladeLen / 2) ** 2);
console.log(momentOfInertia);

let tbl = handleLen + bladeLen;
// console.log(handleLen + (bladeLen/2));
// ------------------------------------------

// First Calculation

// const bladeMass = (batMass * handleLen - (2 * batMass * balPoint))/ (- handleLen - bladeLen);
// First calculation
// Mass of blade Mb = (MB x  Lh) – (2 x MB x BB)
// 			                      -Lh - Lb
// In computer format for calculation:
// blade_mass = ((bat_mass* handle_length) - (2* bat_mass * balance_point))/(- handle_length – blade_length)

// ----------------------------

// Second calculation
// Mass of handle = MB - Mb
// In computer format for calculation:
// handle_mass = bat_mass – blade_mass

// -------------------------------

// Third calculation
// Moment of Inertia is:

// In computer format for calculation:
// moment_inertia = ((handle_mass * (handle_length ** 2)) / 3) + (((blade_mass * (blade_length ** 2)) / 12) + blade_mass * ((handle_length + (blade_length/2)) ** 2))

// ------------------------------------------

// Here is a set of inputs and result

// Handle length 0.3m

// Blade length 0.56m

// Bat mass 1.3kg

// Balance point 0.5m

// MOI (result) 0.390966667 Kg-m2
