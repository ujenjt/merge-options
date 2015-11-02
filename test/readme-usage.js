import test from 'ava';
import mergeOptions from '../';

test('basic examples', t => {
	t.same(
		mergeOptions({foo: 0}, {bar: 1}, {baz: 2}, {bar: 3}),
		{foo: 0, bar: 3, baz: 2}
	);
	t.same(
		mergeOptions({nested: {unicorns: 'none'}}, {nested: {unicorns: 'many'}}),
		{nested: {unicorns: 'many'}}
	);
	t.same(
		mergeOptions({[Symbol.for('key')]: 0}, {[Symbol.for('key')]: 42}),
		{[Symbol.for('key')]: 42}
	);
	t.end();
});
