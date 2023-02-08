import './Error.css';

function Error({ errorText }) {
  // console.log(errorText);
  return (
    <p className='error'>{errorText}</p>
  );
}

export default Error;