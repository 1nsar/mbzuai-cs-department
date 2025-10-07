import { Effects } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";
import { VignetteShader } from "./shaders/vignetteShader";

export const GL = ({ hovering }: { hovering: boolean }) => {
  const settings = {
    speed: 1,
    focus: 3.8,
    aperture: 1.79,
    size: 512,
    noiseScale: 0.6,
    noiseIntensity: 0.52,
    timeScale: 1,
    pointSize: 10,
    opacity: 0.8,
    planeScale: 10,
    vignetteDarkness: 1.5,
    vignetteOffset: 0.4,
    useManualTime: false,
    manualTime: 0,
  };

  return (
    <div id="webgl">
      <Canvas
        camera={{
          position: [
            1.2629783123314589, 2.664606471394044, -1.8178993743288914,
          ],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
      >
        <color attach="background" args={["#ffffff"]} />
        <Particles
          speed={settings.speed}
          aperture={settings.aperture}
          focus={settings.focus}
          size={settings.size}
          noiseScale={settings.noiseScale}
          noiseIntensity={settings.noiseIntensity}
          timeScale={settings.timeScale}
          pointSize={settings.pointSize}
          opacity={settings.opacity}
          planeScale={settings.planeScale}
          useManualTime={settings.useManualTime}
          manualTime={settings.manualTime}
          introspect={hovering}
        />
        <Effects multisamping={0} disableGamma>
          <shaderPass
            args={[VignetteShader]}
            uniforms-darkness-value={settings.vignetteDarkness}
            uniforms-offset-value={settings.vignetteOffset}
          />
        </Effects>
      </Canvas>
    </div>
  );
};
