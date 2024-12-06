import {RocksAlgae} from "./rocks/RocksAlgae.jsx";
import {Rocks} from "./rocks/Rocks.jsx";
import {Seaweed} from "./Seaweed.jsx";
import {SeaAnemone} from "./SeaAnemone.jsx";
import {Star} from "./Star.jsx";
import {BigRocks} from "./rocks/BigRocks.jsx";
import {Shell} from "./Shell.jsx";

export function OceanEnvironment(props) {
  return (
    <group {...props} dispose={null}>
      {/* Rocks */}
      <RocksAlgae position-x={3} position-z={-8}/>
      <RocksAlgae rotation-y={5} position-x={-9} position-z={-6.5}/>

      <Rocks position-x={-3} position-z={-8}/>
      <Rocks position-x={-3} position-z={-8}/>

      <BigRocks rotation-y={5} position-x={-8} position-z={-14}/>
      <BigRocks rotation-y={1.5} position-x={3} position-z={-14}/>
      <BigRocks rotation-y={3} position-x={10} position-z={-5}/>
      <BigRocks rotation-y={3.5} position-x={-16} position-z={-5}/>

      {/* Algae */}
      <Seaweed position-x={-1} position-z={-8}/>
      <Seaweed rotation-y={Math.PI / 2} position-x={-6.5} position-z={-8}/>
      <Seaweed rotation-y={Math.PI / 2} position-x={6.3} position-z={-8}/>
      <Seaweed position-x={-11} position-z={-4}/>
      <SeaAnemone position-x={0.5} position-z={-9}/>
      <SeaAnemone position-x={-10} position-z={-3}/>

      {/* Star */}
      <Star position-x={0.5} position-z={-8} color={'orangered'}/>
      <Star position-x={-7} position-z={-5} color={'skyblue'}/>
      <Star position-x={5} position-z={-5} color={'yellow'}/>

      {/* Shell */}
      <Shell position-x={-5} position-z={-5}/>
      <Shell position={[4, 0, -5]} />

    </group>
  )
}
