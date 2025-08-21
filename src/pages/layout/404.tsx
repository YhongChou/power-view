import { Link, useRouteError } from 'react-router-dom'

const NotFound = () => {
  const error:any = useRouteError()
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}>
      <h1>Oops!</h1>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
      <Link to='/activity'> 返回番茄种植</Link>
    </div>
  );
}

export default NotFound