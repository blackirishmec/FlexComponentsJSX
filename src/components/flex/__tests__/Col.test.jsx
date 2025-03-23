import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Col } from '../Col';

describe('Col', () => {
	it('renders children correctly', () => {
		render(
			<Col>
				<div data-testid="child">Child content</div>
			</Col>,
		);

		expect(screen.getByTestId('child')).toBeInTheDocument();
		expect(screen.getByTestId('child')).toHaveTextContent('Child content');
	});

	it('applies the correct default CSS classes', () => {
		const { container } = render(<Col />);
		const colElement = container.firstChild;

		expect(colElement).toHaveClass('flex');
		expect(colElement).toHaveClass('flex-col');
	});

	it('applies horizontal positioning classes correctly', () => {
		const { container } = render(
			<Col childrenHorizontalPosition="center" />,
		);
		const colElement = container.firstChild;

		expect(colElement).toHaveClass('items-center');
	});

	it('applies vertical positioning classes correctly', () => {
		const { container } = render(<Col childrenVerticalPosition="center" />);
		const colElement = container.firstChild;

		expect(colElement).toHaveClass('justify-center');
	});

	it('merges additional className prop correctly', () => {
		const { container } = render(<Col className="custom-class" />);
		const colElement = container.firstChild;

		expect(colElement).toHaveClass('custom-class');
		expect(colElement).toHaveClass('flex');
		expect(colElement).toHaveClass('flex-col');
	});

	it('forwards additional props to the div element', () => {
		const { container } = render(<Col data-custom="test-value" />);
		const colElement = container.firstChild;

		expect(colElement).toHaveAttribute('data-custom', 'test-value');
	});
});
