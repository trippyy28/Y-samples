import React, {
  useState,
  useContext,
  useRef,
  useEffect,
  RefObject,
} from "react";

interface AudioContextValue {
  audioUrl: string | null;
  togglePlayPauseAndAddAudio: (e: string) => void;
  isPlaying: boolean;
  audioPlayer: RefObject<HTMLAudioElement>;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  duration: number;
  currentTime: number;
  progressBar: RefObject<HTMLInputElement>;
  changeRange: () => void;
}

const AudioContext = React.createContext<AudioContextValue | undefined>(
  undefined
);

export function useAudio(): AudioContextValue {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}

interface AudioProviderProps {
  children: React.ReactNode;
}

export function AudioProvider({ children }: AudioProviderProps): JSX.Element {
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const audioPlayer = useRef<HTMLAudioElement>(null);
  const progressBar = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    if (audioPlayer.current) {
      const seconds = Math.floor(audioPlayer.current.duration);
      setDuration(seconds);
      progressBar.current!.max = seconds.toString();
    }
  }, [
    audioPlayer?.current?.onloadedmetadata,
    audioPlayer?.current?.readyState,
  ]);

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current!.addEventListener("canplay", () => {
        console.log("canplay");
      });

      audioPlayer.current!.addEventListener("canplaythrough", () => {
        if (isPlaying) {
          audioPlayer.current!.play();
          animationRef.current = requestAnimationFrame(whilePlaying);
        }
        console.log("canplaythrough");
      });
      audioPlayer.current!.addEventListener("playing", () => {
        console.log("playing");
        setIsPlaying(true);
      });

      audioPlayer.current!.addEventListener("ended", () => {
        progressBar.current!.value = "0";
        setIsPlaying(false);
      });

      if (!isPlaying) {
        audioPlayer.current!.pause();
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      } else {
        audioPlayer.current!.play();
        animationRef.current = requestAnimationFrame(whilePlaying);
      }
    }
  }, [isPlaying]);

  const togglePlayPauseAndAddAudio = (e: string) => {
    setAudioUrl(e);
    setIsPlaying((lastIsPlaying) => !lastIsPlaying);
  };

  const whilePlaying = () => {
    progressBar.current!.value = audioPlayer.current!.currentTime.toString();
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current!.currentTime = parseFloat(progressBar.current!.value);
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current!.style.setProperty(
      "--seek-before-width",
      `${(parseFloat(progressBar.current!.value) / duration) * 100}%`
    );
    setCurrentTime(parseFloat(progressBar.current!.value));
  };

  const value: AudioContextValue = {
    audioUrl,
    togglePlayPauseAndAddAudio,
    isPlaying,
    audioPlayer,
    setIsPlaying,
    duration,
    currentTime,
    progressBar,
    changeRange,
  };

  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
}
