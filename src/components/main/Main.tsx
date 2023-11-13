import { FC } from 'react';
import styles from './Main.module.scss';
import { Fade } from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';
import Particles from 'react-tsparticles';
import { DownloadButton } from './DownloadButton/DownloadButton';

export const Bio: FC = () => {
  const options: ISourceOptions = {
    preset: 'links',
  };
  const initialize = async (engine: Engine) => {
    await loadLinksPreset(engine);
  };
  return (
    <Fade triggerOnce>
      <div className={styles.main} id={'main'}>
        <div className={styles.container}>
          {/* 
// @ts-ignore */}
          <Particles
            options={options}
            init={initialize}
            className={styles.particles}
          />
          <div className={styles.greetings}>
            <span className={styles.hello}>Hello!</span>
            <span>
              My name is Pilyutin <span>Denis</span>
            </span>
            <ReactTypingEffect
              staticText={'I am'}
              text={['Frontend developer']}
              typingDelay={500}
              speed={100}
            />
            <DownloadButton href="https://drive.google.com/uc?export=download&id=1wJgMp22trI69m-podw1KOWMu3ercRQWt">
              Download CV
            </DownloadButton>
          </div>
          <div className={styles.photo}>
            <Tilt>
              <div className={styles.image} />
            </Tilt>
          </div>
        </div>
      </div>
    </Fade>
  );
};
