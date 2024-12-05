uniform sampler2D uDisplacementTexture;

varying vec2 vUv;

attribute vec4 tangent;

void main()
{
  vec3 biTangent = cross(normal, tangent.xyz);

  // Neigbours positions
  float shift = 0.01;
  vec3 positionA = csm_Position + tangent.xyz * shift;
  vec3 positionB = csm_Position + biTangent * shift;

  float displacement = texture2D(uDisplacementTexture, uv).r;

  positionA += normal * displacement;
  positionB += normal * displacement;


  csm_Position += vec3(0.0, 0.0, displacement * 0.01);

  // Compute the normal
  vec3 toA = normalize(positionA - csm_Position);
  vec3 toB = normalize(positionB - csm_Position);
  csm_Normal = cross(toA, toB);

  vUv = uv;
}