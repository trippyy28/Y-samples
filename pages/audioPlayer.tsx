import React from "react";
import { useAudio } from "../pages/context/AudioContext";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import styles from "../styles/audioPlayer.module.css";

const AudioPlayer: React.FC = () => {
  const {
    audioPlayer,
    audioUrl,
    isPlaying,
    setIsPlaying,
    duration,
    currentTime,
    progressBar,
    changeRange,
  } = useAudio();

  const calculateTime = (secs: number): string => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  function togglePlayPause(): void {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audioPlayer.current?.pause();
    } else {
      audioPlayer.current?.play();
    }
  }

  return (
    <div className={styles.audioPlayer}>
      <audio ref={audioPlayer} src={audioUrl} preload="auto"></audio>
      <button onClick={togglePlayPause} className={styles.playPause}>
        {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
      </button>
      {/*current time*/}
      <div className={styles.divProgressBar}>{calculateTime(currentTime)}</div>
      {/*progress bar*/}
      <div>
        <input
          type="range"
          className={styles.progressBar}
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>
      {/* duration */}
      <div className={styles.duration}>
        {!isPlaying && audioUrl
          ? "00:00"
          : !isNaN(duration) && calculateTime(duration)}
      </div>
    </div>
  );
};

export default AudioPlayer;
