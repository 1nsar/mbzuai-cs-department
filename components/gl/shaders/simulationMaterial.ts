import * as THREE from "three"
import { periodicNoiseGLSL } from "./utils"

// Function to generate equally distributed points on a plane
function getPlane(count: number, components: number, size = 512, scale = 1.0) {
  const length = count * components
  const data = new Float32Array(length)

  for (let i = 0; i < count; i++) {
    const i4 = i * components

    // Calculate grid position
    const x = (i % size) / (size - 1) // Normalize to [0, 1]
    const z = Math.floor(i / size) / (size - 1) // Normalize to [0, 1]

    // Convert to centered coordinates [-0.5, 0.5] and apply scale
    data[i4 + 0] = (x - 0.5) * 2 * scale // X position: scaled range
    data[i4 + 1] = 0 // Y position: flat plane at y=0
    data[i4 + 2] = (z - 0.5) * 2 * scale // Z position: scaled range
    data[i4 + 3] = 1.0 // W component (for RGBA texture)
  }

  return data
}

export class SimulationMaterial extends THREE.ShaderMaterial {
  constructor(scale = 10.0) {
    const positionsTexture = new THREE.DataTexture(
      getPlane(512 * 512, 4, 512, scale),
      512,
      512,
      THREE.RGBAFormat,
      THREE.FloatType,
    )
    positionsTexture.needsUpdate = true

    super({
      vertexShader: /* glsl */ `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
      fragmentShader: /* glsl */ `uniform sampler2D positions;
      uniform float uTime;
      uniform float uNoiseScale;
      uniform float uNoiseIntensity;
      uniform float uTimeScale;
      uniform float uLoopPeriod;
      varying vec2 vUv;

      ${periodicNoiseGLSL}

      void main() {
        // Get the original particle position
        vec3 originalPos = texture2D(positions, vUv).rgb;
        
        float continuousTime = uTime * uTimeScale * (6.28318530718 / uLoopPeriod);
        
        // Scale position for noise input with more variation
        vec3 noiseInput = originalPos * uNoiseScale;
        
        // Create flowing wave pattern with multiple layers
        // Primary wave - horizontal flow
        float wave1 = sin(originalPos.x * 2.0 + continuousTime) * cos(originalPos.z * 1.5 + continuousTime * 0.7);
        
        // Secondary wave - diagonal flow
        float wave2 = sin((originalPos.x + originalPos.z) * 1.5 - continuousTime * 0.8) * 0.6;
        
        // Tertiary wave - circular ripples from center
        float distFromCenter = length(originalPos.xz);
        float wave3 = sin(distFromCenter * 3.0 - continuousTime * 1.2) * 0.4;
        
        // Combine waves for complex organic motion
        float combinedWave = (wave1 + wave2 + wave3) * 0.5;
        
        // Generate periodic displacement with wave influence
        float displacementX = periodicNoise(noiseInput + vec3(0.0, combinedWave, 0.0), continuousTime) * 0.7;
        float displacementY = periodicNoise(noiseInput + vec3(50.0, 0.0, combinedWave), continuousTime + 2.094) * 1.2 + combinedWave * 0.8;
        float displacementZ = periodicNoise(noiseInput + vec3(0.0, 50.0, combinedWave), continuousTime + 4.188) * 0.7;
        
        // Apply distortion to original position with enhanced vertical movement
        vec3 distortion = vec3(displacementX, displacementY, displacementZ) * uNoiseIntensity;
        vec3 finalPos = originalPos + distortion;
        
        gl_FragColor = vec4(finalPos, 1.0);
      }`,
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uNoiseScale: { value: 1.0 },
        uNoiseIntensity: { value: 0.5 },
        uTimeScale: { value: 1 },
        uLoopPeriod: { value: 24.0 },
      },
    })
  }
}
