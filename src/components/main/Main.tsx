import React from 'react';
import styles from './Main.module.scss';
import {Fade} from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import {Engine, ISourceOptions} from 'tsparticles-engine';
import {loadLinksPreset} from 'tsparticles-preset-links';
import Particles from 'react-tsparticles';

export function Main() {
  const options:ISourceOptions = {
    preset: "links",
  };
  const initialize =  async (engine: Engine) => {
    await loadLinksPreset(engine);
  };
  return (
    <Fade>

      <div className={styles.main} id={'main'}>

        <div className={styles.container}>
          <Particles options={options} init={initialize} className={styles.particles} />
          <div className={styles.greetings}>
            <span>Hello there!</span>
            <span>My name is Pilyutin <span>Denis</span></span>
            <ReactTypingEffect staticText={'I am'} text={['Frontend developer']} typingDelay={500} speed={100}/>
          </div>
          <div className={styles.photo}>
            <Tilt>
              <div className={styles.image}/>
            </Tilt>
          </div>
        </div>
      </div>
    </Fade>
  );
}
