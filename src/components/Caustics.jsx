import {useVideoTexture} from '@react-three/drei';

const Caustics = (props) => {
  const texture = useVideoTexture("/videos/caustics.mp4");
  return <spotLight decay={0} map={texture} castShadow {...props} />;
}

export default Caustics