const a = 1;

function x() {
	const c = 10;

	function y() {
		var d = 20;

		function z() {
			console.log(c, d);
		}

		z();
	}

	y();
}

x();
