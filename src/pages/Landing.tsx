import { Link } from 'react-router-dom';
import barBackground from '../img/bg-bar.jpeg';
import { LuSwords } from 'react-icons/lu';
import { BiSolidDrink } from 'react-icons/bi';
import Batanga from '../components/Batanga';

function Landing() {
  return (
    <div
      className="hero min-h-screen bg-cover"
      style={{
        backgroundImage: `url(${barBackground})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <Batanga />
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Ruota del Batanga</h1>
          <p className="mb-5">
            Avvia la modalità Freeplay per giocare liberamente con le tue
            impostazioni, oppure avvia la modalità torneo: ruleset fisso e
            sistema automatizzato.
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Link to="/play">
              <button className="btn btn-neutral">
                <BiSolidDrink />
                Freeplay
              </button>
            </Link>
            <button
              className="flex flex-row btn glass cursor-not-allowed tooltip"
              data-tip="Coming soon"
            >
              <LuSwords />
              <span>Tournament Mode</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
