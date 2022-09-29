/** @jsxRuntime classic */
/** @jsx jsx */
import NextLink from 'next/link';
import { jsx, Link as A } from 'theme-ui';
import { Link as MenuLink } from 'react-scroll';
import { HiOutlineChevronRight } from 'react-icons/hi';

export function NavLink({ path, label, children, external, ...rest }) {
  return !external ? (
    <MenuLink
      to={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      {...rest}
    >
      {label}
    </MenuLink>
  ) : (
    <A href={path} target="_blank" {...rest}>{children ? children : label}</A>
  );;
}

export function Link({ path, label, children, external, ...rest }) {
  return !external ? (
    <NextLink href={path}>
      <A {...rest}>{children ? children : label}</A>
    </NextLink>
  ) : (
    <A href={path} target="_blank" style={{ decoration: 'none' }} {...rest}>{children ? children : label}</A>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A sx={{ ...styles.learnMore, ...(label ? { color: '#8F8F8F' } : {}) }} {...rest}>
        {label ?? 'Learn More'} <HiOutlineChevronRight />
      </A>
    </NextLink>
  );
}

const styles = {
  learnMore: {
    color: 'link',
    cursor: 'pointer',
    fontSize: [1, 1, 1, 2],
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
      ml: '3px',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
