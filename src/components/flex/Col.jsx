import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, { forwardRef, memo, useMemo } from 'react';

import alignItemsMap from '@/utilities/alignItemsMap';
import justifyContentMap from '@/utilities/justifyContentMap';

/**
 * A flexible col container component.
 *
 * @component
 * @param {object} props - The component props
 * @param {React.ReactNode} props.children - The content to be rendered inside the col
 * @param {string} [props.childrenHorizontalPosition] - Horizontal alignment of children ('start', 'center', 'end', 'stretch', 'baseline')
 * @param {string} [props.childrenVerticalPosition] - Vertical alignment of children ('start', 'center', 'end', 'between', 'around', 'evenly')
 * @param {string} [props.className] - Additional CSS class names to apply to the col
 *
 * @returns {JSX.Element} A div element with flex-col layout and specified alignment properties
 *
 * @example
 * <Col childrenHorizontalPosition="center" childrenVerticalPosition="center">
 *   <div>Centered content</div>
 * </Col>
 */
export const Col = memo(
	forwardRef(function Col(
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
					'flex flex-col',
					childrenVerticalPosition &&
						justifyContentMap[childrenVerticalPosition],
					childrenHorizontalPosition &&
						alignItemsMap[childrenHorizontalPosition],
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

Col.propTypes = {
	children: PropTypes.node,
	childrenHorizontalPosition: PropTypes.oneOf([
		'start',
		'center',
		'end',
		'stretch',
		'baseline',
	]),
	childrenVerticalPosition: PropTypes.oneOf([
		'start',
		'center',
		'end',
		'between',
		'around',
		'evenly',
	]),
	className: PropTypes.string,
};

Col.defaultProps = {
	childrenHorizontalPosition: undefined,
	childrenVerticalPosition: undefined,
	className: '',
};

Col.displayName = 'Col';
