import { css } from '@emotion/react';
import Link from 'next/link';

const headerStyles = css`
  padding: 8px 14px;
  background: #e1e1e1;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  display: flex;
  gap: 5px;

  > div > a + a {
    margin-left: 10px;
  }

  > div {
    margin-right: auto;
    margin-left: 10px;
  }
`;

export default function Header(props) {
  return (
    <header css={headerStyles}>
      {props.user && (
        <Link href="/users/private-profile">{props.user.username}</Link>
      )}
      {props.user ? (
        <Link href="/logout">Logout</Link>
      ) : (
        <>
          <Link href="/register">Register</Link>
          <Link href="/login">Login</Link>
        </>
      )}
    </header>
  );
}
