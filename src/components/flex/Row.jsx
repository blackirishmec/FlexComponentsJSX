import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { forwardRef, memo, useMemo } from 'react';

import alignItemsMap from '@/utilities/alignItemsMap';
import justifyContentMap from '@/utilities/justifyContentMap';

/**
 * A flexible row container component.
 *
 * @component
 * @param {object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the row
 * @param {string} [props.childrenHorizontalPosition] - Horizontal alignment of children ('start', 'center', 'end', 'between', 'around', 'evenly')
 * @param {string} [props.childrenVerticalPosition] - Vertical alignment of children ('start', 'center', 'end', 'stretch', 'baseline')
 * @param {string} [props.className] - Additional CSS class names to apply to the row
 *
 * @returns {JSX.Element} A div element with flex-row layout and specified alignment properties
 *
 * @example
 * <Row childrenHorizontalPosition="center" childrenVerticalPosition="center">
 *   <div>Centered content</div>
 * </Row>
 */
export const Row = memo(
	forwardRef(function Row(
		{
			children,
			childrenHorizontalPosition,
			childrenVerticalPosition,
			className = '',
			...props
		},
		ref,
	) {
		const computedClassName = useMemo(
			() =>
				clsx(
					'flex flex-row',
					childrenHorizontalPosition &&
						justifyContentMap[childrenHorizontalPosition],
					childrenVerticalPosition &&
						alignItemsMap[childrenVerticalPosition],
					className,
				),
			[childrenHorizontalPosition, childrenVerticalPosition, className],
		);

		return (
			<div ref={ref} className={computedClassName} {...props}>
				{children}
			</div>
		);
	}),
);

Row.propTypes = {
	children: PropTypes.node,
	childrenHorizontalPosition: PropTypes.oneOf([
		'start',
		'center',
		'end',
		'between',
		'around',
		'evenly',
	]),
	childrenVerticalPosition: PropTypes.oneOf([
		'start',
		'center',
		'end',
		'stretch',
		'baseline',
	]),
	className: PropTypes.string,
};

Row.defaultProps = {
	childrenHorizontalPosition: undefined,
	childrenVerticalPosition: undefined,
	className: '',
};

Row.displayName = 'Row';
