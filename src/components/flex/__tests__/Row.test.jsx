import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';

import { Row } from '../Row';

describe('Row', () => {
	it('renders children correctly', () => {
		render(
			<Row>
				<div data-testid="child">Child content</div>
			</Row>,
		);

		expect(screen.getByTestId('child')).toBeInTheDocument();
		expect(screen.getByTestId('child')).toHaveTextContent('Child content');
	});

	it('applies the correct default CSS classes', () => {
		const { container } = render(<Row />);
		const rowElement = container.firstChild;

		expect(rowElement).toHaveClass('flex');
		expect(rowElement).toHaveClass('flex-row');
	});

	it('applies horizontal positioning classes correctly', () => {
		const { container } = render(
			<Row childrenHorizontalPosition="center" />,
		);
		const rowElement = container.firstChild;

		expect(rowElement).toHaveClass('justify-center');
	});

	it('applies vertical positioning classes correctly', () => {
		const { container } = render(<Row childrenVerticalPosition="center" />);
		const rowElement = container.firstChild;

		expect(rowElement).toHaveClass('items-center');
	});

	it('merges additional className prop correctly', () => {
		const { container } = render(<Row className="custom-class" />);
		const rowElement = container.firstChild;

		expect(rowElement).toHaveClass('custom-class');
		expect(rowElement).toHaveClass('flex');
		expect(rowElement).toHaveClass('flex-row');
	});

	it('forwards additional props to the div element', () => {
		const { container } = render(<Row data-custom="test-value" />);
		const rowElement = container.firstChild;

		expect(rowElement).toHaveAttribute('data-custom', 'test-value');
	});
});
