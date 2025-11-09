import assert from 'node:assert';
import names from './index.js';

assert.deepEqual(names.red, [255,0,0]);
assert.deepEqual(names.aliceblue, [240,248,255]);

// Immutability test
const originalKeys = Object.keys(names).length;
try {
	names.newColor = [1, 2, 3];
	assert.fail('Should have thrown an error when adding property');
} catch (e) {
	assert.ok(e instanceof TypeError, 'Should throw TypeError when adding property');
	assert.equal(Object.keys(names).length, originalKeys, 'Cannot add new properties to frozen object');
}

const originalBlue = names.blue;
try {
	names.blue = [1, 1, 1];
	assert.fail('Should have thrown an error when modifying property');
} catch (e) {
	assert.ok(e instanceof TypeError, 'Should throw TypeError when modifying property');
	assert.deepEqual(names.blue, originalBlue, 'Cannot modify existing properties');
}