window.mapSvg=function(f){
  const o=airport(f.origin),d=airport(f.destination);
  if(!o||!d)return `<svg viewBox="0 0 360 155" role="img" aria-label="Map unavailable for ${esc(code(f.origin))} to ${esc(code(f.destination))}"><rect width="360" height="155" fill="#d9f1f4"/><text x="180" y="82" text-anchor="middle" class="map-airport-label">Map unavailable for this airport code</text></svg>`;
  const x1=180+o[3],y1=90-o[2],x2=180+d[3],y2=90-d[2],cx=(x1+x2)/2,cy=Math.min(y1,y2)-Math.max(8,Math.abs(x2-x1)*.08),mx=(x1+x2)/2,my=(y1+y2)/2-7;
  return `<svg viewBox="0 0 360 155" role="img" aria-label="Geographical route map from ${esc(o[1])} to ${esc(d[1])}">
    <rect width="360" height="155" fill="#d9f1f4"/>
    <defs>
      <clipPath id="worldClip"><rect x="0" y="0" width="360" height="151"/></clipPath>
      <filter id="warmLand" x="-5%" y="-5%" width="110%" height="110%" color-interpolation-filters="sRGB">
        <feColorMatrix type="matrix" values="0.18 0.18 0.18 0 0.46  0.17 0.17 0.17 0 0.44  0.12 0.12 0.12 0 0.36  0 0 0 1 0"/>
      </filter>
    </defs>
    <g clip-path="url(#worldClip)">
      <image href="https://commons.wikimedia.org/wiki/Special:FilePath/BlankMap-Equirectangular.svg" x="0" y="0" width="360" height="180" preserveAspectRatio="none" opacity="0.72" filter="url(#warmLand)"/>
    </g>
    <path class="map-route" d="M${x1.toFixed(1)} ${y1.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}"/>
    <circle class="map-airport-dot" cx="${x1.toFixed(1)}" cy="${y1.toFixed(1)}" r="5"/>
    <circle class="map-airport-dot" cx="${x2.toFixed(1)}" cy="${y2.toFixed(1)}" r="5"/>
    <g transform="translate(${Math.max(5,x1-32).toFixed(1)} ${Math.max(8,y1-25).toFixed(1)})"><rect class="map-airport-label-bg" width="64" height="18" rx="6"/><text class="map-airport-label" x="32" y="12" text-anchor="middle">${esc(code(f.origin))}</text></g>
    <g transform="translate(${Math.min(291,x2-32).toFixed(1)} ${Math.max(8,y2-25).toFixed(1)})"><rect class="map-airport-label-bg" width="64" height="18" rx="6"/><text class="map-airport-label" x="32" y="12" text-anchor="middle">${esc(code(f.destination))}</text></g>
    <text class="map-plane" x="${mx.toFixed(1)}" y="${my.toFixed(1)}" text-anchor="middle" font-size="16">✈</text>
  </svg>`;
};
if(typeof render==='function')render();