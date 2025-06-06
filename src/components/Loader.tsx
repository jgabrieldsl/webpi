import styled from 'styled-components'

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loading">
        <svg xmlns="http://www.w3.org/2000/svg" width={124} height={124} viewBox="0 0 124 124">
          <circle className="circle-loading" cx={62} cy={62} r={59} fill="none" stroke="hsl(271, 76%, 74%)" strokeWidth="6px" />
          <circle className="circle" cx={62} cy={62} r={59} fill="none" stroke="#4500C9" strokeWidth="6px" strokeLinecap="round" />
          <polyline className="check" points="73.56 48.63 57.88 72.69 49.38 62" fill="none" stroke="#4500C9" strokeWidth="6px" strokeLinecap="round" />
        </svg>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw; /* Largura total da tela */
  height: 100vh; /* Altura total da tela */
  position: fixed; /* Garante que o loader fique fixo sobre tudo */
  top: 0;
  left: 0;
  background-color: #f3f4f6; /* Equivalente a bg-gray-100 no Tailwind */
  z-index: 9999; /* Garante que o loader fique acima de outros elementos */

  .loading {
    width: 124px;
    height: 124px;
  }

  .loading svg {
    display: block;
    width: 100%;
    height: 100%;
  }

  .circle {
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-dasharray: 380;
    stroke-dashoffset: 380;
    animation: circle_4 2s ease-in-out forwards;
  }

  .check {
    stroke-dasharray: 45;
    stroke-dashoffset: 45;
    animation: check_4 0.2s 2s ease-in-out forwards;
  }

  @keyframes circle_4 {
    0% {
      stroke-dashoffset: 380;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes check_4 {
    0% {
      stroke-dashoffset: 45;
    }
    100% {
      stroke-dashoffset: 90;
    }
  }
`;

export default Loader