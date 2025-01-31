import { roadmap, RoadmapInfo } from '../data/roadmapInfo';
import { FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Info() {
  const buildRoadMap = (steps: RoadmapInfo[], level = 0) => {
    return (
      <ul className="list-none">
        {steps.map((step, index) => (
          <li key={index} className="flex flex-col">
            <div
              className="flex items-center"
              style={{ marginLeft: `${level * 16}px` }}
            >
              <svg
                className={`w-3.5 h-3.5 me-2 shrink-0 ${
                  step.done ? 'text-orange-500' : 'text-gray-500'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              {step.text}
            </div>
            {step.subitems &&
              step.subitems.length > 0 &&
              buildRoadMap(step.subitems, level + 1)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex flex-col items-center p-4 bg-base-200 min-h-screen">
      <div className="flex flex-col gap-4 lg:w-1/2">
        {/* Feedback Card */}

        <div className="card bg-base-300 shadow-md p-4 gap-4">
          <h2 className="text-3xl font-bold text-base-content">
            Dai il tuo feedback
          </h2>
          <hr></hr>
          <div className="text-primary">
            <p>
              Se hai dei suggerimenti, che siano buff, nerf o rework, o delle
              idee su come migliorare il sito web, manda il tuo feedback tramite
              questo form Google (si aprirà in una nuova scheda).
            </p>
          </div>
          <a href="https://forms.gle/o1Acx8t98y4Bhxap7" target="_blank">
            <button className="btn">Vai al form</button>
          </a>
        </div>

        {/* Roadmap Card */}

        <div className="card bg-base-300 shadow-md p-4 gap-4">
          <h2 className="text-3xl font-bold text-base-content">Roadmap</h2>
          <hr></hr>
          <div className="text-primary">{buildRoadMap(roadmap)}</div>
        </div>

        {/* Credits Card */}

        <div className="card bg-base-300 shadow-md p-4 gap-4">
          <h2 className="text-3xl font-bold text-base-content">Credits</h2>
          <hr></hr>
          <div className="text-primary font-bold">
            Developed by Relakiin @ NewSleep Enterprise
          </div>
          <div className="grid grid-cols-3 lg:flex lg:flex-row gap-2 text-primary font-bold">
            <a href="https://react.dev/" target='_blank'>
              <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"></img>
            </a>
            <a href="https://reactrouter.com/" target='_blank'>
              <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"></img>
            </a>
            <a href="https://vite.dev/" target='_blank'>
              <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E"></img>
            </a>
            <a href="https://www.typescriptlang.org/" target='_blank'>
              <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"></img>
            </a>
            <a href="https://tailwindcss.com/" target='_blank'>
              <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"></img>
            </a>
            <a href="https://daisyui.com" target='_blank'>
              <img src="https://img.shields.io/badge/daisyUI-1ad1a5?style=for-the-badge&logo=daisyui&logoColor=white"></img>
            </a>
          </div>
        </div>

        {/* Socials Card */}

        <div className="card bg-base-300 shadow-md p-4 gap-4">
          <h2 className="text-3xl font-bold text-base-content">Socials</h2>
          <hr></hr>
          <div className="text-primary">
            <a href="https://t.me/RuotaDelBatanga" target="_blank">
              <button className="btn btn-ghost text-s">
                <FaTelegram size={19} />
                @RuotaDelBatanga
              </button>
            </a>
            <a href="https://t.me/Relakiin" target="_blank">
              <button className="btn btn-ghost text-s">
                <FaTelegram size={19} />
                @Relakiin
              </button>
            </a>
            <a href="https://x.com/Relakiin" target="_blank">
              <button className="btn btn-ghost text-s">
                <FaXTwitter size={19} />
                @Relakiin
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
