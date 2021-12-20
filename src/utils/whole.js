const whole = (partition) => (compare, array) =>
	partition(compare, array, 0, array.length);

export default whole;
