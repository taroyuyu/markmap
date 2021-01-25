import { S as SvelteComponent, i as init, s as safe_not_equal, e as element, t as text, f as claim_element, g as children, h as claim_text, d as detach, k as attr, l as insert, m as append, D as noop } from './client.1c1d7777.js';

/* src/components/footer.svelte generated by Svelte v3.31.2 */

function create_fragment(ctx) {
	let footer;
	let t0;
	let a;
	let t1;

	return {
		c() {
			footer = element("footer");
			t0 = text("Designed with ♥ by ");
			a = element("a");
			t1 = text("gera2ld");
			this.h();
		},
		l(nodes) {
			footer = claim_element(nodes, "FOOTER", {});
			var footer_nodes = children(footer);
			t0 = claim_text(footer_nodes, "Designed with ♥ by ");
			a = claim_element(footer_nodes, "A", { href: true, target: true, rel: true });
			var a_nodes = children(a);
			t1 = claim_text(a_nodes, "gera2ld");
			a_nodes.forEach(detach);
			footer_nodes.forEach(detach);
			this.h();
		},
		h() {
			attr(a, "href", "https://github.com/gera2ld");
			attr(a, "target", "_blank");
			attr(a, "rel", "noreferrer noopener");
		},
		m(target, anchor) {
			insert(target, footer, anchor);
			append(footer, t0);
			append(footer, a);
			append(a, t1);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(footer);
		}
	};
}

class Footer extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment, safe_not_equal, {});
	}
}

export { Footer as F };
