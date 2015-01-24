var test = require('tape');

test('sanity check', function(t) {
	t.plan(2);

	t.equal(1+1,2);

	t.doesNotThrow(function() { var doc = document; });
	
});